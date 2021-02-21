import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import Input from '../Input/Input';

function Login() {
    return(
        <section className="login">
            <h1 className="login__title">Рады видеть!</h1>
            <form className="login__form">
                <Input name={'Email'} />
                <Input name={'Пароль'} />
                <button type="submit"
                    className="login__button">Войти</button>
                <div className="login__link-block">
                    <p className="login_subtitle">Ещё не зарегистрированы?</p>
                    <Link to="signin" className="login__link">Зарегистрироваться</Link>
                </div>
            </form>
        </section>
    )
}

export default Login;