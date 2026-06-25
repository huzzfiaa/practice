// let arr = [4, 5, 10, 23];
// let arr2 = ["apple", "mango", "lichi"];
// let arr3 = ["manas", 15, "bhagalpur"];
// let arr4 = [2, 3, 4 , "mkl", [2, 3 ,5 ]]
// console.log(arr);
// console.log(arr2);
// console.log(arr3);
// console.log(arr4);

// let normalArr = [1,3,5];
// console.log(normalArr)
// // let arr = new Array(2, 3, 4, 5, "alsjdlfjds") ❌
// console.log(arr)

// let arr = [20]
// let carr = new Array(20).fill(0)
// console.log(arr)
// console.log(carr)

// console.log(arr.length)
// console.log(carr.length);

// console.log(typeof arr);


// let arr = [1, 3, 5, 8];
// console.log(arr[0])
// console.log(arr[2])
// arr[2] = 99;
// console.log(arr)
// arr[0] = 100;
// console.log(arr)

// let arr = [1, 3, 5, 100, 99];
// for(let i=0; i < arr.length; i++){
//     console.log(arr[i] * 2);
// }

// for(let elem of arr){
//     console.log(elem)
// }

// for(let ind in arr){
//     console.log(ind)
// }

// let arr = [2, 5, "mkl", 5, 8, 10, "alpha", "beta"];
// console.log(arr, arr.length);
// let a = arr.push(999);
// console.log(arr, a, arr.length)

// let b = arr.pop();
// console.log(arr, b);

// let a = arr.unshift(7)
// console.log(arr, a);
// let b = arr.shift();
// console.log(arr, b);


// let newArr = arr.slice(-5, 3);
// console.log(arr);
// console.log(newArr);

// let test = arr.splice(3, 2, 99, 100, 55);
// console.log(arr);
// console.log(test)

// let arr2 = [5, 6];
// let arr3 = ["mkl", "falna", "dhikna"];
// let newArr = arr.concat(arr2, arr3);
// console.log(arr);
// console.log(newArr)

// spread operator
// let newArr = [...arr, ...arr2, ...arr3]
// console.log(newArr)

// let fruits = ["mango", "litchi", "guava", "mango", "papita"];

// let test = fruits.join(" And ");
// console.log(fruits)
// console.log(test);
// console.log(typeof test)

// let bool = fruits.includes("litch");
// console.log(bool);

// let str = fruits.toString();
// console.log(fruits)
// console.log(str, typeof str);

// console.log(fruits.indexOf("litch"))

// fruits.reverse();
// console.log(fruits)

// let test = fruits.find(function (item) {
//     return item === "mango"
// })
// console.log(test)

// let heroes = ["spiderman", ["hulk", "hawkeye", ["mkl"], "thor"]]
// console.log(heroes.flat(Infinity)) nesting ko remove kar ta ha

// let arr = [10, 5, 1, 20];
// let heroes = ['spiderman', 'ironman', 'hulk', 'thor', 'hawkeye', 'wanda'];
// heroes.sort();
// console.log(heroes)

// arr.sort((a, b) => {
//     console.log(a, b);
//     return b - a;
// });
// console.log(arr);

// let arr = [1, 2, 5, 9, 10];

// let newArr = arr.map((elem)=>{
//     return elem*2;
// })
// console.log("originial array : ", arr);
// console.log(newArr)

// arr.forEach((elem, index)=>{
//     arr[index] = elem*2;
// })

// let filterArr = arr.filter((elem, index, arr)=>{
//     return elem > 5
// })

// let result = arr.reduce((acc, curr)=>{ 
//     return acc + curr
// }, 10)

// console.log(result);

// let arr1 = [1, 2, 3];
// let arr2 = arr1;
// let arr3 = [...arr1];

// console.log(arr1);
// console.log(arr3);
// arr3.pop();
// console.log(arr1);
// console.log(arr3);


// let arr = [1,2,3, [99, 100]]
// let copyArr = [...arr];
// copyArr[3].push(23);
// console.log(arr)
// console.log(copyArr)

// // question1

// let arr = [5, 10, 15, 7];

// let sum = arr.reduce((acc, curr) => {
//     return acc + curr;
// })

// let average = sum/arr.length

// console.log(`sum = ${sum}`)
// console.log(`average = ${average}`)


// // question2
// let n = 25;
// let arr = new Array(25).fill(0)
// console.log(arr);

// // question3 
// let n = 25;
// let arr = new Array(25).fill(0)
// arr.forEach((_, index)=>{
//     arr[index] = index+1;
// })
// console.log(arr);

// let arr = ["ironman", "captain", "black widow", "wanda", "hulk", "black panther"];

// arr.push("spiderman");
// arr.unshift("thor");
// // console.log(arr);

// arr.splice(3, 1, "hawkeye")
// console.log(arr)

// console.log(arr.includes("captain"))


// let test = "strisldfksdf"
// let test2 = "sldkjfl"
// console.log(Array.isArray(test))
// console.log(Array.from(test))

// let a= 1;
// let b= "lsdkjf";
// let c = {
//     name: "manas"
// }
// let d = [1, 2, 3]
// console.log(Array.of(a, b, c, d))


// let str = "ollo"
// let revStr = str.split("").reverse().join("")
// if(str === revStr){
//     console.log("plaindrome string")
// }else{
//     console.log("not a palindrome string")
// }

// let str = "hello how are you"
// let newArr = str.split(" ").map((elem) => {
//     return elem.charAt(0).toUpperCase() + elem.slice(1)
// })
// let finalString = newArr.join(" ");
// console.log(finalString)














// Array create kiya aur uski length check ki
let arr = [2, 5, "mkl", 5, 8, 10, "alpha", "beta"];
console.log(arr, arr.length);

// Push → array ke end me element add karta hai
let a = arr.push(999);
console.log(arr, a, arr.length);

// Pop → array ke last element ko remove karta hai
let b = arr.pop();
console.log(arr, b);

// Unshift → array ke start me element add karta hai
a = arr.unshift(7);
console.log(arr, a);

// Shift → array ke start se element remove karta hai
b = arr.shift();
console.log(arr, b);

// Slice → ek naya array return karta hai (original ko change nahi karta)
let newArr = arr.slice(-5, 3);
console.log(arr);
console.log(newArr);

// Splice → array me modification karta hai (delete + insert dono ho sakte hain)
let test = arr.splice(3, 2, 99, 100, 55);
console.log(arr);
console.log(test);

// Concat → arrays ko jodta hai aur ek new array return karta hai
let arr2 = [5, 6];
let arr32 = ["mkl", "falna", "dhikna"];
newArr = arr.concat(arr2, arr3);
console.log(arr);
console.log(newArr);

// Spread operator → arrays ko spread karke new array banata hai
newArr = [...arr, ...arr2, ...arr3];
console.log(newArr);

// Fruits array example
let fruits = ["mango", "litchi", "guava", "mango", "papita"];

// Join → array ko string me convert karta hai (custom separator ke sath)
test = fruits.join(" And ");
console.log(fruits);
console.log(test);
console.log(typeof test);

// Includes → check karta hai element array me hai ya nahi
let bool = fruits.includes("litch");
console.log(bool);

// ToString → array ko simple string bana deta hai
let str = fruits.toString();
console.log(fruits);
console.log(str, typeof str);

// IndexOf → kisi element ka index dikhata hai
console.log(fruits.indexOf("litch"));

// Reverse → array ke elements ulta kar deta hai
fruits.reverse();
console.log(fruits);

// Find → pehla element return karta hai jo condition match kare
test = fruits.find(function (item) {
    return item === "mango";
});
console.log(test);

// Flat → nested arrays ko flat kar deta hai
let heroes = ["spiderman", ["hulk", "hawkeye", ["mkl"], "thor"]];
console.log(heroes.flat(Infinity));

// Sort → array ke elements ko sort karta hai
arr = [10, 5, 1, 20];
heroes = ["spiderman", "ironman", "hulk", "thor", "hawkeye", "wanda"];
heroes.sort();
console.log(heroes);

// Sort with compare function → ascending/descending order control
arr.sort((a, b) => {
    console.log(a, b);
    return b - a; // descending
});
console.log(arr);

// Map → har element ko transform karke ek new array return karta hai
arr = [1, 2, 5, 9, 10];
newArr = arr.map((elem) => {
    return elem * 2;
});
console.log("originial array : ", arr);
console.log(newArr);

// ForEach → har element par loop chalata hai (original array ko modify kar sakte ho)
arr.forEach((elem, index) => {
    arr[index] = elem * 2;
});

// Filter → condition ke hisaab se naya array banata hai
let filterArr = arr.filter((elem, index, arr) => {
    return elem > 5;
});

// Reduce → saare elements ko ek single value me reduce karta hai (sum, avg etc.)
let result = arr.reduce((acc, curr) => {
    return acc + curr;
}, 10);
console.log(result);

// Array copy concepts
let arr1 = [1, 2, 3];
arr2 = arr1;            // ye reference copy hai
let arr3 = [...arr1];   // ye shallow copy hai

console.log(arr1);
console.log(arr3);
arr3.pop();
console.log(arr1);
console.log(arr3);

// Nested array shallow copy issue → andar ke array same reference hote hain
arr = [1, 2, 3, [99, 100]];
let copyArr = [...arr];
copyArr[3].push(23);
console.log(arr);
console.log(copyArr);
