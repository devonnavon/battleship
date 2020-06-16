import { setMoves } from './helpers';
import { Gameboard } from './gameObjects/Gameboard';
import { Player } from './gameObjects/Player';
import { Ship } from './gameObjects/Ship';

const Game = (() => {
	const human = Player();
	const computer = Player('computer');
	const humanBoard = Gameboard();
	const computerBoard = Gameboard();

	const getShips = () => {
		return [
			Ship(4),
			Ship(3),
			Ship(3),
			Ship(2),
			Ship(2),
			Ship(2),
			Ship(1),
			Ship(1),
			Ship(1),
			Ship(1),
		];
	};

	const placeShips = (board) => {
		//temp
		const ships = getShips();
		board.place(ships[0], 'ver', 'A1');
		board.place(ships[1], 'hor', 'C1');
	};
	placeShips(humanBoard);
	placeShips(computerBoard);

	const boardClick = (e) => {
		console.log(e.target.classList[0]);
	};

	const buildBoard = (board) => {
		const ids = setMoves();
		const boardDOM = document.createElement('div');
		boardDOM.classList.add('board');

		const alpha = 'ABCDEFGHIJ'.split('');
		const num = [...Array(11).keys()].slice(1).reverse();

		alpha.forEach((letter, i) => {
			//adding row labels here
			if (i === 0) {
				const blank = document.createElement('div');
				blank.classList.add('blank');
				blank.classList.add('label');
				boardDOM.appendChild(blank);
			}
			const rowLabel = document.createElement('div');
			rowLabel.classList.add(letter);
			rowLabel.classList.add('label');
			rowLabel.classList.add('row-label');
			rowLabel.innerHTML = letter;
			boardDOM.appendChild(rowLabel);
		});

		ids.forEach((id, i) => {
			if (i + 1 === 1 || i % 10 === 0) {
				//adding column labels here
				const columnLabel = document.createElement('div');
				const classId = num.pop();
				columnLabel.classList.add(classId);
				columnLabel.classList.add('label');
				columnLabel.classList.add('column-label');
				columnLabel.innerHTML = classId;
				boardDOM.appendChild(columnLabel);
			}
			//actual board elements
			const boardElement = document.createElement('div');
			boardElement.classList.add(id);
			boardElement.classList.add('board-element');
			if (id in board.getBoard()) {
				boardElement.classList.add('ship');
			}
			boardElement.addEventListener('click', boardClick);
			boardDOM.appendChild(boardElement);
		});
		return boardDOM;
	};

	const setBoards = () => {
		const humanBoardDOM = document.getElementById('humanBoard');
		const computerBoardDOM = document.getElementById('computerBoard');
		humanBoardDOM.appendChild(buildBoard(humanBoard));
		computerBoardDOM.appendChild(buildBoard(computerBoard));
	};

	const render = () => {
		setBoards();
	};

	return { render };
})();

export { Game };
