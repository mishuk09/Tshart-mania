import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import './Home.css'
import useTShirt from '../../hooks/useTShirt';
import TShirt from '../TShirt/TShirt';


const Home = () => {
    const [tShirts, setTShirts] = useTShirt();
    const [cart, setCart] = useState([]);

    const handleAddToCart = (SelectedItem) => {
        const exists = cart.find(tShirt => tShirt._id === SelectedItem._id);

        if (!exists) {
            const newCart = [...cart, SelectedItem];
            setCart(newCart);
        }
        else {
            alert("Item already added");
        }

    }


    const handleRemoveFromCart = (SelectedItem) => {



        const rest = cart.filter(tShirt => tShirt._id !== SelectedItem._id);
        setCart(rest);
    }

    return (
        <div className='home-container'>
            <div className="tshart-container">
                {
                    tShirts.map(tShirt => <TShirt
                        key={tShirt._id}
                        tShirt={tShirt}
                        handleAddToCart={handleAddToCart}
                    ></TShirt>)

                }
            </div>
            <div className="cart-container">
                <Cart
                    handleRemoveFromCart={handleRemoveFromCart}
                    cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Home;