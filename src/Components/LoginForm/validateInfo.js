export default function validateInfo(values) {
    let errors = {}

    if(!values.email) {
        errors.email = 'Este campo es requerido'
    } else if(!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email invalido'
    }

    if(!values.password) {
        errors.password = 'Este campo es requerido'
    } else if(values.password.length < 8) {
        errors.password = 'La contraseña debe tener 8 caracteres o más'
    }

    return errors
}