
//Array of cities to use as inputs for the hangman game
var cities = [{
    name: "LONDON",
    displayName: "London",
    imgSrc: "assets/images/london.jpg",
    description: "Standing on the River Thames in the south east of the island of Great Britain, London has been a major settlement for two millennia."
  },
  {
    name: "PARIS",
    displayName: "Paris",
    imgSrc: "assets/images/paris.jpg",
    description: "Paris is known for its museums and architectural landmarks: the Louvre was the most visited art museum in the world in 2016, with 7.4 million visitors."
  },
  {
    name: "ROME",
    displayName: "Rome",
    imgSrc: "assets/images/rome.jpg",
    description: "Rome is the capital and largest city of Italy. It's the famed city of the Roman Empire, the Seven Hills, the Vatican City and Three Coins in the Fountain."
  },
  {
    name: "CAIRO",
    displayName: "Cairo",
    imgSrc: "assets/images/cairo.jpg",
    description: "On the Nile river, Cairo is famous for its own history, preserved in the fabulous medieval Islamic city and Coptic sites in Old Cairo. "
  },
  {
    name: "BERLIN",
    displayName: "Berlin",
    imgSrc: "assets/images/berlin.jpg",
    description: "Berlin is best known for its historical associations as the German capital, lively nightlife, street art, and numerous museums, palaces, and other sites of historic interest."
  },
  {
    name: "TOKYO",
    displayName: "Tokyo",
    imgSrc: "assets/images/tokyo.jpg",
    description: "Tokyo is the capital of Japan. This huge metropolis brings high-tech visions of the future side by side with glimpses of old Japan."
  },
  {
    name: "TORONTO",
    displayName: "Toronto",
    imgSrc: "assets/images/toronto.jpg",
    description: "Toronto is sometimes referred to as The New York City of Canada because of the general feel of the city is similar to that of New York City."
  },
  {
    name: "MUMBAI",
    displayName: "Mumbai",
    imgSrc: "assets/images/mumbai.jpg",
    description: "Mumbai's nature as the most eclectic and cosmopolitan Indian city is symbolized in the presence of Bollywood within the city."
  },
  {
    name: "BARCELONA",
    displayName: "Barcelona",
    imgSrc: "assets/images/barcelona.jpg",
    description: "Barcelona, located directly on the northeastern Mediterranean coast of Spain, has a rich history, having been under Roman, then Frank law before declaring its independence."
  },
  {
    name: "DUBLIN",
    displayName: "Dublin",
    imgSrc: "assets/images/dublin.jpg",
    description: "Dublin is the capital city of Ireland. Its vibrancy, nightlife and tourist attractions are renowned and it is the most popular entry point for international visitors. "
  },
  {
    name: "MIAMI",
    displayName: "Miami",
    imgSrc: "assets/images/miami.jpg",
    description: "Party in the city where the heat is on all night on the beach 'til the break of dawn."
  },
  {
    name: "VIENNA",
    displayName: "Vienna",
    imgSrc: "assets/images/vienna.jpg",
    description: "As the former home of the Habsburg court and its various empires, Vienna still has the trappings of the imperial capital it once was."
  },
  {
    name: "SHANGHAI",
    displayName: "Shanghai",
    imgSrc: "assets/images/shanghai.jpg",
    description: "Shanghai was the largest and most prosperous city in the Far East during the 1930s."
  },
  {
    name: "ISTANBUL",
    displayName: "Istanbul",
    imgSrc: "assets/images/istanbul.jpg",
    description: "Located on both sides of the Bosphorus, the strait between the Black Sea and the Marmara Sea, Istanbul bridges Asia and Europe both physically and culturally."
  },
  {
    name: "SEOUL",
    displayName: "Seoul",
    imgSrc: "assets/images/seoul.jpg",
    description: "A fascinating blend of ancient traditions and cutting-edge digital technology, Seoul is a city filled with stark contrasts."
  }
]
// create word play variables (wins and guesses)
var wins = 0;
var guesses = 15;
//Create wrongLetters array
var wrongLetters = [];

//create variables for the display of various elements (to replace repeating document.getElementById() in the code)
var displayGuesses = document.getElementById("guesses");
var displayWins = document.getElementById("wins");
var displayWrongLetters = document.getElementById("wrongLetters");
var hangmanWord = document.getElementById("hangmanWord");
var winLose = document.getElementById('winLose');
var gameResult = document.getElementById('gameResult');
var cityImage = document.getElementById('gameResultImg');
var cityInfo = document.getElementById('cityInfo');
var usableLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


//simple reset function to remove previously guessed letters and reset guesses to 15
function reset() {
  guesses = 10;
  wrongLetters = [];
  gameResult.style.display = 'none';
}


displayGuesses.innerHTML = "<p>guesses: " + guesses + "</p>"
displayWins.innerHTML = "<p>wins: " + wins + "</p>"
displayWrongLetters.innerHTML = "<p>Wrong Letters: "

function playHangman() {

  reset();
  displayGuesses.innerHTML = "<p>guesses: " + guesses + "</p>"
  displayWrongLetters.innerHTML = "<p>Wrong Letters: "
  //Choose a random city from our array of cities///
  var citySelect = cities[Math.floor(Math.random() * cities.length)];


  //create an empty array that will serve as the physical blank spaces for word guessing

  var wordBlanks = []

  //Loop though the length of the city name selected, and add an underscore/blank space for each letter in the wordBlanks array

  for (var i = 0; i < citySelect.name.length; i++) {
    wordBlanks.push("_");
  }

  //add this series of blanks to the div 'hangmanWord' so the user can see them
  hangmanWord.innerHTML = wordBlanks.join(" ");

  //Create a funciton to dertimine when a user presses a key
  document.onkeyup = function(event) {
    // Determines which key was pressed, converts to uppercase
    var userGuess = (event.key).toUpperCase();
  //Checks if they key pressed is a valid letter
  if(usableLetters.indexOf(userGuess) != -1){
    //checks if the letter has already been guessed
  if (wrongLetters.indexOf(userGuess) === -1) {
    //loops through the wordBlanks to find if userGuess matches any letters
    for (var i = 0; i < citySelect.name.length; i++) {
      if (citySelect.name.charAt(i) === userGuess) {
        wordBlanks[i] = userGuess;
        hangmanWord.innerHTML = wordBlanks.join(" ");
      }
    }
    //if the letter guessed doesn't appear in the word, remove 1 from guesses
    if (citySelect.name.indexOf(userGuess) == -1) {
      guesses--;
      displayGuesses.innerHTML = "<p>guesses: " + guesses + "</p>"
      wrongLetters.push(userGuess);
      displayWrongLetters.innerHTML = "<p>wrong letters: " + wrongLetters.join(", ") + "</p>";
    }
  }
};


    //If guesses is equal to zero, display the "you lose" div
    if (guesses === 0) {
      gameResult.style.display = 'block';
      winLose.innerHTML = "You Lose!";
      cityImage.src = "assets/images/you-lose.jpg";
      cityInfo.innerHTML = "<p>Don't give up, you'll get it next time!</p>";
    }

    //If all the letters are guessed correctly, display the "you win!" div with an image of the city guessed, and a sentence about the city. and add 1 to wins
    if (wordBlanks.join("") === citySelect.name) {
      gameResult.style.display = 'block';
      winLose.innerHTML = "You Win!";
      cityImage.src = citySelect.imgSrc;
      cityInfo.innerHTML = "<h2>" + citySelect.displayName + "</h2> <p>" + citySelect.description + "</p>";
      wins++;
      displayWins.innerHTML = "<p>wins: " + wins + "</p>"
    }
  }
}


//Start a new game when the page loads and when either "New Game" button is pressed
window.addEventListener("load", playHangman);
document.getElementById("new-game-1").addEventListener("click", playHangman);
document.getElementById("new-game-2").addEventListener("click", playHangman);
