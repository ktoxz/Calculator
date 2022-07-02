import React, { Component } from 'react';
import { useState } from 'react';
import Screen from './Screen';
import "../style/cal.css";
import Digits from './Digits';
import Operator from './Operator';
import Operators from './Operators';
function Cal(){
    return(
        <><Screen /><div className='cal'>
            <Digits />
            <Operators/>
        </div></>

    );

}

export default Cal;