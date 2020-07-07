window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    const buttons = document.querySelectorAll('button'),
          overlay = document.querySelector('.overlay');
          console.log(btn);
          console.log(overlay);

    //let i = 0;
    const deleteElement = (e) => {
        console.log(e.target);
        //console.log(e.currentTarget);
        console.log(e.type);
        //i++;

        //if (i == 1) {
        //  btn.addEventListener('click', deleteElement);
        //}

    };

    //btn.addEventListener('click', deleteElement);
    //overlay.addEventListener('click', deleteElement);

    buttons.forEach(btn => {
        btn.addEventListener('click', deleteElement, {once: true});
    });
    
    const link = document.querySelector('a');

    link.addEventListener('click', function(event) {
        event.preventDefault();

        console.log(event.target);
    });
});