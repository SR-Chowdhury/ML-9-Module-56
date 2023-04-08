import React from 'react';

const ElderBrother = ({children, ring}) => {
    return (
        <div className='flexDiv'>
            {children} <br />
            got {ring} from Grandpa 
        </div>
    );
};

export default ElderBrother;