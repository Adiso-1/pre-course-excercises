const input = require('readline-sync');

let usersString = input.question('Write a string: ');
let vowels = /[aeiouy]/;
let vowelString = '';

for (let i = 0; i < usersString.length; i++) {
    if (vowels.test(usersString[i]) === true) {
        vowelString += usersString[i].toUpperCase();
    } else {
        vowelString += usersString[i];
    }
}
console.log(vowelString);
