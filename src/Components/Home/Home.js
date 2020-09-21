import React, { useRef } from 'react'
import Modal from '../Modal/Modal'
import RegisterForm from '../RegisterForm/RegisterForm'

const Home = () => {

    const modalRef = useRef()

    const openModal = () => {
        // console.log(modalRef.current)
        modalRef.current.openModal()
    }

    return (
        <>
            <a href="jsx-a11y/anchor-is-valid" id="home">Home</a>	
            <div className="bg" style={{height: 100+'vh'}}></div>
            <div className="title">
                <span className="subtitle  white-text"><h2 data-aos="fade-down">RSL LOGISTIC</h2></span><br/>
                <a href="#about" style={{marginRight: 4 +"px"}} className="waves-effect waves-light btn-large blue" data-aos="fade-right">About</a>
                <button href="jsx-a11y/anchor-is-valid" className="waves-effect waves-light btn-large green accent-4" data-aos="fade-left" onClick={openModal}>Register</button>
            </div>
            <Modal ref={modalRef}>
                <RegisterForm />
            </Modal>
        </>
    )
}

export default Home
