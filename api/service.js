export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const response = await fetch("https://ordersosmed.id/api-1/service", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        api_id: "39538",
        api_key: "6ae58258127be8b7e2ee71e332a109600fac1c2fdd34304f828898cb0834e422"
      })
    });

    const result = await response.json();
    return res.status(200).json(result);
  } catch (error) {
    console.error("Proxy Error:", error);
    return res.status(500).json({ error: "Proxy failed" });
  }
}
