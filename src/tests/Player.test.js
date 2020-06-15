import { Ship } from '../Ship';
import { Gameboard } from '../Gameboard';
import { Player } from '../Player';

it('Create an instance a Player', () => {
	const player = Player();
	expect(player).toBeDefined();
});

it('test player attack', () => {
	const playerHuman = Player();
	const playerComputer = Player('computer');
	const board1 = Gameboard();
	const board2 = Gameboard();
	const shipH1 = Ship(1);
	const shipH2 = Ship(1);
	const shipC1 = Ship(1);
	const shipC2 = Ship(1);
	board1.place(shipH1, 'hor', 'A1');
	board1.place(shipH2, 'hor', 'B3');
	board2.place(shipC1, 'hor', 'A1');
	board2.place(shipC2, 'hor', 'B3');
	playerHuman.setBoard(board1);
	playerComputer.setBoard(board2);

	playerHuman.attack(playerComputer, 'A1');

	expect(shipC1.isSunk()).toEqual(true);
});

it('test player attack', () => {
	const playerHuman = Player();
	const playerComputer = Player('computer');
	const board1 = Gameboard();
	const board2 = Gameboard();
	const shipH1 = Ship(1);
	const shipH2 = Ship(1);
	const shipC1 = Ship(1);
	const shipC2 = Ship(1);
	board1.place(shipH1, 'hor', 'A1');
	board1.place(shipH2, 'hor', 'B3');
	board2.place(shipC1, 'hor', 'A1');
	board2.place(shipC2, 'hor', 'B3');
	playerHuman.setBoard(board1);
	playerComputer.setBoard(board2);

	playerHuman.attack(playerComputer, 'A1');
	playerHuman.attack(playerComputer, 'B3');

	expect(board2.gameOver()).toEqual(true);
});

it('test turn attack', () => {
	const playerHuman = Player();
	const playerComputer = Player('computer');
	const board1 = Gameboard();
	const board2 = Gameboard();
	const shipH1 = Ship(1);
	const shipH2 = Ship(1);
	const shipC1 = Ship(1);
	const shipC2 = Ship(1);
	board1.place(shipH1, 'hor', 'A1');
	board1.place(shipH2, 'hor', 'B3');
	board2.place(shipC1, 'hor', 'A1');
	board2.place(shipC2, 'hor', 'B3');
	playerHuman.setBoard(board1);
	playerComputer.setBoard(board2);

	playerHuman.attack(playerComputer, 'A2');
	expect(playerHuman.getTurn()).toEqual(false);
	expect(playerComputer.getTurn()).toEqual(true);
});

it('Give player another turn if they hit', () => {
	const playerHuman = Player();
	const playerComputer = Player('computer');
	const board1 = Gameboard();
	const board2 = Gameboard();
	const shipH1 = Ship(1);
	const shipH2 = Ship(1);
	const shipC1 = Ship(1);
	const shipC2 = Ship(1);
	board1.place(shipH1, 'hor', 'A1');
	board1.place(shipH2, 'hor', 'B3');
	board2.place(shipC1, 'hor', 'A1');
	board2.place(shipC2, 'hor', 'B3');
	playerHuman.setBoard(board1);
	playerComputer.setBoard(board2);

	playerHuman.attack(playerComputer, 'A1');
	expect(playerHuman.getTurn()).toEqual(true);
	expect(playerComputer.getTurn()).toEqual(false);
	playerHuman.attack(playerComputer, 'D10');
	expect(playerHuman.getTurn()).toEqual(false);
	expect(playerComputer.getTurn()).toEqual(true);
});

it('Test computer attack', () => {
	const playerHuman = Player();
	const playerComputer = Player('computer');
	const board1 = Gameboard();
	const board2 = Gameboard();
	const shipH1 = Ship(1);
	const shipH2 = Ship(1);
	const shipC1 = Ship(1);
	const shipC2 = Ship(1);
	board1.place(shipH1, 'hor', 'A1');
	board1.place(shipH2, 'hor', 'B3');
	board2.place(shipC1, 'hor', 'A1');
	board2.place(shipC2, 'hor', 'B3');
	playerHuman.setBoard(board1);
	playerComputer.setBoard(board2);

	playerComputer.attack(playerHuman);
	playerComputer.attack(playerHuman);

	expect(board1.getMisses() > 0 || shipH1.isHit() || shipH2.isHit()).toEqual(
		true
	);
});

it('Test random comupter moves', () => {
	const playerHuman = Player();
	const playerComputer = Player('computer');
	const board1 = Gameboard();
	const board2 = Gameboard();
	const shipH1 = Ship(1);
	const shipH2 = Ship(1);
	const shipC1 = Ship(1);
	const shipC2 = Ship(1);
	board1.place(shipH1, 'hor', 'A1');
	board1.place(shipH2, 'hor', 'B3');
	board2.place(shipC1, 'hor', 'A1');
	board2.place(shipC2, 'hor', 'B3');
	playerHuman.setBoard(board1);
	playerComputer.setBoard(board2);

	let count = 0;
	while (!board1.gameOver()) {
		playerComputer.attack(playerHuman);
		count++;
	}

	expect(board1.getMisses()).toBeLessThanOrEqual(98);
	expect(count).toBeLessThanOrEqual(100);
	expect(shipH1.isSunk()).toEqual(true);
	expect(shipH2.isSunk()).toEqual(true);
});
