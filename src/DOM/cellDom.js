import { playerOne, playerTwo } from "../game/gameState";
import { animateSunkShip } from "../Animate/animateSunkShip";
import cacheDom from "./cacheDom";

const {rows, grids} = cacheDom();

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

export  const colorAttackedCell = (boardId, r, c)=>{
    const selector = `.board[id='${boardId}'] .gridrow[id='${r}'] .gridcol[id='${c}']`;
    const cell = document.querySelector(selector);
    cell.classList.add("cell-hit");
  }

export const endGame = (player)=>{
    alert(`${player.name} has won`)
    for( let r of rows){
      r.removeEventListener("click", attackCell)
      }
  }
 
 export const handleAttack = (attacker, row , col, parentNodeid)=>{
    const cell = attacker.gameBoard.receiveAttack(row, col);

    if (!cell) return;

   colorAttackedCell(parentNodeid, row, col);

  if (cell && cell.isSunk()) {
    animateSunkShip(parentNodeid, row, col);

    setTimeout(() => {
      alert(`${cell.name} has been sunk!`);
    }, 700); // let animation show first
  }
        
 }
 export const switchTurn = (parentBoard, oppositeBoard)=>{
   for (const rows of parentBoard.children){
             rows.removeEventListener('click', attackCell)
       }
       for (const rows of oppositeBoard.children){
                rows.addEventListener('click', attackCell)
      }
 }
export function attackCell(e){
    const r = e.currentTarget; // current clicked row
    const parentNodeid =  r.parentNode.id;
   const parentBoard =   document.querySelector(`.board[id='${parentNodeid}']`);
   const row = parseInt(r.id);
   const col = parseInt(e.target.id);
   let oppositeBoard = null;
   const attacker =  parentNodeid === "boardOne" ? playerOne : playerTwo;
   for (let g of grids){
     if(g.id != parentNodeid){
      oppositeBoard = g;
     }
   }
   if((attacker.gameBoard.Sunk())){
     endGame(attacker === playerOne ? playerTwo : playerOne);
   }
    handleAttack(attacker, row, col, parentNodeid)
    switchTurn(parentBoard, oppositeBoard) 
}
