import React from 'react';
import './TShirt.css';

const TShirt = ({tshirt, handleAddToCart}) => {

    const {_id, picture, price, gender, name} = tshirt;
    return (
        <div className='TShirtDiv'>
            <div className="tshirtImg">
                <img src={picture} alt="" />
            </div>
            <h1>{name}</h1>
            <h2>Price: ${price}</h2>
            <button onClick={() => handleAddToCart(tshirt)} className='addToCartBtn'>Add to Cart</button>
        </div>
    );
};

export default TShirt;