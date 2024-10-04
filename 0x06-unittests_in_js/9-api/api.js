// api.js
const express = require('express');
const app = express();

// Listen to port 7865
const port = 7865;
app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Cart route with id validation (id must be a number)
app.get('/cart/:id(\\d+)', (req, res) => {
  const { id } = req.params;
  res.send(`Payment methods for cart ${id}`);
});

// Handle invalid cart ids (non-numeric)
app.get('/cart/:id', (req, res) => {
  res.status(404).send('Invalid cart ID');
});

module.exports = app;
