import Gameboard from "./Gameboard";
class Player {
    constructor(name){
        this.name = name;
        this.gameBoard = new Gameboard();
    }
}
export default Player;