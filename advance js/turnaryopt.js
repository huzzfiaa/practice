/*************************************************
 JavaScript Operators – Frontend Purpose
 English + Urdu Tarka 😎
**************************************************/

/* ===============================
 1. Arithmetic Operators (Math)
 UI prices, totals, scores
================================= */
let a = 10;
let b = 3;

a + b;   // Addition (jama)
a - b;   // Subtraction (ghata)
a * b;   // Multiplication (guna)
a / b;   // Division (taqseem)
a % b;   // Remainder (baqi)
a ** b;  // Power (quwwat)

/* ===============================
 2. Assignment Operators
 State / variable update
================================= */
let count = 0;

count = 5;    // assign
count += 1;   // add + assign
count -= 1;   // subtract + assign
count *= 2;   // multiply + assign
count /= 2;   // divide + assign

/* ===============================
 3. Comparison Operators
 Conditions, validations
================================= */
5 == "5";    // loose equal ❌ (type ignore)
5 === "5";   // strict equal ✅ (type check)
5 != 4;      // not equal
5 !== "5";   // strict not equal
5 > 3;       // greater than
5 < 10;      // less than
5 >= 5;      // greater or equal
5 <= 6;      // less or equal

/* ===============================
 4. Logical Operators
 Auth, forms, conditions
================================= */
true && false; // AND (aur) – dono true hon
true || false; // OR (ya) – aik bhi true ho
!true;         // NOT (ulta)

/* ===============================
 5. Ternary Operator
 Short if-else (UI rendering)
================================= */
let isLogin = true;
let buttonText = isLogin ? "Logout" : "Login";
// condition ? trueValue : falseValue

/* ===============================
 6. Nullish Coalescing Operator ??
 API null / undefined handling
================================= */
let username = null;
let finalName = username ?? "Guest";
// sirf null ya undefined pe fallback

/* ===============================
 7. Optional Chaining ?. 
 Crash-proof access
================================= */
let user = {
  profile: {
    email: "test@mail.com"
  }
};

user?.profile?.email; // safe access
user?.address?.city; // undefined, no error

/* ===============================
 8. Type Operators
 Data type checking
================================= */
typeof "hello"; // "string"
typeof 123;     // "number"
typeof true;    // "boolean"

class Car {}
let civic = new Car();
civic instanceof Car; // true

/* ===============================
 9. String Operators
 UI text, labels
================================= */
let first = "Hello";
let second = "World";

first + " " + second; // string join

/* ===============================
10. Spread Operator ...
 React state ka hero
================================= */
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5]; // array copy/merge

let obj1 = { name: "Ali", age: 20 };
let obj2 = { ...obj1, age: 21 }; // object update

/* ===============================
11. Destructuring
 Clean & readable code
================================= */
let userData = { name: "Ahmed", role: "Admin" };
const { name, role } = userData;

let numbers = [10, 20];
const [x, y] = numbers;

/* ===============================
12. Increment / Decrement
 Counters, likes
================================= */
let like = 0;
like++; // post-increment
++like; // pre-increment
like--; // decrement

/* ===============================
13. Bitwise Operators (Rare)
 Mostly ignore in frontend
================================= */
5 & 1;  // AND
5 | 1;  // OR
5 ^ 1;  // XOR
~5;     // NOT
5 << 1; // left shift
5 >> 1; // right shift

/*************************************************
 MOST IMPORTANT FOR FRONTEND 🔥
 ===  &&  ||  ? :  ??  ?.  ...
**************************************************/