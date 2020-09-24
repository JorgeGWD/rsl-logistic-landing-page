export default function validateInfo(values) {
    let errors = {}

    if(!values.name.trim()) {
        errors.name = "Este campo es requerido"
    }

    if(!values.lastName) {
        errors.lastName = "Este campo es requerido"
    }

    if(!values.email) {
        errors.email = 'Este campo es requerido'
    } else if(!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email invalido'
    }

    /*if(!values.phone) {
        errors.phone = "Este campo es requerido"
    } else if(!/^\+?([0-9]{2})\)?[- ]?([0-9]{3})[- ]?([0-9]{7})$/.test(values.phone)) {
        errors.phone = "Numero de teléfono invalido"
    }*/

    if(!values.phone) {
        errors.phone = "Este campo es requerido"
    }

    if(!values.password) {
        errors.password = 'Este campo es requerido'
    } else if(values.password.length < 8) {
        errors.password = 'La contraseña debe tener 8 caracteres o más'
    }

    if(!values.confirmPassword) {
        errors.confirmPassword = 'Este campo es requerido'
    } else if(values.confirmPassword !== values.password) {
        errors.confirmPassword = 'La contraseña no coincide'
    }

    return errors
}