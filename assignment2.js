console.log(`\n//////////Welcome To The War Of Cards Championship\\\\\\\\\\\\\\\\\\\\\\`, '\n');

let cardsArray = [('\u2660'), ('\u2663'), ('\u2665'), ('\u2666')]

let userCard = Math.floor(Math.random() * 12 + 1);
let computerCard = Math.floor(Math.random() * 12 + 1);
let randomCard1 = cardsArray[Math.floor(Math.random() * cardsArray.length)];
let randomCard2 = cardsArray[Math.floor(Math.random() * cardsArray.length)];

const gameType = require('readline-sync');

options = ['Play against the computer'],
    userDecision = gameType.keyInSelect(options, 'Choose your game?: ', { cancel: 'Play against a friend' });
if (userDecision === 0) {

    // ***Game type - Play agains the computer

    const input = require('readline-sync');

    gameNumber = 1;
    let userMoney = 50;
    let userName = input.question('Enter your name: ');
    console.log('\n', `Hello ${userName}, you currently have ${userMoney} ILS`);

    while (userMoney > 0) {
        console.log('\n', `****** ROUND NUMBER ${gameNumber} STARTS NOW ****** `, '\n');
        let userBet = input.questionInt(`Your balance is ${userMoney} - Enter your bet for the next round between 1 to 50: `);

        // Preconditions:
        if (userBet > userMoney) {
            console.log(`\nYou have ${userMoney} and your bet was ${userBet}\nyou tried to cheat!!! I dont play with cheaters`);
            break;
        }
        if (userBet > 50 || userBet <= 0) {
            console.log(`\nI said between 1 - 50 and you typed ${userBet}\nI dont play with liars! BYE ${userName} `);
            break;
        }

        // Game begin
        userCard = Math.floor(Math.random() * 12 + 1);
        computerCard = Math.floor(Math.random() * 12 + 1);
        randomCard1 = cardsArray[Math.floor(Math.random() * cardsArray.length)];
        randomCard2 = cardsArray[Math.floor(Math.random() * cardsArray.length)];

        console.log(`\nYour card is ${userCard} ${randomCard1} and my card is ${computerCard} ${randomCard2}\n `);

        // in case of user is winning
        if (userCard > computerCard) {
            userMoney += userBet;
            console.log(`You won ${userBet} !!and now you have ${userMoney} `);

            options = ['Play another round'],
                userDecision = input.keyInSelect(options, 'What would you like to do?: ', { cancel: 'Leave with the money :-)' });
            if (userDecision === -1) {
                console.log(`\nYou chose to quit with ${userMoney} ILS, good luck ${userName} !\n\n***GAME OVER***\n`);
                break;
            }
            // in case of computer is winning
        } else if (userCard < computerCard) {
            userMoney -= userBet;
            console.log(`You lost ${userBet} and now you have ${userMoney} `);
            if (userMoney === 0) {
                console.log(`You are broke...Bye Bye\n\n***GAME OVER***\n`);
                break;
            } else {
                options = ['Play another round'],
                    userDecision = input.keyInSelect(options, 'What would you like to do?: ', { cancel: 'Leave with the money :-)' });
                if (userDecision === -1) {
                    console.log(`\nYou chose to quit with ${userMoney} ILS, good luck ${userName} !\n\n***GAME OVER***\n`);
                    break;
                }
            }

            // in case of a tie
        } else {
            console.log(`It's a tie, play another round`);
        }
        gameNumber++;
    }

    // *** Game Type - Play agains a friend 
} else {
    const input = require('readline-sync');

    gameNumber = 1;
    let user1Money = 50;
    let user2Money = 50;
    let userName1 = input.question('Player 1 enter your name: ');
    let userName2 = input.question('Player 2 enter your name: ');
    console.log('\n', `Hello ${userName1} and ${userName2}, you currently have ${user1Money} ILS`);

    while (user2Money > 0 || user2Money) {
        console.log('\n', `****** ROUND NUMBER ${gameNumber} STARTS NOW ****** `, '\n');
        let usersBet = input.questionInt(`${userName1} your balance is ${user1Money}, ${userName2} your balance is ${user2Money} - Enter your bet for the next round between 1 to 50: `);

        // Preconditions:
        if (usersBet > 50 || usersBet <= 0) {
            console.log(`I said between 1 - 50 and you typed ${usersBet} \nThis game is limited to 50! BYE `);
            break;
        }

        // Game begin
        user1Card = Math.floor(Math.random() * 12 + 1);
        user2Card = Math.floor(Math.random() * 12 + 1);
        randomCard1 = cardsArray[Math.floor(Math.random() * cardsArray.length)];
        randomCard2 = cardsArray[Math.floor(Math.random() * cardsArray.length)];
        console.log(`\n${userName1} your card is ${user1Card} ${randomCard1}, ${userName2} your card is ${user2Card} ${randomCard2} `);

        // in case of player1 is winning
        if (user1Card > user2Card) {
            user1Money += usersBet;
            user2Money -= usersBet;
            console.log(`${userName1} you won ${usersBet}!! and now you have ${user1Money}\n${userName2} you lost ${usersBet} and now you have ${user2Money}\n`);
            if (user2Money === 0) {
                console.log(`${userName2} you are broke... Bye Bye \nCongratulations ${userName1}!! you won ${user1Money} ILS\n\n***GAME OVER***\n `);
                break;
            }
            options = ['Play another round'],
                userDecision = input.keyInSelect(options, 'What would you like to do?: ', { cancel: 'We want to Quit and leave with the money :-)' });
            if (userDecision === -1) {
                console.log(`\nYou chose to quit... \n${userName1} has ${user1Money} ILS \n${userName2} has ${user2Money} ILS \nGood luck !\n\n***GAME OVER***\n`);
                break;
            }

            // in case of player2 winning
        } else if (user1Card < user2Card) {
            user1Money -= usersBet;
            user2Money += usersBet;
            console.log(`${userName2} you won ${usersBet}!! and now you have ${user2Money}\n${userName1} you lost ${usersBet} and now you have ${user1Money}\n `);
            if (user1Money === 0) {
                console.log(`${userName1} you are broke... Bye Bye \nCongratulations ${userName2}!! you won ${user2Money} ILS\n\n***GAME OVER***\n `);
                break;
            } else {
                options = ['Play another round'],
                    userDecision = input.keyInSelect(options, 'What would you like to do?: ', { cancel: 'We want to Quit and leave with the money :-)' });
                if (userDecision === -1) {
                    console.log(`\nYou chose to quit... \n${userName1} has ${user1Money} ILS \n${userName2} has ${user2Money} ILS \nGood luck !\n\n***GAME OVER***\n`);
                    break;
                }
            }
            // in case of tie
        } else {
            console.log(`It's a tie, play another round`);
        }
        gameNumber++;
    }
}