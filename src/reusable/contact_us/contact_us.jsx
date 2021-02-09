import React from 'react';
import contactUsFormInputs from './constants/contact_us_form_inputs';

const ContactUs = (props) => {
    return (
        <div className='contact-us'>
            <img src='' alt='icon' />
            <form className='contact-us__form'>
                <span className='contact-us-title'>СВЯЗАТЬСЯ С НАМИ</span>
                {contactUsFormInputs.map(({title, type}, idx) => (
                    <label key={idx} className='contact-us__form-label'>
                        <span className='contact-us__form-title'>{title}</span>
                        <input className='contact-us__form-input' type={type} />
                    </label>
                ))}
                 <button type='submit'>
                    <img src="call.svg" alt=""/>
                    <p>МЫ ВАМ ПЕРЕЗВОНИМ</p>
                </button>
            </form>
        </div>
    );
};

export default ContactUs;