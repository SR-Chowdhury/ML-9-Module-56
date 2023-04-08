import React, { Children } from 'react';

const Friend = ({children, ring}) => {
    return (
        <div style={{border: '1px solid purple', padding: '8px'}}>
            <h2>Friend</h2>
            <h6>{children}</h6>
            <h5>"Finally, I got the {ring}"</h5>
        </div>
    );
};

export default Friend;