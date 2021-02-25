import React from 'react';
import './FilterCheckbox.css';


function FilterCheckbox() {
    return (
        <label className="filter-checkbox filter-checkbox_screen filter-checkbox_mobile">
            <input type="checkbox" className="filter-checkbox__button filter-checkbox__button_visible" />
                Короткометражки
        </label>
    )
}

export default FilterCheckbox;