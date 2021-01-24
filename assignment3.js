const figlet = require('figlet');
const input = require('readline-sync');

// variables
let wordsStock = ['Italy', 'Canada', 'Colombia', 'China', 'Denmark', 'Germany', 'Greece', 'Iceland', 'Israel', 'India', 'Japan', 'Jamaica', 'Luxembourg', 'Mexico', 'Netherlands', 'Philippines', 'Russia', 'Romania', 'Sweden', 'Spain', 'San Marino', 'Switzerland', 'United Kingdom', 'United States of America', 'Vietnam'];
let randomWord = wordsStock[Math.floor(Math.random() * wordsStock.length)];
let attempts = 10;
let corrects = 0;
let prize = false;
let usedLetters = [];
let userGuess;
let regularGuess;

// making a guess word of asterisks
let asteriskWord = randomWord.replace(/[a-zA-Z]/g, '*').replace(/[ ]/g, '-');

// functions
String.prototype.replaceAt = function (index, replacement) {
    let chars = this.split('');
    chars[index] = replacement;
    return chars.join('');
}
function getGuess() {
    userGuess = input.question(`What is your guess? \n`, { limit: /^[a-zA-Z]$/, limitMessage: `Please enter only one alphabetic letter` })
    regularGuess = new RegExp(userGuess, 'ig');
    while (regularGuess.test(usedLetters.join('')) === true) {
        console.log('This Letter was already picked, pick another...');
        getGuess();
    }
    return regularGuess;
}
function attemptsDown() {
    attempts--;
    if (attempts === 0) {
        console.log(`\nYou didn't reveal the secret word.\nGame Over!\n`);
    }
}

// Welcome massage
console.log(figlet.textSync('HANG MAN - Countries', { font: 'Star Wars' }));

// Game starts loop
while (attempts > 0) {
    console.log(`\nYou have ${attempts} attempts\nUsed words:`, usedLetters, `\nThe word is:\n${asteriskWord}\n`);
    getGuess();
    usedLetters.push(userGuess);

    // if the user guesses right
    for (let i = 0; i < randomWord.length; i++) {
        if (randomWord[i].toLowerCase() === userGuess.toLowerCase()) {
            asteriskWord = asteriskWord.replaceAt(i, randomWord[i]);
            corrects++;
        }
    }
    // if the user guesses wrong
    if (regularGuess.test(randomWord) !== true) {
        attemptsDown();
    }

    // test if the word is clean from astreisks = the user revealed the word
    if (/\*/.test(asteriskWord) === false) {
        console.log(`GOOD JOB!!\nYou revealed the secret word\n${figlet.textSync(randomWord, { font: 'Modular' })}\n`);
        break;
    }

    // The user gets the option to guess the entire word after he guessed half of the word 
    if (prize === false) {
        if (corrects >= Math.floor(randomWord.length / 2)) {
            prize = true;
            let decision = input.keyIn(`***Half the way prize!***\nThe word is ${asteriskWord} \nYou can try to guess the entire word, would you like to try? **Costs 1 attempt**\n1.Yes\n2.No\n`, { limit: [1, 2] })
            if (decision === '1') {
                let tryEntire = input.question(`\nGuess the entire word:\n`)
                if (tryEntire.toLowerCase() === randomWord.toLowerCase()) {
                    console.log(`WOW!! You are good!!\nThe word is: \n${figlet.textSync(randomWord, { font: 'Modular' })}\n`);
                    break;
                } else {
                    console.log(`WRONG`);
                    attemptsDown();
                }
            }
        }
    }
}