// Assign the first player to "hic" to start the game
let currentPlayer = "hic";

// Status of game; if game is not active, it means no player can play or game is over
let gamePlaying = true;

// restart function to execute once restart button is clicked
let restartGame = document.querySelector(".restart-btn").addEventListener("click", restart);

// get all grid boxes so we can add event listener to each later
let tableBox = document.querySelectorAll(".box");

// loop through each box so to add event listener to each box
for (let i = 0; i < tableBox.length; i++) {
    let allBox = tableBox[i];
    allBox.addEventListener("click", function (event) {

        // if each box is empty and if game is active
        if (event.target.textContent === "" && gamePlaying) {

            // mark the box with "hic" or "hac" for current player
            event.target.textContent = currentPlayer;

            // change player's turn
            if (currentPlayer === "hic") {
                currentPlayer = "hac";
                allBox.style.color = "#00ff00";
            } else {
                currentPlayer = "hic";
                allBox.style.color = "#66ffff";
            }

            // change player's name on top of the game board
            document.querySelector(".player").textContent = currentPlayer.toUpperCase();

            winningConditions();
            draw();
        }
    });
}

// check if three "hic"s or three "hac"s matching
// winning condition is either one of these: 
// [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

let winningConditions = function () {
    if (
        tableBox[0].textContent === tableBox[1].textContent &&
        tableBox[1].textContent === tableBox[2].textContent &&
        tableBox[0].textContent !== ""
    ) {
        displayWinner(0, 1, 2);
    } else if (
        tableBox[3].textContent === tableBox[4].textContent &&
        tableBox[4].textContent === tableBox[5].textContent &&
        tableBox[3].textContent !== ""
    ) {
        displayWinner(3, 4, 5);
    } else if (
        tableBox[6].textContent === tableBox[7].textContent &&
        tableBox[7].textContent === tableBox[8].textContent &&
        tableBox[6].textContent !== ""
    ) {
        displayWinner(6, 7, 8);
    } else if (
        tableBox[0].textContent === tableBox[3].textContent &&
        tableBox[3].textContent === tableBox[6].textContent &&
        tableBox[0].textContent !== ""
    ) {
        displayWinner(0, 3, 6);
    } else if (
        tableBox[1].textContent === tableBox[4].textContent &&
        tableBox[4].textContent === tableBox[7].textContent &&
        tableBox[1].textContent !== ""
    ) {
        displayWinner(1, 4, 7);
    } else if (
        tableBox[2].textContent === tableBox[5].textContent &&
        tableBox[5].textContent === tableBox[8].textContent &&
        tableBox[2].textContent !== ""
    ) {
        displayWinner(2, 5, 8);
    } else if (
        tableBox[0].textContent === tableBox[4].textContent &&
        tableBox[4].textContent === tableBox[8].textContent &&
        tableBox[0].textContent !== ""
    ) {
        displayWinner(0, 4, 8);
    } else if (
        tableBox[2].textContent === tableBox[4].textContent &&
        tableBox[4].textContent === tableBox[6].textContent &&
        tableBox[2].textContent !== ""
    ) {
        displayWinner(2, 4, 6);
    }
}

// if all boxes are checked and no winning array is met, it's a draw
// if winning conditions is not met, display a draw message
let draw = function () {
    if (
        (tableBox[0].textContent === "hic" || tableBox[0].textContent === "hac") &&
        (tableBox[1].textContent === "hic" || tableBox[1].textContent === "hac") &&
        (tableBox[2].textContent === "hic" || tableBox[2].textContent === "hac") &&
        (tableBox[3].textContent === "hic" || tableBox[3].textContent === "hac") &&
        (tableBox[4].textContent === "hic" || tableBox[4].textContent === "hac") &&
        (tableBox[5].textContent === "hic" || tableBox[5].textContent === "hac") &&
        (tableBox[6].textContent === "hic" || tableBox[6].textContent === "hac") &&
        (tableBox[7].textContent === "hic" || tableBox[7].textContent === "hac") &&
        (tableBox[8].textContent === "hic" || tableBox[8].textContent === "hac")) {

        if (gamePlaying) {

            let drawMessage = document.querySelector("#draw");
            drawMessage.textContent = "It's a HOE!";

            let displayDrawMessage = document.querySelector(".show-draw-message");
            displayDrawMessage.style.display = "block";
        }
    }
}


// Display winner message function
// Each parameter represents each element of a winning array
// Turn boxes to red and font to white for winning array
function displayWinner(boxA, boxB, boxC) {
    tableBox[boxA].style.background = "red";
    tableBox[boxA].style.color = "white";
    tableBox[boxB].style.background = "red";
    tableBox[boxB].style.color = "white";
    tableBox[boxC].style.background = "red";
    tableBox[boxC].style.color = "white";

    let winner = currentPlayer === "hic" ? "HAC" : "HIC";
    document.querySelector(".winner").textContent = winner;

    document.querySelector(".show-winner-message").style.display = "block";
    gamePlaying = false;
}

// Restart game button function
function restart() {
    for (let i = 0; i < tableBox.length; i++) {
        let allBox = tableBox[i];
        allBox.textContent = "";
        allBox.style.backgroundColor = "#9c9cd9";
        allBox.style.color = "black";
    }

    // Reset the following back to the start of the game
    currentPlayer = "hic";
    document.querySelector(".show-winner-message").style.display = "none";
    document.querySelector(".show-draw-message").style.display = "none";
    document.querySelector(".player").textContent = "HIC";
    gamePlaying = true;
}