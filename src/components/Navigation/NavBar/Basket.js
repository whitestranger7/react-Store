import React, { Component } from "react";

import "./NavBar.css";
import Aux from "./../../AuxContainer";

class Basket extends Component {
    state = {
        itemList: [],
        totalPrice: 0
    };

    static getDerivedStateFromProps(props) {
        const itemList = props.items;
        let [items, prices, counts] = [[], [], []];

        for (let i of itemList) {
            if (items.indexOf(i[0]) === -1) {
                items.push(i[0]);
                prices.push(i[1]);
                counts.push(1);
            } else {
                prices[items.indexOf(i[0])] += i[1];
                counts[items.indexOf(i[0])] += 1;
            }
        }

        let totalItems = [];
        let totalPrice = 0;
        for (let i = 0; i < items.length; i++) {
            totalItems.push([items[i], prices[i], counts[i]]);
            totalPrice += prices[i];
        }

        return {
            itemList: totalItems,
            totalPrice: totalPrice
        };
    }

    render() {
        return (
            <Aux>
                <div
                    style={{ display: this.props.display }}
                    className="basketWindow"
                >
                    <div className="basketWindow__items">
                        {this.state.itemList.map((el, index) => {
                            return (
                                <div
                                    className="basket__item"
                                    key={index}
                                    onClick={this.props.deleteItem.bind(
                                        this,
                                        el
                                    )}
                                >
                                    <div className="basket__item-left">
                                        <p>{`x${el[2]} ${el[0]}`}</p>
                                    </div>
                                    <div className="basket__item-right">
                                        <p>{`${el[1].toFixed(2)}$`}</p>
                                    </div>
                                </div>
                            );
                        })}
                        <div className="totalPrice">
                            <div>{`${this.state.totalPrice.toFixed(2)}$`}</div>
                        </div>
                        <button className="btnCheckout">
                            Proceed Checkout
                        </button>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default Basket;
