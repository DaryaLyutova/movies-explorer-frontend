import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import smile from '../../images/logo__COLOR_main-1.svg';

function Header() {

    const [headerType, isHeaderType] = React.useState({
        color: '#5C5C5C',
        headerVisible: false,
        navVisible: false,
        buttonVisible: false,
        margin: false
    });
    const location = useLocation();

    function handelHeaderType() {
        if (location.pathname === '/') {
            isHeaderType({
                color: '#5C5C5C',
                headerVisible: true,
                navVisible: false,
                buttonVisible: true,
                margin: false
            })
        } if (location.pathname === '/movies'
            || location.pathname === '/saved-movies') {
            isHeaderType({
                color: '#FFFFFF',
                headerVisible: true,
                navVisible: true,
                buttonVisible: false,
                margin: false
            })
        } else {
            if (location.pathname === '/signin'
                || location.pathname === '/signup') {
                isHeaderType({
                    color: '#FFFFFF',
                    headerVisible: true,
                    navVisible: false,
                    buttonVisible: false,
                    margin: true
                })
            }
            if (location.pathname === '/profile') {
                isHeaderType({
                    color: '#FFFFFF',
                    headerVisible: true,
                    navVisible: true,
                    buttonVisible: false,
                    margin: false
                })
            }
        }
    }

    React.useEffect(() => {
        handelHeaderType();
    }, [location.pathname])

    return (
        <header className={`header  ${headerType.headerVisible ? 'header_visible' : ''}`}
            style={{
                backgroundColor: headerType.color,
                maxWidth: headerType.margin ? '396px' : ''
            }}>
            <Link
                to="/"
                className={`header__square  ${headerType.margin ? 'header__square_margin' : ''}`}
            >

                <div className="header__circle">
                    <img src={smile} alt="логотип" className="header__smile" />
                </div>
            </Link>
            <button className={`header__popup-button 
            ${headerType.navVisible ? 'header__popup-button_display' : ''}`} />
            <ul className={`header__button-list 
            ${headerType.buttonVisible ? 'header__button-list_display' : ''}`}
            >
                <li>
                    <Link
                        to="/signiup"
                        className="header__button-signup"
                    >Регистрация</Link>
                </li>
                <li>
                    <Link
                        to="/signin"
                        className="header__button-signin"
                    >Войти</Link>
                </li>
            </ul>
            <Navigation
                visible={headerType.navVisible}
            />
        </header>
    )
}
export default Header;