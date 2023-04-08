import React from 'react';
import './Granpda.css';
import Father from './components/Father/Father';
import Uncle from './components/Uncle/Uncle';
import Fufu from './components/Fufu/Fufu';

const Grandpa = () => {
    
    const ring = 'Diamond!!';

    return (
        <div className='container grandpaContainer'>
            <h1 className='text-center'><strong>Grandpa</strong></h1>
            <div className='flexDiv'>
                <Father ring = {ring}/>
                <Uncle />
                <Fufu ring = {ring} />
            </div>
        </div>
    );
};

export default Grandpa; <h1>I am Grandpa</h1>