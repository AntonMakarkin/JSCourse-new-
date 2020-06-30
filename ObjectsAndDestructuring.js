(function() {
    'use strict';

    const options = {
        name: 'test',
        width: 1024,
        height: 1024,
        colors: {
            border: 'black',
            bg: 'red'
        },
        makeTest: function() {
            console.log("Test");
        }
    };

    options.makeTest();

    
    //destructured

    const {border, bg} = options.colors;
    console.log(border);

    console.log(Object.keys(options).length); //second method to find out number of keys in object

    //console.log(options["colors"]["border"]);

    /*console.log(options.name);

    delete options.name;

    console.log(options);*/


    //first method to find out number of keys in object

    let counter = 0;
    for (let key in options) {
        if (typeof(options[key]) === 'object') {
            for (let i in options[key]) {
                console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
                counter++;
            }
        } else {
            console.log(`Свойство ${key} имеет значение ${options[key]}`);
            counter++;
        }
    }
    console.log(counter);

})();
//const obj = new Object();