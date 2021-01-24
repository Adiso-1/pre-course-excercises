const input = require('readline-sync');

let chosenNumber = input.question('please choose a number larger than 10: ');

while (Number(chosenNumber) <= 10) {
    chosenNumber = input.question('please choose a number LARGER than 10: ');
}

console.log('thank you');