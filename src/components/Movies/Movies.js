import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../../Preloader/Preloader';
import { filterDuration } from '../../utils/utils';

function Movies(props) {
    
    const [isMovies, setIsMovies] = React.useState(props.moviesCards);
    React.useEffect(() => {
        setIsMovies(props.moviesCards);
    }, [props.moviesCards]);
    
    function handlerFilterDurationMovie(isFilter) {
        if (isFilter) {
            const selectedMovies = filterDuration(props.moviesCards);
            setIsMovies(selectedMovies);
        } else {
            setIsMovies(props.moviesCards);
        }
    }

    return (
        <section className="movies">
            <div className="movies__form-block">
                <SearchForm
                    onLoadignCards={props.onLoadignCards}
                    handlerFilterDurationMovie={handlerFilterDurationMovie}
                    turnOn={props.preloaderOn}
                />
                <div className="movies__line" />
            </div>
            <Preloader turnOn={props.turnOn} />
            <p className={`movies__request-res 
            ${!props.reqwestRes.visible ? 'movies__request-res_visible' : ''}`} 
            >
                {props.reqwestRes.text}
            </p>
            <MoviesCardList
                moviesCards={isMovies}
                saveMoviesCards={props.saveMoviesCards}
                buttonClass={'movies-card__save'}
                onSaveMovie={props.onSaveMovie}
                />
        </section>
    )
}

export default Movies;