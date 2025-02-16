export default function handler(req, res) {
  if (req.method === 'POST') {
    console.log('Webhook payload:', req.body);
    res.status(200).json({ message: 'Webhook received!' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
