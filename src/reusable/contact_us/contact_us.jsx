import React from 'react';
import LoginForm from './components/login_form';
import logo from '../../../src/images/crypt.png';

const ContactUs = (props) => {
    return (
        <div className='contact-us'>
            <div className='contact-us_logo'>
                <img src={logo} alt='icon' />
            </div>
            <LoginForm />
        </div>
    );
};

export default ContactUs;