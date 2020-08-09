'use strict';

let number = 1;

function num() {
    number = 2;
    console.log(number);
    console.log(number + 3);
}

console.log(number);
num();
console.log(number);