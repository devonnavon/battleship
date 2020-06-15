const Ship = (l) => {
	const ship = Array(l).fill(0);
	const sum = () => ship.reduce((a, b) => a + b);
	const length = () => ship.length;
	const isSunk = () => sum() === length();
	const isHit = () => sum() >= 1;
	const hit = (position) => {
		ship[position] = 1;
	};
	return { length, isSunk, isHit, hit };
};

export { Ship };
