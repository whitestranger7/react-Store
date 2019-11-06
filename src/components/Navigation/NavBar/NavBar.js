import React from 'react';

import './NavBar.css';

const navBar = () => {
    return (
        <div className="navBar">
            <ul>
                <li><a href="/#">Shop</a></li>
                <li><a href="/#">Smth</a></li>
                <li><a href="/#">Info</a></li>
                <li><a href="/#"><i className="fas fa-shopping-basket"></i></a></li>
            </ul>
        </div>
    )
}

export default navBar;