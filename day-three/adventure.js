var direction = prompt('You are in a dark dungeon. Do you turn left or right?');

if (direction === 'left') {
 alert('You fell into darkness where you will fall forever.');
}

else if (direction === 'right') {
 alert('You found the treasure!');
}

else {
 alert('You died. That is not a valid direction.');
}