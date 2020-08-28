import styled from "styled-components";


const Button = styled.button`
    font-size: 2rem;
    background-color: ${props => (props.variant === "primary") ? props.theme.primary : props.theme.secondary };
    color: white;
    border: none;
    padding: 16px 32px;
    border-radius: 10px;
`
export default Button;
