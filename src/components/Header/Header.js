import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

import smile from '../../images/logo__COLOR_main-1.svg';

function Header(props) {

    const location = useLocation();
    const [headerType, isHeaderType] = React.useState({
        color: '#5C5C5C',
        headerVisible: false,
        buttonVisible: false,
        margin: false
    });


    function handelHeaderType() {
        if (location.pathname === '/') {
            isHeaderType({
                color: '#5C5C5C',
                headerVisible: true,
                buttonVisible: true,
                margin: false
            });
        } if (location.pathname === '/movies'
            || location.pathname === '/saved-movies') {
            isHeaderType({
                color: '#FFFFFF',
                headerVisible: true,
                buttonVisible: false,
                margin: false
            });
        } else {
            if (location.pathname === '/signin'
                || location.pathname === '/signup') {
                isHeaderType({
                    color: '#FFFFFF',
                    headerVisible: true,
                    buttonVisible: false,
                    margin: true
                });
            }
            if (location.pathname === '/profile') {
                isHeaderType({
                    color: '#FFFFFF',
                    headerVisible: true,
                    buttonVisible: false,
                    margin: false
                });
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
            <button
                className={`header__nav-button ${props.visible ? 'header__nav-button_display' : ''}`}
                onClick={props.onNavOpen} />
            <ul className={`header__button-list 
            ${headerType.buttonVisible ? 'header__button-list_display' : ''}`}
            >
                <li>
                    <Link
                        to="/signup"
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
        </header>
    )
}
export default Header;