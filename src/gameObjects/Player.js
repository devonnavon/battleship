import { setMoves } from '../helpers';

const Player = (user = 'human') => {
	let allMoves = setMoves();
	let turn = user === 'human' ? true : false;
	let board;

	const setBoard = (b) => {
		board = b;
	};
	const getBoard = () => board;

	const attack = (enemy, coords) => {
		if (user === 'computer') {
			coords = getMove();
		}
		let hit = enemy.getBoard().receiveAttack(coords);
		history[coords] = true;
		if (!hit) {
			enemy.setTurn();
			setTurn();
		}
	};

	const getTurn = () => turn;
	const setTurn = () => {
		turn = turn ? false : true;
	};

	const getMove = () => {
		let num = Math.floor(Math.random() * allMoves.length);
		let move = allMoves[num];
		allMoves = allMoves.filter((e) => e != move);
		return move;
	};

	// const setMoves = () => {
	// 	const alpha = 'ABCDEFGHIJ'.split('');
	// 	const num = [...Array(11).keys()].slice(1);
	// 	let f = (a, b) => [].concat(...a.map((a) => b.map((b) => [].concat(a, b))));
	// 	let cartesian = (a, b, ...c) => (b ? cartesian(f(a, b), ...c) : a);
	// 	let allMoves = [];
	// 	cartesian(alpha, num).forEach((e) => {
	// 		allMoves.push(e.join(''));
	// 	});
	// 	return allMoves;
	// };

	return { setBoard, getBoard, attack, getTurn, setTurn };
};

export { Player };
