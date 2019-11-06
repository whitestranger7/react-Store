import React from 'react';
import './App.css';

import Navigation from './components/Navigation/Navigation';
import Items from './components/Items/Items';
import Footer from './components/Footer/Footer';

function App() {
  return(
    <div className="app">
      <Navigation/>
      <Items/>
      <Footer/>
    </div>
  )
}

export default App;
