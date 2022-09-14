
// 1. arrey destructuring

// const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];


/* const [x,y] = [45, 86];
console.log(x,y); */
const numbers = [42, 65];
const [x,y] = numbers;
console.log(x,y);

function boxify ( num1, num2 ){
    const nums = [num1, num2];
    return nums;
}

// const [first,second] = boxify[85,49]

// const output = boxify(85,49);
// console.log(output);

const student = {
    name: "Sakib Khan",
    age: 32,
    movies: ["king Khan", "Dhakar Mastan"]
};

// const [firstMovie, secondMovie] = ["king Khan", "Dhakar Mastan"];
const [firstMovie, secondMovie] = student.movies

console.log(firstMovie, secondMovie);


// Object destructuring
// const {name, age} = {name: 'Alu', age: 14}
const {name, age} = {id: 1520, name: 'Alu', salary: 34000 ,age: 14}

console.log(name, age);

const employee = {
    id: 1920,
    designation: 'developer',
    device: 'macbook',
    language: ['html', 'css', 'javascript', 'c programming', 'python'],
    specification: {
        height: 66,
        weight: 67,
        address: 'Kamarkhali',
        drink: 'water',
        email: 'info@gmail.com',
        watch: {
            color: 'black',
            price: 500,
            brand: 'garmin'
        }
    }
};

const {device, id} = employee;
const {address, email} = employee.specification;
const {brand} = employee.specification.watch;
console.log(device,id);
console.log(address, email);
console.log(brand);