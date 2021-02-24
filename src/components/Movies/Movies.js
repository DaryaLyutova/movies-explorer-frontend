import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies(props) {
    return(
        <section className="movies">
            <div className="movies__form-block">
            <SearchForm />
            <div className="movies__line" />
            </div>            
            <MoviesCardList moviesCards={props.moviesCards} buttonClass={'movies-card__save'} />
        </section>
    )    
}

export default Movies;