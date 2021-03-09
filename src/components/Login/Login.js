import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import './Login.css';
import Input from '../Input/Input';

function Login(props) {
      //значения инпутов
    const [inputValue, setInputValue] = React.useState({
      email: '',
      password: '',
  });
  // наличие ошибки при вводе данных
  const [inputError, setInputError] = React.useState({
      email: true,
      password: true,
  });
  //состояние посещения инпута
  const [inputDirty, setInputDirty] = React.useState({
      email: false,
      password: false,
  });
  //валидность формы
  const [isValid, setIsValid] = React.useState(true);

  function blurHandler(e) {
      switch (e.target.name) {
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
          !inputError.email &&
          !inputError.password
      ) {
          setIsValid(false)
      } else {
          setIsValid(true)
      }
  }, [inputError]);
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
      props.onLogin(inputValue);
      setInputValue({
          email: '',
          password: '',
      })
  };


    
    return (
        <section className="login">
            <form className="login__form" onSubmit={handelSubmit}>
                <fieldset className="login__block">
                    <h1 className="login__title">Рады видеть!</h1>
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
                <span className="login__button-error">
                    {props.buttonMassege}
                </span>
                <button type="submit"
                className={cn('login__button', { 'login__button_disabled': isValid})}
                disabled={isValid}>Войти</button>
                <div className="login__link-block">
                    <p className="login__subtitle">Ещё не зарегистрированы?</p>
                    <Link to="signup" className="login__link">Зарегистрироваться</Link>
                </div>
            </form>
        </section>
    )
}

export default Login;