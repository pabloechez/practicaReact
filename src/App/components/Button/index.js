import styled from 'styled-components';

const Button = styled.button`
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
  border-radius: 5px;

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
    border-radius: 5px;
  }
  
  &:hover{
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
    border-radius: 5px;
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

export default Button;