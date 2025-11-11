import "./style.css";
import Player from "./Player";
import ship from "./ship";
const grids = document.getElementsByClassName('board');
const rows = document.getElementsByClassName("gridrow");
const startButton = document.getElementById('start-btn');

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
startButton.addEventListener('click', ()=> {
  for (let r of rows){
 r.addEventListener('click', (e) => {
  let shipType = document.querySelector('#shipType').value;
  let shipOne = new ship(shipType)
  playerOne.placeCoordinate(shipOne, r.id, e.target.id)
 })
 /*
  this is Because it is defining a function not calling it. 
 */
}
})

