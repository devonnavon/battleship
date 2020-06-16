import { setMoves } from './helpers';
import { Gameboard } from './gameObjects/Gameboard';
import { Player } from './gameObjects/Player';
import { Ship } from './gameObjects/Ship';

const Game = (() => {
	const human = Player();
	const computer = Player('computer');
	const humanBoard = Gameboard();
	const computerBoard = Gameboard();

	const getBoardDOM = () => {
		const humanBoardDOM = document.getElementById('humanBoard');
		const computerBoardDOM = document.getElementById('computerBoard');
		return { human: humanBoardDOM, computer: computerBoardDOM };
	};

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
		const ships = getShips();
		board.place(ships[0], 'ver', 'A1');
		board.place(ships[1], 'hor', 'C1');
		board.place(ships[2], 'hor', 'E4');
		board.place(ships[3], 'ver', 'H6');
	};
	placeShips(humanBoard);
	placeShips(computerBoard);

	const updateBoard = (board, boardDOM, move) => {
		const theBoard = board.getBoard();
		if (board.gameOver()) {
			console.log('Game Over!');
		} else {
			if (move in theBoard) {
				boardDOM.querySelector(['.', move].join('')).classList.add('hit');
			} else {
				boardDOM.querySelector(['.', move].join('')).classList.add('miss');
			}
		}
	};

	const boardClick = (e) => {
		if (human.getTurn()) {
			e.target.removeEventListener('click', boardClick);
			let humanMove = human.attack(computer, e.target.classList[0]);
			updateBoard(computerBoard, getBoardDOM().computer, humanMove);
			while (computer.getTurn()) {
				let computerMove = computer.attack(human);
				updateBoard(humanBoard, getBoardDOM().human, computerMove);
			}
		}
	};

	const buildBoard = (board, computer = false) => {
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
			if (computer) boardElement.addEventListener('click', boardClick);
			boardDOM.appendChild(boardElement);
		});
		return boardDOM;
	};

	const setBoards = () => {
		getBoardDOM().human.appendChild(buildBoard(humanBoard));
		getBoardDOM().computer.appendChild(buildBoard(computerBoard, true));
	};

	const render = () => {
		setBoards();
		human.setBoard(humanBoard);
		computer.setBoard(computerBoard);
	};

	return { render };
})();

export { Game };
