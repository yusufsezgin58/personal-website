import React from 'react'
import styles from './styles.module.css'
import { useForm, ValidationError } from '@formspree/react';

function Projects() {
    const [state, handleSubmit] = useForm("mdovenyq");
    if (state.succeeded) {
    return <div class="alert alert-light" id={styles.message} role="alert">
        Thanks for message !
  </div>
    }
        return (
            <div className={styles.rate}>
                <div className={styles.text}>
                    <h4>Rate</h4>
                    <p>You can rate this website or type any message to me.</p>
                </div>

                <div className={styles.form}>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email" className='form-label text-white'>
                            Email Address
                        </label>
                        <input
                            className='form-control'
                            id="email"
                            type="email"
                            name="email"
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        /> <br />
                        <label htmlFor="email" className='form-label text-white'>
                            Message
                        </label>
                        <textarea
                            className='form-control'
                            id="message"
                            name="message"
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        /> <br />
                        <button type="submit" className="btn btn-light float-end" disabled={state.submitting}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        )
    }

export default Projects;