import React, {Component} from 'react';

import './Navigation.css';
import Logo from './Logo';
import NavBar from './NavBar/NavBar';

class Navigation extends Component {

    state = {
        basketWindow: 'none'
    }

    basketWindowHandler = () => {
        if(this.state.basketWindow === 'none'){
            this.setState({
                basketWindow: 'block'
            })
        }if(this.state.basketWindow === 'block') {
            this.setState({
                basketWindow: 'none'
            })
        }
    }

    render() {

        return(
            <nav className="nav">
                <div className="left_side">
                    <Logo/>
                </div>
                <div className="right_side">
                    <NavBar 
                    basketClick={this.basketWindowHandler}
                    display={this.state.basketWindow}
                    items={this.props.items}/>
                </div>
            </nav>
        )
    }
}

export default Navigation;