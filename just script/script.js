"use strict";
// CYCLES

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num <55);

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         break;
//         continue;
//     }
//     console.log (i);
// }



// FUNCTIONS

// let num = 30;

// function showFirstMessage (text) {
//     console.log(text);
//     num = 20;
// }

// showFirstMessage('Hello');
// console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(2, 2));
// console.log(calc(5, 6));
// console.log(calc(2, 3));


// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);


// const logger = function() {
//     console.log('tupa');
// };

// logger();



// const calc = (a, b) => { 
//     console.log('1');
//     return a + b; 
// };


// METHODS AND CONFIGURATIONS

const str = "teSt";
const arr = [1, 2, 4];

// console.log(str[3]);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

console.log(str);

const fruit = "Some fruit";

console.log(fruit.indexOf("x"));

const logg = "Hello plplplp";

// console.log(logg.slice(5));
console.log(logg.substring(5));
console.log(logg.substr(6, 7));

const num = 12.7;
console.log(Math.round(num));


const test = "12.745px";
console.log(parseInt(test));
console.log(parseFloat(test));