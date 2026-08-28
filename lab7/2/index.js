const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/home.html'));
});

app.get('/padthai', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/padthai.html'));
});

app.get('/caesar', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/caesar.html'));
});

app.get('/sushi', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/sushi.html'));
});

app.get('/tacos', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/tacos.html'));
});

app.get('/butter', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/butter.html'));
});

app.get('/falafel', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/falafel.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}, press Ctrl-C to terminate....`)
});
