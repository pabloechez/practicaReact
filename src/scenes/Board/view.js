import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Button } from '../../components';
import { Results } from '../../components';


const StyledGame = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const StyledBoard = styled.div`
    display: flex;
    width: 300px;
    flex-wrap: wrap;
`;

const StyledBox = styled.div`
    width: 100px;
    height: 100px;
    border: 1px solid #E3E3EB;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 45px;
    cursor: pointer;
    user-select: none;
    font-weight: 900;
    
   &:hover{
      background: rgba(255,255,255,0.2);
   }
   
   &:nth-child(7), &:nth-child(8),&:nth-child(9){
      border-bottom: 0;
   }

    &:nth-child(1), &:nth-child(2), &:nth-child(3){
       border-top: 0;
    }
    
    &:nth-child(3n+1){
      border-left: 0;
    }

    &:nth-child(3n){
      border-right: 0;
    }
    
    &.X{
      color: ${props => props.theme.colors.primary};
    }
    
     &.O{
      color: ${props => props.theme.colors.secondary};
    }
`;

const StyledStatus = styled.div`
  min-height: 4rem;
  font-size: 30px;
  font-weight: bold;
  color: ${props => props.theme.colors.white}
`;

const Board = ({winnerLine, dataWinnerX, dataWinnerO, fillBox, restart})=>(
    <StyledGame>
        <StyledStatus>{winnerLine}</StyledStatus>
        <StyledBoard  onClick={fillBox}>
            <StyledBox className="square"  data-square="0" />
            <StyledBox className="square"  data-square="1" />
            <StyledBox className="square"  data-square="2" />
            <StyledBox className="square"  data-square="3" />
            <StyledBox className="square"  data-square="4" />
            <StyledBox className="square"  data-square="5" />
            <StyledBox className="square"  data-square="6" />
            <StyledBox className="square"  data-square="7" />
            <StyledBox className="square"  data-square="8" />
        </StyledBoard>

        <Button onClick={restart}>
            <span>Resetear</span>
        </Button>

        <Results
            dataWinnerX ={dataWinnerX}
            dataWinnerO ={dataWinnerO}
        />
    </StyledGame>
);

Board.defaultProps = {
    winnerLine: '',
    dataWinnerX: '',
    dataWinnerO: '',
};

Board.propTypes = {
    winnerLine: PropTypes.string,
    dataWinnerX: PropTypes.number,
    dataWinnerO: PropTypes.number,
    fillBox: PropTypes.func.isRequired,
    restart: PropTypes.func.isRequired,
};

export default Board;