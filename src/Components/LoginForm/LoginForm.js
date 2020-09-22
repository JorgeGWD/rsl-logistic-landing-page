import React from 'react'
import './LoginForm.css'
import useForm from './useForm'
import validateInfo from './validateInfo'

const LoginForm = () => {

    const { handleChange, handleSubmit, values, errors, login } = useForm(submit, validateInfo)

    function submit() {
        console.log(values)
    }

    return (
        <div className="login box">
            <h1>Login</h1>
            <form onSubmit={handleSubmit} noValidate >
                <input type="email" name="email" value={values.email} placeholder="Email" onChange={handleChange} />
                {errors.email && <p>{errors.email}</p>}

                <input type="password" name="password" value={values.password} placeholder="Password" onChange={handleChange} />
                {errors.password && <p>{errors.password}</p>}

                <button type="submit" onClick={login} >Sing In</button>
            </form>
        </div>
    )
}

export default LoginForm
