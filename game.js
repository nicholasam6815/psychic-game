//Array of choices for computer to choose from

var compChoice = ["a", "b", "c", "d", "e", "f", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

// VARIABLES
// ===============================================================

//We start with a score of zero and 9 guesses 
var wins = 0;
var losses = 0;
var numGuess = 9;

//Variable for guess
var guessChoice = [];

// Captures user key entry
document.onkeyup = function(event) {
    
//Determines key pressed
    var userGuess = event.key;

// Randomly chooses a choice from the options array
var compGuess = compChoice[Math.floor(Math.random()* compChoice.length)];

var opt = ["a", "b", "c", "d", "e", "f", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

// FUNCTIONS
// ===============================================================

//Starts with zero guesses from user
if (opt.indexOf(userGuess) > -1){

// If the user guesses the same as computer guess then a win is added number of guesses returns to 9
if(userGuess === compGuess){
    wins++;
    numGuess = 9;
    guessChoice = [];
}

// If the user does not guess the same as computer guess then number of guesses are decremented
if (userGuess != compGuess) {
    numGuess --;
    guessChoice.push(userGuess);
}
// If number of guess is zero then a loss is added and number of guess returns to 9
if (numGuess === 0) {
    numGuess = 9;
    losses ++;
    guessChoice = [];
}

//HTML keeps track of wins and losses
 var html =
"<h1> Psychic Game </h1>" +
			"<p>Guess what letter I'm thinking of?</p>" +
			"<p>Wins: " + wins + "</p>" +
			"<p>Losses: " + losses + "</p>" +
			"<p>Guesses Left: " + numGuess + "</p>" +
            "<p>Your Guesses so far: " + guessChoice.join(", ") + "</p>";

// Set the inner HTML contents of the #game div to our html string
document.querySelector("#game").innerHTML = html; 

}

};
