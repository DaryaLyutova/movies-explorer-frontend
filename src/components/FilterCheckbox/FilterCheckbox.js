import React from 'react';
import './FilterCheckbox.css';


function FilterCheckbox(props) {

    // const [isFilter, setIsFilter] = React.useState(false);

    // function handelFilter() {
    //     setIsFilter(!isFilter);
    //     props.handelFilterDurationMovie(isFilter);
    // };

    return (
        <label className="filter-checkbox filter-checkbox_screen filter-checkbox_mobile">
            <input 
            type="checkbox" 
            className="filter-checkbox__button filter-checkbox__button_visible" 
            // onChange={handelFilter}
            // checked={isFilter}
            />
                Короткометражки
        </label>
    )
}

export default FilterCheckbox;