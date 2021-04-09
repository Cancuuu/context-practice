import React, {useState, createContext} from 'react'

export const QtyContext = createContext()

const QtyProvider = (props) => {

    const [qty, setQty] = useState(0);
    const [cart, serCart]  =  useState(0)

    const addToCart = (qty, item, id) => {

        serCart(qty)

        const orderObj = {
            cantidad: qty,
            item: item,
            id: id
        }

        
        console.log(orderObj)
    }

    

    return (
        <QtyContext.Provider value={{qty, setQty, cart, serCart, addToCart}}>
            {props.children}
        </QtyContext.Provider>
        
    )
}

export default QtyProvider
    