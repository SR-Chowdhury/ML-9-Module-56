import React from 'react';
import './Cart.css';

const Cart = ({cart, handleRemoveFromCart}) => {
    return (
        <div>
            <h3 className={cart.length > 0 ? 'addedItem' : 'emptyCart'}>Order Summary: {cart.length}</h3>
            {
                cart.length <= 0 && <span>Empty Cart</span> 
            }
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