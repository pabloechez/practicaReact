import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import { Board } from '../../../scenes';

const StyledWrapper = styled.div`
  padding: ${props => props.theme.space.md};
  position: relative;
`;

const Content = () => (
    <StyledWrapper>
        <Route exact path="/" component={Board} />
    </StyledWrapper>
);

export default Content;
