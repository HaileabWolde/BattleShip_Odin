import { attackCell, colorDisapper } from "../cellDom";
import shipColors from "../shipColor";
import { playerOne, playerTwo} from "../../game/gameState";


export function shipAttackListener(){
  let boardDavyJones = document.querySelector(`.board[id='boardTwo']`);
  for (const row of boardDavyJones.children){
    row.addEventListener('click', attackCell)
  }
}


export function colorBoard(oppositeBoard){
  colorDisapper(oppositeBoard.id);
 
}
export function shipColor(coloredBoard, noncoloredBoard){
  let Player = (coloredBoard.id === "boardOne") ? playerOne: playerTwo;
  let Allships =  Player.gameBoard.returnAllShip();
 for(let i = 0; i < Allships.length; i++){
  Allships[i].coordinates.forEach(([x, y])=> {
      const selector = `.board[id='${coloredBoard.id}'] .gridrow[id='${x}'] .gridcol[id='${y}']`;
    const cell = document.querySelector(selector);
    if (cell) cell.style.backgroundColor = shipColors[Allships[i].name];
  })
 }
 colorBoard(noncoloredBoard)
 setTimeout(()=>{
  alert(`${Player.name} can attack the opposing ships`)
 }, 1000)

 for (const row of noncoloredBoard.children) {
  row.addEventListener("click", () => colorBoard(coloredBoard));
}

}