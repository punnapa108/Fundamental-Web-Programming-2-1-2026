const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const conn = require('./database');

// static resourse & template engine
app.use(express.static('public'));
// Set EJS as templating engine
app.set('view engine', 'ejs');
// For parsing form data
app.use(express.urlencoded({ extended: true })); 

// show table books
app.get('/', (req, res) => {
  const sql = 'SELECT * FROM books';
  conn.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.render('show', { data: result });
  });
});

app.get('/add', (req, res) => {
  const sql = 'SELECT * FROM books';
  conn.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.render('add', { data: result });
  });
});

app.get('/edit/:id', (req, res) => {
  const sql = 'SELECT * FROM books WHERE id=?';
  conn.query(sql, [req.params.id], (err, result) => {
    if (err) throw err;
    console.log(result);
    res.render('edit', { data: result[0] });
  });
});

app.get('/delete/:id', (req, res) => {
  const sql = 'DELETE FROM books WHERE id = ?';
  conn.query(sql, [req.params.id], err => {
    if (err) throw err;
    res.redirect('/');
  });
});

app.post('/add', (req, res) => {
  const {id, title, author, category, price, stock} = req.body;
  const sql = 'INSERT INTO books VALUES (?, ?, ?, ?, ?, ?)';
  conn.query(sql, [id, title, author, category, price, stock], err => {
      if (err) throw err;
      res.redirect('/');
    });
});

app.post('/edit/:id', (req, res) => {
  const {id, title, author, category, price, stock} = req.body;
  const sql = 'UPDATE books SET title = ?, author = ?, category = ?, price = ?, stock = ? WHERE id = ?';
  conn.query(sql, [title, author, category, price, stock, req.params.id], err => {
      if (err) throw err;
      res.redirect('/');
    });
});

app.post('/delete/:id', (req, res) => {
  const sql = 'DELETE FROM books WHERE id = ?';
  conn.query(sql, [req.params.id], err => {
    if (err) throw err;
    res.redirect('/');
  });
});

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});
