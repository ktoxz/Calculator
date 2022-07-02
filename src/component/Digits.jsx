import React, { Component } from 'react';
import Digit from './Digit';
function Digits({ updateCals, digit }) {
    const digits=[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.']
    return (
        <div className='digits'> 
            {
                digits.map((digit, i) =>(
                    <Digit digit={digit} updateCals={updateCals}></Digit>
                ))
            }
        </div>
    );
}

export default Digits;