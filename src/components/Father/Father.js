import React from 'react';
import Myself from '../Myself/Myself';
import Brother from '../Brother/Brother';

const Father = ({ house }) => {
    return (
        <div>
            <h2>Father.....</h2>
            <p>House:{house}</p>
            <Myself house={house}></Myself>
            <Brother house={house}></Brother>

        </div>
    );
};

export default Father; <h2>Father.....</h2>