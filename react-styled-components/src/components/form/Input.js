import React from 'react';
import styled from 'styled-components';

const TextInput = styled.input`
    font-family: ${props => props.theme.defaultFont};
    padding: 8px 16px;
    margin-left: 1em; 
    background-color: ${props => props.theme.brandColorPrimary};
    border: 1px solid grey;

    ::placeholder {
        color: green;
    }
`

export default function Input({placeholder}) {

    return (
        <TextInput placeholder={placeholder} />
    )
}
