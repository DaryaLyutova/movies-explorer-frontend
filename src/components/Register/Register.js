import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import Input from '../Input/Input';

function Register() {
    return (
        <section className="register">
            <h1 className="register__title">Добро пожаловать!</h1>
            <form className="register__form">
                <Input name={'Имя'} type={'text'} minlength={'2'} maxlength={'30'} />
                <Input name={'Email'} type={'email'} />
                <Input name={'Пароль'} type={'password'} minlength={'8'} />
                <span className="register__button-error">
                    Какя-то ошибка.
                </span>
                <button type="submit"
                    className="register__button register__button_disabled">Зарегистрироваться</button>
                <div className="register__link-block">
                    <p className="register_subtitle">Уже зарегистрированы?</p>
                    <Link to="signin" className="register__link">Войти</Link>
                </div>
            </form>
        </section>
    )
}

export default Register;
