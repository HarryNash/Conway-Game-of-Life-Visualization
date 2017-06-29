import React, { Component } from 'react';
import logo from './logo.svg';
import Board from './Board';
import crankBoard from '../logic/crankBoard';
import {BOARDWIDTH, BOARDHEIGHT} from './Board';
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
