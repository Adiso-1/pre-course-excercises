const input = require('readline-sync');

let peopleNum = input.question("How many people are you going with?: ");
let regularExpression = /[0-9]+/
let result = regularExpression.test(Number(peopleNum));
if (!result) {
    console.error('You Should insert a number!');
    throw 'stop execution';
}

// Check if Kosher.
if (input.keyInYNStrict("Should it be Kosher?: ")) {
    // Check if Kashrut Lemehadrin.
    if (input.keyInYNStrict("should it be Kashrut Lemehadrin?: ")) {
        const foodSelect = require('readline-sync'),
            foods = ['Hamburger', 'Pizza', 'Pasta', 'Chinese'],
            index = foodSelect.keyInSelect(foods, 'What kind of food do you want?:');
        switch (foods[index]) { // Kashrut Lemehadrin restaurants
            case 'Hamburger':
                console.log('Go to Agadir restaurant');
                break;
            case 'Pizza':
                console.log('Go to Donatelo restaurant');
                break;
            case 'Pasta':
                console.log('Go to Pasta Bar restaurant');
                break;
            case 'Chinese':
                console.log('Go to Oshi Oshi restaurant');
                break;
        }
    } else {
        const foodSelect = require('readline-sync'),
            foods = ['Hamburger', 'Pizza', 'Pasta', 'Chinese'],
            index = foodSelect.keyInSelect(foods, 'What kind of food do you want?:');
        switch (foods[index]) { // Kosher restaurants
            case 'Hamburger':
                console.log('Go to Burgerim restaurant');
                break;
            case 'Pizza':
                console.log('Go to Pizza Hut restaurant');
                break;
            case 'Pasta':
                console.log('Go to Pastaliano restaurant');
                break;
            case 'Chinese':
                console.log('Go to Japanika restaurant');
                break;
        }
    }
    // If not Kosher
} else {
    const foodSelect = require('readline-sync'),
        foods = ['Hamburger', 'Pizza', 'Pasta', 'Chinese'],
        index = foodSelect.keyInSelect(foods, 'What kind of food do you want?:');
    switch (foods[index]) { // Not Kosher restaurants
        case 'Hamburger':
            console.log('Go to Prozdor restaurant');
            break;
        case 'Pizza':
            console.log('Go to Tony Vespa restaurant');
            break;
        case 'Pasta':
            console.log('Go to Amore Mio restaurant');
            break;
        case 'Chinese':
            console.log('Go to Japanika restaurant');
            break;
    }
}
