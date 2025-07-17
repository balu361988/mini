const express = require('express');
const app = express();

const port = process.env.PORT || 80;
const host = '0.0.0.0';

app.get('/', (req, res) => {
  res.send('✅ Welcome to Patient Service Root!');
});

app.get('/Patient', (req, res) => {
  res.send('✅ Patient Service running on port !');
});

app.listen(port, host, () => {
  console.log(`✅ Patient  service running on http://${host}:${port}`);
});
