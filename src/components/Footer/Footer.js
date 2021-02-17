import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <section className="footer">
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
        </section>
    )
}

export default Footer;