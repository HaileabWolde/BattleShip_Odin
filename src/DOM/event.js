import cacheDom from "./cacheDom";
import { boardDom } from "./boardDom";
let shipsPlacedOne = 0;
let shipsPlacedTwo = 0;

const {rows, grids} = cacheDom();
// Define the handler separately so we can remove it later
export function handleCellClick(e) {
  
  const r = e.currentTarget; // current clicked row
  const parentNodeid =  r.parentNode.id;
  let oppositeBoard = null;
  for (let g of grids){
    if(g.id != parentNodeid){
      oppositeBoard = g;
    }
  }
  // Remove listeners from the other board

  for (const rows of oppositeBoard.children){
      rows.removeEventListener("click", handleCellClick)
  }
  
  if (!boardDom(e, r, parentNodeid)) return;

  if(parentNodeid === "boardOne") shipsPlacedOne++; 
  if (parentNodeid === "boardTwo")shipsPlacedTwo++;
    
  

  if (shipsPlacedOne === 3 && shipsPlacedTwo === 3) {
      setTimeout(()=>{
         alert("Both Boards are ready");
    }, 1000)
    removeAllListeners();
  }
  else {
    switchTurns(parentNodeid, oppositeBoard);
  }
}

export function addListenersToBoard(board) {
  for (const row of board.children) {
    row.addEventListener("click", handleCellClick);
  }
}

export function removeListenersFromBoard(board) {
  for (const row of board.children) {
    row.removeEventListener("click", handleCellClick);
  }
}

export function removeAllListeners() {
  for (let r of rows) {
    r.removeEventListener("click", handleCellClick);
  }
}

function switchTurns(currentBoardId, otherBoard) {
  if (currentBoardId === "boardOne" && shipsPlacedOne === 3) {
    setTimeout(()=>{
         alert("Board One done!");
    }, 1000)
  
    addListenersToBoard(otherBoard);
  }
  else if (currentBoardId === "boardTwo" && shipsPlacedTwo === 3) {
    setTimeout(()=>{
         alert("Board Two done!");
    }, 1000)
  
    addListenersToBoard(otherBoard);
  }
}
