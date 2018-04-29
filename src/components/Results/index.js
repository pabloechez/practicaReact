import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  max-width: 240px;
  margin: 4rem auto auto;
  text-align: center;
`;

const StyledHeader = styled.div`
  text-align: center;
  font-size: 30px;
  color:white;
  border: 1px solid white;
  font-weight: 600;
  
  span{
      width: 100px;
      padding: 1rem;
      display: inline-block;
  }
  
  span:nth-child(1){
    border-right: 1px solid white;
  }
`;

const StyledBody= styled.div`
  text-align: center;
  font-size: 30px;
  color:white;
  border: 1px solid white;
  border-top: 0;
  font-weight: 600;
  
  span{
      width: 100px;
      padding: 1rem;
      display: inline-block;
  }
  
  span:nth-child(1){
    border-right: 1px solid white;
  }
`;

const Results = ({ dataWinnerX, dataWinnerO}) => (
    <StyledWrapper>
        <StyledHeader><span>X</span> <span>O</span></StyledHeader>
        <StyledBody><span>{dataWinnerX }</span> <span>{dataWinnerO}</span></StyledBody>
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

