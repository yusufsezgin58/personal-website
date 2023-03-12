import React from 'react'
import styles from './styles.module.css'

function Modal() {
    return (
        <div>
            <div id={styles.modal} class="alert alert-light shadow-lg alert-dismissible fade show" role="alert">
                <span id={styles.span} className="text-dark ">Hello! Good to see you, have a good time!</span>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>
    )
}

export default Modal
