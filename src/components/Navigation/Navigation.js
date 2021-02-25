import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import menLogo from '../../images/men-logo.svg';


function Navigation(props) {

    return (
        <nav
            className={`navigation ${!props.visible ? 'navigation_none' : ''} 
            ${props.navOpen ? 'navigation_open' : ''}`} >
            <div className="navigation__container">
                <button className="navigation__close navigation__button navigation__button_visible" />
                <ul className="navigation__movies">
                    <li className="navigation__movies-item">
                        <Link className="navigation__button navigation__button_visible">Главная</Link>
                    </li>
                    <li className="navigation__movies-item">
                        <Link
                            to="/movies"
                            className="navigation__button navigation__button_boild">
                            Фильмы</Link>
                    </li>
                    <li className="navigation__movies-item">
                        <Link
                            to="/saved-movies"
                            className="navigation__button">
                            Сохранённые фильмы</Link>
                    </li>
                </ul>
                <Link to="/profile" className="navigation__button-accaunt" >
                    Аккаунт
            <div className="navigation__button-accaunt-circle">
                        <img src={menLogo} alt="логотип аккаунта"
                            className="navigation-logo" />
                    </div>
                </Link>
            </div>
        </nav >
    )
}

export default Navigation;