const input = require('readline-sync');

let usersNumber = input.question('please choose a number larger 1: ');

for (let i = 1; i <= usersNumber; i++) {
    let prime = true;

    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            prime = false;
            break;
        }
    }
    if (i > 1 && prime === true) {
        console.log(i);
    }
}