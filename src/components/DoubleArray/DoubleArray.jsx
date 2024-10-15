import React from 'react';
import './DoubleArray.module.css'

const DoubleArray = (props) => {
    const doubledNums = props.numbers.map((number) => number * 2);
    // return
    return (
        <div>
            <h2>Doubled Array</h2>

            {/* Use .join to return a new string by concatenating all the elements, and have them separated by `, ` */}
            <p>Original array: {props.numbers.join(', ')} </p>
            <p>Doubled array: {doubledNums.join(', ')} </p>
        </div>
    );
};

export default DoubleArray;



