// 1. JSON  => stringify, parse

const student = {
    name: "Sakib Khan",
    age: 32,
    movies: ["king Khan", "Dhakar Mastan"]
};
const studentJSON = JSON.stringify(student);
console.log(student);
console.log(studentJSON);

const studentObject = JSON.parse(studentJSON);
console.log(studentObject);

// 2. fetch
// fetch('url')
// .then(response => response.JSON())
// .then(data => console.log(data))

// 3. Object keys, Values
const keys = Object.keys(student);
const values = Object.values(student);
console.log(keys, values);


const numbers = [12,45,75,48,95,35,76,15]
numbers.forEach( num => console.log(num))

// for of on arrey like Object 
// Loop on a object using for in


// add or remove from an arrey

const products = [
    {name: 'laptop', price: 32000, brand: 'Lenovo', color: 'Silver'},
    {name: 'phone', price: 7000, brand: 'HTC', color: 'Black'},
    {name: 'watch', price: 3000, brand: 'Olves', color: 'Yellow'},
    {name: 'sunglass', price: 2000, brand: 'Myanta', color: 'Merun'},
    {name: 'camera', price: 8000, brand: 'Canon', color: 'Black'},
];
const newProduct = {name:'webcame', price: 700, brand: 'logitec', color: 'black'};

// copy products arrey then add new product

const newProducts = [...products, newProduct];
console.log(newProducts);

// create a new arrey without one specific item

const remaining = products.filter(product => product.name !== 'phone');
console.log(remaining);