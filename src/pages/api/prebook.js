import { Client } from "@hubspot/api-client";

const hubspotClient = new Client({
  accessToken: process.env.HUBSPOT_ACCESS_TOKEN,
});

// Allowed options (must exactly match values in HubSpot)
const VALID_COMM_PREFS = ["Email", "Phone", "SMS"];
const VALID_PLATFORMS = ["Web", "Mobile", "Desktop"];
const VALID_SERVICES = [
  "Home Automation",
  "Smart Security",
  "Voice Control",
  "IoT Integration",
  "Other"
];

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const {
    fullName,
    email,
    phone,
    service,
    date,
    country,
    city,
    devicesOwned = [],
    platforms = [],
    betaTester = false,
    contactPreference = [],
    comments = "",
    consent = false,
  } = req.body;

  // Basic validation
  if (!fullName || fullName.trim().length < 2) {
    return res.status(400).json({ error: "Full name must be at least 2 characters." });
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Invalid email address." });
  }

  if (!phone || !/^\+?[0-9\s\-()]{7,20}$/.test(phone)) {
    return res.status(400).json({ error: "Invalid phone number." });
  }

  // Clean and validate inputs
  const safeCommPrefs = contactPreference
    .filter((item) => VALID_COMM_PREFS.includes(item))
    .join(";");

  const safePlatforms = platforms
    .filter((item) => VALID_PLATFORMS.includes(item))
    .join(";");

  const safeService = VALID_SERVICES.includes(service) ? service : "";

  try {
    await hubspotClient.crm.contacts.basicApi.create({
      properties: {
        email,
        firstname: fullName,
        phone,
        country: country || "",
        city: city || "",
        preferred_date: date || "",
        devices_owned__c: devicesOwned.join(", "),
        platform_preference__c: safePlatforms,
        beta_interest__c: betaTester ? "true" : "false",
        communication_pref__c: safeCommPrefs, // ✅ semicolon-separated!
        comments__c: comments,
        consent__c: consent ? "true" : "false",
        service_interest__c: safeService,
      },
    });

    return res.status(200).json({ message: "Contact saved to HubSpot successfully." });
  } catch (error) {
    console.error("HubSpot API error:", error.response?.body || error.message);
    return res.status(500).json({
      error: "Failed to save contact. Please try again later.",
      details: error.message,
    });
  }
}
