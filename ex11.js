const input = require('readline-sync');

let usersString = input.question('Write a string: ');
let newString = usersString.toLocaleLowerCase().replace(/[\W_]/g, '');
let len = newString.length;

function isPalindrome(str) {
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return `'${usersString}' is not a palindrome`;
        }
    }
    return `'${usersString}' is a palindrome`;
}
console.log(isPalindrome(newString));
