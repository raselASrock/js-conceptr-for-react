/*
Fundamentals 
1. variable (let, const) three types of variable.
2. condition (> , < , ===, !==, <=, >=) && || if-else if, if-else
3. arrey declare, arrey length, index, push, pop, shift, unshift, indexOf, includes
4. for loop, while loop
5. function parameter return
6. Object property, including, arrey object,
*/

/* 
ES6
1. template string ${}
2. spread (...) copy an arrey and than add a new element to the arrey
3. use filter to remove an element from the arrey
4. arrow function ( no param(), single param, multiple param() multi-line{``})
5. object destructuring, arrey destructuring
6. object short hand
7. function  param default value
8. optional chaining ?.
*/

/* 
Browser API
1. local Storage, seccion Storage
2. location API
3. history API
4. fetch
*/

/* 
Others
1. arrey --> map, forEach, filter, find
2. ternary operator ? :
3. logical and (&&), logical or (||)
4. JSON (stringify, parse)
*/

const x = 50;
const y = 40;
// // const obj = {
//     x:x,
//     y:y
// }

// Shortcut
// const obj1 = {x,y}

// const name = 'Nobab Solimullah' ;
// const area = 'Dhaka';

// const nobab ={
//     name: name,
//     area: area
// }

// const nobab2 = {name, area}

const name = 'Hero';const age = 34;
// const person = {name, age}; console.log(person);

const adventurer = { name: 'Alice',cat: {name: 'Lucy'} };
const ratName = adventurer?.rat?.name;
console.log(ratName);

let person =null;
console.log(person ? person : "person is null");

const obj = {a:1};
console.log(Object.keys(obj).length===0);