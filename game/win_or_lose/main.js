const winOrLose = localStorage.getItem("winOrLose");

/*
IF the player won the game then this happens
*/
if(winOrLose == "win"){
    document.title = "YOU WIN";
    document.body.style.backgroundImage = "url('win_lose_screen/winscreen.jpg')";

    document.getElementById("goBackToHome").style.color = "green";
}
/*
Else they lost and then this stuff happens
*/
else if(winOrLose == "lose"){
    document.title = "YOU LOSE";
    document.body.style.backgroundImage = "url('win_lose_screen/gameover.jpg')";

    document.getElementById("goBackToHome").style.color = "red";
}


document.getElementById("goBackToHome").addEventListener("click",goToMainMenu => location.href = "../../index.html");