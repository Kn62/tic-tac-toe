const gameMode = document.querySelector(".first-container");
const playerNameMode = document.querySelector(".second-container");
const player1Name = document.querySelector("#first-player");
const player2Name = document.querySelector("#second-player");
const buttonPvp = document.querySelector(".button-pvp");
const buttonPve = document.querySelector(".button-pve");
const buttonBack = document.querySelector(".back-button")
const buttonNext = document.querySelector(".next-button")
const playMode = document.querySelector(".third-container") 

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
})

buttonBack.addEventListener("click", () => {
    swapDisplayContainer(playerNameMode, gameMode)
})

buttonNext.addEventListener("click", () => {
    swapDisplayContainer(playerNameMode, playMode)
    const player1 = player1Name.value;
    const player2 = player2Name.value;
    console.log(player1);
    console.log(player2);
})