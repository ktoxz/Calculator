import React from 'react';
import '../style/digits.css'
function Digit({ updateCals, digit }) {
    return (
        <button onClick={() => updateCals(digit.toString())}>{digit}</button>
    );
}

export default Digit;
