class ship {
    constructor(length){
        this.length = length;
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