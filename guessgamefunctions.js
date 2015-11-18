

var array = [ 
["Would you like to play a guessing game?", "Great! I'll try to stump you.", "I don't like games either but you have to play because it's my assignment." ], 
["True or False. I have three kids?", "That's true! I have three kids ages 9, 7 and 4.", "It's true! Now you're surely rivited. Guess again."],
["True or False. JavaScript comes super easily to me?", "Ha! Thanks but false.","True that it does not come easily but I am determined to learn!"],
["True or False. I love long distance running.", "I used to hate it but now I actually really do love it! Gives me time to think.", "I used to hate it but now I actually really do love it! Gives me time to think."],
["Do you think being 35 is pretty cool?","You guessed it! I love getting older. The older you get the more you learn.", "You guessed it! I love getting older. The older you get the more you learn."],
["Do you think raising children, learning JavaScript and long distance running have anything in common?","Endurance, patience, committment, hard work...you get the idea.", "Seriously? Use your imagination!" ],
["Last but not least. Can you believe I've been married 13 years?", "You are a good guesser! And marriage fits in with our theme of things that take a lot of hard work but well worth it.", "You are a good guesser! And marriage fits in with the theme of things that take a lot of hard work but well worth it."]
];

var questions = [
		["Would you like to play a guessing game?", "YES", "Y"],
		["True or False. I have three kids?", "TRUE", "T"],
		["True or False. JavaScript comes super easily to me?", "FALSE", "F"],
		["True or False. I love long distance running.", "TRUE", "T"],
		["Do you think being 35 is pretty cool?", "YES", "Y" ],
		["Do you think raising children, learning JavaScript and long distance running have anything in common?", "YES", "Y"],
		["Last but not least. Can you believe I've been married 13 years?", "YES", "Y"]];


var pictures = ["./Images-guessgame/stump.jpeg","./Images-guessgame/kidsatglacier.jpg", "./Images-guessgame/Javascript.jpeg","./Images-guessgame/running.jpeg","./Images-guessgame/older.jpeg","./Images-guessgame/endurance.jpeg", "./Images-guessgame/family.jpg"]


function userGuess() {
	for (var i = 0; i < questions.length; i++){
			var userGuess = prompt(questions[i][0]).toUpperCase();
				console.log(userGuess);
			if (userGuess === questions[i][1] || userGuess === questions[i][2]) {
				alert(array[i][1]);
					
					var myimg = document.getElementById("myImg" + i);
					myimg.innerHTML = "<img src =" + pictures[i]+ " width = '400px' height '400px' >"
			} else {
			alert(array[i][2]);
			var myimg = document.getElementById("myImg" + i);
			myimg.innerHTML = "<img src = ./Images-guessgame/incorrect.jpg>"
		}
	}
}

userGuess(); 





