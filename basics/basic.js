
{"https://www.youtube.com/shorts/mV9_-WagIp4"}
//word vs key word//
//ali = word//
//for ,or , console.log,arry.etc = keyword//


// variables -- constants//
//variables -- consant are use to stor data //
//we can change data of variables but not the data of constant  var ali=good; console.log(ali); it will print good

var so = "ewx"
console.log(so) //no erroor

var a;
console.log(a)
var a = "Dd"  // 'hoisted undifine'

// hoisting //
// variables and function are hoiested which means that there deceleration move to top of the code//
// example//
//console.log(a);
//var a;// this line of code will move all the way to the top and as a result is undefine //
//var a=23;

// un -- not define //
// un define is think that exixt but we dont know that it exist and not define is think that not even exist//

// types in js// 
// refrence -- primitive//
// refrence = {},[],() --- asi valu jisko copy karr ne par real value copy nahi hota bal ki us ka refrence pass ho ja ta ha us ko refrence valu kahte ha  //or jis ko copy karne par real coppy ho jay use  primative data type kahte ha//


// conditional istate ments//
// if - else -- else if// 
// if first command dont run it will second comand tell computer in which condition what to do//

// loops //
// for -- for while// 
//for(var i = 0; i<51 ;i++ ){ console.log("dfvfejke");} -- for(valu; stoping condition ;operation){ console.log();}
 //while(stoping condition){ operation}//

// function//
// function ka matlab kisi code ko likh ka namm desakte ho or bad me sirf namm likh kar us ko use kar sak te ho many times just like an variable 
// it do 3 main use //
// 1) when we wan to run code in future [[function hanaji (){console.log("hdhbdchbs");} "when we want to print {{ hanaji();}}" //
// 2) when we want to reuse the code//
// 3) when we want to run code with different data//
//params{funcion chalata wakt variable jin me valu stor hote ha arguments wali} and arguments { funcion chalata wakt jo value dete ha}//
//function abcd(a,b,c,d){console.log(a,b,c,d);}
//abcd(12,13,14,15); [ the values(12,13,14,15) are argument ] [(a,b,c,d) they hold values so they are parameters]

 
// arrays //
// array is group of values var arr =[12,13,16,4r,44,4] (console.log(arr[2]) it will print 16) {1 arry = 0 index}//
// push pop shift unshift splice//

// object // //ak bande ki detaails ko hold kar na //
//let obj =  {age:12,nam:"hhh"};console.log(obj.nam);//// function in object are known as method //
//to updte value in object obj.age = 22 ;//







// 🔹 1. push()
// Adds one or more elements to the end of an array.
// let fruits = ["apple", "banana"];
// fruits.push("orange"); // ["apple", "banana", "orange"]

// 🔹 2. pop()
// Removes the last element from an array and returns it.
// let fruits = ["apple", "banana"];
// let last = fruits.pop(); // last = "banana", fruits = ["apple"]

// 🔹 3. unshift()
// Adds one or more elements to the beginning of an array.
// let fruits = ["banana", "orange"];
// fruits.unshift("apple"); // ["apple", "banana", "orange"]

// 🔹 4. shift()
// Removes the first element from an array and returns it.
// let fruits = ["apple", "banana"];
// let first = fruits.shift(); // first = "apple", fruits = ["banana"]

// 🔹 5. splice()
// Adds, removes, or replaces elements at any index.
// let fruits = ["apple", "banana", "cherry"];
// fruits.splice(1, 1, "orange"); // removes 1 element at index 1 and inserts "orange"
// ["apple", "orange", "cherry"]

// 🔹 6. slice()
// Returns a shallow copy of a portion of an array without modifying the original.
// let fruits = ["apple", "banana", "cherry"];
// let newFruits = fruits.slice(1, 3); // ["banana", "cherry"]

// 🔹 7. concat()
// Combines two or more arrays without changing the original arrays.
// let a = [1, 2];
// let b = [3, 4];
// let combined = a.concat(b); // [1, 2, 3, 4]

// ================= HOISTING COMPLETE CHEAT BLOCK =================

// 1️⃣ VAR HOISTING
// Purpose: var declaration hoist hoti hai, value nahi
console.log(a);        // undefined
var a = 10;

// Engine sees it as:
// var a;
// console.log(a);
// a = 10;


// 2️⃣ FUNCTION DECLARATION HOISTING
// Purpose: function declaration fully hoist hota hai (body + reference)
sayHi();               // "dd"

function sayHi() {
  console.log("dd");
}


// 3️⃣ FUNCTION EXPRESSION (var + arrow)
// Purpose: sirf variable hoist hota hai, function assign nahi hota
sayHello();            // ❌ TypeError: sayHello is not a function

var sayHello = () => {
  console.log("dd");
};


// 4️⃣ ARROW FUNCTION WITH let / const
// Purpose: let/const hoist hotay hain but TDZ me hotay hain
sayBye();              // ❌ ReferenceError: Cannot access before initialization

const sayBye = () => {
  console.log("dd");
};


// ================= ONE-LINE SUMMARY =================
// var        → hoist + undefined
// function   → hoist + full function
// var + arrow→ hoist + undefined (not callable)
// let/const  → hoist + TDZ (not accessible)
// ================= CONSTRUCTOR FUNCTION BLOCK =================


// 1️⃣ BASIC CONSTRUCTOR FUNCTION
// Purpose: Object banane ke liye reusable blueprint
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const p1 = new Person("Ali", 22);
console.log(p1);


// 2️⃣ CONSTRUCTOR + PROTOTYPE METHOD
// Purpose: Method prototype me rakhna (memory efficient)
function User(username) {
  this.username = username;
}

User.prototype.login = function () {
  console.log(this.username + " logged in");
};

const u1 = new User("rehmat");
u1.login();


// 3️⃣ CONSTRUCTOR HOISTING (WORKS)
// Purpose: Function declaration fully hoist hota hai

function Human(name) {
  this.name = name;
}

console.log(h1);


// 4️⃣ CONSTRUCTOR AS FUNCTION EXPRESSION (FAIL)
// Purpose: Function expression constructor hoist nahi hota
// const c1 = new Car("Civic"); ❌ TypeError

var Car = function (model) {
  this.model = model;
};


// 5️⃣ ARROW FUNCTION ❌ CONSTRUCTOR NAHI BAN SAKTA
// Purpose: Arrow function ke paas prototype & this nahi hota
// const Bike = () => {};
// new Bike(); ❌ TypeError


// 6️⃣ RETURN TRAP IN CONSTRUCTOR
// Purpose: Object return override karta hai constructor
function Test() {
  this.x = 10;
  return { y: 20 };
}

console.log(new Test()); // { y: 20 }


// ================= QUICK RULES =================
// ✔ Constructor = normal function + new keyword
// ✔ Capital letter sirf convention hai
// ✔ Arrow function kabhi constructor nahi hota
// ✔ Prototype = shared methods (industry standard)
