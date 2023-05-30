const box = document.querySelector('.box');

// callback hell
setTimeout(() => {
    box.style.left = "500px";
    setTimeout(() => {
        box.style.top = "500px";
        setTimeout(() => {
            box.style.left = "0px";
            setTimeout(() => {
                box.style.top = "0px";
            }, 3000);
        }, 3000);
    }, 3000);
}, 3000);


