import React from 'react';

import './Navigation.css';
import navLogo from './../../assets/img/logo.png';

const logo = () => {
    return (
        <div className="logo">
            <img src={navLogo} alt="logo"></img>
        </div>
    )
}

export default logo;