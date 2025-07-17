const express = require('express');
const app = express();

const port = process.env.PORT || 80;
const host = '0.0.0.0';

app.get('/', (req, res) => {
  res.send('✅ Welcome to Appointment Service Root!');
});

app.get('/appointment', (req, res) => {
  res.send('✅ Appointment Service running on port !');
});

app.listen(port, host, () => {
  console.log(`✅ Appointment service running on http://${host}:${port}`);
});
