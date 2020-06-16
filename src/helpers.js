const setMoves = () => {
	const alpha = 'ABCDEFGHIJ'.split('');
	const num = [...Array(11).keys()].slice(1);
	let f = (a, b) => [].concat(...a.map((a) => b.map((b) => [].concat(a, b))));
	let cartesian = (a, b, ...c) => (b ? cartesian(f(a, b), ...c) : a);
	let allMoves = [];
	// if (order) {
	let letnum = cartesian(alpha, num);
	[...Array(11).keys()].slice(1).forEach((i) => {
		letnum.forEach((e) => {
			if (e[1] === i) allMoves.push(e.join(''));
		});
	});
	// } else {
	// 	cartesian(alpha, num).forEach((e) => {
	// 		allMoves.push(e.join(''));
	// 	});
	// }
	return allMoves;
};

export { setMoves };
