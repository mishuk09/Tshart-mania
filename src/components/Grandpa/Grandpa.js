import React from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css';

const Grandpa = () => {
    const house = 7;
    return (
        <div className='grandpa'>
            <h2>Grand pa....Stay up to date with industry trends and changes. </h2>

            <Father house={house}></Father>
            <Uncle house={house} ></Uncle>
            <Aunty house={house}></Aunty>

        </div>
    );
};

export default Grandpa;