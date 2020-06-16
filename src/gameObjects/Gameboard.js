const Gameboard = () => {
	const board = {};
	let misses = 0;

	const place = (ship, orientation, coords) => {
		const letter = coords.split('')[0];
		const num = Number(coords.split('').slice(1).join(''));
		if (orientation === 'hor') {
			const letnum = letter.charCodeAt(0);
			for (let i = 0; i < ship.length(); i++) {
				board[String.fromCharCode(letnum + i) + num] = {
					ship: ship,
					index: i,
				};
			}
		} else if (orientation === 'ver') {
			for (let i = 0; i < ship.length(); i++) {
				board[letter + (num + i)] = { ship: ship, index: i };
			}
		}
	};

	const receiveAttack = (coords) => {
		if (coords == null) {
			throw Error('you fucked up!');
		}
		if (!(coords in board)) {
			misses++;
			return false;
		} else {
			const boardObj = board[coords];
			boardObj.ship.hit(boardObj.index);
			return true;
		}
	};

	const getMisses = () => misses;

	const gameOver = () => {
		for (const key in board) {
			if (!board[key].ship.isSunk()) return false;
		}
		return true;
	};

	const getBoard = () => board;

	return { place, receiveAttack, getMisses, getBoard, gameOver };
};

export { Gameboard };
