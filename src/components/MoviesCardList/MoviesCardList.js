import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
    return (
        <section className="movies-cardlist">
            <div className="movies-cardlist__grid">{
                props.moviesCards.slice(0, 12).map((moviesCard) =>
                (<MoviesCard
                    moviesCard={moviesCard}
                    buttonClass={props.buttonClass}
                />)
                )
            }
            </div>
            <button className={`movies-cardlist__button ${props.visible}`}>Ещё</button>
        </section>
    )
}

export default MoviesCardList;