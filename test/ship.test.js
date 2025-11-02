import ships from "../src/ship";
import Gameboard from "../src/Gameboard";
test('if the ship has a length of three', ()=>{
    const ship = new ships(3)
    expect(ship.length).toBe(3);
})
test('if the hit function of ship increases the ship hit', ()=>{
    const ship = new ships(4);
    expect(ship.hit()).toBe(1);
})
test('if the isSunk function of ship really works', ()=>{
    const ship = new ships(3);
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
})
test('if the GameBoard put the ship on the specifc corrdinates', ()=>{
    const ship = new ships(3);
    const gameboard = new Gameboard();
    gameboard.placeShip(ship, 3, 5);
    expect(gameboard.receiveAttack(3, 5)).toBe(true)
})


