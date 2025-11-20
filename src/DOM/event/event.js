import cacheDom from "../cacheDom";
import { boardDom } from "../boardDom";
import { removeAllListeners, removeListenersFromBoard} from "./removeListners";
import { colorDisapper } from "../cellDom";
import { addListenersToBoard } from "./addListener";
import { shipAttackListener, shipColor} from "./ship";


let shipsPlacedOne = 0;
let shipsPlacedTwo = 0;

const {grids} = cacheDom();
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
              colorDisapper(parentNodeid);
              removeAllListeners();
              shipColor();
              shipAttackListener();
           }, 1000)
  }
  else {
    switchTurns(parentNodeid, oppositeBoard);
  }
}
 
function switchTurns(currentBoardId, otherBoard) {
  if (currentBoardId === "boardOne" && shipsPlacedOne === 3) {
         setTimeout(() => {
                 alert("Board One done!");
                colorDisapper(currentBoardId);
                 addListenersToBoard(otherBoard);
                   removeListenersFromBoard(currentBoardId)
        }, 1000);


  } else if (currentBoardId === "boardTwo" && shipsPlacedTwo === 3) {

              setTimeout(() => {
                        alert("Board Two done!");
                        colorDisapper(currentBoardId);
                        addListenersToBoard(otherBoard);
                        removeListenersFromBoard(currentBoardId)
                }, 1000);
}}
