import Player from "../game/Player";
import ship from "../game/ship";
import shipColors from "./shipColor";
import cacheDom from "./cacheDom";

const playerOne = new Player("JackSparrow");
const playerTwo = new Player("DavyJones");

export const boardDom = (e, rowElement, boardId) => {
  const { shipTypeOne, shipTypeTwo, gridOne, gridTwo } = cacheDom();

  // Which board is being used?
  const isBoardOne = boardId === "boardOne";
  const currentGridDirection = isBoardOne ? gridOne : gridTwo;
  const shipType = isBoardOne ? shipTypeOne : shipTypeTwo;
  const player = isBoardOne ? playerOne : playerTwo;

  const shipInstance = new ship(shipType);

  const row = parseInt(rowElement.id);
  const col = parseInt(e.target.id);

  // --------------------------
  // Helpers
  // --------------------------

  const outOfBounds = (r, c) => r >= 10 || c >= 10;

  const cellOccupied = (r, c) => player.checkCoordinate(r, c);

  const colorCell = (r, c) => {
    const selector = `.board[id='${boardId}'] .gridrow[id='${r}'] .gridcol[id='${c}']`;
    const cell = document.querySelector(selector);
    if (cell) cell.style.backgroundColor = shipColors[shipInstance.name];
  };

  // --------------------------
  // Validation Loop
  // --------------------------
  for (let i = 0; i < shipType; i++) {
    const targetRow = currentGridDirection === "horizontal" ? row : row + i;
    const targetCol = currentGridDirection === "horizontal" ? col + i : col;

    if (outOfBounds(targetRow, targetCol)) {
      alert(`You can't place ${shipInstance.name} ship here.`);
      return false;
    }

    if (cellOccupied(targetRow, targetCol)) {
      alert("This cell is already occupied by another ship.");
      return false;
    }
  }

  // --------------------------
  // Place Ship (after validated)
  // --------------------------
  for (let i = 0; i < shipType; i++) {
    const targetRow = currentGridDirection === "horizontal" ? row : row + i;
    const targetCol = currentGridDirection === "horizontal" ? col + i : col;

    player.placeCoordinate(shipInstance, targetRow, targetCol);
    colorCell(targetRow, targetCol);
  }

  return true;
};
