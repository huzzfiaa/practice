/* =========================================================
   JAVASCRIPT MEMORY BASICS
   ========================================================= */

/*
JS me 2 main types ki memory hoti hain

1️⃣ Primitive values → stack me store hoti hain
   number, string, boolean, null, undefined, bigint, symbol

2️⃣ Non-primitive (objects) → heap me store hote hain
   object, array, function

Variables me actual data nahi hota
balkay object ka ADDRESS store hota hai.
*/


/* =========================================================
   1️⃣ REFERENCE
   ========================================================= */

/*
Reference ka matlab:
Do variables same memory address ko point karte hain.
Agar ek change karo → doosra bhi change ho jata hai.
*/

let obj1 = { name: "Ali" }

let obj2 = obj1   // reference copy

obj2.name = "Ahmed"

console.log(obj1.name) // Ahmed
console.log(obj2.name) // Ahmed

/*
Industry purpose:
React state mutation bugs
Redux immutability issues
*/


/* =========================================================
   2️⃣ NORMAL COPY (PRIMITIVE)
   ========================================================= */

/*
Primitive values me real copy hoti hai
Reference share nahi hota
*/

let a = 10
let b = a

b = 20

console.log(a) // 10
console.log(b) // 20

/*
Industry purpose:
Safe variable manipulation
No mutation side effects
*/


/* =========================================================
   3️⃣ SHALLOW COPY
   ========================================================= */

/*
Shallow copy:
Top level properties copy ho jati hain
lekin nested objects reference share karte hain
*/

let user = {
  name: "Ali",
  address: {
    city: "Lahore"
  }
}

let copyUser = { ...user }   // shallow copy

copyUser.name = "Ahmed"
copyUser.address.city = "Karachi"

console.log(user.address.city) // Karachi (changed)

/*
Problem:
Nested object still reference share kar raha hai
*/


/*
Shallow copy methods
*/

let obj = { a: 1, b: 2 }

let copy1 = { ...obj }                 // spread
let copy2 = Object.assign({}, obj)     // assign


/*
Industry purpose:

React state update
Redux immutable patterns
*/


/* =========================================================
   4️⃣ DEEP COPY
   ========================================================= */

/*
Deep copy:
Complete object clone
koi reference share nahi hota
*/

let user2 = {
  name: "Ali",
  address: {
    city: "Lahore"
  }
}

let deepCopy = JSON.parse(JSON.stringify(user2))

deepCopy.address.city = "Karachi"

console.log(user2.address.city) // Lahore


/*
Industry purpose:

State isolation
Backend data cloning
Prevent mutation bugs
*/


/* =========================================================
   5️⃣ MODERN DEEP COPY
   ========================================================= */

/*
Modern JS me best deep copy
*/

let deepCopy2 = structuredClone(user2)


/*
Advantages:

faster
safe
handles complex objects
*/


/* =========================================================
   6️⃣ REACT REAL WORLD CASE
   ========================================================= */

/*
React state mutate nahi karte
copy banate hain
*/

const state = {
  cart: ["apple", "banana"]
}

// wrong
state.cart.push("orange")

// correct
const newState = {
  ...state,
  cart: [...state.cart, "orange"]
}


/*
Industry purpose:

React re-render trigger karna
immutability maintain karna
*/


/* =========================================================
   SENIOR DEV RULE
   ========================================================= */

/*
Primitive → value copy

Object/Array → reference copy

Shallow copy → top level copy

Deep copy → full clone
*/


/* =========================================================
   INTERVIEW LINE
   ========================================================= */

/*
Reference:
multiple variables same object ko point karte hain

Shallow copy:
top level properties copy hoti hain
nested objects reference share karte hain

Deep copy:
complete independent clone ban jata hai
*/