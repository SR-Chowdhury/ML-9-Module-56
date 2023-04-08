import React from 'react';

const ElderBrother = ({children, ring}) => {
    return (
        <div style={{border: '1px solid purple', padding: '8px', textAlign: 'center'}}>
            <strong>{children}</strong> <br />
            got {ring} from Grandpa 
        </div>
    );
};

export default ElderBrother;