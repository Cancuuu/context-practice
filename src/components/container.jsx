import React, {useContext} from 'react';
import CardButton from './cardButton/cardButton'
import Cart from './cart/cart'


const container = () => {
    return (
        <div>
            <CardButton/>
            <Cart/>
        </div>
    )
}

export default container
