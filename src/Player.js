import Gameboard from "./Gameboard";
class Player {
    constructor(name){
        this.name = name;
        this.gameBoard = new Gameboard();
    }
    placeCoordinate = (ship, rowId, colId)=> {
        this.gameBoard.placeShip(ship, rowId, colId)
    }
     
}
export default Player;