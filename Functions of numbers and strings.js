(function() {
    "use strict";

    //Strings

    const str = "test";
    const arr = [1, 2, 4];

    //console.log(str.length);
    //console.log(str[2]);

    console.log(str.toUpperCase());
    console.log(str.toLowerCase());
    console.log(str);

    const fruit = "Some fruit";
    console.log(fruit.indexOf("fruit"));

    const logg = "Hello World";
    console.log(logg.slice(6, 11)); //the last argument is a number which not included
    console.log(logg.slice(6));
    console.log(logg.slice(-5, -1));

    console.log(logg.substring(6, 11)); //doesnt support negative numbers

    console.log(logg.substr(6, 5)); //the first element is a starting position, second - length of necesssary substring


    //Numbers

    const num = 12.2;
    console.log(Math.round(num));

    const test = "12.2px";
    console.log(parseInt(test));
    console.log(parseFloat(test));
    
})();