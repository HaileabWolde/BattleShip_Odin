import "./style.css";
import boardDom from "./DOM/boardDom";
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

startButton.addEventListener('click', () => {
  for (let r of rows) {
    r.addEventListener('click', (e) => {
      boardDom(e, r, shipsPlaced)
      if( shipsPlaced < 3){
        setTimeout(()=>{
          alert('place another ship')
        }, 5000)
      }
      else if (shipsPlaced === 3){
        setTimeout(()=>{
          alert('All 3 ships placed - game ready!');
        }, 5000)
      }
  })}
  
});
