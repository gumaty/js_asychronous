// const box = document.querySelector('.box');
//
// // callback hell
// setTimeout(() => {
//     box.style.left = "500px";
//     setTimeout(() => {
//         box.style.top = "500px";
//         setTimeout(() => {
//             box.style.left = "0px";
//             setTimeout(() => {
//                 box.style.top = "0px";
//             }, 3000);
//         }, 3000);
//     }, 3000);
// }, 3000);

const receipt = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Kebab maj friend!');
    }, 3001);

    setTimeout(() => {
        reject('No, kebab, łonna fajt?!');
    }, 3000);
});

console.log(receipt);

receipt
    .then((msg) => {
        console.log(msg)
    })
    .catch((msg) => {
        console.log(msg)
    })
