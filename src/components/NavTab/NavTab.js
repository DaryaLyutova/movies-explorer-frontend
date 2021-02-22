import React from 'react';
import { Link } from "react-scroll";
import './NavTab.css';

function NavTab(props) {
    return(
<Link  to={props.ancor} smooth={true} className="nav-tab__button">Узнать больше</Link>
    )
}

export default NavTab;