import React from 'react';
import './TShirt.css'


const TShirt = ({ handleAddToCart, tShirt }) => {
    const { name, picture, price } = tShirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>Name:{name}</h4>
            <h5>Price: ${price}</h5>
            <button onClick={() => handleAddToCart(tShirt)}>Add to Cart  </button>

        </div>
    );
};

export default TShirt;