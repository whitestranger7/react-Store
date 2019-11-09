import React from 'react';

import './NavBar.css';
import Basket from './../NavBar/Basket';

const navBar = (props) => {

    return (
        <div className="navBar">
            <ul>
                <li><a href="/#">Shop</a></li>
                <li><a href="/#">Smth</a></li>
                <li><a href="/#">Info</a></li>
                <li className="basketInteractive"><a href="/#" onClick={props.basketClick}><i className="fas fa-shopping-basket"></i></a></li>
                <Basket display={props.display} items={props.items}/>
            </ul>
        </div>
    )
}

export default navBar;