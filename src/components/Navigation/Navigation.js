import React, { Component } from "react";

import "./Navigation.css";
import Logo from "./Logo";
import NavBar from "./NavBar/NavBar";

class Navigation extends Component {
    state = {
        basketWindow: "block"
    };

    basketWindowHandler = () => {
        if (this.state.basketWindow === "none") {
            this.setState({
                basketWindow: "block"
            });
        }
        if (this.state.basketWindow === "block") {
            this.setState({
                basketWindow: "none"
            });
        }
    };

    render() {
        let navbar = <NavBar />;
        if (
            this.props.items !== undefined &&
            this.props.deleteItem !== undefined
        ) {
            navbar = (
                <NavBar
                    basketClick={this.basketWindowHandler}
                    display={this.state.basketWindow}
                    items={this.props.items}
                    deleteItem={this.props.deleteItem}
                />
            );
        }

        return (
            <nav className="nav">
                <div className="left_side">
                    <Logo />
                </div>
                <div className="right_side">
                    {navbar}
                </div>
            </nav>
        );
    }
}

export default Navigation;
