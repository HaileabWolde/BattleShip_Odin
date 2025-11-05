import ship from "./ship";
class Gameboard {
    constructor(){
        this.gameboard = Array(10).fill().map(()=> Array(10).fill(null));
        this.allShips = [];
    }
    placeShip = (shipOne, x, y)=> {
        this.gameboard[x][y] = shipOne;
         this.allShips.push(this.gameboard[x][y])
    }
    Sunk = ()=>{
       const AllsunkedShips =  this.allShips.every(ship=> ship.isSunk())
       return(AllsunkedShips)
    }
    receiveAttack = (x, y)=>{
        if(this.gameboard[x][y] instanceof ship){
             this.gameboard[x][y].hit();
            return(this.Sunk())
        }
        this.gameboard[x][y] = "M"

    }
}
export default Gameboard;