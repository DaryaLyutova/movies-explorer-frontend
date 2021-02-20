import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import moviesCards from '../../utils/moviesCards';

function SavedMovies() {
    return(
        <section className="saved-movies">
            <SearchForm />
            <MoviesCardList moviesCards={moviesCards} />
        </section>
    )    
}

export default SavedMovies;