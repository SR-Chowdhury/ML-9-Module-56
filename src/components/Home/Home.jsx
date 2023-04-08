import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css';

const Home = () => {

    const tshirts = useLoaderData();

    const [cart, setCart] = useState([]);

    const handleAddToCart = tshirts => console.log(tshirts);

    
    return (
        <div className='homeContainer'>
            <div className="tshirstContainer">
                {
                    tshirts.map(tshirt => <TShirt 
                        key={tshirt._id} 
                        tshirt = {tshirt}
                        handleAddToCart = {handleAddToCart}
                    />)
                }
            </div>
            <div className="cartContainer">
                <Cart/>
            </div>
        </div>
    );
};

export default Home;