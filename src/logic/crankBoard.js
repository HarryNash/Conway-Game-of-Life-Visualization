import {BOARDWIDTH, BOARDHEIGHT} from '../component/Board';
import clone2d from './clone2d';
import cellFuture from './cellFuture.js';

export default function crankBoard(boardPre) {
    var boardPost = clone2d(boardPre);
    for (var i = 0; i < BOARDHEIGHT; i++) {
      for (var j = 0; j < BOARDWIDTH; j++) {
        boardPost[i][j] = crankCell(i, j, boardPre);
      }
    }
    return boardPost;
  }

function crankCell(i, j, boardPre) {
  var neighbours = [];
  for (var x = -1; x <= 1; x++) {
    for (var y = -1; y <= 1; y++) {
      if (x === 0 && y === 0) {
        continue;
      }
      addNeighbour(neighbours, i + x, j + y, boardPre);
    }
  }

  if (neighbours.length < 2 && boardPre[i][j]) {
    return cellFuture.UNDERPOPDEATH;
  }

  if (neighbours.length > 3 && boardPre[i][j]) {
    return cellFuture.OVERPOPDEATH;
  }

  if (neighbours.length === 3 && !boardPre[i][j]) {
    return cellFuture.BIRTH;
  }

  if (boardPre[i][j]) {
    return cellFuture.SURVIVE;
  }

  return cellFuture.STAYDEAD;
}

function addNeighbour(neighbours, p1, p2, boardPre) {
  if (p1 < 0 || p1 >= BOARDHEIGHT || p2 < 0 || p2 >= BOARDWIDTH) {
    return;
  }
  if (!boardPre[p1][p2]) {
    return;
  }
  neighbours.push(boardPre[p1][p2]);
}