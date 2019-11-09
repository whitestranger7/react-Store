import React from 'react';

import './NavBar.css';

const basket = (props) => {

    const items = props.items;
    console.log(items)
    
    
    return(
        <div style={{display: props.display}} className="basketWindow">
            <div className="basketWindow__items">
                {items.items.map((el, index) => {
                    return <div style={{fontSize: '16px'}}>
                        <div style={{float: 'left'}} key={index}><p>{`x1 ${el[0]}`}</p></div>
                        <div style={{float: 'right'}}><p>{`${el[1]}$`}</p></div>
                    </div>
                })}
                <button className="btnCheckout">Proceed Checkout</button>
            </div>
        </div>
    )
}

export default basket;