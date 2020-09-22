import React, { useRef } from 'react'
import LoginForm from '../../LoginForm/LoginForm'
import Modal from '../../Modal/Modal'
import RegisterForm from '../../RegisterForm/RegisterForm'

const Header = () => {

    const modalRefRegister = useRef()
    const modalRefLogin = useRef()

    const openModalRegister = () => {
        // console.log(modalRef.current)
        modalRefRegister.current.openModal()
    }

    const openModalLogin = () => {
        // console.log(modalRef.current)
        modalRefLogin.current.openModal()
    }

    return (
        <div>
            <div className="navbar-fixed">
                <nav>
                    <div className="nav-wrapper  black">
                        <div className="container">
                            <ul id="nav-mobile" className="hide-on-med-and-down">
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About us</a></li>
                                <li><a href="#freatures">Services</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><button href="jsx-a11y/anchor-is-valid" onClick={openModalLogin}>Login</button></li>
                                <li>|</li>
                                <li><button href="jsx-a11y/anchor-is-valid" onClick={openModalRegister}>Register</button></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <Modal ref={modalRefRegister}>
                <RegisterForm />
            </Modal>
            <Modal ref={modalRefLogin}>
                <LoginForm />
            </Modal>
        </div>
    )
}

export default Header
