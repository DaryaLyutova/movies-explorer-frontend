import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {    

    const [quantity, setQuantity] = React.useState(12);
    const whidth = document.documentElement.clientWidth;

    function handleQuantity() {
        function whidthMonitor() {
            if (whidth < 635) {
                setQuantity(5);
            } else {
                if (whidth < 1010) {
                    setQuantity(8);
                } else {
                    setQuantity(12);
                }
            }
        };
        setTimeout(whidthMonitor, 1000);
    };

    function handelLoadCards() {
        if (whidth < 1010) {
            setQuantity(quantity + 2);
        } else { setQuantity(quantity + 3) }
    };

    window.addEventListener('resize', handleQuantity, false);

    return (
        <section className="movies-cardlist">
            <div className="movies-cardlist__grid">{
                props.moviesCards.slice(0, quantity).map((moviesCard) =>
                (<MoviesCard
                    key={moviesCard.movieId}
                    moviesCard={moviesCard}
                    buttonClass={props.buttonClass}
                    onSaveMovie={props.onSaveMovie}
                    onDeleteMovie={props.onDeleteMovie}
                    saveMoviesCards={props.saveMoviesCards}
                />)
                )
            }
            </div>
            <button
                className={`movies-cardlist__button 
                ${(props.moviesCards.length > quantity && quantity >= 3) ? 'movies-cardlist__button_visible' : ''}`}
                onClick={handelLoadCards}
            >Ещё
            </button>
        </section>
    )
}

export default MoviesCardList;