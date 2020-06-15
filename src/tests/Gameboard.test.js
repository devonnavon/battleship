import { Ship } from '../gameObjects/Ship';
import { Gameboard } from '../gameObjects/Gameboard';

it('Create an instance a Gameboard', () => {
	const board = Gameboard();
	expect(board).toBeDefined();
});

it('Place a ship and hit', () => {
	const board = Gameboard();
	const ship = Ship(3);
	board.place(ship, 'hor', 'A1');
	board.receiveAttack('A1');
	expect(ship.isHit()).toEqual(true);
});

it('Place a ship vertically and hit', () => {
	const board = Gameboard();
	const ship = Ship(3);
	board.place(ship, 'ver', 'A1');
	board.receiveAttack('A1');
	expect(ship.isHit()).toEqual(true);
});

it('Place a ship and miss', () => {
	const board = Gameboard();
	const ship = Ship(3);
	board.place(ship, 'ver', 'A1');
	board.receiveAttack('B1');
	expect(ship.isHit()).toEqual(false);
});

it('Place ship and track hits', () => {
	const board = Gameboard();
	const ship = Ship(3);
	board.place(ship, 'ver', 'A1');
	board.receiveAttack('B1'); //miss
	expect(ship.isHit()).toEqual(false);
	board.receiveAttack('B2'); //miss
	expect(ship.isHit()).toEqual(false);
	board.receiveAttack('A2'); //hit
	expect(ship.isHit()).toEqual(true);
	expect(board.getMisses()).toEqual(2);
});

it('Place two ships and track hits', () => {
	const board = Gameboard();
	const ship1 = Ship(3);
	const ship2 = Ship(2);
	board.place(ship1, 'ver', 'A1');
	board.place(ship2, 'hor', 'C1');
	board.receiveAttack('C2'); //miss
	board.receiveAttack('C3'); //miss
	board.receiveAttack('D2'); //miss
	board.receiveAttack('A1'); //ship1
	board.receiveAttack('A3'); //ship1
	board.receiveAttack('A2'); //ship1
	expect(ship1.isSunk()).toEqual(true);
	expect(ship2.isHit()).toEqual(false);
	board.receiveAttack('D1'); //ship2
	expect(ship2.isHit()).toEqual(true);
	expect(ship2.isSunk()).toEqual(false);
	expect(board.getMisses()).toEqual(3);
});

it('Sink all ships on board', () => {
	const board = Gameboard();
	const ship1 = Ship(3);
	const ship2 = Ship(2);
	const ship3 = Ship(5);
	board.place(ship1, 'ver', 'A1');
	board.place(ship2, 'hor', 'C1');
	board.place(ship3, 'hor', 'A10');
	board.receiveAttack('A1'); //ship1
	board.receiveAttack('A3'); //ship1
	board.receiveAttack('A2'); //ship1

	board.receiveAttack('C1'); //ship2
	board.receiveAttack('D1'); //ship2

	board.receiveAttack('A10'); //ship3
	board.receiveAttack('B10'); //ship3
	board.receiveAttack('C10'); //ship3
	board.receiveAttack('D10'); //ship3
	board.receiveAttack('E10'); //ship3

	expect(ship1.isSunk()).toEqual(true);
	expect(ship2.isSunk()).toEqual(true);
	expect(ship3.isSunk()).toEqual(true);
	expect(board.gameOver()).toEqual(true);
});
