import Player from "../Class/Player";
import ship from "../Class/ship";
const playerOne = new Player("Haileab")
const boardDom = (e, r)=>{
      const shipType = parseInt(document.querySelector('#shipType').value);
      const grid = document.querySelector("#grid").value;
      const shipOne = new ship(shipType);
      const row = parseInt(r.id);
      const col = parseInt(e.target.id);
      for ( let i = 0; i < shipType; i++){
        if(grid === 'horizontal'){
          if((row >= 10) || (col + i >= 10)){
            alert(`You Can't place ${shipOne.name} ship here`)
            return false;
          }
          else if(playerOne.checkCoordinate(row, col + i)){
            alert('The Cell is Occupied By Another Ship')
            return false;
          }
        }
        else {
          if((row + i >= 10) || (col >= 10)){
            alert(`You Can't place ${shipOne.name} ship here`)
            return false;
          }
           else if(playerOne.checkCoordinate(row + i, col)){
            alert('The Cell is Occupied By Another Ship')
            return false;
          }
        }
      }
     
      for (let i = 0; i < shipType; i++) {
        if (grid === 'horizontal') {
        
          playerOne.placeCoordinate(shipOne, row, col + i);
        } else {
        
          playerOne.placeCoordinate(shipOne, row + i, col);
        }
      }
      return true;
}
export default boardDom;