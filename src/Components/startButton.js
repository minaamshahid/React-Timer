import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: #008488;
    height: 3.1em;
    width: 6em;
    color: #fff;
    margin-right: 1em;
    margin-left: 1em; 
    border-radius: 0.5em;
    border-color: #008488;
    font-size: 1em;
    font-family: "Poppins";
    font-weight: 500
`

const StartButton = ({ handleActive, isActive }) => {
    return ( 
        <div>
            <StyledButton 
            onClick = { handleActive }
            >
            {!isActive ? 'Start' : 'Pause'}
            </StyledButton>
        </div>
     );
}
 
export default StartButton;