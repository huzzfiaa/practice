/* =========================================================
   JAVASCRIPT RUNTIME MODEL
   ========================================================= */

/*
JavaScript single threaded language hai
Matlab ek time par ek hi kaam karta hai.

Execution ke liye 4 main components hote hain:

1️⃣ Call Stack (Main Stack)
2️⃣ Web APIs (Side Stack / Browser APIs)
3️⃣ Microtask Queue
4️⃣ Callback Queue (Task Queue)
5️⃣ Event Loop
*/


/* =========================================================
   1️⃣ CALL STACK (MAIN STACK)
   ========================================================= */

/*
Call stack wo jagah hai jahan functions execute hote hain.

Rule:
Last In → First Out (LIFO)
*/

function first() {
  console.log("first function");
}

function second() {
  first();
  console.log("second function");
}

second();

/*
Execution flow

Stack push:
second()
first()

Stack pop:
first()
second()
*/


/* =========================================================
   2️⃣ WEB APIs (SIDE STACK)
   ========================================================= */

/*
Ye browser provide karta hai.

Examples:
setTimeout
setInterval
fetch
DOM events
*/

console.log("start");

setTimeout(() => {
  console.log("timer done");
}, 2000);

console.log("end");

/*
Execution:

start
end
timer done

Reason:
setTimeout Web API me chala gaya
*/

/* =========================================================
   3️⃣ CALLBACK QUEUE (TASK QUEUE)
   ========================================================= */
function heavyTask(){
  for(let i=0;i<1000000;i++){}

  setTimeout(() => {
    console.log("next chunk"); // break execution
  }, 0);
}console.log("start");

setTimeout(() => console.log("low priority"), 0);

Promise.resolve().then(() => console.log("high priority"));

console.log("end");

/*
Jab Web API ka kaam complete hota hai
callback queue me aa jata hai

Examples:
setTimeout
setInterval
DOM events
*/

setTimeout(() => {
  console.log("callback queue task");
}, 0);


/* =========================================================
   4️⃣ MICROTASK QUEUE
   ========================================================= */

/*
Microtask queue high priority queue hai

Examples:
Promise
MutationObserver
queueMicrotask
*/

Promise.resolve().then(() => {
  console.log("microtask executed");
});


/* =========================================================
   5️⃣ EVENT LOOP
   ========================================================= */

/*
Event loop check karta hai:

1️⃣ Call stack empty hai?
2️⃣ Microtask queue check karo
3️⃣ Callback queue check karo

Priority rule:

Call Stack
↓
Microtask Queue
↓
Callback Queue
*/


/* =========================================================
   EXECUTION ORDER EXAMPLE
   ========================================================= */

console.log("start");

setTimeout(() => {
  console.log("timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("promise");
});

console.log("end");

/*
Output:

start
end
promise
timeout

Reason:

Promise → microtask
setTimeout → callback queue
Microtask always first
*/


/* =========================================================
   INDUSTRY REAL USE CASE
   ========================================================= */

/*
API calls Promise based hoti hain

fetch("api")
  .then(res => res.json())
  .then(data => console.log(data))

Ye sab microtask queue me handle hota hai.
*/


/* =========================================================
   INTERVIEW LINE
   ========================================================= */

/*
JavaScript uses a single-threaded runtime model
with a call stack, microtask queue, callback queue,
and event loop to handle asynchronous operations.
*/















/* =========================================================
   JAVASCRIPT EXECUTION ORDER FILE
   Call Stack vs Microtask vs Callback Queue
   React Render vs Promise vs setTimeout
   ========================================================= */


/* =========================================================
   1️⃣ CALL STACK (MAIN STACK)
   ========================================================= */

/*
JavaScript single-threaded language hai.
Ek waqt me sirf ek kaam hota hai.

Call stack wo jagah hai jahan synchronous code run hota hai.
*/

console.log("1 start")

console.log("2 running")

console.log("3 end")

/*
Output

1 start
2 running
3 end
*/


/* =========================================================
   2️⃣ SETTIMEOUT (CALLBACK QUEUE)
   ========================================================= */

/*
setTimeout browser Web API me chala jata hai.

Time complete hone ke baad callback queue me aata hai.
*/

console.log("start")

setTimeout(() => {
  console.log("timeout finished")
}, 0)

console.log("end")

/*
Output

start
end
timeout finished
*/


/* =========================================================
   3️⃣ PROMISE (MICROTASK QUEUE)
   ========================================================= */

/*
Promises microtask queue me jate hain.

Microtask queue ki priority callback queue se zyada hoti hai.
*/

console.log("start")

Promise.resolve().then(() => {
  console.log("promise done")
})

console.log("end")

/*
Output

start
end
promise done
*/


/* =========================================================
   4️⃣ PROMISE vs SETTIMEOUT
   ========================================================= */

console.log("start")

setTimeout(() => {
  console.log("timeout")
}, 0)

Promise.resolve().then(() => {
  console.log("promise")
})

console.log("end")

/*
Output

start
end
promise
timeout

Reason

1 call stack
2 microtask queue (promise)
3 callback queue (timeout)
*/


/* =========================================================
   5️⃣ EVENT LOOP
   ========================================================= */

/*
Event loop ka kaam:

1 check call stack empty hai
2 microtask queue run karo
3 callback queue run karo
*/


/* =========================================================
   6️⃣ REACT RENDER EXAMPLE
   ========================================================= */

/*
React component render sab se pehle hota hai.
*/

function App(){

  console.log("render")

  return <h1>Hello</h1>
}

/*
Output

render
*/


/* =========================================================
   7️⃣ REACT useEffect
   ========================================================= */

/*
useEffect render ke baad run hota hai
*/

function App(){

  console.log("render")

  React.useEffect(() => {
    console.log("effect")
  }, [])

  return <h1>Hello</h1>
}

/*
Output

render
effect
*/


/* =========================================================
   8️⃣ REACT + PROMISE + TIMEOUT
   ========================================================= */

function App(){

  console.log("render")

  React.useEffect(() => {

    console.log("effect start")

    Promise.resolve().then(() => {
      console.log("promise")
    })

    setTimeout(() => {
      console.log("timeout")
    }, 0)

  }, [])

  return <h1>Hello</h1>
}

/*
Expected Output

render
effect start
promise
timeout
*/


/* =========================================================
   EXECUTION PRIORITY RULE
   ========================================================= */

/*
1️⃣ Call Stack (normal code)
2️⃣ React render
3️⃣ useEffect
4️⃣ Microtask queue (Promise)
5️⃣ Callback queue (setTimeout)
*/


/* =========================================================
   INTERVIEW SUMMARY
   ========================================================= */

/*
Promise always executes before setTimeout
because Promise is handled in the microtask queue
which has higher priority than the callback queue
in the JavaScript event loop.
*/