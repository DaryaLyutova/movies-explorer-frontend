import React from 'react';
import './SearchForm.css';
import go from '../../images/go.svg';


function SearchForm() {
    return (
        <form className="search-form">
            <input className="seach-form__input search-form__defolt-style" placeholder="Фильм" />
            <button type="submit" className="seach-form__button search-form__defolt-style">
                <img src={go} alt="go" className="seach-form__button-image" />
            </button>
            <div className="search-form__line" />
            <label className="search-form__label">
                <input type="checkbox" className="search-form__checkbox search-form__defolt-style" />
                Короткометражки
                </label>
        </form>
    )
}

export default SearchForm;