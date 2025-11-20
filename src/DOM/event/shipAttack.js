import { attackCell } from "../cellDom";


export function shipAttackListener(){
  alert('Player One  can start attacking the ships')
  let boardDavyJones = document.querySelector(`.board[id='boardTwo']`);
  for (const row of boardDavyJones.children){
    row.addEventListener('click', attackCell)
  }
}
