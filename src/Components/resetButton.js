import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: #FF5A5F;
    height: 3.1em;
    width: 6em;
    color: #fff;
    border-radius: 0.5em;
    border-color: #FF5A5F;
    font-size: 1em;
    font-family: "Poppins";
    font-weight: 500;
`

const ResetButton = ({handleResetAll, isActive}) => {
    return ( 
        <div>
            <StyledButton 
                onClick = { handleResetAll } 
                disabled = { isActive } 
                style = {{ background: isActive ? "#ffbfc0" : "#FF5A5F" }}
            >
            Reset
            </StyledButton>
        </div>
     );
}
 
export default ResetButton;