'use strict';

//const now = new Date('2020-07-10');
//const now = new Date(2020, 5, 1, 20);
//const now = new Date(0);
//const now = new Date(-99999999); //before 1970

const now = new Date();
//const now = new Date('2020-05-01');
//new Date.parse('2020-05-01');

//setters
console.log(now.setHours(40));
console.log(now);


//getters
//console.log(now);
/*console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getUTCHours());
console.log(now.getTimezoneOffset()); //difference between local time and UTC in minutes
console.log(now.getTime()); //milliseconds from 1/1/1970 */

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`Цикл отработал за ${end - start} миллисекунд`);