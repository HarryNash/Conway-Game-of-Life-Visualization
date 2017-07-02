import React, { Component } from 'react';
import Square from './Square';

const BOARDWIDTH = 20;
const BOARDHEIGHT = 15;

class Board extends Component {
  renderSquare(row, col) {
    return (
      <Square
        isAlive={this.props.boardPre[row][col]}
        future={this.props.boardPost[row][col]}
        onAutomatic={this.props.onAutomatic}
        onClick={() => this.props.onClick(row, col)}
      />
    );
  }

  render() {
    var board = new Array(BOARDHEIGHT);
      for (var i = 0; i < BOARDHEIGHT; i++) {
        var row = [];
        for (var j = 0; j < BOARDWIDTH; j++) {
          row.push(this.renderSquare(i, j));
        }
        board[i] = <div> {row} </div>;
      }
    return <div> {board} </div>;
  }
}

export default Board;
export {BOARDWIDTH, BOARDHEIGHT};
