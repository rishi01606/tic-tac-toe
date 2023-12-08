let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".resetBtn");
let turn_O = true;
let newGameBtn = document.querySelector(".newGame")
let masgeCont = document.querySelector(".massage")
let msg = document.querySelector("#masg")
let mainGame = document.querySelector(".game")
const winnigPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn_O) {
            box.innerText = "O";
            turn_O = false;
        }
        else {
            box.innerText = "X";
            turn_O = true;
        }
        box.disabled = true;
        checkWinner()
    });
});




const checkWinner = () => {
    for (pattern of winnigPattern) {
        let pos0val = boxes[pattern[0]].innerText;
        let pos1val = boxes[pattern[1]].innerText;
        let pos2val = boxes[pattern[2]].innerText;
        if (pos0val != 0 && pos1val != 0 && pos2val != 0) {
            if (pos0val === pos1val && pos1val === pos2val) {
                shoWinner(pos0val);
            }

        }
    }
}

const shoWinner = (winner) => {
    msg.innerText = `Congratulation Winner is ${winner}`;
    masgeCont.classList.remove("hide");
    mainGame.classList.add("hide");
    disableBtn();

}

let disableBtn = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
let enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
let resetGame = () => {
    turn_O = true;
    enableBoxes();
    masgeCont.classList.add("hide");
    mainGame.classList.remove("hide");
}

newGameBtn.addEventListener("click", resetGame)
resetBtn.addEventListener("click", resetGame)