// MATHS
let cj =  78437.59;
console.log(Math.round(cj));// is case me num 78438 ho ga je se ke math me round off karte ha wase hi
let kjdd=9.7;
console.log(Math.floor(kjdd)); //result 9 //floor ka malab ke desimal ke bad wali value ko agar hum ne che kare to to jo num aye ga wo prit ho ga
console.log(Math.ceil(kjdd)); // result 10 //floor ka opposite
console.log(Math.abs(kjdd)); //  nagitive value ko positive me change karta ha
console.log(Math.sqrt(kjdd)); // nuber ka square root nikal ta ha
console.log(Math.pow(kjdd,3)); // kis ka power kitna kar na ha power nikal ne ke kam ata ha
console.log(Math.min(kjdd)); // agar chote value print kar wani hi to
console.log(Math.max(kjdd)); // agr max value prin kar wani ha to


// math . random
// hum jante HA KI  math . random 0 or 1 ek darmiyan se ko idigit deta ha jesa ke
Math.random(0,1)// 0 and  1 ke dar miyan ki val  deta ja amgar kabhi limit ni dega limit se phele wali val de ga
//ager hume 0 se 10 ke darmi yan chaiye to
Math.random()*10 // 0 se 10 tak aye ag lakin kabhi 10 ni aya ga
Math.random()*10+1// har num me 1 add ho ga or is bar 10 include hoga



let gernateerandomevennum =Math.round( Math.random()*100+1);
if(gernateerandomevennum / 2 === 0 ){console.log(gernateerandomevennum);}


console.log("Math.floor(4.9) =", Math.floor(4.9));   // 4
console.log("Math.ceil(4.1) =", Math.ceil(4.1));     // 5
console.log("Math.round(4.5) =", Math.round(4.5));   // 5
console.log("Math.trunc(4.9) =", Math.trunc(4.9));   // 4

console.log("Random number (0–1) =", Math.random());

console.log("Max =", Math.max(5, 12, 8));            // 12
console.log("Min =", Math.min(5, 12, 8));            // 5

console.log("Power (2³) =", Math.pow(2, 3));         // 8
console.log("Square root of 16 =", Math.sqrt(16));   // 4

console.log("Absolute of -9 =", Math.abs(-9));       // 9
console.log("Value of π =", Math.PI);                // 3.14159...




