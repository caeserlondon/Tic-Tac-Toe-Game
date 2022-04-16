let playeText = document.getElementById("playeText");
let restartBtn = document.getElementById("restartBtn");
let boxes = Array.from(document.getElementsByClassName("box"));

console.log(boxes);

const O_TEXT = "O";
const X_TEXT = "X";
let cuurentPlayer = X_TEXT;
let spaces = Array(9).fill(null);

console.log(spaces);
