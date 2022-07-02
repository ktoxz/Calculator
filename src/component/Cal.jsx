import React, { Component } from 'react';
import { useState } from 'react';
import "../style/cal.css";
import Digits from './Digits';
function Cal(){
    return(
        <div className='cal'>
            <Digits/>
        </div>

    );

}

export default Cal;