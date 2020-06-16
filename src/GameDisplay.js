const Game = (() => {
	return {};
})();

// const DisplayController = (function () {
// 	'use strict';
// 	const board = document.getElementById('board');
// 	const results = document.getElementById('results');
// 	const gameOver = document.getElementById('game-over');
// 	const reset = document.getElementById('reset');

// 	const playerForm = document.getElementById('playerForm');

// 	reset.addEventListener('click', resetGame);
// 	playerForm.addEventListener('submit', updateNames);

// 	function updateNames(e) {
// 		e.preventDefault();
// 		playerX.setName(document.getElementById('playerOneName').value);
// 		playerO.setName(document.getElementById('playerTwoName').value);
// 		console.log(e);
// 	}

// 	function resetGame(e) {
// 		console.log('click');
// 		GameBoard.clearBoard();
// 		setBoard();
// 		gameOver.style.display = 'none';
// 	}

// 	function freezeBoard() {
// 		board
// 			.querySelectorAll('*')
// 			.forEach((n) => n.removeEventListener('click', playClick));
// 	}

// 	function playClick(e) {
// 		if (e.target.id === '') {
// 			return;
// 		}
// 		if (GameBoard.getValue(e.target.id) === null) {
// 			let currentPlayer = playerX.turn ? playerX : playerO;
// 			let nextPlayer = !playerX.turn ? playerX : playerO;
// 			currentPlayer.turn = false;
// 			nextPlayer.turn = true;
// 			updatePlayArea(e.target, currentPlayer.value);
// 			let gameStatus = GameBoard.updateBoard(e.target.id, currentPlayer.value);
// 			if (gameStatus) declareResult(gameStatus, currentPlayer);
// 		}
// 	}

// 	function declareResult(gameStatus, currentPlayer) {
// 		gameOver.style.display = 'block';
// 		if (gameStatus == 'tie') results.innerHTML = 'Tie Game!!';
// 		else results.innerHTML = `${currentPlayer.getName()} won!!`;
// 		freezeBoard();
// 	}

// 	function addElement(x, y) {
// 		const playArea = document.createElement('div');
// 		playArea.classList.add('play');
// 		playArea.setAttribute('id', `${x}_${y}`);
// 		playArea.addEventListener('click', playClick);
// 		board.appendChild(playArea);
// 	}

// 	function updatePlayArea(playArea, value = null) {
// 		const playerMove = document.createElement('div');
// 		if (value === 'X') {
// 			playerMove.classList.add('playerOne');
// 			playArea.appendChild(playerMove);
// 		} else if (value === 'O') {
// 			playerMove.classList.add('playerTwo');
// 			playArea.appendChild(playerMove);
// 		}
// 	}

// 	function getPlayArea(x, y) {
// 		return document.getElementById(`${x}_${y}`);
// 	}

// 	function setBoard() {
// 		let x = 1,
// 			y = 1;
// 		GameBoard.gameBoard.forEach((row) => {
// 			row.forEach((e) => {
// 				if (getPlayArea(x, y) !== null) getPlayArea(x, y).remove();
// 				addElement(x, y);
// 				x++;
// 			});
// 			y++;
// 			x = 1;
// 		});
// 	}

// 	return { setBoard };
// })();
