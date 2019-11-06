import React from 'react';
import '@fortawesome/fontawesome-free/js/all';

import './Item.css'

const item = (props) => {
    return(
        <div className="item">
            <div className="item__main">
                <div className="img" onClick={props.click}>
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
                    <div className="basket">
                        <a href="/#"><i className="fas fa-shopping-basket"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default item;