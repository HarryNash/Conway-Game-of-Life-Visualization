import React, { Component } from 'react';
import logo from './logo.svg';
import Board from './Board';
import crankBoard from '../logic/crankBoard';
import {BOARDWIDTH, BOARDHEIGHT} from './Board';
import cellFuture from '../logic/cellFuture.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    var boardPre = this.emptyBoard();
    this.addFlower(boardPre);
    this.state = {
      boardPre: boardPre,
      boardPost: crankBoard(boardPre),
      automatic: false
    }
  }

  tick() {
    this.setState((prevState) => ({
      boardPre: this.shiftBoard(prevState.boardPost),
      boardPost: crankBoard(this.shiftBoard(prevState.boardPost))
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  shiftBoard(boardPost) {
    var boardPre = boardPost.slice();
    for (var i = 0; i < BOARDHEIGHT; i++) {
      for (var j = 0; j < BOARDWIDTH; j++) {
        switch(boardPre[i][j]) {
          case cellFuture.UNDERPOPDEATH:
          case cellFuture.OVERPOPDEATH:
          case cellFuture.STAYDEAD:
            boardPre[i][j] = false;
            break;
          case cellFuture.SURVIVE:
          case cellFuture.BIRTH:
            boardPre[i][j] = true;
            break;
          default:
            break;
        }
      }
    }
    return boardPre;
  }

  emptyBoard() {
    var emptyBoard = [];
    var emptyRow = new Array(BOARDWIDTH);
    emptyRow.fill(false);
    for (var i = 0; i < BOARDHEIGHT; i++) {
      emptyBoard.push(emptyRow.slice());
    }
    return emptyBoard;
  }

  addFlower(board) {
    board[4][5] = true;
    board[5][4] = true;
    board[5][5] = true;
    board[5][6] = true;
    board[6][5] = true;
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Conway's Game of Life Tutorial</h2>
        </div>
        <br></br>
        <Board boardPre={this.state.boardPre} boardPost={this.state.boardPost}/>
      </div>
    );
  }
}

export default App;
