const setup = () => {
	const container = document.createElement('div');
	container.setAttribute('id', 'container');
	document.body.appendChild(container);

	const ships = document.createElement('div');
	const board1 = document.createElement('div');
	const board2 = document.createElement('div');

	ships.setAttribute('id', 'ships');
	board1.setAttribute('id', 'humanBoard');
	board2.setAttribute('id', 'computerBoard');

	container.appendChild(ships);
	container.appendChild(board1);
	container.appendChild(board2);
};

export { setup };
