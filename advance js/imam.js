/* =========================================================
   MODERN JAVASCRIPT BEST PRACTICES FILE
   Fast + Secure Web Development
   ========================================================= */


/* =========================================================
   1️⃣ VAR vs LET vs CONST
   ========================================================= */

/*
❌ OLD WAY (avoid)
var function scoped hota hai
bugs create karta hai
*/

var name = "Ali"


/*
✅ MODERN WAY
const default use karo
let sirf jab value change ho
*/

const userName = "Ali"
let count = 0


/*
Rule

const → default
let → mutable values
var → avoid
*/


/* =========================================================
   2️⃣ FUNCTION vs ARROW FUNCTION
   ========================================================= */

/*
❌ old function
*/

function add(a,b){
 return a+b
}


/*
✅ modern arrow
short aur readable
*/

const add2 = (a,b) => a+b


/*
Industry use

React components
array methods
callbacks
*/


/* =========================================================
   3️⃣ STRING CONCAT vs TEMPLATE LITERALS
   ========================================================= */

/*
❌ old style
*/

const text = "Hello " + name + " welcome"


/*
✅ modern style
*/

const text2 = `Hello ${name} welcome`


/*
Readable
less bugs
*/


/* =========================================================
   4️⃣ FOR LOOP vs ARRAY METHODS
   ========================================================= */

/*
❌ traditional
*/

const nums = [1,2,3]

for(let i=0;i<nums.length;i++){
 console.log(nums[i])
}


/*
✅ modern
*/

nums.forEach(n => console.log(n))


/*
Best methods

map()
filter()
reduce()
*/


/* =========================================================
   5️⃣ OBJECT COPY (SECURITY + IMMUTABILITY)
   ========================================================= */

/*
❌ reference mutation
*/

const user = {name:"Ali"}

const copy = user
copy.name="Ahmed"


/*
✅ safe copy
*/

const user2 = {name:"Ali"}

const copy2 = {...user2}
copy2.name="Ahmed"


/*
Used in

React state
Redux
immutability
*/


/* =========================================================
   6️⃣ CALLBACK HELL vs ASYNC AWAIT
   ========================================================= */

/*
❌ callback hell
*/

fetch("/api")
.then(res=>res.json())
.then(data=>{
 console.log(data)
})


/*
✅ async await
clean and readable
*/

async function loadData(){

 const res = await fetch("/api")
 const data = await res.json()

 console.log(data)
}


/*
Faster debugging
clean code
*/


/* =========================================================
   7️⃣ NULL CHECKING
   ========================================================= */

/*
❌ risky code
*/

console.log(user.address.city)


/*
✅ optional chaining
*/

console.log(user?.address?.city)


/*
Avoid runtime crashes
*/


/* =========================================================
   8️⃣ DEFAULT VALUES
   ========================================================= */

/*
❌ manual checks
*/

let price

if(price===undefined){
 price=0
}


/*
✅ nullish operator
*/

let price2 = price ?? 0


/*
More predictable
*/


/* =========================================================
   9️⃣ SECURITY (XSS PREVENTION)
   ========================================================= */

/*
❌ dangerous
*/

element.innerHTML = userInput


/*
✅ safer
*/

element.textContent = userInput


/*
Prevent XSS attacks
*/


/* =========================================================
   🔟 PERFORMANCE RULES
   ========================================================= */

/*
1 avoid unnecessary DOM updates

2 debounce search input

3 lazy load images

4 use caching

5 use Web Workers for heavy tasks
*/


/* =========================================================
   11️⃣ MODULE SYSTEM
   ========================================================= */

/*
❌ global variables
*/

function util(){}


/*
✅ ES modules
*/

export const util = () => {}

import {util} from "./util.js"


/*
Better maintainability
tree shaking
*/


/* =========================================================
   12️⃣ LATEST FEATURES (ES2023+)
   ========================================================= */

/*
Array find last
*/

const arr = [1,2,3,4]

arr.findLast(n=>n>2)


/*
Object grouping
*/

Object.groupBy(
 [6.1,4.2,6.3],
 n => Math.floor(n)
)


/*
structured clone
deep copy
*/

const clone = structuredClone(user)


/* =========================================================
   FAST + SECURE WEB RULES
   ========================================================= */

/*
1 use const mostly
2 avoid var
3 prefer async/await
4 avoid mutating objects
5 validate user input
6 avoid innerHTML
7 use modules
8 lazy load heavy assets
*/


/* =========================================================
   INDUSTRY STACK
   ========================================================= */

/*
Frontend

React
Next.js
TypeScript

Backend

Node.js
Express
NestJS

Security

Helmet
CORS
Rate limiting
*/


/* =========================================================
   INTERVIEW SUMMARY
   ========================================================= */

/*
Modern JavaScript improves
readability
performance
security

Key features

arrow functions
async/await
optional chaining
spread operator
ES modules
*/































// ===== SAMPLE DATA =====
const users = [
  { id: 1, name: "Ali", age: 20, salary: 30000 },
  { id: 2, name: "Ahmed", age: 25, salary: 50000 },
  { id: 3, name: "Sara", age: 18, salary: 20000 },
  { id: 4, name: "Zain", age: 30, salary: 70000 }
];


// =====================================================
// 1️⃣ MAP → transform data (same length array)
// =====================================================

// 👉 Purpose: data modify karna / UI ke liye shape change
const names = users.map(user => user.name);

console.log("Names:", names);

// 💼 Use:
// - API data → UI format
// - price formatting
// - add new field


// =====================================================
// 2️⃣ FOREACH → side effects only (no return)
// =====================================================

// 👉 Purpose: sirf loop chalana (log, DOM, update)
users.forEach(user => {
  console.log(`User: ${user.name}`);
});

// 💼 Use:
// - logging
// - DOM update
// - analytics tracking

// ❌ Mistake: return expect karna


// =====================================================
// 3️⃣ FILTER → condition based selection
// =====================================================

// 👉 Purpose: data ko filter karna
const adults = users.filter(user => user.age >= 21);

console.log("Adults:", adults);

// 💼 Use:
// - search results
// - active users
// - products under price


// =====================================================
// 4️⃣ REDUCE → power tool 🔥
// =====================================================

// 👉 Purpose: array → single value / object

// total salary
const totalSalary = users.reduce((acc, user) => {
  return acc + user.salary;
}, 0);

console.log("Total Salary:", totalSalary);

// 💼 Use:
// - totals
// - grouping
// - counting


// =====================================================
// 5️⃣ SORT → order change
// =====================================================

// 👉 Purpose: data ko arrange karna

// salary ascending
const sortedBySalary = [...users].sort((a, b) => a.salary - b.salary);

console.log("Sorted Salary:", sortedBySalary);

// 💼 Use:
// - price low → high
// - latest first
// - ranking system


// =====================================================
// 🔥 REAL WORLD COMBO (INTERVIEW LEVEL)
// =====================================================

// 👉 Task:
// 1. age > 20 filter
// 2. salary sort
// 3. names extract

const result = users
  .filter(user => user.age > 20)     // step 1
  .sort((a, b) => b.salary - a.salary) // step 2
  .map(user => user.name);           // step 3

console.log("Final Result:", result);

