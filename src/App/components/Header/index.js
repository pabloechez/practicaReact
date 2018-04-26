import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background: ${props => props.theme.colors.primary};
  padding: ${props => `${props.theme.space.md} ${props.theme.space.md}`};
  text-align: center;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 30px;
  
`;

const Header = () =>(
    <StyledHeader>
        3 en Raya
    </StyledHeader>
);

export default Header;
