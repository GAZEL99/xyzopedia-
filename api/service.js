// pages/api/services.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const response = await fetch('https://smmnusantara.id/api/services', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        api_key: 'c2ws5g-rrn4yp-66hanf-okpptv-zlbery', // API key kamu
      }),
    });

    const data = await response.json();
    res.status(200).json(data); // kirim balik ke frontend
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Gagal ambil data dari SMMNusantara' });
  }
}
