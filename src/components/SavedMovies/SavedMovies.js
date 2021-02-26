import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({ moviesCards }) {
    return (
        <section className="saved-movies">
            <div className="saved-movies__form-block">
            <SearchForm />
            <div className="saved-movies__line" />
            </div>   
            <MoviesCardList 
            moviesCards={moviesCards} 
            buttonClass={'movies-card__delete'}
            visible={'movies-cardlist__button_visible'} />
        </section>
    )
}

export default SavedMovies;