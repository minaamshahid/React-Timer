import React from 'react';
import './timer.css';

// Timer display component, different styling methodologies used to give a skillset reference.
const Timer = ({ mins, secs, isEnding, isBlinking }) => {
    return ( 
        <span className = { isBlinking ? "blink-me" : "" }>
            <h1 
            style = {{
                fontFamily: "Poppins", 
                fontWeight: 500, 
                fontSize: 100, 
                color: isEnding ? "#ff5a5f" : "#222222" 
                }}>
                {mins}:{secs}
            </h1>
        </span>
     );
}
 
export default Timer;
