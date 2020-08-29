import React from 'react';
import styled from 'styled-components';

const TextInput = styled.input`
    width: 100%;
    height: 61px;
    background-color: ${props => props.theme.inputColor};
    border: 1px solid #C1C1C1;
    border-radius: 10px;
    margin-bottom: 21px;
    padding-left: 16px;

    ::placeholder {
        color: #C1C1C1;
        font-size: 16px
    }
`

export default function Input({placeholder}) {

    return (
        <TextInput placeholder={placeholder} />
    )
}

