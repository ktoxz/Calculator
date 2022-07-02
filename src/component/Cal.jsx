import React, { Component } from 'react';
import { useState } from 'react';
import Screen from './Screen';
import "../style/cal.css";
import Digits from './Digits';
import Operator from './Operator';
import Operators from './Operators';
import Equal from './Equal';
function Cal(){

    return(
        <><Screen /><div className='cal'>
            <Digits />
            <Operators/>
            <Equal/>
        </div></>

    );

}

export default Cal;