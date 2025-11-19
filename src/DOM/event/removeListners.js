import { handleCellClick } from "./event";
import cacheDom from "../cacheDom";

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
export const colorDisapper = (currentBoardId) => {
  let originalBoard = document.querySelector(`.board[id='${currentBoardId}']`);
  
  for (const row of originalBoard.children) {
    for (const col of row.children) {
      col.classList.add("fade-out");
    }
  }

  // After animation finishes, clear background
  setTimeout(() => {
    for (const row of originalBoard.children) {
      for (const col of row.children) {
        col.style.backgroundColor = "white";
        col.classList.remove("fade-out");
      }
    }
  }, 600); // match the CSS transition time
};
