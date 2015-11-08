var number = 0; //initialization
while (number <10) { //condition
	console.log(number);
	number++; //update
	number = number + 1;
}

//equivalent for loop
for (var i=0; i<10; i++) {
	console.log(i);
}

//every other number
for (var i = 0; i <10; i+=2) {
	console.log(i)
}

//my turn. log only even #'s from 15 down

for (var i = 14; i >=0; i-=2) {
	console.log(i)
}
//

function addTwo(x) {
	return x + 2;
}
var num = addTwo(4);

