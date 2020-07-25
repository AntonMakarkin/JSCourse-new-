'use strict';

//callback hell

/*console.log('Запрос данных...');

setTimeout(() => {
    console.log('Подготовка данных...');

    const product = {
        name: 'TV',
        price: 2000
    };

    setTimeout(() => {
        product.status = 'order';
        console.log(product);
    }, 2000);
});*/

console.log('Запрос данных...');

const req = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Подготовка данных...');
    
        const product = {
            name: 'TV',
            price: 2000
        };
        
        resolve(product); //send data in then
    });
});

req.then((product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';
            resolve(product);
            //reject();
        }, 2000);        
    });
}).then(data => { //because we return Promise we can use then here
    data.modify = true;
    return data;
}).then(data => {
    console.log(data);
}).catch(() => {
    console.error('Произошла ошибка');
}).finally(() => {
    console.log('Finally');
});




const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};

//test(1000).then(() => console.log('1000ms'));
//test(1000).then(() => console.log('1000ms'));

Promise.all([test(1000), test(2000)]).then(() => { //wait ends of all promises
    console.log('All');
});

Promise.race([test(1000), test(2000)]).then(() => { //wait the first promise
    console.log('All');
});
