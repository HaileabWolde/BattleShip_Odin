const grids = document.getElementsByClassName('board');
const rows = document.getElementsByClassName("gridrow");
const createGrid = ()=>{
  // Create the 10x10 grids
for (let g of grids) {
  for (let i = 0; i < 10; i++) {
    const cell = document.createElement('div');
    cell.classList.add('gridrow');
    cell.id = `${i}`;
    g.appendChild(cell);
  }
}

for (let r of rows) {
  for (let i = 0; i < 10; i++) {
    const cell = document.createElement('div');
    cell.classList.add('gridcol');
    cell.id = `${i}`;
    r.appendChild(cell);
  }
}
}

export default createGrid;