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
fetch('url')
.then(response => response.JSON())
.then(data => console.log(data))

// 3. Object keys, Values