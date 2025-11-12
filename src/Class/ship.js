class ship {
    constructor(length){
        this.length = length;
        if(length === 5){
            this.name = "Carrier"
        }
        else if (length === 4){
            this.name = "BattleShip"
        }
        else if (length === 3){
            this.name = "Cruiser"
        }
        else {
            this.name = "Destroyer"
        }
       
        this.hits = 0;
    }
   hit = ()=>{
   this.hits++;
    return this.hits; // optional: return current hits

   }
   isSunk = ()=> {
    return (this.hits >= this.length)
   }
}
export default ship;