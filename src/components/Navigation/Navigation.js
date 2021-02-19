import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import menLogo from '../../images/men-logo.svg';

function Navigation() {
    return (
        <nav className="navigation">
            <ul className="navigation__movies navigation__visible">
                <li>
                    <Link
                        to="/movies"
                        className="navigation__button navigation__button_boild button-defolt-style">
                        Фильмы</Link>
                </li>
                <li>
                    <Link
                        to="/saved-movies"
                        className="navigation__button button-defolt-style">
                        Сохранённые фильмы</Link>
                </li>
            </ul>
            <ul className="navigation__user">
                <li>
                    <Link
                        to="/signin"
                        className="navigation__signup"
                    >Регистрация</Link>
                </li>
                <li>
                    <Link
                        to="/signin"
                        className="navigation__signin"
                    >Войти</Link>
                </li>
            </ul>
            <Link
                to="/profile" className="navigation__button-accaunt button-defolt-style navigation__visible">Аккаунт
            <div className="navigation__button-accaunt-circle">
                    <img src={menLogo} alt="логотип аккаунта" className="navigation-logo" />
                </div>
            </Link>
        </nav>
    )
}

export default Navigation;