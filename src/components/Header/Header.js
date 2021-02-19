import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import smile from '../../images/logo__COLOR_main-1.svg';

function Header() {
    return (
        <header className="header">
            <Link
                to="/" className="header__square">
                <div className="header__circle">
                    <img src={smile} alt="логотип" className="header__smile" />
                </div>
            </Link>
            <Navigation />

        </header>
    )
}
export default Header;