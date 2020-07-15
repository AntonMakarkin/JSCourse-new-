'use strict';

//rest operator takes elements and push them in array

const log = function(a, b, ...rest) { // any name
    console.log(a, b, rest);
};

log('basic', 'rest', 'operator', 'usage');


//default parameters

function calcOrDouble(number, basis = 2) { //ES6
    //basis = basis || 2; //before ES6
    console.log(number * basis);
}

calcOrDouble(3);