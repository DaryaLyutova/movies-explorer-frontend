import React from 'react';
import './AboutMe.css';
import PageTitle from '../PageTitle/PageTitle';
// import { NavLink } from 'react-router-dom';
import myPhoto from '../../images/my-photo.jpg';

function AboutMe() {
    return (
        <section className="aboutMe">
            <PageTitle title={'Студент'} />
            <div className="aboutMe__description">
                <div className="aboutMe__info">
                    <h3 className="aboutMe__title">Дарья</h3>
                    <p className="aboutMe__subtitle">Фронтенд-разработчик, 31 год</p>
                    <p className="aboutMe__subtitle aboutMe__subtitle_text">
                        Я из Курска, закончила ЮЗГУ по специальности "Инженер стандартизации и сертификации".
                        Достаточно долгое время работала по специальности, но недавно начала
                        кодить и поняла, что это именно то, чем я хочу заниматься.
                </p>
                    <nav className="aboutMe__links">
                        <a exact to="/" className="aboutMe__link">Facebook</a>
                        <a to="https://github.com/DaryaLyutova" className="aboutMe__link">Github</a>
                    </nav>
                </div>
                <img src={myPhoto} alt="моя фотография" className="aboutMe__photo" />
            </div>

        </section>
    )
}

export default AboutMe;