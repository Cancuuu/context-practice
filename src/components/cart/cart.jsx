import React, {useState, useContext} from 'react';
import {QtyContext} from '/home/cancu/Documents/practica-context/src/context/QtyProvider.js';

const Cart = () => {

    const {cart} = useContext(QtyContext);    

    return (
        <div>
            <h1>{cart}</h1>
        </div>
    )
}

export default Cart
