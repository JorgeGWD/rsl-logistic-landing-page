const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config({path: './.env'});

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    hots: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

db.connect((error) => {
    if(error) {
        console.log(error);
    } else {
        console.log('MYSQL connected');
    }
});

app.post('/register', (req, res) => {

    const name = req.body.Nombre;
    const lastName = req.body.Apellido;
    const email = req.body.Email;
    const phone = req.body.Telefono;
    const password = req.body.Contrasena;

    db.query('INSERT INTO usuario (Nombre, Apellido, Email, Telefono, Contrasena) VALUES (?,?,?,?,?)',
    [name, lastName, email, phone, password],
    (err, result) => {
        console.log(err);
    });

});

app.listen(5000, () => {
    console.log('Server started on Port 5000');
});