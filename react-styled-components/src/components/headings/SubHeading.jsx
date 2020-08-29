import styled, { css }  from 'styled-components';
import theme from '../../styles/theme';

console.log(theme.borderRadius)

const Subheading = styled.h3`
    font-size: 16px;
   ${props => props.variant === "darker" && css`
    background: ${theme.formBackground};
    padding: 14px 22px;
    border-radius: ${theme.borderRadiusSmall};
   ` }
`

export default Subheading;
 