const box = document.querySelector('.box');
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



// const receipt = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Kebab maj friend!');
//     }, 3001);
//
//     setTimeout(() => {
//         reject('No, kebab, łonna fajt?!');
//     }, 3000);
// });
//
// console.log(receipt);
//
// receipt
//     .then((msg) => {
//         console.log(msg)
//     })
//     .catch((msg) => {
//         console.log(msg)
//     })


// function move(top, left) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             box.style.left = left;
//             box.style.top = top;
//             resolve();
//         }, 3000);
//     });
// }
//
// move(0, "500px")
//     .then(() => move('500px', "500px"))
//     .then(() => move('500px', 0))
//     .then(() => move(0, 0));

const url = "http://api.nbp.pl/api/exchangerates/rates/a/eur/?format=json";
const request = fetch(url);

request
    .then((response) => response.json())
    .then((data) => console.log(data.rates[0].mid))
    .catch(console.log);