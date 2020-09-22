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

app.post('/login', (req, res) => {

    try {
        const email = req.body.Email;
        const password = req.body.Contrasena;

        if (!email || !password) {
            return res.status(400).render('/', {
                message: 'Email y contraseña requeridos'
            })
        }

        db.query('SELECT * FROM usuario WHERE Email = ?', [email], async (error, results) => {
            console.log(results)
            if(!results || !(await bcrypt.compare(password, results[0].password))) {
                res.status(401).render('/', {
                    message: 'El email o la contraseña es incorrecta'
                })
            } else {
                const id = results[0].req.body.idUsuario;

                const token = jwt.sign({id}, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRES_IN
                })
                console.log('The token is: '+ token)

                const cookieOptions = {
                    expires: new Date(
                        Date.now() + process.env.JWT_COOKIE_EXPIRES * 20 * 60 * 60 * 1000
                    ),
                    httpOnly: true
                }
                res.cookie('jwt', token, cookieOptions);
                res.status(200).redirect('/');
            }
        })

    } catch (error) {
        console.log(error);
    }

});

app.listen(5000, () => {
    console.log('Server started on Port 5000');
});