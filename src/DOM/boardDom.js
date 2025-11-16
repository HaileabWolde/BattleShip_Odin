import Player from "../Class/Player";
import ship from "../Class/ship";
import shipColors from "./shipColor";
const playerOne = new Player("JackSparrow");
const playerTwo = new Player("DavyJones");
const boardDom = (e, r, parentNode)=>{
      let shipTypeOne = parseInt(document.querySelector('#shiptypeOne').value)
      let shipTypeTwo = parseInt(document.querySelector('#shiptypeTwo').value);
      let gridOne = document.querySelector('#gridOne').value;
      let gridTwo = document.querySelector('#gridTwo').value;
      let grid = (parentNode === "boardOne") ? gridOne : gridTwo;
      let shipType = (parentNode === "boardOne") ? shipTypeOne : shipTypeTwo
      const shipOne = new ship(shipType);
      const row = parseInt(r.id);
      const col = parseInt(e.target.id);
      console.log(grid)
      for ( let i = 0; i < shipType; i++){
        if(grid === 'horizontal'){
          if((row >= 10) || (col + i >= 10)){
            alert(`You Can't place ${shipOne.name} ship here`)
            return false;
          }
          else  if(parentNode === "boardOne") {
              if(playerOne.checkCoordinate(row, col + i)){
                alert('The Cell is Occupied By Another Ship')
                 return false;
              }
          }
          else  {
               if(playerTwo.checkCoordinate(row, col + i)){
               alert('The Cell is Occupied By Another Ship')
                 return false;
             }
          }
        }
        else {
          if((row + i >= 10) || (col >= 10)){
            alert(`You Can't place ${shipOne.name} ship here`)
            return false;
          }
           else  if(parentNode === "boardOne") {
              if(playerOne.checkCoordinate(row + i, col)){
                alert('The Cell is Occupied By Another Ship')
                 return false;
              }
          }
          else {
              if(playerTwo.checkCoordinate(row + i, col)){
                  alert('The Cell is Occupied By Another Ship')
                  return false;
              }
          }
        }
      }
     
      for (let i = 0; i < shipType; i++) {
             if (grid === 'horizontal') {
                  if(parentNode === "boardOne"){
                    playerOne.placeCoordinate(shipOne, row, col + i);
                  }
                   else{
                    playerTwo.placeCoordinate(shipOne, row, col + i);
                   }
                  
               const cellToColor = document.querySelector(
                        `.board[id='${parentNode}'] .gridrow[id='${row}'] .gridcol[id='${col + i}']`
                  );
                if(cellToColor){
                  cellToColor.style.backgroundColor = shipColors[shipOne.name];
                }
              
        } 
           else {
                  if(parentNode === "boardOne" ){
                      playerOne.placeCoordinate(shipOne, row + i, col);
                  }
                  else {
                      playerTwo.placeCoordinate(shipOne, row + i, col);
                  }
                  const cellToColor = document.querySelector(
                      `.board[id='${parentNode}'] .gridrow[id='${row + i}'] .gridcol[id='${col}']`
                );
                if(cellToColor){
                  cellToColor.style.backgroundColor = shipColors[shipOne.name];
                }
    }}

      return true;
}
export default boardDom;