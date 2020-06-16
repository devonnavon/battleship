import { setMoves } from './helpers';

const Game = (() => {
	const boardClick = (e) => {
		console.log(e.target.classList[0]);
	};

	const buildBoard = () => {
		const ids = setMoves();
		const board = document.createElement('div');
		board.classList.add('board');

		const alpha = 'ABCDEFGHIJ'.split('');
		const num = [...Array(11).keys()].slice(1).reverse();

		alpha.forEach((letter, i) => {
			//adding row labels here
			if (i === 0) {
				const blank = document.createElement('div');
				blank.classList.add('blank');
				blank.classList.add('label');
				board.appendChild(blank);
			}
			const rowLabel = document.createElement('div');
			rowLabel.classList.add(letter);
			rowLabel.classList.add('label');
			rowLabel.classList.add('row-label');
			rowLabel.innerHTML = letter;
			board.appendChild(rowLabel);
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
				board.appendChild(columnLabel);
			}

			const boardElement = document.createElement('div');
			boardElement.classList.add(id);
			boardElement.classList.add('board-element');
			boardElement.addEventListener('click', boardClick);
			board.appendChild(boardElement);
		});
		return board;
	};

	const setBoards = () => {
		const humanBoard = document.getElementById('humanBoard');
		const computerBoard = document.getElementById('computerBoard');
		humanBoard.appendChild(buildBoard());
		computerBoard.appendChild(buildBoard());
	};

	const render = () => {
		setBoards();
	};

	return { render };
})();

export { Game };
