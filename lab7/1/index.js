const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/home.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/about.html'));
});

app.get('/cats', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/cats.html'));
});

app.get('/dogs', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/dogs.html'));
});

app.get('/fishes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/fishes.html'));
});

app.get('/rabits', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/rabits.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
