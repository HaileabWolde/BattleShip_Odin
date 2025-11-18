
const cacheDom = ()=>{
    const grids =  document.getElementsByClassName('board');
    const rows = document.getElementsByClassName("gridrow");
     let shipTypeOne = parseInt(document.querySelector('#shiptypeOne').value);
  let shipTypeTwo = parseInt(document.querySelector('#shiptypeTwo').value);
  let gridOne = document.querySelector('#gridOne').value;
  let gridTwo = document.querySelector('#gridTwo').value;
    return {grids, rows, shipTypeOne,shipTypeTwo,  gridOne, gridTwo}
}
export default cacheDom;
 


