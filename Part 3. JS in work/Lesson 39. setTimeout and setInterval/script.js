const btn = document.querySelector('.btn');
const elem = document.querySelector('.box');
let timerId,
    i = 0,
    pos = 0;

/*function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);

    function frame() {
        if (pos === 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}*/

function myAnimation() {
    pos++;
    elem.style.top = pos + "px";
    elem.style.left = pos + "px";

    if (pos < 300) {
        requestAnimationFrame(myAnimation);
    }

}

btn.addEventListener('click', () => requestAnimationFrame(myAnimation));

let id = requestAnimationFrame(myAnimation);
cancelAnimationFrame(id);

/*btn.addEventListener('click', () => {
    //const timerId = setTimeout(logger, 2000);
    timerId = setInterval(logger, 500);
});*/

//const timerId = setTimeout(logger, 2000);

//setTimeout(logger, 2000);

/*const timerId = setTimeout(function(text) {
    console.log(text);
}, 2000, 'Hello');*/

/*function logger() {
    if (i === 3) {
        clearInterval(timerId);
    }
    console.log('text');
    i++;
}*/

//recursive setTimeOut
/*let id = setTimeout(function log() {
    console.log('Hello');
    id = setTimeout(log, 500);
}, 500);*/

