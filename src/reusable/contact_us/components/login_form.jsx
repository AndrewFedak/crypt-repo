import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import contactUsFormInputs from '../constants/contact_us_form_inputs';
import {sendUser} from '../store/actions';

const LoginForm = ({sendUser, isSended, isShowing}) => {
    const onSubmit = (e) => {
        e.preventDefault();
        const target = e.target;
        const form = {};
        for (let i = 0; i < contactUsFormInputs.length; i++) {
            const {name, value} = target[i];
            form[name] = value;
        }
        sendUser(JSON.stringify(form));
    };

    return (
        <form className='contact-us__form' onSubmit={onSubmit}>
            <span className='contact-us-title'>СВЯЗАТЬСЯ С НАМИ</span>
            {contactUsFormInputs.map(({title, type, name}, idx) => (
                <label key={idx} className='contact-us__form-label'>
                    <span className='contact-us__form-title' >{title}</span>
                    <input className='contact-us__form-input' type={type} name={name}/>
                </label>
            ))}
            <button type='submit' disabled={isShowing}>Submit</button>
            {isSended && 'Ми з вами зв\'яжемося'}
        </form>
    );
};

const mapStateToProps = (state) => ({
    isSended: state.contactUs.isSended,
    isShowing: state.root.isShowing
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        sendUser
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);