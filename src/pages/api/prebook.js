import { Client } from "@hubspot/api-client";

const hubspotClient = new Client({
  accessToken: process.env.HUBSPOT_ACCESS_TOKEN,
});

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const {
    fullName,
    email,
    phone,
    service,
    date,
    country,
    city,
    devicesOwned,
    platforms,
    betaTester,
    contactPreference,
    comments,
    consent,
  } = req.body;

  try {
    await hubspotClient.crm.contacts.basicApi.create({
      properties: {
        email,
        firstname: fullName,
        phone,
        country,
        city,
        preferred_date: date,
        devices_owned__c: Array.isArray(devicesOwned) ? devicesOwned.join(", ") : "",
        // platform_preference__c: Array.isArray(platforms) ? platforms.join(", ") : "",
        beta_interest__c: betaTester,
        // communication_pref__c: Array.isArray(contactPreference)
        //   ? contactPreference.join(", ")
        //   : "",
        comments__c: comments || "",
        consent__c: consent ? "true" : "false",
      },
    });

    return res.status(200).json({ message: "Contact saved in HubSpot" });
  } catch (error) {
    console.error("HubSpot error:", error.response?.body || error.message);
    return res.status(500).json({ error: error.message || "Error saving contact" });
  }
}
