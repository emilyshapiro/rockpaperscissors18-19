// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/*global $ */



// DOCUMENT READY FUNCTION BELOW
$( document ).ready(function(){

var userChoice = "";
var computerChoice = "";
var winner = "";

var randomNumber = 0;
    
$("#shoot").click(function(){
    $("#input").empty();
    userChoice=$("#input").val().toLowerCase();
        $("#userChoice").text(userChoice);
        
    
    randomNumber=Math.random();
        if (randomNumber <= .33) {
            computerChoice= "rock";
        }
        else if (randomNumber>.33 && randomNumber<=.66){
            computerChoice="paper";
        }
        else if (randomNumber>.66){
            computerChoice="scissors";
        }
        
    $("#computerChoice").text(computerChoice);
      
    if ((userChoice === "rock" && computerChoice === "paper") || 
        (userChoice === "paper" && computerChoice === "scissors") || 
        (userChoice === "scissors" && computerChoice === "rock")){
        $("#result").text("Computer Wins");
    }
    
    else if((userChoice === "rock" && computerChoice === "scissors") ||
            (userChoice === "paper" && computerChoice === "rock") ||
            (userChoice === "scissors" && computerChoice === "paper")) {
            $("#result").text("User Wins");
            }
    
    else if (userChoice===computerChoice){
    $("#result").text("Tie");
    }
    
    else{
        $("#result").text("Select rock, paper or scissors");
    }
    
        
    });
});
