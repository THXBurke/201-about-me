
var userGuess = prompt("Would you like to play a guessing game?");
if (userGuess === "yes" || userGuess === "Yes" || userGuess === "y" || userGuess === "Y") {
	alert("I'll try to stump you.");
} else {
	alert("I don't like games either but you have to play because it's my assignment.");
};

var firstQuestion = prompt("True or False. I have three kids?");
if (userGuess === "true" || userGuess === "True" || userGuess === "T") {
	alert("That's true! I have three kids ages 9, 7 and 4.");
} else {
	alert("It's true! Now you're surely rivited. Guess again.");
};

var secondQuestion = prompt("True or False. JavaScript comes super easily to me?");
if (userGuess === "true" || userGuess === "True" || userGuess === "T") {
	alert("Ha! Thanks but false.");
} else {
	alert("True that it does not come easily but I am determined to learn!");
};

var thirdQuestion = prompt("True or False. I love long distance running.");
if (userGuess === "true" || userGuess === "True" || userGuess === "T") {
	alert("I used to hate it but now I actually really do love it! Gives me time to think.");
} else {
	alert("I used to hate it but now I actually really do love it! Gives me time to think.");
};

var age = 35;
var fourthQuestion = prompt("Can you guess my age?");
if (parseInt(fourthQuestion) === age ) {
   alert ("You guessed it! I love getting older. The older you get the more you learn.");
} else {
  alert("Nope! I'm " + age + "!");
         };

var fifthQuestion = prompt("Do you think raising children, learning JavaScript and long distance running have anything in common?");
if (userGuess === "Yes" || userGuess === "yes" || userGuess === "Y" || userGuess === "True" || userGuess === "true") {
	alert("Endurance, patience, committment, hard work...you get the idea.")
} else {
	alert("Seriously? Use your imagination!");
};

var married = 13;
var sixthQuestion = prompt("Last but not least. Can you guess how many years I've been married?");
if (parseInt(sixthQuestion) === married) {
	alert ("You are a good guesser! And marriage fits in with our theme of things that take a lot of hard work but well worth it.")
} else {
	alert("Nope! Hint, it's a prime number.");
};

prompt("Thanks for playing my true or false game!");


///////////////starting over////

/*function myName (answer) {
	var guess = prompt('Do you know my name?');
	if (answer == guess) {
		console.log('Yes, that is correct!');
	} else {
		console.log('Nope!');
	};
	alert(message);
	}
	myName('Rachel');



console.log('Do you know my name?');

if (myName === 'Rachel') {
	console.log ('Yep! That is my name');
}
}

function sahm (answer) {
      var guess = prompt ('Can you guess how many years I have been a mostly
      	stay at home mom?');
    if (answer == guess) {
      message = ('Is it that obvious!?');
    } else {
      message = ('Nope! Guess again?');
    };
    alert(message);
    } 
    sahm(10);


var kids = 3;
var kids = prompt('Can you guess how many kids I have?');

if (kids === 3) {
	console.log('Good guess!');
} else {
	console.log('try again?');
}
}
*/
