import React, { useState } from 'react'
import './LoginForm.css'

const LoginForm = () => {
    
    const [ values, setValues ] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        // console.log(e.target.value)

        const { name, value } = e.target

        setValues({
            ...values,
            [name] : value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        //setErrors(validateInfo(values))
        //setIsSunmitting(true)
        // callback()
    }

    return (
        <div className="login box">
            <h1>Login</h1>
            <form onSubmit={handleSubmit} noValidate >
                <input type="email" name="email" value={values.email} placeholder="Email" onChange={handleChange} />
                {/*errors.email && <p>{errors.email}</p>*/}

                <input type="password" name="password" value={values.password} placeholder="Password" onChange={handleChange} />
                {/*errors.password && <p>{errors.password}</p>*/}

                <button type="submit" onClick={""/*login*/} >Sing Up</button>
            </form>
        </div>
    )
}

export default LoginForm
