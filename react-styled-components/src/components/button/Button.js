import styled from "styled-components";


const Button = styled.button`
    font-size: 1em;
    background: ${props => (props.variant === "primary") && props.theme.primary};
    color: white;
    border: none;
    width: 100%;
    height: 72px;
    border-radius: 10px;
`
export default Button;
