'use strict';

//filter

const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

const shortNames = names.filter(function(name) {
    return name.length < 5;
});

console.log(shortNames);


//map 

const answers = ['IvAn', 'AnnA', 'Hello'];

const result = answers.map(item => item.toLowerCase());

console.log(result);


//every/some

//const some = [4, 'qwq', 'sfreferf'];
const some = [4, 5, 7];

console.log(some.some(item => typeof(item) === 'number')); //looking for at least one match, return true/false

console.log(some.every(item => typeof(item) === 'number')); //looking for all elements, return true/false


//reduce

const arr = [4, 5, 1, 3, 2, 6];

const res = arr.reduce((sum, current) => sum + current, 3); //third argument - starting item

console.log(res);


const arrStr = ['apple', 'pear', 'plum'];

const resStr = arrStr.reduce((sum, current) => `${sum} , ${current}`);

console.log(resStr);


//practice

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj) //entries - make array of arrays from object
.filter(item => item[1] === 'persone') //item = array of array
.map(item => item[0]);

console.log(newArr);