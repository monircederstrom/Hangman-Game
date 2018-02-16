type="text/javascript"
// Array of words
var wordBank = ["shark", "turtle", "sealion", "hermitcrab", "jellyfish", "anemone"];

// Randomly selecting word
var wordIndex = Math.floor(Math.random() * wordBank.length);
var computerWord = wordBank [wordIndex];
var blanks = []; 
var correctWord= [];
var guessedLetters = [];
var goodLetters = []
var wins = 0;
var losses = 0;
console.log(computerWord);

//Pushing to HTML
var docBlanks = document.getElementsByClassName('blanks');
var docGuessedLetters = document.getElementsByClassName('letters');
var docGoodLetters = document.getElementsByClassName('right');
var docWins = document.getElementsByClassName('wins');
// create array of letters guessed 
	// if = -1 then not guesed 

// Number of _ _ _ based on word length
var generateBlanks = () => {
	for(var i = 0; i < computerWord.length; i++) {
		blanks.push(" _ ");
		
	};
	return blanks;

}

console.log(generateBlanks());
docBlanks[0].innerHTML = blanks.join('');

// event listener for letter that is pressed (on key up function)
document.onkeyup = function(event) {
	var letter = String.fromCharCode(event.keyCode).toLowerCase();
//link with key press down store what is guessed in variable
		guessedLetters.push(letter);
		docGuessedLetters[0].innerHTML = guessedLetters.join('');
	console.log(guessedLetters);

//check if its been guessed before
		if(string.indexOf(guessedLetter, computerWord) > -1);

				console.log(working);
			}
		
	



//checks to see if letter is in computerWord -1=not in word	
	//if(computerWord.indexOf(letter) > -(1)

// if guess is in word display letter ( array) 
		//goodLetters.push(letter);
		//docGoodLetters[0].innerHTML = goodLetters.join('');
// push to correct index in array and hide underscore
	
//loop through word to check for letters
	//blanks[computerWord.indexOf(letter)] = letter;

		//if (blanks.join('') == computerWord) {
			//docGoodLetters[0].innerHTML = goodLetters.join('');

			
		


// else display letter on letters guessed (wrong array) and -1 for number of guesses remaining
	//else {

	





// if all the blanks are gone then +1 to the wins and restart game

// if guesses = 0 then +1 to losses  and restart game

