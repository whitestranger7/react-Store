import React from "react";
import { Link, withRouter } from "react-router-dom";

import "./NavBar.css";
import Basket from "./../NavBar/Basket";

import Aux from "./../../AuxContainer";

const navBar = props => {
    let basket = (
        <Aux>
            <li className="basketInteractive">
                <Link to="" onClick={props.basketClick}>
                    <i className="fas fa-shopping-basket"></i>
                </Link>
            </li>
            <Basket
                display={props.display}
                items={props.items}
                deleteItem={props.deleteItem}
            />
        </Aux>
    );

    if(props.basketClick === undefined && props.display === undefined && props.items === undefined && props.deleteItem === undefined) {
        basket = null
    }

    return (
        <div className="navBar">
            <ul>
                <li>
                    <Link to="/">Shop</Link>
                </li>
                <li>
                    <Link to="/info">Info</Link>
                </li>
                <li>
                    <Link to="">
                        <i className="fas fa-user"></i>
                    </Link>
                </li>
                {basket}
            </ul>
        </div>
    );
};

export default withRouter(navBar);
