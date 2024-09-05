let btns = document.querySelectorAll(".btn");
let resetbtn = document.querySelector("#resetbtn");
let text = document.querySelector(".turn");
let turn = "X";
let gameEnded = 0;
let winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
const checkWinner = () => {
    for (let pattern of winPattern) {
        btn1 = btns[pattern[0]].innerHTML;
        btn2 = btns[pattern[1]].innerHTML;
        btn3 = btns[pattern[2]].innerHTML;
        if (btn1 != "" && btn2 != "" && btn3 != "") {
            if (btn1 === btn2 && btn2 === btn3) {
                console.log("game has ended!");
                gameEnded = 1;
            }
        }
        if (gameEnded == 1) {
            btns.forEach((btn) => {
                btn.disabled = true;
                if (turn == "X") {
                    text.innerHTML = "O has won the game!";
                }
                else {
                    text.innerHTML = "X has won the game!";
                }
            })
        }
    }
}
resetbtn.addEventListener("click", () => {
    btns.forEach((btn) => {
        btn.innerHTML = "";
        btn.disabled = false;
        text.innerHTML = "X's turn";
        gameEnded = 0;
    })
})
btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log("clicked");
        btn.innerHTML = turn;
        btn.disabled = true;
        if (turn == "X") {
            text.innerHTML = "O's Turn!";
            turn = "O";
        }
        else {
            turn = "X";
            text.innerHTML = "X's Turn!";
        }
        checkWinner();
    })
})
