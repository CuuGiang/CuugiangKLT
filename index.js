// api/index.js
const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/webhook', (req, res) => {
  console.log('Received Webhook:', req.body);
  res.status(200).json({ message: 'Webhook received successfully!' });
});

app.get('/', (req, res) => {
  res.send('Welcome to Zalo OA Webhook Server on Vercel!');
});

module.exports = app;
