import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
    return (
        <section className="movies-cardlist">{
            props.moviesCards.map((moviesCard) =>
            (<MoviesCard
                moviesCard={moviesCard}
            />)
            )
        }
        </section>
    )
}

export default MoviesCardList;