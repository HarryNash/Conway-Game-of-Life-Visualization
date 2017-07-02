import {BOARDWIDTH, BOARDHEIGHT} from '../component/Board';
import cellFuture from './cellFuture.js';

export default function shiftBoard(boardPost) {
  var nextBoardPre = boardPost.slice();
  for (var i = 0; i < BOARDHEIGHT; i++) {
    for (var j = 0; j < BOARDWIDTH; j++) {
      switch(nextBoardPre[i][j]) {
        case cellFuture.UNDERPOPDEATH:
        case cellFuture.OVERPOPDEATH:
        case cellFuture.STAYDEAD:
          nextBoardPre[i][j] = false;
          break;
        case cellFuture.SURVIVE:
        case cellFuture.BIRTH:
          nextBoardPre[i][j] = true;
          break;
        default:
          break;
      }
    }
  }
  return nextBoardPre;
}
