
let array1 = ['Hello'];
let array2 = ['AppleSeeds', 'Bootcamp'];

function joinArrays(arg1, arg2) {
    arg2.forEach(el => {
        arg1.push(el);
    });
    return arg1;
}
console.log(joinArrays(array1, array2));
