import React from 'react'
import './Preloader.css'

const Preloader = (props) => {
    
    return (
        <div className="preloader" style={props.turnOn ? {display:'flex'} : {display:'none'}}>
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>   )
};

export default Preloader
