

var array = [ 
["Would you like to play a guessing game?", "Great! I'll try to stump you.", "I don't like games either but you have to play because it's my assignment." ], 
["True or False. I have three kids?", "That's true! I have three kids ages 9, 7 and 4.", "It's true! Now you're surely rivited. Guess again."],
["True or False. JavaScript comes super easily to me?", "Ha! Thanks but false.","True that it does not come easily but I am determined to learn!"],
["True or False. I love long distance running.", "I used to hate it but now I actually really do love it! Gives me time to think.", "I used to hate it but now I actually really do love it! Gives me time to think."],
["Do you think being 35 is pretty cool?","You guessed it! I love getting older. The older you get the more you learn.", "You guessed it! I love getting older. The older you get the more you learn."],
["Do you think raising children, learning JavaScript and long distance running have anything in common?","Endurance, patience, committment, hard work...you get the idea.", "Seriously? Use your imagination!" ],
["Last but not least. Can you believe I've been married 13 years?", "You are a good guesser! And marriage fits in with our theme of things that take a lot of hard work but well worth it.", "You are a good guesser! And marriage fits in with the theme of things that take a lot of hard work but well worth it."]
];


function userGuess() {
	for (var i = 0; i < array.length; i++){
			var userGuess = prompt(array[i][0]).toUpperCase();
				console.log(userGuess);
			if (userGuess === "TRUE" || userGuess === "T") {
				alert(array[i][1]);
					
					var myimg = document.getElementById("myImg");
					myimg.innerHTML = <img src ="./Images-guessgame/stump.jpeg">
			} else {
			alert(array[i][2]);
		}
	}
}

userGuess(); 

// /////////
// var firstArray = document.getElementById("Great! I'll try to stump you.");
// var secondArray = document.getElementById("That's true! I have three kids ages 9, 7 and 4.");
// var thirdArray = document.getElementById("True that it does not come easily but I am determined to learn!");
// var fourthArray = document.getElementById("I used to hate it but now I actually really do love it! Gives me time to think.");
// var fifthArray = document.getElementById("You guessed it! I love getting older. The older you get the more you learn.");
// var sixthArray = document.getElementById("Endurance, patience, committment, hard work...you get the idea.");
// var seventhArray = document.getElementById("You are a good guesser! And marriage fits in with the theme of things that take a lot of hard work but well worth it.");

// firstArray.innerHTML = <img src ="image url" height="200px" width="200px"/>
// secondArray.innterHTML = <img src ="" height="200" width="200px"/>
// thirdArray.innterHTML = <img src ="" height="200" width="200px"/>
// forthArray.innterHTML = <img src ="" height="200" width="200px"/>
// fifthArray.innterHTML = <img src ="" height="200" width="200px"/>
// sixthArray.innterHTML = <img src ="" height="200" width="200px"/>
// seventhArray.innterHTML = <img src ="" height="200" width="200px"/>


/////





