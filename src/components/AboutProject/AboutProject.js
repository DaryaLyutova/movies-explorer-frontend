import React from 'react';

import './AboutProject.css';
import PageTitle from '../PageTitle/PageTitle';

function AboutProject(props) {
    return (
        <section id={props.id} className="about-project">
            <PageTitle title={'O проекте'} />
            <ul className="about-project__items">
                <li className="about-project__item">
                    <h3 className="about-project__title">Дипломный проект включал 5 этапов</h3>
                    <p className="about-project__subtitle">Составление плана, работу над бэкендом, вёрстку,
                    добавление функциональности и финальные доработки.
                    </p>
                </li>
                <li className="about-project__item">
                    <h3 className="about-project__title">На выполнение диплома ушло 5 недель</h3>
                    <p className="about-project__subtitle">У каждого этапа был мягкий и жёсткий дедлайн,
                    которые нужно было соблюдать, чтобы успешно защититься.
                        </p>
                </li>
            </ul>
            <div className="about-project__scheme">
                <div className="about-project__scheme-item">
                    <div className="about-project__scheme-indicator about-project__scheme-indicator_green">
                        <p className="about-project__time">1 неделя</p>
                    </div>
                    <p className="about-project__type">Back-end</p>
                </div>
                <div className="about-project__scheme-item">
                    <div className="about-project__scheme-indicator about-project__scheme-indicator_grey">
                        <p className="about-project__time">4 недели</p>
                    </div>
                    <p className="about-project__type">Front-end</p>
                </div>
            </div>
        </section>
    )
}

export default AboutProject;