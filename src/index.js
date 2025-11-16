import "./style.css";
import boardDom from "./DOM/boardDom";

const grids = document.getElementsByClassName('board');
const rows = document.getElementsByClassName("gridrow");
const startButton = document.getElementById('start-btn');
let shipsPlacedOne = 0;
let shipsPlacedTwo = 0;

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
  
  const r = e.currentTarget; // current clicked row
  const parentNodeid =  r.parentNode.id;
  let boardNode = null;
  for (let g of grids){
    if(g.id != parentNodeid){
      boardNode = g;
    }
  }
  for (const rows of boardNode.children){
      rows.removeEventListener("click", handleCellClick)
  }
  
  if (!boardDom(e, r, parentNodeid)) return;
  if(parentNodeid === "boardOne"){
    shipsPlacedOne++;
  }
  else if (parentNodeid === "boardTwo") {
    shipsPlacedTwo++;
  }

  if (shipsPlacedOne < 3 && (parentNodeid === "boardOne")) {
    setTimeout(() => alert('Place another ship'), 1000);
  }
  else if (shipsPlacedOne === 3 && shipsPlacedTwo === 3){
     setTimeout(() => alert('All 3 ships placed on the two boards are deay game is ready!'), 1000);
     removelistener(null)
  }
  else if(shipsPlacedOne === 3 && (parentNodeid === "boardOne")){
     setTimeout(() => alert('All 3 ships placed!'), 1000);
     removelistener(parentNodeid); // ✅ actually remove the listeners now
    addboardlistner(boardNode)
  }
  else if (shipsPlacedTwo < 3 && (parentNodeid === "boardTwo")){
     setTimeout(() => alert('Place another ship'), 1000);
  }
   else if (shipsPlacedTwo === 3 && (parentNodeid === "boardTwo")) {
    setTimeout(() => alert('All 3 ships placed'), 1000);
    removelistener(parentNodeid); // ✅ actually remove the listeners now
    addboardlistner(boardNode)
  }
}

// Function to remove all listeners
function removelistener(parentNodeid) {
  if(parentNodeid === null){
    for (let r of rows){
      r.removeEventListener("click", handleCellClick)
    }
  }
  else {
     let boardNode = document.querySelector(`.board[id='${parentNodeid}']`);
    for (const rows of boardNode.children){
      rows.removeEventListener("click", handleCellClick)
    }
  }
}
function addboardlistner(boardNode){
  for ( const rows of boardNode.children){
    rows.addEventListener("click", handleCellClick)
  }
}

function startfunction() {
  for (let r of rows) {
    r.addEventListener('click', handleCellClick);
  }
}

startButton.addEventListener('click', startfunction);
