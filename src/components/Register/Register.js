import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import Input from '../Input/Input';
import cn from 'classnames';

function Register(props) {
    //значения инпутов
    const [inputValue, setInputValue] = React.useState({
        name: '',
        email: '',
        password: '',
    });
    // наличие ошибки при вводе данных
    const [inputError, setInputError] = React.useState({
        name: true,
        email: true,
        password: true,
    });
    //состояние посещения инпута
    const [inputDirty, setInputDirty] = React.useState({
        name: false,
        email: false,
        password: false,
    });
    //валидность формы
    const [isValid, setIsValid] = React.useState(true);

    function blurHandler(e) {
        switch (e.target.name) {
            case 'name':
                return setInputDirty({ ...inputDirty, name: true })
            case 'email':
                return setInputDirty({ ...inputDirty, email: true })
            case 'password':
                return setInputDirty({ ...inputDirty, password: true })
            default:
                console.log('Не соответствует ни одному из вариантов')
        }
    };
    // проверка валидность всей формы
    React.useEffect(() => {
        if (
            !inputError.name &&
            !inputError.email &&
            !inputError.password
        ) {
            setIsValid(false)
        } else {
            setIsValid(true)
        }
    }, [inputError]);

    //обработчик инпута имени
    function handelNameChange(e) {
        setInputValue({ ...inputValue, name: e.target.value })
        setInputError({ ...inputError, name: e.target.value.length < 3 })
    };

    //обработчик инпута email
    function handelEmailChange(e) {
        setInputValue({ ...inputValue, email: e.target.value })
        const reg = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
        setInputError({ ...inputError, email: !reg.test(e.target.value) })
    };

    //обработчик инпута password
    function passwordHandler(e) {
        setInputValue({ ...inputValue, password: e.target.value })
        setInputError({ ...inputError, password: e.target.value.length < 8 })
    };

    function handelSubmit(e) {
        e.preventDefault();
        props.onRegistration(inputValue);
        setInputValue({
            name: '',
            email: '',
            password: '',
        })
    };

    return (
        <section className="register">
            <form className="register__form" onSubmit={handelSubmit}>
                <fieldset className="register__block">
                    <h1 className="register__title">Добро пожаловать!</h1>
                    <Input
                        name={'name'}
                        type={'text'}
                        minLength={'2'}
                        maxLength={'30'}
                        value={inputValue.name}
                        dirty={inputDirty.name}
                        error={inputError.name}
                        onBlur={(e) => {
                            blurHandler(e)
                        }}
                        style={{ color: inputError.name & inputDirty.name ? 'red' : 'black' }}
                        onChange={(e) => {
                            handelNameChange(e)
                        }}
                        errorMassege={'Введите имя'}
                    />
                    <Input
                        name={'email'}
                        type={'email'}
                        value={inputValue.email}
                        dirty={inputDirty.email}
                        error={inputError.email}
                        onBlur={(e) => {
                            blurHandler(e)
                        }}
                        style={{ color: inputError.email & inputDirty.email ? 'red' : 'black' }}
                        onChange={(e) => {
                            handelEmailChange(e)
                        }}
                        errorMassege={'Введите email'}
                    />
                    <Input
                        name={'password'}
                        type={'password'}
                        minLength={'8'}
                        value={inputValue.password}
                        dirty={inputDirty.password}
                        error={inputError.password}
                        onBlur={(e) => {
                            blurHandler(e)
                        }}
                        style={{ color: inputError.password & inputDirty.password ? 'red' : 'black' }}
                        onChange={(e) => {
                            passwordHandler(e)
                        }}
                        errorMassege={'Пароль должен быть не меннее 8 символов'}
                    />
                </fieldset>
                <span className="register__button-error">
                {props.buttonMassege}
                </span>
                <button type="submit"
                className={cn('register__button', { 'register__button_disabled': isValid})}
                disabled={isValid}
                    >Зарегистрироваться</button>
                <div className="register__link-block">
                    <p className="register__subtitle">Уже зарегистрированы?</p>
                    <Link to="signin" className="register__link">Войти</Link>
                </div>
            </form>
        </section>
    )
}

export default Register;
