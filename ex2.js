const input = require('readline-sync');

let num1 = input.question("Enter First Number: ");
let num2 = input.question("Enter Second Number: ");

function sumTwoNumbersToTen() {
    if (Number(num1) + Number(num2) === 10) {
        return 'makes 10';
    } else {
        return 'nope';
    }
}
console.log(sumTwoNumbersToTen());