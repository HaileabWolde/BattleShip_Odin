import { handleCellClick } from "./event";
import cacheDom from "../Dom/cacheDom";


const {rows} = cacheDom();

export function removeListenersFromBoard(currentBoardId) {
   let Board = document.querySelector(`.board[id='${currentBoardId}']`);
  for (const row of Board.children) {
    row.removeEventListener("click", handleCellClick);
  }
}

export function removeAllListeners() {
  for (let r of rows) {
    r.removeEventListener("click", handleCellClick);
  }
}
