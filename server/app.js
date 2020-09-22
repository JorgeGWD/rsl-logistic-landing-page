const express = require('express');
const mysql = require('mysql');
// const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
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

    db.query('SELECT Email FROM usuario WHERE Email = ?', [email], async (error, results) => {
        if (error) {
            console.log(error);
        };
        if (results.length > 0) {
            console.log('El correo ya esta en uso')
            return res.render('/', {
                message: 'El correo ya esta en uso'
            })
        };

        let hashedPassword = await bcrypt.hash(password, 8);

        // console.log(hashedPassword);

        db.query('INSERT INTO usuario SET ?', {Nombre: name, Apellido: lastName, Email: email, Telefono: phone, Contrasena: hashedPassword}, (error, results) => {
            if (error) {
                console.log(error)
            } else {
                console.log('Registro exitoso')
                console.log(results)
                return res.render('/', {
                    message: 'Registro exitoso'
                })
            }
        })

    });

});

app.listen(5000, () => {
    console.log('Server started on Port 5000');
});