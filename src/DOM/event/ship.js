import { attackCell, shipsDisapper } from "../Dom/cellDom";
import { playerOne, playerTwo} from "../../game/gameState";


export function shipAttackListener(){
  let boardTwo = document.querySelector(`.board[id='boardTwo']`);
  for (const row of boardTwo.children){
    row.addEventListener('click', attackCell)
  }
}


export function offloadShips(oppositeBoard){
 shipsDisapper(oppositeBoard.id);
 
}
export function   shipsAppear(onShipsBoard, offloadShipsBoard){
  let Player = (onShipsBoard.id === "boardOne") ? playerOne: playerTwo;
  let Allships =  Player.gameBoard.returnAllShip();
 for(let i = 0; i < Allships.length; i++){
  Allships[i].coordinates.forEach(([x, y])=> {
      const selector = `.board[id='${onShipsBoard.id}'] .gridrow[id='${x}'] .gridcol[id='${y}']`;
    const cell = document.querySelector(selector);
    if (cell) cell.style.backgroundColor = "#5A5A5A";
  })
 }
 offloadShips(offloadShipsBoard)
 setTimeout(()=>{
  alert(`${Player.name} can attack the opposing ships`)
 }, 1000)

 for (const row of offloadShipsBoard.children) {
  row.addEventListener("click", () => offloadShips(onShipsBoard));
}

}