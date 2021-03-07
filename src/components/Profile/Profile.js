import React from 'react';
import './Profile.css';

function Profile({ user, signOut, onUpdateUser }) {

    const nameRef = React.useRef('');
    const emailRef = React.useRef('');

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser({
            name: nameRef.current.value,
            email: emailRef.current.value
        });
        nameRef.current.value = '';
        emailRef.current.value = '';
    };

    return (
        <section className="profile">
            <h1 className="profile__title">Привет, {user.name}!</h1>
            <form className="profile__form" onSubmit={handleSubmit}>
                <label className="profile__label">Имя
            <input
                        className="profile__input profile__input_error"
                        type="text"
                        minLength="2"
                        maxLength="30"
                        ref={nameRef}
                        required
                    />
                </label>
                <span className="profile__error profile__error_visible">Что-то пошло не так...</span>
                <div className="profile__line" />
                <label className="profile__label">Почта
            <input
                        className="profile__input"
                        type="Email"
                        ref={emailRef}
                        required
                    />
                </label>
                <span className="profile__error profile__error_visible">Что-то пошло не так...</span>
                <div className="profile__button-zone">
                    <span className="profile__error profile__error_visible">
                        Какя-то ошибка.
                        </span>
                    <button type="submit" className="profile__button profile__button__disabled">
                        Редактировать
                        </button>
                    <button
                        type="button"
                        className="profile__button profile__button_color"
                        onClick={signOut}
                    >
                        Выйти из аккаунта
                        </button>
                </div>


            </form>
        </section>
    )
}

export default Profile;