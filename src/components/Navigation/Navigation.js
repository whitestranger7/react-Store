import React from 'react';

import './Navigation.css';
import Logo from './Logo';
import NavBar from './NavBar/NavBar';

const navigation = () => {
    return(
        <nav className="nav">
            <div className="left_side">
                <Logo/>
            </div>
            <div className="right_side">
                <NavBar/>
            </div>
        </nav>
    )
}

export default navigation;