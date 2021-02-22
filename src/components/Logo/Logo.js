import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';
import smile from '../../images/logo__COLOR_main-1.svg';

function Logo() {

    return (
            <Link
                to="/" className="logo">
                <div className="logo__circle">
                    <img src={smile} alt="логотип" className="logo__smile" />
                </div>
            </Link>
    )
}
export default Logo;