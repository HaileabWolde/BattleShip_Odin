export const animateSunkShip = (boardId, ship) => {
   ship.coordinates.forEach(([x, y]) => {
    const selector = `.board[id='${boardId}'] .gridrow[id='${x}'] .gridcol[id='${y}']`;
    const cell = document.querySelector(selector);
    if (cell){
     cell.classList.remove("cell-hit")
     cell.classList.add("cell-sunk")   
    }
    setTimeout(()=> {
        cell.classList.add("cell-hit")
    }, 3000)
  });
};
