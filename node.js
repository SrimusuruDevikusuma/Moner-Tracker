const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/add', (req, res) => {
  const amount = req.body.amount;

  // Save the amount to a database

  res.redirect('/');
});

app.listen(3000, () => {
  console.log('App listening on port 3000');
});