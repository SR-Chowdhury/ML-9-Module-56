import React from 'react';
import Friend from '../Friend/Friend';

const Cousin = ({children, hasFriend, ring}) => {
    return (
        <div style={{border: '1px solid purple', padding: '8px'}}>
            <h1>Cousin</h1>
            <h6 className='text-center'>{children}</h6>
            {hasFriend && <Friend ring = {ring}>I want Diamond</Friend>}
        </div>
    );
};

export default Cousin;