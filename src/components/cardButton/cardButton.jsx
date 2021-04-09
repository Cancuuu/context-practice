import React, {useState, useContext} from 'react';
import {QtyContext} from '/home/cancu/Documents/practica-context/src/context/QtyProvider.js';

const CardButton = () => {

    const {qty, setQty, added, setAdded, addToCart} = useContext(QtyContext);    

    return (
        <div className="card__div">
            <div className="title">
                <h1>Item 1</h1>
            </div>
            <div className="item">
                Imagen del item1
            </div>
            <div className="buttons">
                <button onClick={() => setQty(qty - 1)}>
                    -
                </button>
                <span>
                    {qty}
                </span>
                <button onClick={() => setQty(qty +  1)}>
                    +
                </button>   
            </div>
            <div>
                <button onClick={() => addToCart(qty, 'item', 1)}>
                    Add to cart
                </button>
            </div>
        </div>
    )
}

export default CardButton
