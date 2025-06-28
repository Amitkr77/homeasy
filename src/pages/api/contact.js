import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';
import os from 'os';

dotenv.config();

/* ───────────────────────── Google Sheets setup ────────────────────────── */
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
const TMP_DIR = path.join(os.tmpdir());
const CREDENTIALS_PATH = path.join(TMP_DIR, 'credentials.json');

/* Make sure the service-account key exists in /tmp */
if (!fs.existsSync(CREDENTIALS_PATH)) {
    const base64 = process.env.GOOGLE_CREDENTIALS_BASE64;
    if (!base64) {
        throw new Error('Missing GOOGLE_CREDENTIALS_BASE64 env variable.');
    }
    fs.mkdirSync(TMP_DIR, { recursive: true });
    fs.writeFileSync(CREDENTIALS_PATH, Buffer.from(base64, 'base64').toString('utf-8'));
}

/* get a Sheets client */
const authenticateGoogle = async () =>
    (await new google.auth.GoogleAuth({ keyFile: CREDENTIALS_PATH, scopes: SCOPES }).getClient());

export const appendToGoogleSheet = async (row) => {
    const sheets = google.sheets({ version: 'v4', auth: await authenticateGoogle() });
    return sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: 'Sheet1!A:H',
        valueInputOption: 'RAW',
        resource: { values: [row] },
    });
};

/* ──────────────────────── 🚩 Validation helper ────────────────────────── */
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const phoneRegex = /^\+?[0-9]{7,15}$/; 
const nameRegex = /^[A-Za-z\s]{2,}$/;

function validateInput(data = {}) {
    const errors = {};

    if (!data.name || !nameRegex.test(data.name.trim())) {
        errors.name = 'Name must be at least 2 alphabetic characters (letters and spaces only).';
    }
    if (!emailRegex.test(data.email || '')) {
        errors.email = 'A valid e-mail address is required.';
    }
    if (!phoneRegex.test(data.phoneNumber || '')) {
        errors.phoneNumber = 'Phone number must be a 10-digit Indian mobile.';
    }
    if (!['Yes', 'No'].includes(data.smartHomeUsage)) {
        errors.smartHomeUsage = 'Please indicate if you already use smart devices.';
    }
    if (!['phoneNumber', 'Email', 'WhatsApp'].includes(data.preferredContactMethod)) {
        errors.preferredContactMethod = 'Please choose a contact method.';
    }

    return errors;
}

/* ─────────────────────────── API handler ──────────────────────────────── */
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    /* 🚩 Validate and sanitise -------------------------------------------- */
    const errors = validateInput(req.body);
    if (Object.keys(errors).length) {
        return res.status(400).json({ success: false, errors });
    }

    // Basic trimming / normalisation
    const {
        name,
        email,
        phoneNumber,
        smartHomeUsage,
        preferredContactMethod,
        address = 'N/A',
        additionalMessage = 'N/A',
    } = req.body;

    const sanitized = {
        name: String(name).trim(),
        email: String(email).trim().toLowerCase(),
        phoneNumber: String(phoneNumber).trim(),
        smartHomeUsage: String(smartHomeUsage).trim(),
        preferredContactMethod: String(preferredContactMethod).trim(),
        address: String(address).trim(),
        additionalMessage: String(additionalMessage).trim(),
    };

    /* ───────────────────── Email transport check ──────────────────────── */
    const { EMAIL_USER, EMAIL_PASS, EMAIL_TO } = process.env;
    if (!EMAIL_USER || !EMAIL_PASS || !EMAIL_TO) {
        return res.status(500).json({ success: false, error: 'Email configuration is incomplete.' });
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user: EMAIL_USER, pass: EMAIL_PASS },
    });

    try {
        await transporter.verify();
    } catch {
        return res.status(500).json({ success: false, error: 'Email service verification failed.' });
    }

    /* ───────────────────── Save + Notify ──────────────────────────────── */
    try {
        await appendToGoogleSheet([
            new Date().toLocaleDateString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' }),
            sanitized.name,
            sanitized.email,
            sanitized.phoneNumber,
            sanitized.smartHomeUsage,
            sanitized.preferredContactMethod,
            sanitized.address,
            sanitized.additionalMessage,
        ]);

        const sheetLink = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/edit?usp=sharing`;

        await transporter.sendMail({
            from: `"${sanitized.name}" <${sanitized.email}>`,
            to: EMAIL_TO,
            subject: 'New Contact Form Message',
            text: `
Name: ${sanitized.name}
Email: ${sanitized.email}
PhoneNumber: ${sanitized.phoneNumber}
Using Smart Home Devices: ${sanitized.smartHomeUsage}
Preferred Contact Method: ${sanitized.preferredContactMethod}
Address: ${sanitized.address}
Additional Message: ${sanitized.additionalMessage}

View all responses: ${sheetLink}
      `.trim(),
            html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5;">
          <h2>New Contact Form Message</h2>
          <p><strong>Name:</strong> ${sanitized.name}</p>
          <p><strong>PhoneNumber:</strong> ${sanitized.phoneNumber}</p>
          <p><strong>Email:</strong> <a href="mailto:${sanitized.email}">${sanitized.email}</a></p>
          <p><strong>Using Smart Home Devices:</strong> ${sanitized.smartHomeUsage}</p>
          <p><strong>Preferred Contact Method:</strong> ${sanitized.preferredContactMethod}</p>
          <p><strong>Address:</strong> ${sanitized.address}</p>
          <p><strong>Additional Message:</strong><br>${sanitized.additionalMessage.replace(/\n/g, '<br>')}</p>
          <p><a href="${sheetLink}">Open the Google Sheet</a></p>
        </div>
      `,
        });

        return res.status(200).json({ success: true, message: 'Email sent and data saved.' });
    } catch (err) {
        return res
            .status(500)
            .json({ success: false, error: `Failed to send e-mail or save data – ${err.message}` });
    }
}
