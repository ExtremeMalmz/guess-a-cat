const catpicsSlash = "catpics/";
const png = ".png";

var globalIsQuestionAnswered = false;

//checks if points have been given
var globalNumOfPointsGiven = 0;

//list of all picture files
const catpicArray = ["alcoholic_cat", "boots1", "boots2", "boots3", "henry1", "henry2", "max1", "max2", "peach1", "peach2"];
//list of right answers 0- the alcoholic cat 1- boots 2- henry 3- max 4- peach
const rightAnswers = ["0", "1", "1", "1", "2", "2", "3", "3", "4", "4"];
//list of cat names used to determine the button innerhtml
const catNameArray = ["Alcoholic Cat", "Boots", "Henry", "Max","Peach"];

function winOrLoseGame(winOrLose){
    if(winOrLose == "win"){
        //winning message
        console.log("you win!");

        localStorage.setItem("winOrLose","win");
        //location.href = "win_or_lose/index.html";
    }
    else if(winOrLose == "lose"){
        //losing message
        console.log("loser!");

        localStorage.setItem("winOrLose","lose");
        //location.href = "win_or_lose/index.html";
    }
}

if(globalIsQuestionAnswered == true){
    document.addEventListener("click", alertThemThatTheyreWrong());
}

function alertThemThatTheyreWrong(){
    alert("no you cant guess again!");
}

function checkIfGameIsOver(){
    numOfPoints = localStorage.getItem("gamePoints");

    //check if the points are -10 or 10
    if(numOfPoints <= -10){
        winOrLoseGame("lose");
        return true;
    }
    else if(numOfPoints >= 10){
        winOrLoseGame("win");
        return true;
    }
    else{
        console.log("carry on the game");
        return false;
    }
}

function nextQuestion(){
    //this stuff happens when the next question button is clicked
    var isGameOver = checkIfGameIsOver();
    
    //since its endless it will always reload
    location.reload();
}

function checkTheAnswer(answer){
    
    if(answer == correctCatName){
        //checks if the wrong answer has already been selected
        if(document.getElementById("wronganswer").style.display == "block"){
            //does nothing if the wrong answer was already selected
        }
        else{
            console.log("YOU WERE RIGHT!");

            //add a point to the point counter
            //console.log(localStorage.getItem("points"));
            if(localStorage.getItem("gamePoints") == null){
                //if theres 0 points aka NULL value in the points 
                localStorage.setItem("gamePoints", 1);
                document.getElementById("points").innerHTML = "Points: " + localStorage.getItem("gamePoints");
            }
            else if(globalNumOfPointsGiven == 0){
                //add points to the points counter
                var numOfPoints = localStorage.getItem("gamePoints")
                numOfPoints++;

                localStorage.setItem("gamePoints", numOfPoints);

                document.getElementById("points").innerHTML = "Points: " + localStorage.getItem("gamePoints");

                document.getElementById("rightanswer").style.display = "block";

                //so that you cant click and get it again
                globalNumOfPointsGiven = 1;
            }
            else{
                //catch the rest
                console.log("nothing happens!")
            }
        }
    }
    else{
        if(document.getElementById("rightanswer").style.display == "block"){
            //does nothing if the right answer was already selected
        }
        else{
            console.log("YOUR WRONG!");
            document.getElementById("wronganswer").style.display = "block"; 

            if(globalNumOfPointsGiven == 0){
                //add points to the points counter
                var numOfPoints = localStorage.getItem("gamePoints")
                numOfPoints--;

                

                localStorage.setItem("gamePoints", numOfPoints);

                document.getElementById("points").innerHTML = "Points: " + localStorage.getItem("gamePoints");

                document.getElementById("wronganswer").style.display = "block";

                //so that you cant click and get it again
                globalNumOfPointsGiven = 1;
            }
        }
    }

    if(globalIsQuestionAnswered == true){
        document.addEventListener("click", alertThemThatTheyreWrong());
    }
    else{
        globalIsQuestionAnswered = true;
    }

}

function button1Selected(){
    //console.log("butt one!");

    let answer = document.getElementById("0").innerHTML;

    checkTheAnswer(answer);
}

function button2Selected(){
    //console.log("butt two!");

    let answer = document.getElementById("1").innerHTML;

    checkTheAnswer(answer);
}

function button3Selected(){
    //console.log("butt three!");

    let answer = document.getElementById("2").innerHTML;
    
    checkTheAnswer(answer);
}

function button4Selected(){
    //console.log("butt four!");

    let answer = document.getElementById("3").innerHTML;
    
    checkTheAnswer(answer);
}

function initializeWebsite(){
    //initialises website
    document.getElementById("rightanswer").style.display = "none";
    document.getElementById("wronganswer").style.display = "none";

    //points set to their value
    if(localStorage.getItem("gamePoints") == null){
        document.getElementById("points").innerHTML = "Points: " + 0;
        console.log("asda");
    }
    else{
        //console.log("aaaa");
        document.getElementById("points").innerHTML = "Points: " + localStorage.getItem("gamePoints");
    }   
}

//----------------------------------------------------\\
function fillTheButtons(correctCatName){
    //fills the buttons with the correct cat
    var arrayOfFour = ["0","1","2","3"]
    var catNamesInButtonsArray = [];

    var correctAnswerButton = Math.floor(Math.random() * arrayOfFour.length);
    arrayOfFour.splice(correctAnswerButton,1);

    catNamesInButtonsArray.push(correctCatName);

    document.getElementById(correctAnswerButton).innerHTML = correctCatName;

    for(var i = 0;i < 3;i++){
        //adds to the array of current cat names to prevent duplicates
        catNamesInButtonsArray.push(correctCatName);
        var selectedIndex = Math.floor(Math.random() * arrayOfFour.length);

        var selectedCatIndex =  Math.floor(Math.random() * catNameArray.length);
        var selectedCatName = catNameArray[selectedCatIndex];

        if(catNamesInButtonsArray.includes(selectedCatName )){
            //if the cat name is already in the buttons then we will repeat the loop one more time.
            i--;
        }
        else{
            catNamesInButtonsArray.push(selectedCatName);
            
            //console.log(selectedCatName + " IS NOT IN THE ARRAY!");
            //console.log(catNamesInButtonsArray);    

            //add it to the array
            document.getElementById(arrayOfFour[selectedIndex]).innerHTML = selectedCatName;

            arrayOfFour.splice(selectedIndex,1);
        }
    }
}

//starts the game

initializeWebsite();

//random catpic array index
var randomCatID = Math.floor(Math.random() * catpicArray.length);
//console.log(randomCatID)

//this is the correct answer 0-4
var rightAnswersID = rightAnswers[randomCatID];
//console.log("RIGHTANSWER")
//console.log(rightAnswersID)

//set the catpic ID to the image
document.getElementById("catImage").src = "../" + catpicsSlash + catpicArray[randomCatID] + png;

//the correct cat name
var correctCatName = catNameArray[rightAnswersID];
//console.log(correctCatName);

fillTheButtons(correctCatName);

alert("WELCOME TO ENDLESS MODE\nThere is no escape from here!")