const gameMode = document.querySelector(".first-container");
const playerNameMode = document.querySelector(".second-container");
const playMode = document.querySelector(".third-container");
const player1Name = document.querySelector("#first-player");
const player2Name = document.querySelector("#second-player");
const gameOptions = document.querySelectorAll(".game-options");
const buttonPvp = document.querySelector(".button-pvp");
const buttonPve = document.querySelector(".button-pve");
const buttonBack = document.querySelector(".back-button");
const buttonNext = document.querySelector(".next-button");
const buttonNewGame = document.querySelector(".newgame-button");
const buttonReset = document.querySelector(".reset-button");

let isPVE = false; 

const playerFactory = function (nickname, choice) {
    const getNickname =  nickname;
    const getChoice =  choice;
    return { getNickname, getChoice };
};

const displayName = function (one, two ) {
    const displayName1 = document.querySelector(".player-one-name");
    const displayName2 = document.querySelector(".player-two-name");
    displayName1.innerText = one;
    displayName2.innerText = two;
}

const startNewGame = function () {
    const playerOneInfo = playerFactory(player1Name.value, "X");
    const playerTwoInfo = playerFactory(player2Name.value, "O");
    let curentTurn = "1"
    let gameArray = []
    
    for (let i = 0; i < gameOptions.length; i++) {
        gameArray.push(`${gameOptions[i].innerText}`)

        gameOptions[i].addEventListener("click", () => {
            if (gameOptions[i].innerText === "") {
                if (curentTurn === "1") {
                    gameOptions[i].innerText = playerOneInfo.getChoice;
                    gameArray[i] = playerOneInfo.getChoice
                    curentTurn = "0"
                } else {
                    gameOptions[i].innerText = playerTwoInfo.getChoice;
                    gameArray[i] = playerTwoInfo.getChoice
                    curentTurn = "1"
                }
            }
            console.log(gameArray)
            // winningCheck(gameArray)
        } )
    }


}

const swapDisplayContainer = function (from, to) {
 from.style.display = "none";
 to.style.display = "flex";
}

buttonPvp.addEventListener("click", () => {
    swapDisplayContainer(gameMode, playerNameMode)
})

buttonPve.addEventListener("click", () => {
    swapDisplayContainer(gameMode, playerNameMode);
    player2Name.value = "BOT";
    player2Name.disabled = "true";
    isPVE = true
})

buttonBack.addEventListener("click", () => {
    window.location.reload();
})

buttonNewGame.addEventListener("click", () => {
    window.location.reload();
})

buttonReset.addEventListener("click", () => {

})

buttonNext.addEventListener("click", () => {
    // const playerOneInfo = playerFactory(player1Name.value, "X");
    // const playerTwoInfo = playerFactory(player2Name.value, "O");
    startNewGame();


    swapDisplayContainer(playerNameMode, playMode);
    displayName(player1Name.value, player2Name.value);

})

// const winningCheck = function (array) {
//     const winningCondition = [
//         [0, 1, 2]
//         [0, 4, 8]
//         [0, 3, 6]
//         [1, 4, 7]
//         [2, 4, 6]
//         [2, 5, 8]
//         [3, 4, 5]
//         [6, 7, 8]
//     ]

//     for (let i = 0; i < winningCondition.length; i++) {
//         const[a, b, c] = winningCondition[i];
//         if (array[a] !== "") {

//             if (array[a] === array[b] &&
//                 array[b] === array[c]) {
//                     console.log("win")
//             }
//         }
//     }        
// }

