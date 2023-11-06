import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {

    let command;
    if (cart.length === 0) {
        command = <p>Please add some items.</p>
    }
    else if (cart.length === 1) {
        command = <p>please add more</p>

    }
    else {
        command = <p>Thanks for adding</p>
    }
    return (
        <div>
            <h1>Selected Item:{cart.length}</h1>
            {command}
            {
                cart.map(tShirt => <p>
                    {tShirt.name}
                    <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;