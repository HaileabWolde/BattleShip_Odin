import "./style.css";
import Player from "./Player";
import ship from "./ship";
const grids = document.getElementsByClassName('board');
const rows = document.getElementsByClassName("gridrow");
const startButton = document.getElementById('start-btn');
let shipsPlaced = 0;
for (let g of grids) {  // loop over both boards
  for (let i = 0; i < 10; i++) {
    const cell = document.createElement('div');
    cell.classList.add('gridrow');
    cell.id = `${i}`
    g.appendChild(cell); // append to the current board
  }
}
for (let r of rows){
    for ( let i = 0; i < 10; i++){
        const cell = document.createElement('div');
        cell.classList.add('gridcol');
        cell.id = `${i}`
        r.appendChild(cell);
    }
}

const playerOne = new Player("Haileab")
startButton.addEventListener('click', () => {
  for (let r of rows) {
    r.addEventListener('click', (e) => {
      const shipType = parseInt(document.querySelector('#shipType').value);
      const grid = document.querySelector("#grid").value;
      const shipOne = new ship(shipType);
      const row = parseInt(r.id);
      const col = parseInt(e.target.id);
      if(!playerOne.checkCoordinate(row, col)){
          for (let i = 0; i < shipType; i++) {
        if (grid === 'horizontal') {
        
          playerOne.placeCoordinate(shipOne, row, col + i);
        } else {
        
          playerOne.placeCoordinate(shipOne, row + i, col);
        }
      }
      shipsPlaced++;
      if( shipsPlaced < 3){
        setTimeout(()=>{
          alert('place another ship')
        }, 2000)
      }
      else if (shipsPlaced === 3){
        setTimeout(()=>{
          alert('All 3 ships placed - game ready!');
        }, 2000)
      }}
      else {
        alert('The Cell is Occupied By Another Ship')
      }
  });
  }
  
});
