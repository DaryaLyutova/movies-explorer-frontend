import React from 'react';
import { useLocation } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';

function Header() {

    const [headerType, isHeaderType] = React.useState({
        color: '#5C5C5C',
        display: 'none',
        navigation: true
    });
    const location = useLocation();

    function handelHeaderType() {
        if (location.pathname === '/movies'
            || location.pathname === '/saved-movies'
            || location.pathname === '/profile') {
            isHeaderType({
                color: '#FFFFFF',
                display: 'flex',
                visible: true
            })
        } else {
            if (location.pathname === '/') {
                isHeaderType({
                    color: '#5C5C5C',
                    display: 'flex',
                    visible: true
                })
            } if (location.pathname === '/signin'
            || location.pathname === '/signup') {
            isHeaderType({
                color: '#FFFFFF',
                display: 'flex',
                visible: false
            })
        }
        }
    }

    React.useEffect(() => {
        handelHeaderType();
    }, [location.pathname])

    return (
        <header className="header" 
        style={{ backgroundColor: headerType.color, display: headerType.display}}>
            <Logo />
            <Navigation visible={headerType.visible} />

        </header>
    )
}
export default Header;