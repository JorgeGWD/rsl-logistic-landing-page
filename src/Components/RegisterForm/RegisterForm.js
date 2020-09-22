import React from 'react'
import './RegisterForm.css'
import useForm from './useForm'
import validateInfo from './validateInfo'

const RegisterForm = () => {

    const { handleChange, handleSubmit, values, errors, register } = useForm(submit, validateInfo)

    function submit() {
        console.log(values)
    }

    return (
        <div className="register box">
            <h1>Register</h1>
            <form onSubmit={handleSubmit} noValidate >
                <input type="text" name="name" value={values.name} placeholder="Name" onChange={handleChange} />
                {errors.name && <p>{errors.name}</p>}

                <input type="text" name="lastName" value={values.lastName} placeholder="Last name" onChange={handleChange} />
                {errors.lastName && <p>{errors.lastName}</p>}

                <input type="email" name="email" value={values.email} placeholder="Email" onChange={handleChange} />
                {errors.email && <p>{errors.email}</p>}

                <input type="tel" name="phone" value={values.phone} placeholder="Phone number" onChange={handleChange} />
                {errors.phone && <p>{errors.phone}</p>}

                <input type="password" name="password" value={values.password} placeholder="Password" onChange={handleChange} />
                {errors.password && <p>{errors.password}</p>}

                <input type="password" name="confirmPassword" value={values.confirmPassword} placeholder="Confirm password" onChange={handleChange} />
                {errors.confirmPassword && <p>{errors.confirmPassword}</p>}

                <button type="submit" onClick={register} >Sing Up</button>
            </form>
        </div>
    )
}

export default RegisterForm
