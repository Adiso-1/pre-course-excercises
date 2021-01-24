const input = require('readline-sync');

let usersString = input.question('Write a string: ');
let stringArray = usersString.split(' ');
let longestWord = stringArray[0].replace(/[\W_0-9]/g, '');

stringArray.forEach((el) => {
    el = el.replace(/[\W_0-9]/g, '');
    if (el.length > longestWord.length) {
        longestWord = el;
    }
});
console.log(longestWord);