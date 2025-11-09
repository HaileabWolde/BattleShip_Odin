import "./style.css";
const grids = document.getElementsByClassName('board');
const rows = document.getElementsByClassName("gridrow");

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
const sendCoordinates = (rowId,e)=>{
  console.log(`${rowId}${e.target.id}`)
}
for (let r of rows){
 r.addEventListener('click', (e) => sendCoordinates(r.id, e))
}
