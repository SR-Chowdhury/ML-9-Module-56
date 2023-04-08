import React from 'react';
import Cousin from '../Cousin/Cousin';

const Fufu = ({ring}) => {
    return (
        <div style={{ border: '1px solid purple', padding: '8px', textAlign: 'center' }}>
            <h1>Fufu</h1>
            <div className='flexDiv'>
                <Cousin>Wali</Cousin>
                <Cousin hasFriend={true} ring = {ring}>Fakrul</Cousin>
            </div>
        </div>
    );
};

export default Fufu;