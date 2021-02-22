import React from 'react';
import './Profile.css';

function Profile({ user }) {
    return (
        <section className="profile">
            <h1 className="profile__title">Привет, {user.name}!</h1>
            <form className="profile__form">
                <label className="profile__label">Имя
            <input className="profile__input profile__input_error" type="text" minlength="2" maxlength="30" required />
                </label>
                <span className="profile__error">Что-то пошло не так...</span>
                <div className="profile__line" />
                <label className="profile__label">Email
            <input className="profile__input" type="Email" required />
                </label>
                <span className="profile__error">Что-то пошло не так...</span>
                <div className="profile__button-zone">
                        <span className="profile__error">
                            Какя-то ошибка.
                        </span>
                        <button type="submit" className="profile__button profile__button__disabled">
                            Редактировать
                        </button>
                        <button className="profile__button profile__button_color">
                            Выйти из аккаунта
                        </button>
                </div>


            </form>
        </section>
    )
}

export default Profile;