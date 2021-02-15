import React from 'react';
import './Promo.css';
import gloube from '../../images/text__COLOR_landing-logo.svg';

function Promo() {
    return (
    <section className="promo">
        <div className="promo__container">
            <div className="promo__text">
                <h1 className="promo__title">
                    Учебный проект студента факультета Веб-разработки.
                </h1>
                <p className="promo__subtitle">
                    Листайте ниже, чтобы узнать больше про этот проект и его создателя.
                </p>
            </div>
            <img src={gloube} alt="глобус" className="promo__image"/>
        </div>        
        <button className="promo__button">Узнать больше</button>
    </section>
    )
}

export default Promo;