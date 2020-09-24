const express = require('express');
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config({path: './.env'});

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieParser())
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
    console.log(req.body);

    const {name, lastName, email, phone, password} = req.body;

    db.query('SELECT email FROM users WHERE email = ?', [email], async (error, results) => {
        if (error) {
            console.log(error)
        };
        if (results.length > 0) {
            console.log('El email esta en uso');
            return res.status(200).json({
                message: 'El email esta en uso'
            });
        };

        let hashedPassword = await bcrypt.hash(password, 8);
        console.log(hashedPassword);

        db.query('INSERT INTO users SET ?', {name: name, lastName: lastName, email: email, phone: phone, password: hashedPassword}, (error, results) => {
            if (error) {
                console.log(error);
            } else {
                console.log(results);
                console.log('Registro exitoso');
                return res.status(200).json({
                    message: 'Registro exitoso'
                });
            }
        })
    })

});

app.post('/login', async (req, res) => {
    try {
        
        const { email, password} = req.body;

        if( !email || !password ) {
            console.log('Email y Password son requerido');
            return res.status(400).json({
                message: 'Email y Password son requerido'
            });
        }

        db.query('SELECT * FROM users WHERE email = ?', [email], async (error, results) => {
            console.log(results)
            if( !results || !(await bcrypt.compare(password, results[0].password)) ) {
                res.status(401).json({
                    message: 'Email o Passwor incorrecto'
                });
            } else {

                const id = results[0].id;
                
                const token = jwt.sign({ id }, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRES_IN
                });

                console.log('The token is:' + token);

                const cookieOptions = {
                    expires: new Date(
                        Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
                    ),
                    httpOnly: true
                }

                res.cookie('jwt', token, cookieOptions);
                
                //res.status(200).redirect('/');
            }
        })

    } catch (error) {
        console.log(error);
    }
});

app.listen(5000, () => {
    console.log('Server started on Port 5000');
});