const input = require('readline-sync');

let usersFactorialNumber = input.question('Enter a positive number: ');

while (usersFactorialNumber < 0) {
    usersFactorialNumber = input.question('please enter a POSITIVE number: ');

}
let result = usersFactorialNumber;

for (let index = usersFactorialNumber - 1; index > 0; index--) {
    result *= index;
}
console.log(result);
