import React from 'react';

import './Navigation.css';
import navLogo from './../../assets/img/logo.png';
import { Link, withRouter } from "react-router-dom";

const logo = () => {
    return (
        <div className="logo">
            <Link to="/"><img src={navLogo} alt="logo"></img></Link>
        </div>
    )
}

export default withRouter(logo);