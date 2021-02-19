import React from 'react';
import './SearchForm.css';
/* import menLogo from '../../images/men-logo.svg'; */


function SearchForm() {
    return (
        <>
            <form className="search-form">
                <input className="seach-form__input" placeholder="Фильм">
                    {/* <img className="seach-form__input-image" alt="лупа" /> */}
                </input>
                <button type="submit" className="seach-form__button">
                    <img alt="go" className="seach-form__button-image" />
                </button>
                <input type="checkbox" className="search-form__checkbox"></input>
            </form>
            <div className="search-form__line"/>
        </>
    )
}

export default SearchForm;