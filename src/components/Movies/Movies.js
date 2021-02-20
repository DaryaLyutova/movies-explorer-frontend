import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import moviesCards from '../../utils/moviesCards';

function Movies() {
    return(

        // console.log(moviesCards);

        <section className="movies">
            <SearchForm />
            <MoviesCardList moviesCards={moviesCards} />
        </section>
    )    
}

export default Movies;