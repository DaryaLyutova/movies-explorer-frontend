import React from 'react';
import './SearchForm.css';
import go from '../../images/go.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';


function SearchForm() {
    return (
        <div className="seach-form">
            <form className="seach-form__form">
                <input className="seach-form__input search-form__defolt-style" placeholder="Фильм" required />
                <button type="submit" className="seach-form__button search-form__defolt-style">
                    <img src={go} alt="go" className="seach-form__button-image" />
                </button>
            </form>
            <div className="search-form__line" />
            <FilterCheckbox />
        </div>
    )
}

export default SearchForm;