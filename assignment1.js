let userScore = 0;

const age = {
    'Under 18': 5,
    '18 - 40': 3,
    '40 - 60': 2,
    'Over 60': 0
}

const moneyHorizon = {
    'less than 5 years': 1,
    '5-10 years': 2,
    '10-15 years': 3,
    'over 15 years': 4
}

const yield = {
    'more than 7%': 5,
    '4-7%': 3,
    '2-4%': 2,
    'less then 2%': 0
}

const assets = {
    'Less than 50K': 1,
    'Between 50-100K': 2.5,
    'Between 100-200K': 2.5,
    'Over 200K': 5
}

const familiarity = {
    'From my pension': 2,
    'Very familiar': 4,
    'Not familiar at all': 2,
    'Only from news': 2
}

console.log(
    `*****************
    Hello! Welcome to the quiz - Your Portfolio Investment Allocation!
    ----------------`);

const question1 = require('readline-sync'),
    options1 = ['Under 18', '18 - 40', '40 - 60', 'Over 60'],
    index1 = question1.keyInSelect(options1, 'What is your age?:');
const question1Ans = options1[index1];

const question2 = require('readline-sync'),
    options2 = ['over 15 years', '10-15 years', '5-10 years', 'less than 5 years'],
    index2 = question2.keyInSelect(options2, 'When you will need the money?:');
const question2Ans = options2[index2];

const question3 = require('readline-sync'),
    options3 = ['less then 2%', '2-4%', '4-7%', 'more than 7%'],
    index3 = question3.keyInSelect(options3, 'What is the return yot would like to get (in a year)?:');
const question3Ans = options3[index3];

const question4 = require('readline-sync'),
    options4 = ['Less than 50K', 'Between 50-100K', 'Between 100-200K', 'Over 200K'],
    index4 = question4.keyInSelect(options4, 'Do you have additional assets (money terms)?:');
const question4Ans = options4[index4];

const question5 = require('readline-sync'),
    options5 = ['Not familiar at all', 'Very familiar', 'Only from news', 'From my pension'],
    index5 = question5.keyInSelect(options5, 'How familiar are you with investments?:');
const question5Ans = options5[index5];

userScore = age[question1Ans] + moneyHorizon[question2Ans] + yield[question3Ans] + assets[question4Ans] + familiarity[question5Ans];

console.log(`***********Quiz results***********`);
if (userScore <= 8) {
    console.log(`You should invest 100% in bonds`);
} else if (userScore > 8 && userScore < 12) {
    console.log(`You should invest 25% in stocks and 75% in bonds`);
} else if (userScore >= 12 && userScore < 16) {
    console.log(`You should invest 50% in stocks and 50% in bonds`);
} else if (userScore >= 16 && userScore < 20) {
    console.log(`You should invest 75% in stocks and 25% in bonds`);
} else {
    console.log(`You should invest 100% in stocks`);
}
