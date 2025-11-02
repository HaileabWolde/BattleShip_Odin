import ships from "./ship";
class Gameboard {
    constructor(){
        this.gameboard = Array(10).fill().map(()=> Array(10).fill(null));
    }
    placeShip = (ship, x, y)=> {
        this.gameboard[x][y] = ship;
        return (this.gameboard);
    }
    receiveAttack = (x, y)=>{
        if(this.gameboard[x][y] instanceof ships){
           return(this.gameboard[x][y].hit());
        }
        return false;

    }
}
export default Gameboard;