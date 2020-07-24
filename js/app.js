'use strict';

var userName = prompt ('What is your name?').toUpperCase();
// function askName(){

alert(userName + ' welcome to the page about Nicholas Dorkins');
// }

// console.log('The user\'s name is ' + userName);

var role = prompt('My current role is Director of Safety and Compliance? Yes or no').toLowerCase();
if (role === 'yes') {
  alert ('Correct! I keep people as safe as possible.');
} else if (role === 'no') {
  alert ('Sorry, I do try to keep people safe.');
}
// console.log('User guess for role ' + role);

var fab = prompt('Do I have fabrication experience? Yes or no').toLowerCase();
if (fab === 'yes') {
  alert ('Correct! I was a fabricator for 6 years.');
} else if (fab === 'no') {
  alert ('Actually, I fabricated scissor lift parts for 6 years.');
}
// console.log('User guess for fab ' + fab);

var pilot = prompt('Do I know how to fly planes? Yes or no').toLowerCase();
if (pilot === 'yes') {
  alert ('Sorry, I can\'t fly planes but I hope to one day.');
} else if (pilot === 'no') {
  alert ('I am hoping to get my pilot\'s license in the future.');
}
// console.log('User guess for pilot ' + pilot);

var dance = prompt('Do I know how to dance? Yes or no').toLowerCase();
if (dance === 'yes') {
  alert ('Not really, I learned all my dance moves from the muppets.');
} else if (dance === 'no') {
  alert ('I was born with two left feet and no rythm.');
}
// console.log('User guess for dance ' + dance);

var dogs = prompt('Do I like dogs? Yes or no').toLowerCase();
if (dogs === 'yes') {
  alert ('DOGS ARE THE BEST! I HAVE 3 WONDERFUL PUPPIES!');
} else if (dogs === 'no') {
  alert ('Sorry, I think dogs rule.');
}
// console.log('Use guess for dogs ' + dogs);

alert (userName + ' as you can see, Nicholas is a very interesting guy. Please continue to the site to find out more about him.');
