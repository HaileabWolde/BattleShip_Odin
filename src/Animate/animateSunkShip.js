export const animateSunkShip = (boardId, row, col) => {
   const selector = `.board[id='${boardId}'] .gridrow[id='${row}'] .gridcol[id='${col}']`;
    const cell = document.querySelector(selector);
    cell.classList.remove("cell-hit")
    cell.classList.add("cell-sunk")
    setTimeout(()=> {
        cell.classList.add("cell-hit")
    }, 1000)
};