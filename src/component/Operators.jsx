import React, { Component } from 'react';
import Operator from './Operator';
function Operators({ updateCals, op }) {
    const digits=['+', '-', '*', '/', '%']
    return (
        <div className='Operators'> 
            {
                digits.map((op, i) =>(
                    <Operator operator={op} updateCals={updateCals}></Operator>
                ))
            }
        </div>
    );
}

export default Operators;