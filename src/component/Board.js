import React, { Component } from 'react';
import Square from './Square';

const BOARDWIDTH = 20;
const BOARDHEIGHT = 10;

class Board extends Component {
	render() {
		var board = new Array(BOARDHEIGHT);
		for (var i = 0; i < BOARDHEIGHT; i++) {
			var row = [];
			for (var j = 0; j < BOARDWIDTH; j++) {
				row.push(<Square isAlive={this.props.boardPre[i][j]} future={this.props.boardPost[i][j]}/>);
			}
			board[i] = <div> {row} </div>;
		}
		return <div> {board} </div>;
	}
}

export default Board;
export {BOARDWIDTH, BOARDHEIGHT};