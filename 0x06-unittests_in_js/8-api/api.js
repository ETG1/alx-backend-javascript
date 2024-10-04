// api.js
const express = require('express');
const app = express();

// Listen to port 7865
const port = 7865;
app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

// Route for the root path
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

module.exports = app;
