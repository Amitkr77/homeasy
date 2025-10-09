import nodemailer from 'nodemailer';
import { google } from 'googleapis';
import { promises as fsPromises } from 'fs';
import formidable from 'formidable';
import * as z from 'zod';
import sanitizeHtml from 'sanitize-html';

// Environment validation
const requiredEnv = [
  'SPREADSHEET_ID',
  'GOOGLE_DRIVE_FOLDER_ID',
  'EMAIL_USER',
  'EMAIL_PASS',
  'EMAIL_TO',
  'GOOGLE_CREDENTIALS_BASE64',
];
for (const env of requiredEnv) {
  if (!process.env[env]) {
    console.error(`Missing environment variable: ${env}`);
    throw new Error(`Missing environment variable: ${env}`);
  }
}

// Setup
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive.file'];
const SPREADSHEET_ID = process.env.SPREADSHEET_ID;

// Input validation schema
const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^\d{10}$/, 'Phone number must be 10 digits'),
  linkedin: z.string().url().optional().or(z.literal('')),
  github: z.string().url().optional().or(z.literal('')),
  role: z.enum(['frontend', 'backend', 'fullstack', 'ad', 'designer', 'qa', 'data', 'pc', 'writer']),
  opportunity: z.enum(['fulltime', 'internship']),
  source: z.enum(['linkedin', 'referral', 'website', 'jobPortal', 'socialMedia', 'event', 'other']),
});

// Simple in-memory rate limiting (for demo; use express-rate-limit or Redis in production)
const rateLimitStore = new Map();
const RATE_LIMIT = 5;
const RATE_LIMIT_WINDOW = 60 * 1000;

const checkRateLimit = (ip) => {
  const now = Date.now();
  const record = rateLimitStore.get(ip) || { count: 0, lastReset: now };

  if (now - record.lastReset > RATE_LIMIT_WINDOW) {
    record.count = 0;
    record.lastReset = now;
  }

  record.count += 1;
  rateLimitStore.set(ip, record);

  if (record.count > RATE_LIMIT) {
    console.warn(`Rate limit exceeded for IP: ${ip}`);
    throw new Error('Too many requests, please try again later');
  }
};

const authenticateGoogle = async () => {
  try {
    const credentials = JSON.parse(Buffer.from(process.env.GOOGLE_CREDENTIALS_BASE64, 'base64').toString('utf-8'));
    return await new google.auth.GoogleAuth({ credentials, scopes: SCOPES }).getClient();
  } catch (err) {
    console.error('Google auth failed:', err.message);
    throw new Error('Failed to authenticate with Google');
  }
};

const appendToApplicationSheet = async (row, retries = 2) => {
  try {
    const sheets = google.sheets({ version: 'v4', auth: await authenticateGoogle() });
    return await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Applications!A:J',
      valueInputOption: 'RAW',
      resource: { values: [row] },
    });
  } catch (err) {
    if (retries > 0 && err.code === 429) {
      console.warn('Sheets API quota exceeded, retrying...');
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return appendToApplicationSheet(row, retries - 1);
    }
    console.error('Sheets append failed:', err.message);
    if (err.code === 403) throw new Error('Google Sheets access denied');
    if (err.code === 429) throw new Error('Google API quota exceeded');
    throw new Error(`Sheets error: ${err.message}`);
  }
};

const uploadToDrive = async (file) => {
  try {
    const auth = await authenticateGoogle();
    const drive = google.drive({ version: 'v3', auth });

    const fileMetadata = {
      name: file.originalFilename,
      parents: [process.env.GOOGLE_DRIVE_FOLDER_ID],
    };

    const media = {
      mimeType: file.mimetype,
      body: fsPromises.createReadStream(file.filepath),
    };

    const response = await drive.files.create({
      resource: fileMetadata,
      media,
      fields: 'id, webViewLink',
    });

    await drive.permissions.create({
      fileId: response.data.id,
      requestBody: { role: 'reader', type: 'user', emailAddress: process.env.EMAIL_TO },
    });

    // Clean up temporary file
    await fsPromises.unlink(file.filepath).catch((err) => console.warn('Failed to delete temp file:', err.message));

    return response.data;
  } catch (err) {
    console.error('Drive upload failed:', err.message);
    if (err.code === 403) throw new Error('Google Drive access denied');
    if (err.code === 429) throw new Error('Google API quota exceeded');
    throw new Error(`Drive error: ${err.message}`);
  }
};

const deleteDriveFile = async (fileId) => {
  try {
    const auth = await authenticateGoogle();
    const drive = google.drive({ version: 'v3', auth });
    await drive.files.delete({ fileId });
    console.log(`Deleted Drive file: ${fileId}`);
  } catch (err) {
    console.warn(`Failed to delete Drive file ${fileId}:`, err.message);
  }
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req) {
  try {
    // Rate limiting
    const ip = req.headers.get('x-forwarded-for') || 'unknown';
    checkRateLimit(ip);

    console.log('Processing new application from IP:', ip);

    const form = formidable({ multiples: false, maxFileSize: 5 * 1024 * 1024 });

    const data = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        else resolve({ fields, files });
      });
    });

    const { fields, files } = data;

    // Validate fields
    const result = schema.safeParse({
      ...fields,
      linkedin: fields.linkedin || '',
      github: fields.github || '',
    });
    if (!result.success) {
      console.warn('Validation failed:', result.error.message);
      return Response.json({ success: false, error: result.error.message }, { status: 400 });
    }

    // Upload resume to Drive
    let resumeLink = '';
    let fileId = '';
    if (files.resume) {
      const validTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      ];
      if (!validTypes.includes(files.resume.mimetype)) {
        console.warn('Invalid file type:', files.resume.mimetype);
        return Response.json({ success: false, error: 'Invalid file type' }, { status: 400 });
      }
      const uploadedFile = await uploadToDrive(files.resume);
      resumeLink = uploadedFile.webViewLink;
      fileId = uploadedFile.id;
    } else {
      console.warn('Resume missing');
      return Response.json({ success: false, error: 'Resume is required' }, { status: 400 });
    }

    // Prepare row for Sheets
    const date = new Date().toLocaleString('en-GB', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });

    const row = [
      date,
      fields.name,
      fields.email,
      fields.phone,
      fields.linkedin || '',
      fields.github || '',
      fields.role,
      fields.opportunity,
      fields.source,
      resumeLink,
    ];

    // Save to Sheets
    try {
      await appendToApplicationSheet(row);
    } catch (err) {
      // Delete uploaded file if Sheets fails
      if (fileId) await deleteDriveFile(fileId);
      throw err;
    }

    // Send Email
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    const html = sanitizeHtml(`
      <h2>New Job Application</h2>
      <p><strong>Name:</strong> ${fields.name}</p>
      <p><strong>Email:</strong> ${fields.email}</p>
      <p><strong>Phone:</strong> ${fields.phone}</p>
      <p><strong>LinkedIn:</strong> ${fields.linkedin || 'N/A'}</p>
      <p><strong>GitHub:</strong> ${fields.github || 'N/A'}</p>
      <p><strong>Role:</strong> ${fields.role}</p>
      <p><strong>Opportunity:</strong> ${fields.opportunity}</p>
      <p><strong>Source:</strong> ${fields.source}</p>
      <p><strong>Resume:</strong> <a href="${resumeLink}" target="_blank">View Resume</a></p>
    `);

    try {
      await transporter.sendMail({
        from: `"Application Bot" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO,
        subject: `New Job Application from ${fields.name}`,
        html,
      });
      console.log(`Email sent to ${process.env.EMAIL_TO} for ${fields.name}`);
    } catch (err) {
      console.error('Email sending failed:', err.message);
      // Delete uploaded file if email fails
      if (fileId) await deleteDriveFile(fileId);
      throw new Error('Failed to send email notification');
    }

    return Response.json({ success: true, message: 'Application submitted successfully' });
  } catch (err) {
    console.error('API error:', err.message);
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
}