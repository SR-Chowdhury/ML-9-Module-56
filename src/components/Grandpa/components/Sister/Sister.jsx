import React, { useContext } from 'react';
import { MyContext } from '../../Grandpa';

const Sister = ({children}) => {

    const [money] = useContext(MyContext);

    return (
        <div style={{border: '1px solid purple', padding: '5px', textAlign: 'center', flexGrow: '1'}}>
            <strong>{children}</strong> <br />
            <span>Money: {money}</span>
        </div>
    );
};

export default Sister;