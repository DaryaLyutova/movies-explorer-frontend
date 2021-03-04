import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import Input from '../Input/Input';

function Register(props) {

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handelNameChange(e) {
        setName(e.target.value)
    };

    function handelEmailChange(e) {
        setEmail(e.target.value)
    };

    function handelPassword(e) {
        setPassword(e.target.value)
    };

    function resetForm() {
        setName('');
        setEmail('');
        setPassword('');
    }

    function handelSubmit(e) {
        e.preventDefault();
        props.onRegistration(name, email, password, resetForm);
    };

    return (
        <section className="register">
            <form className="register__form" onSubmit={handelSubmit}>
                <fieldset className="register__block">
                    <h1 className="register__title">Добро пожаловать!</h1>
                    <Input
                        name={'Имя'}
                        type={'text'}
                        minLength={'2'}
                        maxLength={'30'}
                        onChange={handelNameChange}
                        value={name}
                    />
                    <Input
                        name={'Email'}
                        type={'email'}
                        onChange={handelEmailChange}
                        value={email}
                    />
                    <Input
                        name={'Пароль'}
                        type={'password'}
                        minLength={'8'}
                        onChange={handelPassword}
                        value={password}
                    />
                </fieldset>
                <span className="register__button-error">
                    Какя-то ошибка.
                </span>
                <button type="submit"
                    className="register__button register__button_disabled">Зарегистрироваться</button>
                <div className="register__link-block">
                    <p className="register__subtitle">Уже зарегистрированы?</p>
                    <Link to="signin" className="register__link">Войти</Link>
                </div>
            </form>
        </section>
    )
}

export default Register;
