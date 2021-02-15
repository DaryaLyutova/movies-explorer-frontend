import React from 'react';
import './Header.css';
import smile from '../../images/logo__COLOR_main-1.svg';

function Header() {
    return (
        <header className="header">
            <div className="header__square">
                <div className="header__circle">
                    <img src={smile} alt="логотип" className="header__smile" />
                </div>                
            </div>            
        </header>
    )
}
export default Header;