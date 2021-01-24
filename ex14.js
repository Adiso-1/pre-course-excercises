const input = require('readline-sync');
let userNumber = input.question('Write a number: ');
let myArray = [];

// filling myArray with numbers between 1-50
for (let i = 0; i < userNumber; i++) {
    myArray.push(Math.floor(Math.random() * 50) + 1);
}
// setting min and max
let min = myArray[0];
let max = myArray[0];

myArray.forEach(el => {
    if (el > max) {
        max = el;
    }
    if (el < min) {
        min = el;
    }
})

console.log(myArray);
console.log(`min is ${min}`);
console.log(`max is ${max}`);