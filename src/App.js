import React, { Component } from "react";

import Home from './components/Home/Home';
import Info from './components/Info/Info';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/info" component={Info}/>
                    <Route exact path="/" component={Home}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
