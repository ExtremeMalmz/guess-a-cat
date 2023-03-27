function newGame(){
    localStorage.setItem("gamePoints", 0);
    location.href = "game/index.html";
}

function continueGame(){
    location.href = "game/index.html";
}