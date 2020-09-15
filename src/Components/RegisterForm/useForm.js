import { useState, useEffect } from 'react'

const useForm = (callback, validateInfo) => {

    const [ values, setValues ] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    })

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
        //callback()
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
        errors
    }

}

export default useForm
