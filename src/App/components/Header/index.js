import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background: ${props => props.theme.colors.primary};
  padding: ${props => `${props.theme.space.md} ${props.theme.space.md}`};
  text-align: center;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  nav{
    position: absolute;
    right:2rem;
  }
`;

const StyledTitle = styled.h1`
    font-size: 30px;
`;

const Header = ({ children }) =>(
    <StyledHeader>
        <StyledTitle>3 en Raya</StyledTitle>
        {children}
    </StyledHeader>
);

Header.defaultProps = {
    children: undefined,
};

Header.propTypes = {
    children: PropTypes.node,
};

export default Header;
