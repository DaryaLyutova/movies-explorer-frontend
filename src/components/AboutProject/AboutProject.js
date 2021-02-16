import React from 'react';
import './AboutProject.css';
import PageTitle from '../PageTitle/PageTitle';

function AboutProject() {
    return (
        <>
            <PageTitle title={'O проекте'} />
            <section className="about-project">
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
                {/* <ul className="about-project__scheme">
                    <li></li>
                </ul> */}

            </section>
        </>
    )
}

export default AboutProject;