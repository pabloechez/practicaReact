import React, { Component } from 'react';

import View from './view';

const WINNER_KEY = 'dataWinner';

if (!localStorage.getItem(WINNER_KEY)) {
    localStorage.setItem(WINNER_KEY, JSON.stringify({
        X: 0,
        O: 0
    }));
}

const dataWinnerSrc = localStorage.getItem(WINNER_KEY);

class Board extends Component {

    constructor(){
        super();
        this.state = {
            winner: undefined,
            winnerLine: undefined,
            dataWinner: !!dataWinnerSrc && JSON.parse(dataWinnerSrc),
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
            const turn =this.gameState.turn === 'X' ? 'Turno de X' : 'Turno de O';
            this.setState({
                winnerLine: turn
            });
            this.gameState.totalMoves++;
        }

        let result =  this.checkWinner();


        if(result === 'X' || result ==='O'){

            this.setState((prevState) => {

                if(result === 'X'){
                    const  winners = {
                        X: prevState.dataWinner.X+1,
                        O: prevState.dataWinner.O
                    };
                    localStorage.setItem(WINNER_KEY, JSON.stringify(winners));

                    return {
                        dataWinner:  winners,
                    };
                }

                if(result === 'O'){
                    const  winners = {
                        X: prevState.dataWinner.X,
                        O: prevState.dataWinner.O+1
                    };
                    localStorage.setItem(WINNER_KEY, JSON.stringify(winners));

                    return {
                        dataWinner:  winners,
                    };
                }
            });
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
                dataWinnerX ={this.state.dataWinner.X}
                dataWinnerO ={this.state.dataWinner.O}
                fillBox ={(e)=> this.clicked(e.target)}
                restart ={()=> this.restart()}
            />
        );
    }
}

export default Board;