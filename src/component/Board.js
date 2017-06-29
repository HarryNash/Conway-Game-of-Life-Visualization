import React, { Component } from 'react';

const BOARDWIDTH = 20;
const BOARDHEIGHT = 10;

class Board extends Component {
	renderSquare(isAlive, future) {
		var str = isAlive ? 'O' : 'X';
		str = str.concat(' ');
		str = str.concat(future);
		return <button className="square"> {str} </button>;
	}

	render() {
		var board = new Array(BOARDHEIGHT);
		for (var i = 0; i < BOARDHEIGHT; i++) {
			var row = [];
			for (var j = 0; j < BOARDWIDTH; j++) {
				row.push(this.renderSquare(this.props.boardPre[i][j], this.props.boardPost[i][j]));
			}
			board[i] = <div> {row} </div>;
		}
		return <div> {board} </div>;
	}
}

export default Board;
export {BOARDWIDTH, BOARDHEIGHT};