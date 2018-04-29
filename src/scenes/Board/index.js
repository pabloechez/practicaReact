import React, { Component } from 'react';
import { connect } from 'react-redux';

import { scoreSaveData } from '../../actions';
import View from './view';

class Board extends Component {

    constructor(){
        super();
        this.state = {
            winner: undefined,
            winnerLine: undefined,
        };

        this.gameState = {
            turn: 'X',
            gameLocked: false,
            gameEnded: false,
            board: Array(9).fill(''),
            totalMoves: 0
        }
    }

    checkWinner(){
        let moves = [[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6], [0, 1, 2], [3, 4, 5], [6, 7, 8]];
        let board = this.gameState.board;
        for(let i=0;i<moves.length;i++) {
            if(board[moves[i][0]] === board[moves[i][1]] && board[moves[i][1]] === board[moves[i][2]]){
                return board[moves[i][0]];
            }
        }
        if(this.gameState.totalMoves === 9){
            return 'draw';
        }
    }

    restart(){
        let box = document.querySelectorAll('.square');
        for(let i=0;i<box.length;i++) {
            box[i].innerText = '';
            box[i].classList.remove('X');
            box[i].classList.remove('O');
            this.gameState.board[i] = '';
        }

        this.gameState.gameLocked = false;
        this.gameState.gameEnded = false;
        this.gameState.turn = 'X';
        this.gameState.totalMoves = 0;

        this.setState({
            winnerLine: ''
        })
    }

    clicked(box){

        if(this.gameState.gameEnded || this.gameState.gameLocked) return;

        if (this.gameState.board[box.dataset.square] === ''){
            this.gameState.board[box.dataset.square] = this.gameState.turn;
            box.innerText = this.gameState.turn;
            box.classList.add(this.gameState.turn);
            this.gameState.turn = this.gameState.turn === 'X' ? 'O' : 'X';
            const turn =this.gameState.turn === 'X' ? 'Tu turno' : 'Turno de la máquina';
            this.setState({
                winnerLine: turn
            });
            this.gameState.totalMoves++;
        }

        let result =  this.checkWinner();

        if(result === 'X' || result ==='O'){

            if(result === 'X'){
                this.props.scoreSaveData({X:this.props.data[0].X+1,O:this.props.data[0].O});
            }

            if(result === 'O'){
                this.props.scoreSaveData({X:this.props.data[0].X,O:this.props.data[0].O+1});

            }
        }


        if(result === 'X'){
            this.gameState.gameEnded = true;
            this.setState({
                winner: 'X',
                winnerLine: '¡Gana X!'
            })
        }else if(result === 'O'){
            this.gameState.gameEnded = true;
            this.setState({
                winner: 'O',
                winnerLine: '¡Gana O!'
            })
        } else if (result === 'draw'){
            this.gameState.gameEnded = true;
            this.setState({
                winner: 'draw',
                winnerLine: 'Empate'
            })
        }

        if(this.gameState.turn === 'O' && !this.gameState.gameEnded){
            this.gameState.gameLocked = true;

            setTimeout(()=>{
                do {
                    var random = Math.floor(Math.random()*9);
                } while(this.gameState.board[random] !== '');
                this.gameState.gameLocked = false;
                this.clicked(document.querySelectorAll('.square')[random]);
            },1000);
        }
    }

    render() {
        return (
            <View
                winnerLine={this.state.winnerLine}
                dataWinnerX ={this.props.data[0].X}
                dataWinnerO ={this.props.data[0].O}
                fillBox ={(e)=> this.clicked(e.target)}
                restart ={()=> this.restart()}
            />
        );
    }
}

const mapStateToProps = state => ({
    data: state.score.data,
});

const mapDispatchToProps = {
    scoreSaveData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);