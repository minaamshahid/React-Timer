import React from 'react';
import styled from 'styled-components';

const InputField = styled.input`
    width: 160px;
    height: 16px;
    padding: 16px;
    border-radius: 8px;
    border-color: #008488;
    border-style: solid;
    border-width: 0.5px;
    background-color: #f8f8f8;
    color: #484848;
    font-size: 1em;
    font-family: "Poppins";
    font-weight: 500;
`


//Input field
const Input = ({ isActive, handleInput, value }) => {
    return ( 
        <div>
            <InputField 
            type = "number"
             onChange = { handleInput } 
             placeholder = "Positive Integer" 
             disabled = { isActive } 
             value = { value }
             />
        </div>
     );
}
 
export default Input;