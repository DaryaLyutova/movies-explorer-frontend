import React from 'react';
import './MoviesCard.css';

function MoviesCard(props) {

    const isSaveDefault = props.saveMoviesCards.some(i => i.movieId === props.moviesCard.movieId);
    const [isSave, setIsSave] = React.useState(isSaveDefault);

    function handelSaveMovieClick() {
        props.onSaveMovie(props.moviesCard);
        setIsSave(!isSave);
    };

    return (
        <div className="movies-card">
            <div className="movies-card__content">
                <div className="movies-card__description">
                    <h2 className="movies-card__title">{props.moviesCard.nameRU}</h2>
                    <p className="movies-card__duration">{props.moviesCard.duration}</p>
                </div>
                <button
                    type="button"
                    className={`movies-card__button ${props.buttonClass} ${isSave ? 'movies-card__save_color' : ''}`}
                    onClick={handelSaveMovieClick} />
            </div>
            <a href={props.moviesCard.trailer} target="_blank" className="movies-card__link">
                <img alt={`изображение ${props.moviesCard.nameRU}`} src={props.moviesCard.image}
                    className="movies-card__image" />
            </a>
        </div>
    )
}

export default MoviesCard;