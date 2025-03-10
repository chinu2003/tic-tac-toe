let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn")
let newBtn = document.querySelector("#new-btn")
let winner1 = document.querySelector(".msg")
let msgContainer = document.querySelector(".mess-container")

let turnX = true;

const winningPatterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]


const resetGame=()=>{
    turnX=true;
    enableBoxes();
    msgContainer.classList.add("hide");

}





boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnX) {
            box.innerText = "X";
            turnX = false;
        } else {
            box.innerText = "0";
            turnX = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}





const showWinner = (winner) => {
    winner1.innerText = `Congratulations,winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}


let checkWinner = () => {
    for (pattern of winningPatterns) {
        let posVal0 = boxes[pattern[0]].innerText;
        let posVal1 = boxes[pattern[1]].innerText;
        let posVal2 = boxes[pattern[2]].innerText;

        if (posVal0 != "" && posVal1 != "" && posVal2 != "") {
            if (posVal0 === posVal1 && posVal1 === posVal2) {
                console.log("winner", posVal0);
                showWinner(posVal0);
            }
        }

    }
}


newBtn.addEventListener("click",resetGame)
resetBtn.addEventListener("click",resetGame)

