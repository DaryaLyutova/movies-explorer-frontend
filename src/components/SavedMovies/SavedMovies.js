import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { filterDuration } from '../../utils/utils';

function SavedMovies(props) {
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
        <section className="saved-movies">
            <div className="saved-movies__form-block">
                <SearchForm
                    onLoadignCards={props.onLoadignCards}
                    handlerFilterDurationMovie={handlerFilterDurationMovie}
                />
                <div className="saved-movies__line" />
            </div>
            <p className={`saved-movies__request-res 
            ${!props.reqwestRes.visible ? 'saved-movies__request-res_visible' : ''}`}
            >
                {props.reqwestRes.text}
            </p>
            <MoviesCardList
                saveMoviesCards={props.saveMoviesCards}
                moviesCards={isMovies}
                onSaveMovie={props.onSaveMovie}
                buttonClass={'movies-card__delete'}
            />
        </section>
    )
}

export default SavedMovies;