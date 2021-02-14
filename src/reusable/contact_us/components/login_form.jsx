import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import contactUsFormInputs from '../constants/contact_us_form_inputs';
import {sendUser} from '../store/actions';
import recallIcon from '../../../images/recall.png';

const LoginForm = ({sendUser, isShowing}) => {
    const onSubmit = (e) => {
        e.preventDefault();
        const target = e.target;
        const form = {};
        for (let i = 0; i < contactUsFormInputs.length; i++) {
            const {name, value} = target[i];
            if (!value.trim()) return;
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
            <button type='submit' disabled={isShowing}>
                <img src={recallIcon} alt="recall-icon"/>
                <p>МЫ ВАМ ПЕРЕЗВОНИМ</p>
            </button>
        </form>
    );
};

const mapStateToProps = (state) => ({
    isShowing: state.root.isShowing
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        sendUser
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);