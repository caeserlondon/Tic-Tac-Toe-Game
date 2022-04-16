let playerText = document.getElementById("playeText");
let restartBtn = document.getElementById("restartBtn");
let boxes = Array.from(document.getElementsByClassName("box"));

let winningIndicator = getComputedStyle(document.body).getPropertyValue(
	"--winning-blocks"
);

// console.log(boxes);

const O_TEXT = "O";
const X_TEXT = "X";
let currentPlayer = X_TEXT;
let spaces = Array(9).fill(null);

// console.log(spaces);

const startGame = () => {
	boxes.forEach((box) => box.addEventListener("click", boxClicked));
};

function boxClicked(e) {
	// console.log(e.target);
	const id = e.target.id;

	if (!spaces[id]) {
		spaces[id] = currentPlayer;
		e.target.innerText = currentPlayer;

		if (playerHasWon() !== false) {
			playerText = `${currentPlayer} has won!`;
			let winning_blocks = playerHasWon();

			console.log(winning_blocks);
		}

		currentPlayer = currentPlayer == X_TEXT ? O_TEXT : X_TEXT;
	}
}

const winningcombos = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

function playerHasWon() {
	for (const condition of winningcombos) {
		let [a, b, c] = condition;

		if (spaces[a] && spaces[a] == spaces[b] && spaces[a] == spaces[c]) {
			return [a, b, c];
		}
	}
	return false;
}

restartBtn.addEventListener("click", restart);

function restart() {
	spaces.fill(null);

	boxes.forEach((box) => {
		box.innerText = "";
	});

	playerText = "Tic Tac Toe";

	currentPlayer = X_TEXT;
}

startGame();
