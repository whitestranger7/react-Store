import React from 'react';

import Items from './../Items/Items';
import Footer from './../Footer/Footer';
import './../../App.css';

const home = () => {
    return (
        <div className="app">
            <Items/>
            <Footer/>
        </div>
    )
}

export default home;