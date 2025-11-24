import { playerOne, playerTwo } from "../../game/gameState";
import { animateSunkShip } from "../../Animate/animateSunkShip";
import cacheDom from "./cacheDom";
import { shipsAppear, attackedShip, missedShip } from "../event/ship";

const {rows, grids} = cacheDom();

export const shipsDisapper = (currentBoardId) => {
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


export const endGame = (player)=>{
    alert(`${player.name} has won`)
    for( let r of rows){
      r.removeEventListener("click", attackCell)
      }
  }
 
 export const handleAttack = (attacked, row , col, parentNodeid)=>{
    const cell = attacked.gameBoard.receiveAttack(row, col);

    if (!cell) {
      missedShip(parentNodeid, row, col)
      return};
   attackedShip(parentNodeid, row, col);
   
  if (cell && cell.isSunk()) {
    animateSunkShip(parentNodeid, cell);

    setTimeout(() => {
      alert(`${cell.name} has been sunk!`);
    }, 1000); // let animation show first
  }
        
 }
 export const switchTurn = (parentBoard, oppositeBoard)=>{
   for (const rows of parentBoard.children){
             rows.removeEventListener('click', attackCell)
       }
       for (const rows of oppositeBoard.children){
                rows.addEventListener('click', attackCell)
      }
      shipsAppear(parentBoard, oppositeBoard)
 }
export function attackCell(e){
    const r = e.currentTarget; // current clicked row
    const parentNodeid =  r.parentNode.id;
   const parentBoard =   document.querySelector(`.board[id='${parentNodeid}']`);
   const row = parseInt(r.id);
   const col = parseInt(e.target.id);
   let oppositeBoard = null;
   const attacked =  parentNodeid === "boardOne" ? playerOne : playerTwo;
   for (let g of grids){
     if(g.id != parentNodeid){
      oppositeBoard = g;
     }
   }
   if((attacked.gameBoard.Sunk())){
     endGame(attacked === playerOne ? playerTwo : playerOne);
   }
    handleAttack(attacked, row, col, parentNodeid)
    switchTurn(parentBoard, oppositeBoard) 
}
