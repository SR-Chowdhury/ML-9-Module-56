import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MyContext } from '../../Grandpa';

const Uncle = () => {

    const [money, setMoney] = useContext(MyContext);

    return (
        <div style={{border: '1px solid purple', padding: '8px', textAlign: 'center'}}>
            <h1>Uncle</h1>
            <h2>Uncle Has : ${money}</h2>
            <button onClick={() => setMoney(money + 1000)} className='w-100 my-3 py-3'>Send Money</button>
            <div className='flexDiv'>
                <Cousin>Jahangir</Cousin>
                <Cousin>Imran</Cousin>
            </div>
        </div>
    );
};

export default Uncle;