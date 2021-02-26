import React from 'react';
import './PageTitle.css';

function PageTitle(props) {
    return(
        <div className="page-title">
            <h2 className="page-title__title">{props.title}</h2>
            <div className="page-title__line" />
        </div>
    )    
}

export default PageTitle;