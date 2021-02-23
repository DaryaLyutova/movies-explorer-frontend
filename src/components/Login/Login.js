import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import Input from '../Input/Input';

function Login() {
    return (
        <section className="login">
            <form className="login__form">
                <fieldset className="login__block">
                    <h1 className="login__title">Рады видеть!</h1>
                    <Input name={'Email'} type={'email'} />
                    <Input name={'Пароль'} type={'password'} minlength={'8'} />
                </fieldset>
                <span className="login__button-error">
                    Какя-то ошибка.
                </span>
                <button type="submit"
                    className="login__button login__button_disabled">Войти</button>
                <div className="login__link-block">
                    <p className="login__subtitle">Ещё не зарегистрированы?</p>
                    <Link to="signin" className="login__link">Зарегистрироваться</Link>
                </div>
            </form>
        </section>
    )
}

export default Login;