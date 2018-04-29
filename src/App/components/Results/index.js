import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  max-width: 800px;

`;

const Results = ({ dataWinnerX, dataWinnerO}) => (
    <StyledWrapper>
        <div>X - O</div>
        {dataWinnerX }- {dataWinnerO}
    </StyledWrapper>
);

Results.defaultProps = {
    dataWinnerX: '',
    dataWinnerO: '',
};

Results.propTypes = {
    dataWinnerX: PropTypes.number,
    dataWinnerO: PropTypes.number,
};

export default Results;

