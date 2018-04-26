import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


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

const StyledReset = styled.button`
  font-size: 20px;
  border: none;
  background-color: ${props => props.theme.colors.tertiary};
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  user-select: none;
  position: relative;
  z-index: 1;
  padding: 0;
  cursor: pointer;
  margin-top: 4rem;

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    width: 10px;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0,10,50,0.2);
    transition: transform 0.6s cubic-bezier(0,.90,.13,.90);
    transform: translate3D(0, 0, 0);
  }
  
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: #08a475;
    z-index: -1;
  }
  
  &:hover
    &:before {
      transform: translate3D(10px, 0, 0);  
    }
  }


  &:focus, &:active {
    outline: none;    
  }

  span {
    text-transform: uppercase;
    color: #08a475;
    padding: 1em 1.5em;
    background-color: ${props => props.theme.colors.tertiary};
    display: block;
    width: 100%;
    height: 100%;
    transition: transform 0.6s cubic-bezier(0,.90,.13,.90);
    position: relative;
    font-weight: bold;
  }
  
  &:hover{
    span {
      transform: translate3D(0, -10px, 0);
    }
  }
  
  &:hover{
    span{
    background-color: ${props => props.theme.colors.tertiary};
  }
`;

const StyledResults = styled.div`
    margin-top: 4rem;
    border: 1px;
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

        <StyledReset onClick={restart}>
            <span>Resetear</span>
        </StyledReset>

        <StyledResults>
            <div><span>X</span> O</div>
            {dataWinnerX} - {dataWinnerO}
        </StyledResults>
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