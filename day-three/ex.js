// Single if. Defines an optional section of code
var name = 'Johnny';

console.log('how are you today?');
if (name === 'Johnny') {
 console.log('I am having a joooohnny good day!');
}
console.log('thanks come again!');


// A collection of if statements. Defines
// multiple optional sections of code
// NOT mutually exclusive.
// 0 to all will be triggered
var age = 45;
var location = 'arizona';
var food = 'pasta';

if (age === 45) {
 console.log('age is 45');
}

if (location === 'Washington') {
 console.log('location is Washington');
}

if (food === 'pasta') {
 console.log('food is pasta');
}


//if. else if. else if. Mutually exclusive at
// most i will get triggered. although it is possible
// that non will
// 0 to at most 1 will be triggered
// identical to a switch statement (alternative syntax)
var age = 45;
var location = 'seattle';
var food = 'pasta';

if (age === 45) {
 console.log('age is 45');
}

else if (location === 'Washington') {
 console.log('location is Washington');
}

else if (food === 'pasta') {
 console.log('food is pasta');
}


// ***switch is good for comparing a whole bunch of things to one variable

// if, else if, else if, else. Mutually Exclusive at
// most 1 will get triggered, however at lease 1 will always
// be triggered. The else value acts as a 'default.'
// if nothing ELSe gets triggered

var age = 45;
var location = 'seattle';
var food = 'pasta';

if (age === 45) {
 console.log('age is 45');
}

else if (location === 'Washington') {
 console.log('location is Washington');
}

else if (food === 'pasta') {
 console.log('food is pasta');
}

else {
 console.log('none of the above is true');
}


// simple mutally exclusive choose one branching behavior
// guaranteed for 1 to run
if (age === 45) {
 console.log('age is 45');
}

else {
 console.log('age is not 45');
}



// if vs switch (comparing a bunch a different values to one value)
//if else version

if (age === 10) {
 console.log('you are 10');
}
else if (age === 20) {
 console.log('you are 20');
}
else {
 console.log('age is not found');
}


// switch version
switch (age) {
 case 10:
   console.log('you are 10');
   break;
 case 20:
   console.log('you are 20');
   break;
 default:
   console.log('age is not found');

   //

var userInput = Number(prompt());
console.log(typeof userInput);

'22'+ 15 //2215
'22' + String(15);

if (22 == '22') console.log('true');

if (22 === '22') console.log ('I will never print');

var someNumber = prompt(); //user enters 15
//type of someNumber => String

if (someNumber ==15) {//will work because of == instead of ===
}

//the right way!

var someNumber = Number(prompt)());
//!==

if (someNumber === 15) {

}

//falsy values: "false, 0, undefined, null."

if (15 && 10 && true == true && 15) {

}












