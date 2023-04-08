import React from 'react';
import Cousin from '../Cousin/Cousin';

const Uncle = () => {
    return (
        <div style={{border: '1px solid purple', padding: '8px', textAlign: 'center'}}>
            <h1>Uncle</h1>
            <div className='flexDiv'>
                <Cousin>Jahangir</Cousin>
                <Cousin>Imran</Cousin>
            </div>
        </div>
    );
};

export default Uncle;