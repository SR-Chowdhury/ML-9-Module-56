import React, { useContext } from 'react';
import { RingContext } from '../../Grandpa';

const YoungerBrother = ({ children }) => {

    const contextValue = useContext(RingContext);

    return (
        <div style={{border: '1px solid purple', padding: '8px', textAlign: 'center'}}>
            <strong>{children}</strong> <br />
            <div>
                <span>I got {contextValue} using <strong>Context API</strong></span>
            </div>

        </div>
    );
};

export default YoungerBrother;