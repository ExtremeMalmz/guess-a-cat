const catpicsSlash = "catpics/";
const png = ".png";

var globalIsQuestionAnswered = false;

//list of all picture files
const catpicArray = ["alcoholic_cat", "boots1", "boots2", "boots3", "henry1", "henry2", "max1", "max2", "peach1", "peach2"];
//list of right answers 0- the alcoholic cat 1- boots 2- henry 3- max 4- peach
const rightAnswers = ["0", "1", "1", "1", "2", "2", "3", "3", "4", "4"];
//list of cat names used to determine the button innerhtml
const catNameArray = ["Alcoholic Cat", "Boots", "Henry", "Max","Peach"];

if(globalIsQuestionAnswered == true){
    document.addEventListener("click", alertThemThatTheyreWrong());
}

function alertThemThatTheyreWrong(){
    alert("no you cant guess again!");
}

function nextQuestion(){
    location.reload();
}

function checkTheAnswer(answer){
    if(answer == correctCatName){
        console.log("YOU WERE RIGHT!");
        document.getElementById("rightanswer").style.display = "block";
    }
    else{
        console.log("YOUR WRONG!");
        document.getElementById("wronganswer").style.display = "block"; 
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
    document.getElementById("rightanswer").style.display = "none";
    document.getElementById("wronganswer").style.display = "none";
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
            
            //console.log(selectedCatName);
            //console.log("DUPE");
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
document.getElementById("catImage").src = catpicsSlash + catpicArray[randomCatID] + png;

//the correct cat name
var correctCatName = catNameArray[rightAnswersID];
//console.log(correctCatName);

fillTheButtons(correctCatName);