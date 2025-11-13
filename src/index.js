import "./style.css";
import boardDom from "./DOM/boardDom";

const grids = document.getElementsByClassName('board');
const rows = document.getElementsByClassName("gridrow");
const startButton = document.getElementById('start-btn');
let shipsPlaced = 0;

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

// Define the handler separately so we can remove it later
function handleCellClick(e) {
  console.log(e.currentTarget)
  const r = e.currentTarget; // current clicked row

  if (!boardDom(e, r)) return;

  shipsPlaced++;

  if (shipsPlaced < 3) {
    setTimeout(() => alert('Place another ship'), 1000);
  } else if (shipsPlaced === 3) {
    setTimeout(() => alert('All 3 ships placed - game ready!'), 1000);
    removelistener(); // ✅ actually remove the listeners now
  }
}

// Function to remove all listeners
function removelistener() {
  for (let r of rows) {
    r.removeEventListener('click', handleCellClick);
  }
}

function startfunction() {
  for (let r of rows) {
    r.addEventListener('click', handleCellClick);
  }
}

startButton.addEventListener('click', startfunction);
