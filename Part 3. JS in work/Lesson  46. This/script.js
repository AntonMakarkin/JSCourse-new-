'use strict';

/*function showThis(a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        return a + b;
    }

    console.log(sum());
}
showThis(4, 5);*/

/*const obj = {
    a: 20,
    b: 15,
    sum: function() {
        //console.log(this);
        function shout() {
            console.log(this); 
        }
        shout(); //show undefined. because this is not a method of this object, it's a function int he function
    }
};
obj.sum();*/

/*function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
}
let ivan = new User('Ivan', 23);*/

/*function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name: 'John'
};*/

/*sayName.call(user, 'Smith'); //put context
sayName.apply(user, ['Smith']); //put context

function count(num) {
    return this*num;
}

const double = count.bind(2); //create new function with context (this case: 2)
console.log(double(3));
console.log(double(13));*/

// 1)An usual function: this = window, but if use strict = undefined
// 2)Сontext for object methods - the object itself
// 3)this in constructors and classes - new exemplar of object or class 
// 4)manual binding this: call, apply, bind

const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    console.log(this); //context - element
    this.style.background = "red";
});

const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            //console.log(this);
            console.log(this.num);
        };

        say();
    }
};

obj.sayNumber();

const double = a => a * 2;
console.log(double(4));
