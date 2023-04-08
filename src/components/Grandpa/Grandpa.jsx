import React, { createContext, useState } from 'react';
import './Granpda.css';
import Father from './components/Father/Father';
import Uncle from './components/Uncle/Uncle';
import Fufu from './components/Fufu/Fufu';

export const RingContext = createContext('defaultValue');

export const MyContext = createContext(0);

const Grandpa = () => {

    const [money, setMoney] = useState(0);

    const ring = 'Diamond!!';

    return (
        <div className='container grandpaContainer'>
            <h1 className='text-center'><strong>Grandpa</strong></h1>
            <h2 className='text-center my-3'>Grandpa has Money: {money}</h2>
            <div className='flexDiv'>
                <MyContext.Provider value={[money, setMoney]}>
                    <RingContext.Provider value='Golden Ring'>
                        <Father ring={ring} />
                        <Uncle />
                        <Fufu ring={ring} />
                    </RingContext.Provider>
                </MyContext.Provider>
            </div>
        </div>
    );
};

export default Grandpa; <h1>I am Grandpa</h1>