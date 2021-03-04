import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import Input from '../Input/Input';

function Login(props) {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [message, setMassege] = React.useState('Что-то пошло не так!');
  
    function handelEmailChange(e) {
      setEmail(e.target.value)
    };
  
    function handelPassword(e) {
      setPassword(e.target.value)
    };
  
    function handelMessage() {
      setMassege('Что-то пошло не так!');
    }
  
    function resetForm() {
      setEmail('');
      setPassword('');
      setMassege('');
    }
  
    function handelSubmit(e) {
      e.preventDefault();
      if (!email || !password) {
        return;
      }
      handelMessage();
      props.onLogin(email, password, message, resetForm);
    };

    
    return (
        <section className="login">
            <form className="login__form" onSubmit={handelSubmit}>
                <fieldset className="login__block">
                    <h1 className="login__title">Рады видеть!</h1>
                    <Input 
                    name={'Email'} 
                    type={'email'} 
                    onChange={handelEmailChange}
                    value={email}/>
                    <Input 
                    name={'Пароль'} 
                    type={'password'} 
                    minlength={'8'} 
                    onChange={handelPassword}
                    value={password}/>
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