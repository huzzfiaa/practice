// 1️⃣ Arithmetic Operators (ریاضی کے آپریشن)
// +, -, *, /, %, **  
// یہ operators basic calculation کے لیے use ہوتے ہیں۔  
// Example:  
console.log(5 + 10);   // Addition (جمع) = 15  
console.log(10 - 3);   // Subtraction (تفریق) = 7  
console.log(4 * 2);    // Multiplication (ضرب) = 8  
console.log(10 / 2);   // Division (تقسیم) = 5  
console.log(10 % 3);   // Modulus (باقی بچا ہوا حصہ) = 1  
console.log(2 ** 3);   // Exponentiation (طاق/پاور) = 8  


// 2️⃣ Assignment Operators (ویلیو assign کرنے کے لیے)
// =, +=, -=, *=, /=, %=, **=  
// یہ operators variable میں value کو assign یا update کرنے کے لیے use ہوتے ہیں۔  
let a = 5;
a += 15;   // a = a + 15 → اب a = 20  
a -= 5;    // a = a - 5  → اب a = 15  
a *= 2;    // a = a * 2  → اب a = 30  
a /= 3;    // a = a / 3  → اب a = 10  
a %= 3;    // a = a % 3  → اب a = 1  
a **= 2;   // a = a ** 2 → اب a = 1^2 = 1  


// 3️⃣ Comparison Operators (موازنہ کرنے کے لیے)
// ==, ===, !=, !==, >, <, >=, <=  
// یہ operators دو values کو compare کرتے ہیں اور true/false return کرتے ہیں۔  
console.log(5 == "5");   // true (صرف value check ہوتی ہے)  
console.log(5 === "5");  // false (value اور type دونوں check ہوتے ہیں)  
console.log(10 != 5);    // true  
console.log(10 !== "10");// true  
console.log(5 > 2);      // true  
console.log(5 < 2);      // false  
console.log(5 >= 5);     // true  
console.log(3 <= 2);     // false  


// 4️⃣ Logical Operators (منطقی آپریشن)
// &&, ||, !  
// یہ conditions کو combine کرنے کے لیے use ہوتے ہیں۔  
console.log(true && false);  // false (دونوں true ہوں تو ہی true ہوتا ہے)  
console.log(true || false);  // true  (کم از کم ایک true ہو تو true)  
console.log(!true);          // false (NOT → الٹ result دے دیتا ہے)  


// 5️⃣ Increment & Decrement (بڑھانا یا گھٹانا)
// ++, --  
let b = 5;  
console.log(b++);  // 5 (پہلے value دکھائے پھر +1 کرے → b = 6)  
console.log(++b);  // 7 (پہلے +1 کرے پھر دکھائے)  
console.log(b--);  // 7 (پہلے دکھائے پھر -1 کرے → b = 6)  
console.log(--b);  // 5 (پہلے -1 کرے پھر دکھائے)  


// 6️⃣ Ternary Operator (شرطی آپریشن)
// condition ? trueValue : falseValue  
// یہ if-else کا shortcut ہے۔  
let c = 5 < 10 ? "smaller" : "greater";  
console.log(c);   // "smaller"  


// 7️⃣ Bitwise Operators (بٹس کی سطح پر کام کرتے ہیں)
// &, |, ~, ^, <<, >>  
// یہ binary (0 اور 1) level پر calculations کرتے ہیں۔  
console.log(5 & 1);   // 1 (AND → دونوں 1 ہوں تو 1)  
console.log(5 | 1);   // 5 (OR  → ایک بھی 1 ہو تو 1)  
console.log(~5);      // -6 (NOT → bits invert کر دیتا ہے)  
console.log(5 ^ 1);   // 4 (XOR → مختلف bits پر 1 دیتا ہے)  
console.log(5 << 1);  // 10 (Left Shift → bits کو left side move کرتا ہے)  
console.log(5 >> 1);  // 2  (Right Shift → bits کو right side move کرتا ہے)  
~~~~