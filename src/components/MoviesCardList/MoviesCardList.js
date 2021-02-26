import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {

    const [quantity, setQuantity] = React.useState(12);
    const whidth = document.documentElement.clientWidth;

    function handleQuantity() {
        if (whidth < 635) {
            setQuantity(5);
        } else {
            if (whidth < 1100) {
                setQuantity(8);
            }
        }
    };

    React.useEffect(() => {
        handleQuantity();
    }, [whidth])

    return (
        <section className="movies-cardlist">
            <div className="movies-cardlist__grid">{
                props.moviesCards.slice(0, quantity).map((moviesCard) =>
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