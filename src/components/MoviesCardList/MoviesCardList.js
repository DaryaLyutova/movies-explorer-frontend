import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { MOVIE_QUANTITY,
    MOVIE_QUANTITY_PAD,
    MOVIE_QUANTITY_MOBILE,
    ADD_MOVIE_QUANTITY,
    ADD_MOVIE_QUANTITY_MOBILE } from '../../utils/consts';

function MoviesCardList(props) {

    const [quantity, setQuantity] = React.useState(12);
    const whidth = document.documentElement.clientWidth;

    function handlerQuantity() {
        function whidthMonitor() {
            if (whidth < 635) {
                setQuantity(MOVIE_QUANTITY_MOBILE);
            } else {
                if (whidth < 1010) {
                    setQuantity(MOVIE_QUANTITY_PAD);
                } else {
                    setQuantity(MOVIE_QUANTITY);
                }
            }
        };
        setTimeout(whidthMonitor, 1000);
    };

    function handlerLoadCards() {
        if (whidth < 1010) {
            setQuantity(quantity + ADD_MOVIE_QUANTITY_MOBILE);
        } else { setQuantity(quantity + ADD_MOVIE_QUANTITY) }
    };

    window.addEventListener('resize', handlerQuantity, false);

    return (
        <section className="movies-cardlist">
            <div className="movies-cardlist__grid">{
                props.moviesCards.slice(0, quantity).map((moviesCard) =>
                (<MoviesCard
                    key={moviesCard.movieId}
                    moviesCard={moviesCard}
                    buttonClass={props.buttonClass}
                    onSaveMovie={props.onSaveMovie}
                    saveMoviesCards={props.saveMoviesCards}
                />)
                )
            }
            </div>
            <button
                className={`movies-cardlist__button 
                ${(props.moviesCards.length > quantity && quantity >= 3) ? 'movies-cardlist__button_visible' : ''}`}
                onClick={handlerLoadCards}
            >Ещё
            </button>
        </section>
    )
}

export default MoviesCardList;