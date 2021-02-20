import React from 'react';
import './MoviesCard.css';

function MoviesCard({ moviesCard }) {
    return (
        <div className="movies-card">
            <div className="movies-card__content">
                <div className="movies-card__description">
                    <h2 className="movies-card__title">{moviesCard.nameRU}</h2>
                    <p className="movies-card__duration">{moviesCard.duration}</p>
                </div>
                <button type="button" className="movies-card__save" />
            </div>
            <img alt={`изображение ${moviesCard.nameRU}`} src={moviesCard.image}
                className="movies-card__image" />
        </div>
    )
}

export default MoviesCard;