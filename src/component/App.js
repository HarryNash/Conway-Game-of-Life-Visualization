import React, { Component } from 'react';
import Board from './Board';
import Button from './Button';
import crankBoard from '../logic/crankBoard';
import clone2d from '../logic/clone2d';
import shiftForward from '../logic/shiftForward';
import emptyBoard from '../logic/emptyBoard';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    var boardPre = emptyBoard();
    this.state = {
      boardPre: boardPre,
      boardPost: crankBoard(boardPre),
      onAutomatic: false
    }
  }

  tick() {
    if (this.state.onAutomatic) {
      this.step();
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleAutomatic() {
    this.setState({
      onAutomatic: this.state.onAutomatic ? false : true
    });
  }

  step() {
    this.setState((prevState) => ({
        boardPre: shiftForward(prevState.boardPost),
        boardPost: crankBoard(shiftForward(prevState.boardPost))
    }));
  }

  toggleCell(i, j) {
    var boardPre = clone2d(this.state.boardPre);
    boardPre[i][j] = !boardPre[i][j];
    this.setState({
      boardPre: boardPre,
      boardPost: crankBoard(boardPre)
    });
  }

  render() {
    var logoClassName = this.state.onAutomatic ? "App-logo" : "";
    return (
      <div className="App">
        <div className="App-header">
          <img
            src="//cdn.jsdelivr.net/emojione/assets/png/1F579.png"
            className={logoClassName}
            alt="logo"
          />
          <h2>Conway's Game of Life Visualization</h2>
        </div>
        <br></br>
        <Board
          onAutomatic={this.state.onAutomatic}
          boardPre={this.state.boardPre}
          boardPost={this.state.boardPost}
          onClick={(i, j) => this.toggleCell(i, j)}
        />
        <Button display={"step"} onClick={() => this.step()}/>
        <Button
          display={this.state.onAutomatic ? 'pause' : 'run'}
          onClick={() => this.toggleAutomatic()}
        />
      </div>
    );
  }
}

export default App;
