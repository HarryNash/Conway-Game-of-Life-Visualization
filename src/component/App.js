import React, { Component } from 'react';
import logo from './logo.svg';
import Board from './Board';
import {BOARDWIDTH, BOARDHEIGHT} from './Board';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: this.emptyBoard(),
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
