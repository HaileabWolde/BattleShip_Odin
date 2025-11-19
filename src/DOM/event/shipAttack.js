import cacheDom from "../cacheDom";
import { playerOne, playerTwo } from "../../game/gameState";
const {grids} = cacheDom();

export function attackCell(e){
   const r = e.currentTarget; // current clicked row
  const parentNodeid =  r.parentNode.id;
  console.log(parentNodeid)
  const parentBoard =   document.querySelector(`.board[id='${parentNodeid}']`);
  let oppositeBoard = null;
  for (let g of grids){
    if(g.id != parentNodeid){
      oppositeBoard = g;
    }
  }
  for (const rows of parentBoard.children){
    rows.removeEventListener('click', attackCell)
  }
  for (const rows of oppositeBoard.children){
    rows.addEventListener('click', attackCell)
  }
}

export function shipAttackListener(){
  alert('Player One  can start attacking the ships')
  let boardDavyJones = document.querySelector(`.board[id='boardTwo']`);
  for (const row of boardDavyJones.children){
    row.addEventListener('click', attackCell)
  }
}
