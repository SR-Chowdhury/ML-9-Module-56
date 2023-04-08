import React from 'react';
import ElderBrother from '../ElderBrother/ElderBrother';
import YoungerBrother from '../YoungerBrother/YoungerBrother';
import Sister from '../Sister/Sister';

const Father = ({ring}) => {
    return (
        <div style={{border: '1px solid purple', padding: '8px'}}>
            <h1 className='text-center'>Father</h1>
            <div className='flexDiv'>
                <ElderBrother  ring = {ring}>Mash</ElderBrother>
                <YoungerBrother>Miraz</YoungerBrother>
                <Sister>Salma</Sister>
            </div>
        </div>
    );
};

export default Father;