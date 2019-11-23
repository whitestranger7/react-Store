import React from 'react';
import '@fortawesome/fontawesome-free/js/all';

import './Item.css'

const item = (props) => {
    return(
        <div className="item">
            <div className="item__main">
                <div className="img" onClick={props.popupItemWindow}>
                    <img src={props.src} alt={props.alt}></img>
                </div>
            </div>
            <div className="item__sub">
                <div className="title">
                    <h4>{props.alt}</h4>
                </div>
                <div className="checkout">
                    <div className="price">
                        <p>{props.price}</p>
                    </div>
                    <div onClick={props.addToBasket} className="basket">
                        <i className="fas fa-shopping-basket"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default item;