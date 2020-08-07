'use strict';

//works only in chrome ()

class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    #surname = 'Makarkin'; //uncheangable(private)

    say = () => {
        console.log(`Имя пользователя: ${this.name}${this.#surname}, возраст ${this._age}`);
    }

    get age() { //dosn`t work
        return this._age;
    }

    set age(age) { //doesn`t work
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('Недопустимое значение!');
        }
    }

    get surname() {
        return this.#surname;
    }

    set surname(value) {
        this.#surname = value;
    }
}


const ivan = new User('Anton', 27);
console.log(ivan.surname);
ivan.say();
//ivan.age(20);
ivan.surname();