import React, {Component} from 'react';
import './App.css';

import Items from './components/Items/Items';
import Footer from './components/Footer/Footer';

class App extends Component {

  render() {

    return(

      <div className="app">
        <Items/>
        <Footer/>
      </div>
    )
  }
}

export default App;
