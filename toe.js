let boxes = document.querySelectorAll(".box");
let winnerDisplay = document.querySelector(".champ");
let resetBtn = document.querySelector(".resetbtn");

let turnO = true; // true for O, false for X
let gameActive = true;

const winPatterns = [
  [0, 1, 2], [0, 3, 6], [0, 4, 8],
  [1, 4, 7], [2, 5, 8], [2, 4, 6],
  [3, 4, 5], [6, 7, 8]
];

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        return;
      }
    }
  }
  
  // Check for Draw
  let isDraw = [...boxes].every(box => box.innerText !== "");
  if (isDraw && gameActive) {
    winnerDisplay.innerText = "It's a Draw!";
    gameActive = false;
  }
};

const showWinner = (winner) => {
  winnerDisplay.innerText = `Congratulations! Winner is ${winner}`;
  gameActive = false;
  boxes.forEach(box => box.disabled = true);
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (gameActive && box.innerText === "") {
      if (turnO) {
        box.innerText = "O";
        box.style.color = "#2fe4ad";
        turnO = false;
      } else {
        box.innerText = "X";
        box.style.color = "#ff4d4d";
        turnO = true;
      }
      checkWinner();
    }
  });
});

resetBtn.addEventListener("click", () => {
  turnO = true;
  gameActive = true;
  winnerDisplay.innerText = "";
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
});