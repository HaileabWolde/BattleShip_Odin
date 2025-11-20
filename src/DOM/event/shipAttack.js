import cacheDom from "../cacheDom";
import { playerOne, playerTwo } from "../../game/gameState";
const {grids, rows} = cacheDom();

export function attackCell(e){
   const r = e.currentTarget; // current clicked row
  const parentNodeid =  r.parentNode.id;
  const parentBoard =   document.querySelector(`.board[id='${parentNodeid}']`);
  const row = parseInt(r.id)
  const col = parseInt(e.target.id)
  let oppositeBoard = null;
  for (let g of grids){
    if(g.id != parentNodeid){
      oppositeBoard = g;
    }
  }
  if((playerOne.gameBoard.Sunk()) || playerTwo.gameBoard.Sunk()){
            alert('Game Over')
            for( let r of rows){
                    r.removeEventListener("click", attackCell)
            }
  }
  else {
        let player = (parentNodeid === "boardOne") ? playerOne: playerTwo;
        if (player.gameBoard.receiveAttack(row, col)) {
           if(player.gameBoard.gameboard[row][col].isSunk()){
            alert("Ship has been sacked")
           }
        }
       for (const rows of parentBoard.children){
             rows.removeEventListener('click', attackCell)
       }
       for (const rows of oppositeBoard.children){
                rows.addEventListener('click', attackCell)
      }
  }
  
}

export function shipAttackListener(){
  alert('Player One  can start attacking the ships')
  let boardDavyJones = document.querySelector(`.board[id='boardTwo']`);
  for (const row of boardDavyJones.children){
    row.addEventListener('click', attackCell)
  }
}
