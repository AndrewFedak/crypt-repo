import React from 'react';
import {withRouter} from 'react-router-dom';

const validCredentials = {
    login: 'admin',
    password: 'admin'
};

const Login = ({history}) => {
    const onSubmit = (e) => {
        e.preventDefault();
        const formValue = Object.values(e.target);
        let isFormValid = true;
        Object.entries(validCredentials).forEach((item, idx) => {
            const [name, value] = item;
            if (validCredentials[formValue[idx].name] !== formValue[idx].value) {
                isFormValid = false;
            }
        });
        if (isFormValid) {
            localStorage.setItem('authorized', true);
            history.push('/admin');
        } else {
            alert('Неверний логин или пароль');
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <input type='text' placeholder='Введите логин' name='login'/>
            <input type='password' placeholder='Введите пароль' name='password'/>
            <button type='submit'>Перейти в админ панель</button>
        </form>
    );
};

export default withRouter(Login);