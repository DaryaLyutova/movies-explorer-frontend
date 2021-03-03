import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../../Preloader/Preloader';

function Movies(props) {


    return (
        <section className="movies">
            <div className="movies__form-block">
                <SearchForm
                    onLoadignCards={props.onLoadignCards}
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
                moviesCards={props.moviesCards}
                buttonClass={'movies-card__save'}
                onSaveMovie={props.onSaveMovie} />
        </section>
    )
}

export default Movies;