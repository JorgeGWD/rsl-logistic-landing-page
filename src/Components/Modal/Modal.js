import React, { useState, forwardRef, useImperativeHandle } from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'

const Modal = forwardRef((props, ref) => {

    const [ display, setDisplay ] = useState(false)

    useImperativeHandle(ref, () =>{
        return {
            openModal: () => open(),
            close: () => close()
        }
    })

    const open = () => {
        setDisplay(true)
    }

    const close = () => {
        setDisplay(false)
    }

    if(display) {
        return ReactDOM.createPortal(
            <div className="modal-wrapper">
                <div className="modal-backdrop" onClick={close} />
                <div className="modal-box">
                    {props.children}
                </div>
            </div>, document.getElementById('modal-root')
        )
    }

    return null
})

export default Modal