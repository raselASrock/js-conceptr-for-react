const numbers = [15,78,45,95,26,35,15];

const student = {
    name: "Sakib Khan",
    age: 32,
    movies: ["king Khan", "Dhakar Mastan"]
};
// 1. Template String 
const about = `
My name is ${student.name}. I am ${student.age} years old.I have a lucky number that is ${numbers[2]}. I also liked movies ${student.movies[0]}
`
console.log(about);
// 2. Arrow Function 

const getFiftyFive = () => 55;      /* No param */ 
const addSixtyFive = num => num + 65;   /* 1 param */
const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z     /* 3 paaram */
const doMath = (num1, num2) => {
    const result = num1 + num2;
    return result;

}

// 3. Spread operator 
// const newNumbers = numbers;
const newNumbers = [...numbers];
numbers.push(99);
// Create a new arrey from an older arrey and add an element
const currentNumbers = [...numbers, 55,98,54,35]
console.log(newNumbers);
console.log(numbers);
console.log(currentNumbers);