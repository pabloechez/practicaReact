import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import { Board,Score } from '../../../scenes';

const StyledWrapper = styled.div`
  padding: ${props => props.theme.space.md};
  position: relative;
`;

const Content = () => (
    <StyledWrapper>
        <Route exact path="/" component={Board} />
        <Route exact path="/resultados" component={Score} />
    </StyledWrapper>
);

export default Content;
