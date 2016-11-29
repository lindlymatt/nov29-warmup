'use strict';

const express = require('express');
const app = express();

const port = 8000;

app.use(express.static('public'));

app.get('/api', (req, res) => {
  res.send('This is the API!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
