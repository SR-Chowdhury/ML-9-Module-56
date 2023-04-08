import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

    const tshirts = useLoaderData();

    const [cart, setCart] = useState([]);

    const notify = () => toast("You've already added this item!");

    const handleAddToCart = tshirt => {
        const exists = cart.find(item => item === tshirt);
        if (exists) {
            notify();
        }
        else {
            const newCart = [...cart, tshirt];
            setCart(newCart)
        }
    };

    const handleRemoveFromCart = id => {
        const remainingItem = cart.filter(item => item._id !== id);
        setCart(remainingItem);
    }


    return (
        <div className='homeContainer'>
            <div className="tshirstContainer">
                {
                    tshirts.map(tshirt => <TShirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    />)
                }
            </div>
            <div className="cartContainer">
                <Cart
                    cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                />
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default Home;