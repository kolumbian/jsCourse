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

// const str = "teSt";
// const arr = [1, 2, 4];

// console.log(str[3]);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// console.log(str);

// const fruit = "Some fruit";

// console.log(fruit.indexOf("x"));

// const logg = "Hello plplplp";

// console.log(logg.slice(5));
// console.log(logg.substring(5));
// console.log(logg.substr(6, 7));

// const num = 12.7;
// console.log(Math.round(num));


// const test = "12.745px";
// console.log(parseInt(test));
// console.log(parseFloat(test));


// ARRAYS AND PSEUDOARRAYS

// const arr = [2, 3, 6, 8, 10];
// arr[99] = 0;
// console.log(arr.length);
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//     return a - b;
// }

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; '));


// Передача данных по ссылке и по значению

// let a = 5;
//     b = a;
// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj;

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;

// console.log(newNumbers);
// console.log(numbers);

// const add = {
//     d: 17,
//     e: 20
// };

// const clone = Object.assign({}, add);

// clone.d = 20;

// console.log(add);
// console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'd';

// console.log(newArray);
// console.log(oldArray);


// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);


// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

const array = ["a", "b"];

const newAarray = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};

console.log(q);