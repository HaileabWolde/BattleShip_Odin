import ship from "../src/ship";
import Gameboard from "../src/Gameboard";
import Player from "../src/Player";

/*
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
    const shipOne = new ship(3);
    const gameBoard = new Gameboard();
    gameBoard.placeShip(shipOne, 3, 5);
    gameBoard.placeShip(shipOne, 4, 5);
    gameBoard.placeShip(shipOne, 5, 5);
    gameBoard.receiveAttack(3, 5);
    gameBoard.receiveAttack(4, 5);
    gameBoard.receiveAttack(5, 5);
    expect(gameBoard.Sunk()).toBe(true);
})*/
test('if DOM mainpulation of the Board send the corrdinates', ()=>{
    const shipOne = new ship();
    const playerOne = new Player("Haileab");
    expect(playerOne).toBe("Haileab")
})

