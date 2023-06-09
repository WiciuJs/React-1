import React from "react";
import '../style cp/Display.css';

const Display = (props)  => {
    
    return (
        <span className={`value ${(props.displayValue <= 5) ? 'blue' : 'red'}`}>
            {props.displayValue}
        </span>
        
    );
};

export default Display;