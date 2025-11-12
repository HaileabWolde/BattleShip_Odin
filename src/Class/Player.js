import Gameboard from "./Gameboard";
import ship from "./ship";
class Player {
    constructor(name){
        this.name = name;
        this.gameBoard = new Gameboard();
    }
    placeCoordinate = (ship, rowId, colId)=> {
        this.gameBoard.placeShip(ship, rowId, colId)
    }
    checkCoordinate = (x, y)=>{
        if(this.gameBoard.gameboard[x][y] instanceof ship){
            return true
        }
        return false;
    }
     
}
export default Player;