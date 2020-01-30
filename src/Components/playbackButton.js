import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: #1F487E;
    height: 3.1em;
    width: 6em;
    color: #fff;
    margin-right: 1em;
    margin-left: 1em; 
    border-radius: 0.5em;
    border-color: #1F487E;
    font-size: 1em;
    font-family: "Poppins";
    font-weight: 500;
`

const PlaybackButton = ({ handleSpeed, speed, isActive, title, stateSpeed }) => {
    return ( 
        <div>
            <StyledButton 
            onClick = { () => handleSpeed(speed) } 
            disabled = { !isActive } 
            style = {{ background: stateSpeed === speed ? "#008488" : "#1F487E" }}
            >
            {title}
            </StyledButton>
        </div>
     );
}
 
export default PlaybackButton;