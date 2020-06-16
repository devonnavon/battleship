import { setMoves } from './helpers';

const Game = (() => {
	const buildBoard = () => {
		const ids = setMoves();
		const board = document.createElement('div');
		board.classList.add('board');

		'ABCDEFGHIJ'.split('');

		ids.forEach((id, i) => {
			const boardElement = document.createElement('div');
			boardElement.classList.add(id);
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
