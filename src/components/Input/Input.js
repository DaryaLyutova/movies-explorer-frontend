import React from 'react';
import './Input.css';

function Input(props) {
    return (
        <label className="input">{props.name}
            <input className="input__zone"
                type={props.type}
                minLength={props.minLength}
                maxLength={props.maxLength}
                onChange={props.onChange}
                required />
            <span className="input__span">Что-то пошло не так...</span>
        </label>
    )
}

export default Input;