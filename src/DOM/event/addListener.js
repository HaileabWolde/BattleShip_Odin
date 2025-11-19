import { handleCellClick } from "./event";
export function addListenersToBoard(board) {
  for (const row of board.children) {
    row.addEventListener("click", handleCellClick);
  }
}
