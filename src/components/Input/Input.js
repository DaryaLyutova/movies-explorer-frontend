import React from 'react';
import cn from 'classnames';
import './Input.css';

function Input(props) {
    return (
        <label className="input">{props.name}
            <input className="input__zone"
                name={props.name}
                type={props.type}
                minLength={props.minLength}
                maxLength={props.maxLength}
                onChange={props.onChange}
                onBlur={props.onBlur}
                style={props.style}
                required />
            <span
                className={cn('input__span', { 'input__span_visible': props.error & props.dirty })}
            >{props.errorMassege}.</span>
        </label>
    )
}

export default Input;