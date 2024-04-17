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

const displayName = function (one, two ) {
    const displayName1 = document.querySelector(".player-one-name");
    const displayName2 = document.querySelector(".player-two-name");
    displayName1.innerText = one;
    displayName2.innerText = two;
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
})

buttonBack.addEventListener("click", () => {
    window.location.reload();
})

buttonNewGame.addEventListener("click", () => {
    window.location.reload();
})

// buttonReset.addEventListener("click", () => {

// })

buttonNext.addEventListener("click", () => {
    swapDisplayContainer(playerNameMode, playMode)
    displayName(player1Name.value, player2Name.value)

})