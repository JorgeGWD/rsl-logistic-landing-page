import React, { useState } from 'react'
import "./RegisterForm.css"
// import { Link } from 'react-router-dom'

const RegisterForm = () => {

    const [ data, setData ] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleChange = (e) => {
        // console.log(e.target.value)
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(data.name + '\n' + data.email + '\n' + data.password + '\n' + data.confirmPassword)
    }
    
    return (
        <div className="container">
            <div className="register box">
                <h1>Register</h1>
                <div className="register-form">
                    <form onSubmit={onSubmit}>
                        <input type="text" name="name" placeholder="Name" onChange={handleChange} />
                        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
                        <input type="tel" name="phone" placeholder="Phone number" onChange={handleChange} />
                        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
                        <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} />
                        <div className="btn-alongside">
                            <button className="btn-ghost" type="submit">Sing Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm