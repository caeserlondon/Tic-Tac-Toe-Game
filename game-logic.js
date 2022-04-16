let playeText = document.getElementById("playeText");
let restartBtn = document.getElementById("restartBtn");
let boxes = Array.from(document.getElementsByClassName("box"));

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

		currentPlayer = currentPlayer == X_TEXT ? O_TEXT : X_TEXT;
	}
}

restartBtn.addEventListener("click", restart);

function restart() {
	spaces.fill(null);

	boxes.forEach((box) => {
		box.innerText = "";
	});

	currentPlayer = X_TEXT;
}

startGame();
