// "use strict";
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

// const array = ["a", "b"];

// const newAarray = [...array];

// const q = {
//     one: 1,
//     two: 2
// };

// const newObj = {...q};

// console.log(q);



// ООП и ПРОТОТИПНО-ОРИЕНТИРОВАННОЕ НАСЛЕДОВАНИЯ



// let str = "some";
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1,2,3]);

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayhello: function() {
//         console.log("Hello");
//     }
// };

// const john =  Object.create(soldier);

// const john = {
//     health: 100
// };

// john.__proto__ = soldier; // НЕ ИСПОЛЬЗУЕТСЯ

// Object.setPrototypeOf(john, soldier);

// console.log(john.armor);
// john.sayhello();



//Отлов ошибок в коде при помощи консоли



// function hello() {
//     console.log("Hello World");
// }

// hello();

// function hi() {
//     console.log('Say hi!');
// }

// hi();

// const arr = [1, 14, 4, 30, 54],
//       sorted = arr.sort(compareNum);

// function compareNum(a, b) {
//     return a - b;
// }
// console.log(sorted);



//Динамическая типизация



// To String


// 1
// console.log(typeof(String(null)));

// 2 Конкатенация - сложение строки с чем-либо превращает это в строку
// console.log(typeof(5 + ''));

// const num = 5;

// console.log("https://vk.com/catalog/" + num);

// const fontSize = 26 + 'px';


// To Number


// 1 
// console.log(typeof(Number('4')));

// 2
// console.log(typeof(+'5'));

// 3
// console.log(typeof(parseInt("15px", 10)));


// To boolean


// false
// 0, '', null, undefined, NaN;

// 1
// let switcher = null;

// if (switcher) {
//     console.log('Working...');
// }

// switcher = 1;

// if (switcher) {
//     console.log('Working...');
// }

// 2
// console.log(typeof(Boolean('4')));

// 3
// console.log(typeof(!!"44444"));



/// ДЕЙСТВИЯ С ЭЛЕМЕНТАМИ НА СТРАНИЦЕ

// const box = document.getElementById('box'),
//       btns = document.getElementsByTagName('button'),
//       circles = document.getElementsByClassName('circle'),
//       wrapper = document.querySelector('.wrapper'),
//       hearts = wrapper.querySelectorAll('.heart'),
//       oneHeart = wrapper.querySelector('.heart');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

// box.style.cssText = 'background-color: blue; width: 500px';

// btns[1].style.borderRadius = '100%';
// circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

// hearts.forEach(item => {
//     item.style.backgroundColor = 'blue';
// });

// const div = document.createElement('div');
// const text = document.createTextNode('Тут могла быть Ваша реклама');

// div.classList.add('black');

// wrapper.append(div);
// wrapper.prepend(div);
// wrapper.appendChild(div);

// hearts[0].before(div);
// hearts[0].after(div);

// wrapper.insertBefore(div, hearts[0]);

// circles[0].remove();
// wrapper.removeChild(hearts[1]);

// hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]);

// div.innerHTML = "<h1>Hello World</h1>";

// div.textContent = "Hello";

// div.insertAdjacentHTML("afterend", '<h2>Hello</h2>');


/// ОБРАБОТЧИКИ СОБЫТИЙ


// const btns = document.querySelectorAll('button'),
//       overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert('Click');
// };

// btn.onclick = function() {
//     alert('Second click');
// };

// btn.addEventListener('click', () => {
//     alert('Click');
// });

// let i = 0;

// const deleteElement =  (e) => {
//     console.log(e.target);
//     console.log(e.type);
//     i++;
//     if (i==1) {
//         btn.removeEventListener('click', deleteElement);
//     }
// };

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);
// btns.forEach(btn => {
//     btn.addEventListener('click', deleteElement, {once: true});
// });

// const link = document.querySelector('a');

// link.addEventListener('click', function(event) {
//     event.preventDefault();

//     console.log(event.target);
// });


/// Навигация по DOM


// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastChild);

// console.log(document.querySelector('#current').parentNode);
// console.log(document.querySelector('#current').parentElement);

// console.log(document.querySelector('[data-current="3"]').previousElementSibling);

// for (let node of document.body.childNodes) {
//     if (node.nodeName == '#text') {
//         continue;
//     }

//     console.log(node);
// }


//  СОБЫТИЯ НА МОБИЛЬНЫХ УСТРОЙСТВАХ


//touchstart
//touchmove
//touchend
//touchenter
//touchleave
//touchcancel

// window.addEventListener('DOMContentLoaded', () => {
//     const box = document.querySelector('.box');

//     box.addEventListener('touchstart', (e) => {
//         e.preventDefault();

//         console.log('Start');
//         console.log(e.touches);
//     });

//     box.addEventListener('touchmove', (e) => {
//         e.preventDefault();

//         console.log(e.targetTouches[0].pageX);
//     });

//     box.addEventListener('touchend', (e) => {
//         e.preventDefault();

//         console.log('End');
//     });
// });

//touches
//targetTouches
//changedTouches


//  Async, defer, динамические скрипты


//defer - браузер должен загружать скрипт в фоновом режиме,
// пока структура загружается и после скрипт выполнится

// const p = document.querySelectorAll('p');
// console.log(p);

// async - загружается в фоновом, но запускается сразу, как только
// загрузился

// function loadScript(src) {
//     const script = document.createElement('script');
// script.src = 'src';
// script.async = false;
// document.body.append(script);
// }

// loadScript("js/test.js");
// loadScript("script.js");


// classList и делегирование собыий


