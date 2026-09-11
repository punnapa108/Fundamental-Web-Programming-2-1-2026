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

app.get('/', (req, res) => {
    const sql = 'SELECT * FROM albums';
    conn.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.render('show', { data: result });
    });
});

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});
