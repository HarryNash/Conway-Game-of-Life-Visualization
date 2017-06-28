import React, { Component } from 'react';
import logo from './logo.svg';
import Board from './Board';
import {BOARDWIDTH, BOARDHEIGHT} from './Board';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    var board = this.emptyBoard();
    this.addFlower(board);
    this.state = {
      board: board,
      automatic: false
    }
  }

  emptyBoard() {
    var ret = [];
    for (var i = 0; i < BOARDHEIGHT; i++) {
      var row = [];
      for (var j = 0; j < BOARDWIDTH; j++) {
        row.push(false);
      }
      ret.push(row);
    }
    return ret;
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
        <Board board={this.state.board}/>
      </div>
    );
  }
}

export default App;
