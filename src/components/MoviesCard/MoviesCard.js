import React from 'react';
import './MoviesCard.css';

function MoviesCard(props) {

    const isSaveDefault = props.saveMoviesCards.some(i => i.movieId === props.moviesCard.movieId);
    const [isSave, setIsSave] = React.useState(isSaveDefault);
    
    const isOwner = props.saveMoviesCards.some(i => i.owner);
    
    function handelSaveMovieClick() {
        props.onSaveMovie(props.moviesCard);
        setIsSave(true);
    };

    function handelDeleteMovieClick() {
        props.onDeleteMovie(props.moviesCard);
        setIsSave(false);
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
                    onClick={(!isSave && !isOwner) ? handelSaveMovieClick : handelDeleteMovieClick} />
            </div>
            <img alt={`изображение ${props.moviesCard.nameRU}`} src={props.moviesCard.image}
                className="movies-card__image" />
        </div>
    )
}

export default MoviesCard;