import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';
import menLogo from '../../images/men-logo.svg';


function Navigation(props) {

    const [componentVisible, isComponentVisible] = React.useState(true);
    const location = useLocation();

    function handelHeaderTitle() {
        if (location.pathname === '/movies'
            || location.pathname === '/saved-movies'
            || location.pathname === '/profile') {
            isComponentVisible(false)
        } else {
            if (location.pathname === '/') {
                isComponentVisible(true)
            }
        }
    }

    React.useEffect(() => {
        handelHeaderTitle();
    }, [location.pathname])

    return (
        <nav
            className={`navigation ${!props.visible ? 'navigation-none' : ''} 
            ${props.navOpen ? 'navigation_open' : ''}`}
            style={{ justifyContent: componentVisible ? 'flex-end' : 'space-between' }}>
                <button className="navigation__close navigation__button navigation__button_visible" />
            <Link className="navigation__button navigation__button_visible">Главная</Link>
            <ul className={`navigation__movies ${componentVisible ? 'navigation-none' : ''}`}>
                <li>
                    <Link
                        to="/movies"
                        className="navigation__button navigation__button_boild">
                        Фильмы</Link>
                </li>
                <li>
                    <Link
                        to="/saved-movies"
                        className="navigation__button">
                        Сохранённые фильмы</Link>
                </li>
            </ul>
            <Link
                to="/profile"
                className={`navigation__button-accaunt 
                ${componentVisible ? 'navigation-none' : ''}`}>
                Аккаунт
            <div className="navigation__button-accaunt-circle">
                    <img src={menLogo} alt="логотип аккаунта"
                        className="navigation-logo" />
                </div>
            </Link>
        </nav >
    )
}

export default Navigation;