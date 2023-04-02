function newGame(){
    localStorage.setItem("gamePoints", 0);
    location.href = "game/index.html";
}

function continueGame(){
    //if more than 10 points you get the endless mode
    if(localStorage.getItem("gamePoints") >= 10){
        alert("WELCOME TO ENDLESS MODE\nThere is no escape from here!");
        location.href = "game/endless_mode/index.html";
    }
    else{
        location.href = "game/index.html";
    }
}