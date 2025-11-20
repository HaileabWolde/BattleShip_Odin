class ship {
    constructor(length){
        this.length = length;
         this.hits = 0;
         this.coordinates = [];
         switch (length){
            case 5:
                this.name = "Carrier"
                break;
            case 4:
                this.name = "BattleShip"
                break;
            case 3:
                this.name = "Cruiser"
                break;
            default:
                this.name = "Destroyer"
                break;

         }
        
    }
   hit = ()=>{
   this.hits++;
    return this.hits; // optional: return current hits

   }
   placeCoordinate = (row, col)=>{
    this.coordinates.push([row, col])
   }
   isSunk = ()=> {
    return (this.hits >= this.length)
   }
}
export default ship;