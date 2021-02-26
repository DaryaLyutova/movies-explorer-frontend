import React from 'react';
import './Portfolio.css';
import vector from '../../images/vector.svg';

function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <ul className="portfolio__links">
                <li>
                    <a href="https://github.com/DaryaLyutova/russian-travel" target="_blank" className="portfolio__link">
                        <p className="portfolio__link-subtitle">Статичный сайт</p>
                        <p className="portfolio__target">&#129125;</p>
                    </a>
                    <div className="portfolio__line" />
                </li>
                <li>
                    <a href="https://github.com/DaryaLyutova/mesto" target="_blank" className="portfolio__link">
                        <p className="portfolio__link-subtitle">Адаптивный сайт</p>
                        <p className="portfolio__target">&#129125;</p>
                    </a>
                    <div className="portfolio__line" />
                </li>
                <li>
                    <a href="https://github.com/DaryaLyutova/turbina-dd" target="_blank" className="portfolio__link">
                        <p className="portfolio__link-subtitle">Одностраничное приложение</p>
                        <p className="portfolio__target">&#129125;</p>
                    </a>
                    <div className="portfolio__line" />
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;