
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';
import os from 'os';

dotenv.config();

// Google Sheets API Setup
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const SPREADSHEET_ID = process.env.SPREADSHEET_ID;


// Cross-platform temp directory
const TMP_DIR = path.join(os.tmpdir()); 
const CREDENTIALS_PATH = path.join(TMP_DIR, 'credentials.json');

if (!fs.existsSync(CREDENTIALS_PATH)) {
    const base64 = process.env.GOOGLE_CREDENTIALS_BASE64;
    const json = Buffer.from(base64, 'base64').toString('utf-8');

    // Make sure the directory exists
    fs.mkdirSync(TMP_DIR, { recursive: true });

    // Write the credentials file
    fs.writeFileSync(CREDENTIALS_PATH, json);
}



// Function to authenticate with Google Sheets API
const authenticateGoogle = async () => {
    const auth = new google.auth.GoogleAuth({
        keyFile: CREDENTIALS_PATH,
        scopes: SCOPES,
    });

    return auth.getClient();
};

// Function to append data to Google Sheets
export const appendToGoogleSheet = async (data) => {
    const auth = new google.auth.GoogleAuth({
        keyFile: CREDENTIALS_PATH,
        scopes: SCOPES,
    });

    const authClient = await auth.getClient();

    // ⬅️ Make sure to pass `auth` to the sheets client
    const sheets = google.sheets({ version: 'v4', auth: authClient });

    const response = await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.SPREADSHEET_ID,
        range: 'Sheet1!A:H',
        valueInputOption: 'RAW',
        resource: {
            values: [data],
        },
    });

    return response;
};

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const {
        name,
        email,
        phoneNumber,
        smartHomeUsage,
        preferredContactMethod,
        address,
        additionalMessage,
    } = req.body;

    // Basic validation for required fields
    if (!name || !email || !smartHomeUsage || !preferredContactMethod || !phoneNumber) {
        return res.status(400).json({ success: false, error: 'Please fill in all required fields.' });
    }

    // Sanitize inputs (simple trimming)
    const sanitizedName = String(name).trim();
    const sanitizedEmail = String(email).trim().toLowerCase();
    const sanitizedPhoneNumber = String(phoneNumber).trim();
    const sanitizedSmartHomeUsage = String(smartHomeUsage).trim();
    const sanitizedPreferredContactMethod = String(preferredContactMethod).trim();
    const sanitizedAddress = address ? String(address).trim() : 'N/A';
    const sanitizedAdditionalMessage = additionalMessage ? String(additionalMessage).trim() : 'N/A';

    const { EMAIL_USER, EMAIL_PASS, EMAIL_TO } = process.env;
    if (!EMAIL_USER || !EMAIL_PASS || !EMAIL_TO) {
        return res.status(500).json({ success: false, error: 'Email configuration is incomplete.' });
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: EMAIL_USER,
            pass: EMAIL_PASS,
        },
    });

    try {
        await transporter.verify();
    } catch (verifyError) {
        return res.status(500).json({ success: false, error: 'Email service verification failed.' });
    }

    try {
        // Append data to Google Sheets
        await appendToGoogleSheet([
            new Date().toLocaleDateString('en-GB', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
            })
            ,
            sanitizedName,
            sanitizedEmail,
            sanitizedPhoneNumber,
            sanitizedSmartHomeUsage,
            sanitizedPreferredContactMethod,
            sanitizedAddress,
            sanitizedAdditionalMessage,
        ]);

        // Send email notification with link to Google Sheet
        const sheetLink = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/edit?usp=sharing`;
        await transporter.sendMail({
            from: `"${sanitizedName}" <${sanitizedEmail}>`,
            to: EMAIL_TO,
            subject: 'New Contact Form Message',
            text: `
Name: ${sanitizedName}
Email: ${sanitizedEmail}
PhoneNumber: ${sanitizedPhoneNumber}
Using Smart Home Devices: ${sanitizedSmartHomeUsage}
Preferred Contact Method: ${sanitizedPreferredContactMethod}
Address: ${sanitizedAddress}
Additional Message: ${sanitizedAdditionalMessage}

You can view all responses in the Google Sheet: ${sheetLink}
            `.trim(),
            html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5;">
          <h2>New Contact Form Message</h2>
          <p><strong>Name:</strong> ${sanitizedName}</p>
          <p><strong>PhoneNumber:</strong>${sanitizedPhoneNumber}</p>
          <p><strong>Email:</strong> <a href="mailto:${sanitizedEmail}">${sanitizedEmail}</a></p>
          <p><strong>Using Smart Home Devices:</strong> ${sanitizedSmartHomeUsage}</p>
          <p><strong>Preferred Contact Method:</strong> ${sanitizedPreferredContactMethod}</p>
          <p><strong>Address:</strong> ${sanitizedAddress}</p>
          <p><strong>Additional Message:</strong></p>
          <p>${sanitizedAdditionalMessage.replace(/\n/g, '<br>')}</p>
          <p><strong>Google Sheet Link:</strong> <a href="${sheetLink}">Click here to view all responses</a></p>
        </div>
      `,
        });

        return res.status(200).json({ success: true, message: 'Email sent and data saved to Google Sheet.' });
    } catch (sendError) {
        return res.status(500).json({ success: false, error: 'Failed to send email or append data to Google Sheets. ' + sendError.message });
    }
}
