const input = require('readline-sync');

let usersString = input.question('Write a string: ');

let newString = usersString.replace(/ /g, '*');

console.log(newString);