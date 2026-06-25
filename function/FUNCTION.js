

// =========================================================
// 🌟 functions.js — Explained Functional Programming Concepts
// =========================================================

// 🔹 PURE FUNCTION
// A pure function always returns same output for same input — کوئی side effect نہیں ہوتا

function sum(a, b) {
// purpose: adds two numbers without changing any external state
return a + b; // same input = same output
}

console.log(sum(2, 5)); // Example: 2 + 5 = 7

// ❌ IMPURE FUNCTION EXAMPLE
// Impure function changes outer variable — یعنی shared state بدلتا ہے

let total = 0;

function increment() {
total++; // modifies external variable — side effect
}

// =========================================================
// 🔹 IMMUTABILITY (نا تبدیل ہونے والی چیز)
// =========================================================
// means not changing the original value — original data ko nahi chhedte

let str = "manas";
str[0] = "Z"; // won't change because strings are immutable
console.log(str.push("hjhh")); // Output: "manas"

// ✅ Object immutability using spread operator
let obj = {
age: 21,
name: "Manas Kumar Lal",
};

function replaceName(name) {
// creates a new object with new name, original remains same
let newObj = { ...obj, name };
return newObj;
}

let ReplacedObj = replaceName("Muskan");
console.log(obj); // old object
console.log(ReplacedObj); // new updated object

// =========================================================
// 🔹 ARRAY IMMUTABILITY
// =========================================================
const list = ["alu", "gobi", "kaddu"];

function addItem(item) {
// returns a new array with added item
return [...list, item];
}

let newList = addItem("baingan");
console.log(list); // unchanged
console.log(newList); // new array with "baingan"

// =========================================================
// 🔹 HIGHER ORDER FUNCTIONS
// =========================================================
// A function that takes another function as argument —
// اردو میں: “فنکشن جو دوسرے فنکشن کو handle کرے”

function greetHello() {
return "Hello";
}
function greetNamaste() {
return "Namaste";
}

function greetWithName(fn, name) {
return fn() + " " + name;
}

console.log(greetWithName(greetHello, "Manas")); // "Hello Manas"

// =========================================================
// 🔹 CALLBACK FUNCTIONS
// =========================================================
// callback means passing a function to another function

function sendEmail(user) {
console.log("Email sent to:", user.email);
}

function sendSms(user) {
console.log("SMS sent to:", user.phone);
}

function sendMessage(user, notifyFn) {
console.log("Authorized...");
notifyFn(user); // executes callback
}

let user1 = {
name: "Muskan",
email: "[muskan@gmail.com](mailto:muskan@gmail.com)",
phone: 12345,
};

sendMessage(user1, sendEmail); // callback -> sendEmail
sendMessage(user1, sendSms); // callback -> sendSms

// =========================================================
// 🔹 COMPOSITION — combining small functions
// =========================================================
// compose -> right to left, pipe -> left to right

let add2 = (num) => num + 2;
let multiply5 = (num) => num * 5;
let subtract10 = (num) => num - 10;

function compose(...fns) {
return function (val) {
return fns.reduceRight((acc, fn) => fn(acc), val);
};
}

let composedResult = compose(subtract10, multiply5, add2)(6);
console.log(composedResult); // (((6+2)*5)-10) = 30

// =========================================================
// 🔹 ARRAY METHODS — map, filter, reduce
// =========================================================

let arr = [1, 2, 3, 4, 5, 6];

// map — transforms each element
let squares = arr.map((n) => n * n); // square every number
console.log(squares);

// filter — selects specific elements
let even = arr.filter((n) => n % 2 === 0);
console.log(even);

// reduce — accumulates into single value
let sumAll = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sumAll);

// =========================================================
// 🔹 CUSTOM MAP FUNCTION (Prototype Extension)
// =========================================================

Array.prototype.ownMap = function (logicFn) {
let output = [];
for (let i = 0; i < this.length; i++) {
output.push(logicFn(this[i]));
}
return output;
};

let cubeLogic = (n) => n * n * n;
console.log(arr.ownMap(cubeLogic)); // [1, 8, 27, 64, 125, 216]

// =========================================================
// 🔹 ARROW FUNCTION & THIS KEYWORD (بڑا important concept)
// =========================================================

// Arrow function does not have its own 'this'
// — یعنی arrow function کا this current lexical scope سے آتا ہے

let person = {
name: "Manas",
normalFunc: function () {
console.log("Normal Func:", this.name); // 'this' refers to person object
},
arrowFunc: () => {
console.log("Arrow Func:", this.name);
// ❌ In arrow function, 'this' does not point to person
// Urdu: arrow function apna khud ka this nahi rakhta
// It takes 'this' from outside (global/window)
},
};

person.normalFunc(); // ✅ "Manas"
person.arrowFunc(); // ❌ undefined

// =========================================================
// 🔹 BONUS: CHAINING EXAMPLE
// =========================================================
// using arrow + composition like modern functional style

let toLower = (str) => str.toLowerCase();
let removeSpaces = (str) => str.replaceAll(" ", "");
let addAtTheRate = (str) => "@" + str;

function createUserName(str) {
return addAtTheRate(removeSpaces(toLower(str)));
}

console.log(createUserName("Manas Kumar Lal")); // @manaskumarlal

// =========================================================
// END OF FILE — FUNCTIONAL JAVASCRIPT WITH URDU TARKA 😎
// =========================================================








"use strict"; 
// Purpose: Strict mode → silent errors ko throw kare (security + clean code)

/////////////////////////////////////////////
// 🔹 BASIC FUNCTION DECLARATION
/////////////////////////////////////////////

function add(a, b) {
  // a, b = parameters (input placeholders)
  return a + b; 
  // Purpose: output return karna
}

const sum = add(2, 3); 
// 2,3 = arguments (actual values passed)

/////////////////////////////////////////////
// 🔹 DEFAULT PARAMETERS
/////////////////////////////////////////////

function greet(name = "Guest") {
  return `Hello ${name}`;
}
// Purpose: agar argument na mile to default use ho

greet(); // "Hello Guest"

/////////////////////////////////////////////
// 🔹 ARROW FUNCTION (modern JS)
/////////////////////////////////////////////

const multiply = (a, b) => a * b;
// Short syntax, mostly React me use hota hai

/////////////////////////////////////////////
// 🔹 HIGHER ORDER FUNCTION (HOF)
/////////////////////////////////////////////

function processUser(callback) {
  // callback = function passed as argument
  return callback("Hassan");
}

const result = processUser((name) => {
  return `User: ${name}`;
});
// Purpose: dynamic behavior, reusable logic

/////////////////////////////////////////////
// 🔹 CALLBACK FUNCTION
/////////////////////////////////////////////

function fetchData(cb) {
  setTimeout(() => {
    cb("Data mil gaya");
  }, 1000);
}

fetchData((data) => {
  console.log(data);
});
// Purpose: async kaam complete hone pe function call

/////////////////////////////////////////////
// 🔹 PURE FUNCTION (important for React)
/////////////////////////////////////////////

function pureAdd(a, b) {
  return a + b;
}
// Same input → same output (no side effects)

/////////////////////////////////////////////
// 🔹 IMPURE FUNCTION (avoid in production)
/////////////////////////////////////////////

let total = 0;

function impureAdd(x) {
  total += x;
}
// External variable change → unpredictable

/////////////////////////////////////////////
// 🔹 FUNCTION WITH OBJECT PARAM
/////////////////////////////////////////////

function createUser({ name, age }) {
  return `${name} is ${age}`;
}
// Destructuring → clean code

createUser({ name: "Ali", age: 20 });

/////////////////////////////////////////////
// 🔹 REST PARAMETERS
/////////////////////////////////////////////

function sumAll(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
// Multiple arguments handle

sumAll(1, 2, 3, 4);

/////////////////////////////////////////////
// 🔹 IIFE (Immediately Invoked Function)
/////////////////////////////////////////////

(function () {
  console.log("Auto run function");
})();
// Purpose: isolate scope, auto execute

/////////////////////////////////////////////
// 🔹 CLOSURE (VERY IMPORTANT 🔥)
/////////////////////////////////////////////

function outer() {
  let count = 0;

  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();

counter(); // 1
counter(); // 2
// Purpose: private state maintain

/////////////////////////////////////////////
// 🔹 FUNCTION BIND / CALL / APPLY
/////////////////////////////////////////////

const user = {
  name: "Hassan"
};

function showName() {
  return this.name;
}

showName.call(user); 
// call → direct execute with context

showName.apply(user); 
// apply → same but array args

const bound = showName.bind(user);
bound(); 
// bind → new function return

/////////////////////////////////////////////
// 🔹 ERROR HANDLING (SECURITY)
/////////////////////////////////////////////

function safeDivide(a, b) {
  if (b === 0) throw new Error("Divide by zero");
  return a / b;
}
// Purpose: crash avoid + secure logic

/////////////////////////////////////////////
// 🔹 FIRST CLASS FUNCTION
/////////////////////////////////////////////

const fn = function () {
  return "I am value";
};
// Function ko variable me store kar sakte ho

/////////////////////////////////////////////
// 🔹 FUNCTION COMPOSITION
/////////////////////////////////////////////

const double = x => x * 2;
const square = x => x * x;

const composed = x => square(double(x));
// Purpose: small functions combine

/////////////////////////////////////////////
// 🔹 INDUSTRY USE (React API)
/////////////////////////////////////////////

const getUserNames = (users) => {
  return users
    .filter(u => u.active)
    .map(u => u.name);
};
// Real dashboard logic