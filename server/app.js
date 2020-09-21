const express = require('express');
const mysql = require('mysql');

const app = express();

const db = mysql.createConnection({
    hots: 'localhost',
    user: 'root',
    password: 'Jmrl*-963',
    database: 'rsl_logistic_db'
});

db.connect((error) => {
    if(error) {
        console.log(error);
    } else {
        console.log('MSQL connected');
    }
});

app.get('/', (req, res) => {
    res.send('<h1>Home page</h1>');
});

app.listen(5000, () => {
    console.log('Server started on Port 5000');
});