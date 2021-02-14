import React from 'react';
import {connect} from 'react-redux';
import LoginForm from './components/login_form';
import logo from '../../../src/images/crypt.png';
import done from '../../../src/images/done.png';

const ContactUs = ({isSended}) => {
    const renderInitialForm = () => (
        <>
            <div className='contact-us_logo'>
                <img src={logo} alt='icon' />
            </div>
            <LoginForm />
        </>
    );

    const renderNotification = () => (
        <>
            <div className='successfully'>
                <div>
                    <img src={done} alt='icon' />
                    <h1>Успешно!</h1>
                    <p>Мы свяжемся с вами в течении некоторого времени!</p>
                </div>
            </div>
            <div className='contact-us_logo'>
                <img src={logo} alt='icon' />
            </div>
        </>
    );

    return (
        <div className='contact-us'>
            {isSended ? renderNotification() : renderInitialForm()}
        </div>
    );
};

const mapStateToProps = (state) => ({
    isSended: state.contactUs.isSended
});

export default connect(mapStateToProps)(ContactUs);