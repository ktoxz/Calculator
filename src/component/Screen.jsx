import React from 'react';
import Cal from './Cal';
function Screen({ calc, result }) {
    return (
        <div className="screen">
            {result ? <span>({result})</span> : ""}
            {calc || "0"}
        </div>
    );
}

export default Screen;