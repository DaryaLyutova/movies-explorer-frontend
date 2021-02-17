import React from 'react';
import './Portfolio.css';
import vector from '../../images/vector.svg';

function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <nav className="portfolio__nav">
                <a href="https://github.com/DaryaLyutova" className="portfolio__link">
                    <p className="portfolio__link-subtitle">Статичный сайт</p>
                    <img src={vector} alt="указатель" className="portfolio__link-image" />
                </a>
                <a href="https://github.com/DaryaLyutova" className="portfolio__link">
                    <p className="portfolio__link-subtitle">Адаптивный сайт</p>
                    <img src={vector} alt="указатель" className="portfolio__link-image" />
                </a>
                <a href="https://github.com/DaryaLyutova" className="portfolio__link">
                    <p className="portfolio__link-subtitle">Одностраничное приложение</p>
                    <img src={vector} alt="указатель" className="portfolio__link-image" />
                </a>
            </nav>
        </section>
    )
}

export default Portfolio;