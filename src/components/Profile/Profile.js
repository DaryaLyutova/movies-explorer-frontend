import React from 'react';
import './Profile.css';

function Profile({ user }) {
    return (
        <section className="profile">
            <h1 className="profile__title">Привет, {user.name}!</h1>
            <form className="profile__form">
                <label className="profile__label">Имя
            <input className="profile__input" type="string" required />
                </label>
                <span className="profile__span">Что-то пошло не так...</span>
                <div className="profile__line" />
                <label className="profile__label">Email
            <input className="profile__input" type="Email" required />
                </label>
                <span className="profile__span">Что-то пошло не так...</span>
                <ul className="profile__button-zone">
                    <li>
                        <button type="submit" className="profile__button">
                            Редактировать
                            </button>
                    </li>
                    <li>
                        <button className="profile__button profile__button_color">
                            Выйти из аккаунта
                            </button>
                    </li>
                </ul>


            </form>
        </section>
    )
}

export default Profile;