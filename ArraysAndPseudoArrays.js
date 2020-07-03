(function() {
    "use strict";

    const arr = [2, 13, 26, 6, 8];
    arr.sort(compareNum);
    console.log(arr);

    function compareNum(a, b) {
        return a - b;
    }


    /*arr[99] = 0;
    console.log(arr.length);*/

    //methods witch work with end of array

    //arr.pop(); //remove last element
    //arr.push(10); //add last element
    
    //console.log(arr);

    arr.forEach(function(item, i, arr) {
        console.log(`${i}: ${item} внутри массива ${arr}`);
    });

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }

    for (let value of arr) {
        console.log(value);
    }

    const str = prompt("", "");
    const products = str.split(", ");
    products.sort();
    console.log(products.join('; '));

})();