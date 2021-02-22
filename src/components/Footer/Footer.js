import React from 'react';
import { useLocation } from 'react-router-dom';
import './Footer.css';

function Footer() {
    const [componentVisible, isComponentVisible] = React.useState(false);
    const location = useLocation();

    function handelHeaderTitle() {
        if (location.pathname === '/movies'
            || location.pathname === '/saved-movies'
            || location.pathname === '/') {
            isComponentVisible(true)
        }
    }

    React.useEffect(() => {
        handelHeaderTitle();
    }, [location.pathname])

    return (
        <footer className={`footer  ${!componentVisible ? 'footer_visible' : ''}`}>
            <h2 className="footer__title">
                Учебный проект Яндекс.Практикум &times; BeatFilm.
            </h2>
            <div className="footer__line"/>
            <div className="footer__info">
                <p className="footer__date">&copy; 2021</p>
                <nav className="footer__nav">
                    <a href="https://praktikum.yandex.ru/" className="footer__link">Яндекс.Практикум</a>
                    <a href="https://github.com/DaryaLyutova" className="footer__link">Github</a>
                    <a href="https://github.com/DaryaLyutova" className="footer__link">Facebook</a>
                </nav>
            </div>
        </footer>
    )
}

export default Footer;