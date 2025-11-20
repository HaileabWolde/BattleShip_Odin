import { attackCell, colorDisapper } from "../cellDom";
import shipColors from "../shipColor";
import { playerOne, playerTwo} from "../../game/gameState";

export function shipAttackListener(){
  let boardDavyJones = document.querySelector(`.board[id='boardTwo']`);
  for (const row of boardDavyJones.children){
    row.addEventListener('click', attackCell)
  }
}
export function colorBoard(OriginalBoard, OppositeBoard){
  colorDisapper(OriginalBoard.id);
}
export function shipColor(){
  let OriginalBoard = document.querySelector(`.board[id='boardOne']`);
  let OppositeBoard = document.querySelector(`.board[id='boardTwo']`);
  let Allships =  playerOne.gameBoard.returnAllShip();
  alert('Player One can start attacking ships')
 for(let i = 0; i < Allships.length; i++){
  Allships[i].coordinates.forEach(([x, y])=> {
      const selector = `.board[id='boardOne'] .gridrow[id='${x}'] .gridcol[id='${y}']`;
    const cell = document.querySelector(selector);
    if (cell) cell.style.backgroundColor = shipColors[Allships[i].name];
  })
 }
 
 for (const row of OppositeBoard.children) {
  row.addEventListener("click", () => colorBoard(OriginalBoard, OppositeBoard));
}

  

}