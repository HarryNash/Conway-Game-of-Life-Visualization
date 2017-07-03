import {BOARDWIDTH, BOARDHEIGHT} from '../component/Board';

export default function emptyBoard() {
  var emptyBoard = [];
  var emptyRow = new Array(BOARDWIDTH);
  emptyRow.fill(false);
  for (var i = 0; i < BOARDHEIGHT; i++) {
    emptyBoard.push(emptyRow.slice());
  }
  return emptyBoard;
}
