import React from 'react';
import '@fortawesome/fontawesome-free';

import './Popup.css'
import Aux from './../../AuxContainer';

const popup = (props) => {
    return(
        <Aux>
            <div className="popup_girth" onClick={props.popupContainerHandler}></div>
            <div className="popup_window">
                <div className="cross" onClick={props.popupContainerHandler}>
                    <i className="fas fa-times"></i>
                </div>
                <div className="popup_window__main">
                    <img src={props.src} alt={props.alt}></img>
                    <p>{props.info}</p>
                </div>
                <div className="lower">
                    <div className="btn">
                        <button onClick={props.addToBasket}>Add to basket</button>
                    </div>
                    <div className="price">
                        <h3>{`${props.price}$`}</h3>
                    </div>
                    <div className="number"><p>for 1</p></div>
                </div>
            </div>
        </Aux>
    )
}

export default popup;