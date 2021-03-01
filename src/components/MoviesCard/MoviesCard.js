import React from 'react';
import './MoviesCard.css';

function MoviesCard(props) {
    return (
        <div className="movies-card">
            <div className="movies-card__content">
                <div className="movies-card__description">
                    <h2 className="movies-card__title">{props.moviesCard.nameRU}</h2>
                    <p className="movies-card__duration">{props.moviesCard.duration}</p>
                </div>
                <button type="button" className={`movies-card__button ${props.buttonClass}`} />
            </div>
            <img alt={`изображение ${props.moviesCard.nameRU}`} src={`https://api.nomoreparties.co${props.moviesCard.image.url}`}
                className="movies-card__image" />
        </div>
    )
}

export default MoviesCard;