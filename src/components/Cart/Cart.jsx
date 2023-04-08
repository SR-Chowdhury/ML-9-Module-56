import React from 'react';

const Cart = ({cart, handleRemoveFromCart}) => {
    return (
        <div>
            <h3>Order Summary: {cart.length}</h3>
            <ol>
            {
                cart.map(item => <li>
                    {item.name}
                    <button onClick={() => handleRemoveFromCart(item._id)} className='ms-3'>X</button>
                </li>)
            }  
            </ol>
        </div>
    );
};

export default Cart;    