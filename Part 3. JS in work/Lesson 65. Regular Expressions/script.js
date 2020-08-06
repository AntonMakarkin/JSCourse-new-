'use strict';

//new RegExp('pattern', 'flags'); //old method

// /pattern/f //new

//const ans = prompt('Введите ваше имя');

//const reg = /n/ig;
//console.log(reg.test(ans)); //true or false

//const reg = /\d/;
//console.log(ans.match(reg));

const str = 'My name is R2D2';

//console.log(str.match(/\w\d\w\d/i));
console.log(str.match(/\W/ig));
console.log(str.match(/\D/ig));

// \D - not numbers
// \W - not words

// \d -numbers
// \w - words
// \s - spaces

//i //registr independence
//g //global
//m //many strings

//console.log(ans.search(reg)); //search the first enter
//console.log(ans.match(reg)); //return an array

//const pass = prompt('Password');

//console.log(pass.replace(/\./g, "*")); // . - all; \./ - only dot

//console.log('12-34-56'.replace(/-/g, ':'));
