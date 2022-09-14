/* 
A. Falsy
    1. "",
    2. 0,
    3. false,
    4. null, 
    5. undefined,

B. Truthy
    1. "text",
    2. number (1,2,3,4....),
    3. true,
    4. {},
    5. [],
*/

let myVar = false;
if (myVar) {
    myVar = myVar*100;
}
else{
    myVar = 0;
}
console.log(myVar);


const money = 180;
let food;
if (money > 100) {
    food = 'birani'
}
else{
    food = 'cha biskut'
}
console.log(food);

// ternary
let food1 = money >100 ? "biriyani khabo" : "cha biskut khabo";
console.log(food1);

let drink = (money > 100 && myVar > 30) ? 'coke' : 'water';
console.log(drink);

// number to string shortcut 

const num1 = 50;
const num1Str = num1 + '';
console.log(num1);
console.log(num1Str);

// String to number
const input = '560';
const inputNum = +input;
console.log(inputNum);

// call a function
let isActive = true;
const showUser = () => console.log('display User');
const hideUser = () => console.log('hide user');
isActive ? showUser() : hideUser();
// use && if the left side is true then right side will be executed
isActive && showUser()
// use || if the left side is falce then right side will be executed
isActive || showUser()
// toggle boolean;
isActive = !isActive