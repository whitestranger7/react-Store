import React from 'react';

import './../../App.css';

import Footer from './../Footer/Footer';
import Navigation from './../Navigation/Navigation';
import InfoPage from './InfoPage/InfoPage';

const info = () => {
    return(
        <div className="App">
            <Navigation/>
            <InfoPage/>
            <Footer/>
        </div>
    )
}

export default info;