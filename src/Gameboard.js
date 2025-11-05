import ship from "./ship";
class Gameboard {
    constructor(){
        this.gameboard = Array(10).fill().map(()=> Array(10).fill(null));
        this.allShips = [];
    }
    placeShip = (shipOne, x, y)=> {
        /*
        push the instance of the ship to the 2 dimensional
        array gameboard and then push each ship to the array of AllShips
        
        */
        this.gameboard[x][y] = shipOne;
         this.allShips.push(this.gameboard[x][y])
    }
    Sunk = ()=>{
        /*
        from the all ships check if all the ships have
        sunked 
        */
       const AllsunkedShips =  this.allShips.every(ship=> ship.isSunk())
       return(AllsunkedShips)
    }
    receiveAttack = (x, y)=>{
        /*
        identifies object of the ship
        from the 2 dimensional array 
        and then send the proper hit function to the 
        array 
        */
        if(this.gameboard[x][y] instanceof ship){
             this.gameboard[x][y].hit();
        }
        this.gameboard[x][y] = "M"

    }
}
export default Gameboard;