hangmanWord
//Array of cities to use as inputs for the hangman game
var cities = [{
  name: "LONDON",
  displayName: "London",
  population: 30000,
  description: "blah"
},
{
  name: "PARIS",
  displayName: "Paris",
  population: 30000,
  description: "blah"
},
{
  name: "ROME",
  displayName: "Rome",
  population: 30000,
  description: "blah"
},
{
  name: "Cairo",
  displayName: "Johannesburg",
  population: 30000,
  description: "blah"
},
{
  name: "BERLIN",
  displayName: "Johannesburg",
  population: 30000,
  description: "blah"
},
{
  name: "TOKYO",
  displayName: "Johannesburg",
  population: 30000,
  description: "blah"
},
{
  name: "TORONTO",
  displayName: "Johannesburg",
  population: 30000,
  description: "blah"
},
{
  name: "MUMBAI",
  displayName: "Johannesburg",
  population: 30000,
  description: "blah"
},
{
  name: "BARCELONA",
  displayName: "Johannesburg",
  population: 30000,
  description: "blah"
},
{
  name: "DUBLIN",
  displayName: "Johannesburg",
  population: 30000,
  description: "blah"
},
{
  name: "MAIMI",
  displayName: "Johannesburg",
  population: 30000,
  description: "blah"
},
{
  name: "VIENNA",
  displayName: "Johannesburg",
  population: 30000,
  description: "blah"
},
{
  name: "SHANGHAI",
  displayName: "Johannesburg",
  population: 30000,
  description: "blah"
},
{
  name: "ISTANBUL",
  displayName: "Johannesburg",
  population: 30000,
  description: "blah"
},
{
  name: "SEOUL",
  displayName: "Johannesburg",
  population: 30000,
  description: "blah"
}
]

var wins = 0;
var guesses = 15;
//Create wrongLetters array
var wrongLetters = [];

//simple reset function to remove previously guessed letters and reset guesses to 15
function reset() {
	guesses = 15;
  wrongLetters = [];
  document.getElementById('youWin').style.display = 'none';
}


document.getElementById("guesses").innerHTML = "<p>guesses: " + guesses + "</p>"
document.getElementById("wins").innerHTML = "<p>wins: " + wins + "</p>"
document.getElementById("wrongLetters").innerHTML = "<p>Wrong Letters: "

function playHangman() {

  reset();
  document.getElementById("guesses").innerHTML = "<p>guesses: " + guesses + "</p>"
  document.getElementById("wrongLetters").innerHTML = "<p>Wrong Letters: "
  //Choose a random city from our array of cities///
  var citySelect = cities[Math.floor(Math.random() * cities.length)];


  //create an empty array that will serve as the physical blank spaces for word guessing

  var wordBlanks = []

  //Loop though the length of the city name selected, and add an underscore/blank space for each letter in the wordBlanks array

  for (var i = 0; i < citySelect.name.length; i++) {
    wordBlanks.push("_");
  }

  //add this series of blanks to the div 'hangmanWord' so the user can see them
  document.getElementById("hangmanWord").innerHTML = wordBlanks.join(" ");

  //Create a funciton to dertimine when a user presses a key
  document.onkeyup = function(event) {
    // Determines which key was pressed, converts to uppercase
    var userGuess = (event.key).toUpperCase();
    //document.getElementById("letters").innerHTML = userGuess;

    //checks if the letter has already been guessed

    if(wrongLetters.indexOf(userGuess) === -1) {
    //loops through the wordBlanks to find if userGuess matches any letters
    for (var i = 0; i < citySelect.name.length; i++) {
      if (citySelect.name.charAt(i) === userGuess) {
        wordBlanks[i] = userGuess;
        document.getElementById("hangmanWord").innerHTML = wordBlanks.join(" ");
      }
    }
    //if the letter guessed doesn't appear in the word, remove 1 from guesses
    if (citySelect.name.indexOf(userGuess) == -1) {
      guesses--;
      document.getElementById("guesses").innerHTML = "<p>guesses: " + guesses + "</p>"
      wrongLetters.push(userGuess);
      document.getElementById("wrongLetters").innerHTML = "<p>wrong letters: " + wrongLetters.join(", ") + "</p>";
    }
    }
    if (guesses === 0){

    	document.getElementById("letters").innerHTML = "You LOSE";
    }

    //If all the letters are guessed correctly, display "you win!" and add 1 to wins
    if (wordBlanks.join("") === citySelect.name) {
      document.getElementById('youWin').style.display = 'block';
      document.getElementById("letters").innerHTML = "You WIN!";
      wins++;
      document.getElementById("wins").innerHTML = "<p>wins: " + wins + "</p>"
    }
  }
}

window.addEventListener("load", playHangman);
document.getElementById("new-game-1").addEventListener("click", playHangman);
document.getElementById("new-game-2").addEventListener("click", playHangman);
