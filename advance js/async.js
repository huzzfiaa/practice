// callback hamesa ek function hota hai
// callback wo function hota hai jisko ham as a argument pass kar rhe hote hai
// hod (higher order function) waisa function hota joki apne andar ek function(yani ki callback) le rha hota hai.


let GETDATA = async ()=>{
  let resspoce = await fetch(`baseurl and ${api }`)
  let data =responce.jason;
  
}


// example 1:
// function hod(name, callback) {
//     callback(name);
// }

// function printName(name) {
//     console.log("hello ", name);
// }

// hod("Manas Kumar Lal", printName)


// example 2:
// function calculate(a, b, callback) {
//     callback(a, b);
// }

// function sum(a, b) {
//     console.log(a + b);
// }

// function subtract(a, b) {
//     console.log(a - b);
// }

// function multiply(a, b) {
//     console.log(a * b);
// }

// calculate(5, 3, sum);
// calculate(5, 3, subtract);
// calculate(5, 3, multiply);


// example 3: (async)
// console.log("1. fetching data...")

// function fetchData(processData) {
//     setTimeout(() => {
//         console.log("2. data fetch ho chuka hai")
//         processData();
//     }, 3000);
// }

// function processData() {
//     console.log("3. processing with data...")
// }

// fetchData(processData)


// console.log("4. some other tasks......")


// example 4: (async);
// function getData(data, callback) {
//     setTimeout(() => {
//         console.log(data)
//         if (callback) {
//             callback();
//         }
//     }, 3000);
// }


// console.log("fetching first data...")

// getData('1st data', () => {
//     console.log("fetching 2nd data...")
//     getData('2nd data', () => {
//         console.log("fetching 3rd data...")
//         getData('3rd data', () => {
//             console.log("fetching 4rth data...")
//             getData('4rth data')
//         })
//     });
// });

// example5:(async)

// console.log("getting data")
// setTimeout(() => {
//     console.log("getting users from database...")
//     setTimeout(() => {
//         console.log("getting products from database...")
//         setTimeout(() => {
//             console.log("final data")
//         }, 3000);
//     }, 3000);
// }, 3000);



// Real World Scenario of Callback
// Note:- Never try to understand 🙂, if you want to live long

// function getUsers(callback) {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

//     xhr.onload = function () {
//         if (xhr.status === 200) {
//             const users = JSON.parse(xhr.responseText);
//             callback(null, users);
//         } else {
//             callback(`Error: ${xhr.status}`);
//         }
//     };

//     xhr.onerror = function () {
//         callback('Network error');
//     };

//     xhr.send();
// }


// function showData(err, data) {
//     if (err) {
//         console.log("Failed:", err);
//     } else {
//         console.log("Success:", data);
//     }
// }

// // Using the function
// getUsers(showData);     








import express from "express";
import rateLimit from "express-rate-limit";
import bodyParser from "body-parser";
import { z } from "zod"; // schema validation
import helmet from "helmet";
import e from "express";

const app = express();
app.use(bodyParser.json());
app.use(helmet()); // basic security headers

// =====================================================
// 1️⃣ SCHEMA VALIDATION → Zod / Joi
// =====================================================
// Purpose: ensure request payload is correct type & required fields exist

const userSchema = z.object({
  name: z.string().min(1),
  age: z.number().int().positive()
});

app.post("/user", (req, res) => {
  const parseResult = userSchema.safeParse(req.body);
  if (!parseResult.success) {
    return res.status(400).json({ error: parseResult.error.errors });
  }

  res.json({ message: "Valid user", user: parseResult.data });
});

// ❌ If skipped:
// - Invalid/malformed data reaches DB
// - Could crash app or cause injection bugs


// =====================================================
// 2️⃣ RATE LIMITING
// =====================================================
// Purpose: prevent brute force or spammy calls
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 min
  max: 5, // max 5 requests per IP per minute
  message: "Too many requests, try later"
});

app.use("/login", limiter);

// ❌ If skipped:
// - brute force attacks
// - API abuse / DoS


// =====================================================
// 3️⃣ SIZE LIMIT
// =====================================================
// Purpose: prevent huge payloads
app.use(express.json({ limit: "10kb" }));

// ❌ If skipped:
// - attacker can send 10MB payload → memory spike / crash
// - potential DOS


// =====================================================
// 4️⃣ ALLOW-LIST KEYS
// =====================================================
// Purpose: only accept allowed fields
app.post("/update-profile", (req, res) => {
  const allowedKeys = ["name", "age"];
  const filtered = Object.keys(req.body)
    .filter(k => allowedKeys.includes(k))
    .reduce((obj, key) => {
      obj[key] = req.body[key];
      return obj;
    }, {});

  res.json({ filtered });
});

// ❌ If skipped:
// - attacker sends extra fields → DB overwrite / injection


// =====================================================
// 5️⃣ ESCAPE OUTPUT
// =====================================================
// Purpose: prevent XSS
function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

app.get("/show-name", (req, res) => {
  const name = req.query.name || "guest";
  res.send(`Hello ${escapeHtml(name)}`);
});

// ❌ If skipped:
// - reflected XSS
// - attacker injects JS in browser


// =====================================================
// 6️⃣ AUTH CHECK → SERVER SIDE ONLY
// =====================================================
function authMiddleware(req, res, next) {
  const token = req.headers.authorization;
  if (!token || token !== "Bearer secret123") {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
}

app.get("/dashboard", authMiddleware, (req, res) => {
  res.json({ message: "Secure dashboard" });
});

// ❌ If skipped:
// - anyone can access sensitive data
// - major data leak / security breach


// =====================================================
// SERVER START
// =====================================================
app.listen(3000, () => console.log("Server running on port 3000"));