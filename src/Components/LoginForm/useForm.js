import { useState, useEffect } from 'react'
import Axios from 'axios'

const useForm = (callback, validateInfo) => {

    const [ values, setValues ] = useState({
        email: '',
        password: '',
    })

    const login = () => {
        Axios.post('http://localhost:5000/login', {
            email: values.email,
            password: values.password
        }).then((response) => {
            console.log(response)
        })
    }

    const [ errors, setErrors ] = useState({})

    const [ isSubmitting, setIsSunmitting ] = useState(false)

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

        setErrors(validateInfo(values))
        setIsSunmitting(true)
        // callback()
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting) {
            callback()
        }
    }, [errors])

    return {
        handleChange,
        handleSubmit,
        values,
        errors,
        login
    }

}

export default useForm