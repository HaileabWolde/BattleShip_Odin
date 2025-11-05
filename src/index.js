import "./style.css";
const grids = document.getElementsByClassName('board');
const rows = document.getElementsByClassName("gridrow");
for (let g of grids) {  // loop over both boards
  for (let i = 0; i < 10; i++) {
    const cell = document.createElement('div');
    cell.classList.add('gridrow');
    g.appendChild(cell); // append to the current board
  }
}
for (let r of rows){
    for ( let i = 0; i < 10; i++){
        const cell = document.createElement('div');
        cell.classList.add('gridcol');
        r.appendChild(cell);
    }
}
