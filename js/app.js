'use strict';

var userName = prompt ('What is your name?').toUpperCase();
// function askName(){

alert(userName + ' welcome to the page about Nicholas Dorkins');
// }

// // console.log('The user\'s name is ' + userName);

var score = 0;

var role = prompt('My current role is Director of Safety and Compliance? Yes or no').toLowerCase();
if (role === 'yes') {
  alert ('Correct! I keep people as safe as possible.');
  score++;
} else if (role === 'no') {
  alert ('Sorry, I do try to keep people safe.');
}
// console.log('User guess for role ' + role);

var fab = prompt('Do I have fabrication experience? Yes or no').toLowerCase();
if (fab === 'yes') {
  alert ('Correct! I was a fabricator for 6 years.');
  score++;
} else if (fab === 'no') {
  alert ('Actually, I fabricated scissor lift parts for 6 years.');
}
// console.log('User guess for fab ' + fab);

var pilot = prompt('Do I know how to fly planes? Yes or no').toLowerCase();
if (pilot === 'yes') {
  alert ('Sorry, I can\'t fly planes but I hope to one day.');
} else if (pilot === 'no') {
  alert ('I am hoping to get my pilot\'s license in the future.');
  score++;
}
// console.log('User guess for pilot ' + pilot);

var dance = prompt ('Do I know how to dance?');
if (dance === 'yes') {
  alert ('Not really, I learned all my dance moves from the muppets.');
} else if (dance === 'no') {
  alert ('Correct, I was born with two left feet and no rythm.');
  score++;
}
// console.log('User guess for dance ' + dance);

var dogs = prompt('Do I like dogs? Yes or no').toLowerCase();
if (dogs === 'yes') {
  alert ('DOGS ARE THE BEST! I HAVE 3 WONDERFUL PUPPIES!');
  score++;
} else if (dogs === 'no') {
  alert ('Sorry, I think dogs rule.');
}
// console.log('User guess for dogs ' + dogs);

var attempts = 0;
var favNumber = prompt('If I were a number between 1 and 20, what number would I be?');

while (attempts < 4) {
  attempts++;
  if (attempts === 4) {
    favNumber = alert('Nice try, the answer was 11!');
  } else if (parseInt(favNumber) > 11) {
    favNumber = prompt('Too high, let\'s bring it down a bit.');
  } else if (parseInt(favNumber) < 11) {
    favNumber = prompt('Little higher than that, keep trying.');
  } else if (parseInt(favNumber) === 11) {
    favNumber = alert('Exactly right!');
    score++;
    break;
  }
}

// console.log('User answer for favorite number' + favNumber);

var favFood = prompt('Guess one of the top four styles of foods that I enjoy eating.').toLowerCase();
var foodStyles = ['mexican', 'italian', 'southern', 'japanese'];

for (var i = 0; i < 5; i++) {
  if (favFood === foodStyles[0] || favFood === foodStyles[1] || favFood === foodStyles[2] || favFood === foodStyles[3]) {
    favFood = alert('Correct, ' + favFood + ' food is delicious!');
    score++;
    break;
  } else if (i !== 6) {
    favFood = prompt('That doesn\'t make the top four. Please try again.');
  }
}
if (i === 5) {
  favFood = alert('My top four favorite styles of food are mexican, italian, southern, and japanese food!');
}

// console.log('User answer for favorite food ' + favFood);

alert('Congratulations, you got ' + score + ' out of 7 answers correct!');

// console.log('User score ' + score + ' out of 7 correct.');

// alert (userName + ' as you can see, Nicholas is a very interesting guy. Please continue to the site to find out more about him.');
