import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies(props) {
    return (
        <section className="saved-movies">
            <div className="saved-movies__form-block">
            <SearchForm onLoadignCards={props.onLoadignCards}/>
            <div className="saved-movies__line" />
            </div>
            {/* <p className={`saved-movies__request-res 
            ${!props.reqwestRes.visible ? 'saved-movies__request-res_visible' : ''}`} 
            >
                {props.reqwestRes.text}
            </p> */}
            <MoviesCardList 
            moviesCards={props.moviesCards} 
            buttonClass={'movies-card__delete'}
            />
        </section>
    )
}

export default SavedMovies;