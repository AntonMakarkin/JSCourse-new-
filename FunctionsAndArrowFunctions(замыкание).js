(function() {
    "use strict";

    let num = 20;

    //function declaration

    function showFirstMessage(text) {
        console.log(text);
        let num = 10;
        console.log(num);
    }

    showFirstMessage("Hello World!");
    console.log(num);

    function calc(a, b) {
        return (a + b);
    }

    console.log(calc(4, 3));
    console.log(calc(5, 6));
    console.log(calc(10, 6));

    function ret() {
        let num = 50;

        //code

        return num;
    }

    const anotherNum = ret();
    console.log(anotherNum);


    //function expression

    const logger = function () {
        console.log("Hello");
    };

    logger();

    //arrow function
    let calculation = (a, b) => {
        return a + b;
    };
    console.log(calculation(4, 3));
})();