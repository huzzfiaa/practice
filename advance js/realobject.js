// let obj = {
//     name: "Sanorita",
//     age: 19,
//     isMarried: false,
// }

// console.log(obj)


let carn = {
    "brand": "lamborgini",
    "color": "red",
    maxSpeed: 180,
    "full name": "manas kumar lal",
    stop: () => {
        console.log("stopping the car...")
    },
    start: function () {
        console.log("starting the car...")
    }
}

// console.log(car);
// console.log(car.brand)
// car.start()
// car.stop()

// let test = "full name"

// console.log(car["brand"])
// car["start"]()
// console.log(car[test])


// let obj = new Object({
//     name: "manas"
// })

// let obj2 = {
//  falna: "laskjdf",
//  dhikna: "ldkjfldsf"   
// }

// obj.age = 19
// obj2.gamma = "something"

// console.log(obj)
// console.log(obj2)

// let obj = {
//     "name": "manas",
//     age: 23,
// }

// obj.name = "Manas Kumar Lal"
// obj.city = "bhagalpur"

// delete obj.age;

// console.log(obj)


// let obj = {
//     name: "alpha",
//     age: 24,
// }

// let obj2 = {};
// Object.assign(obj2, obj)

// let keys = Object.keys(obj)
// console.log(keys)

// let values = Object.values(obj);
// console.log(values)

// let entries = Object.entries(obj);
// console.log(entries)

// for(let test in obj){
//     console.log(obj[test])
// }


// let obj = {
//     name: "alpha",
//     age: 24,
// }

// Object.freeze(obj);

// obj.city = "bhagalpur"
// delete obj.name
// obj.name = "manas kumar lal"

// Object.seal(obj);

// obj.city = "sldkjfals;d";
// delete obj.name;
// obj.name = "manas kumar lal"


// console.log(obj.hasOwnProperty("alpha"))

// let obj = {
//     name: "mkl",
//     city: "bgp",
//     age: 24
// }


// let name = obj.name;
// let city = obj.city;

// let {city, name, age} = obj;


// let arr = [1,"lskdjf", {name:"something"}]

// let [,, a] = arr;

// console.log(name, city, age);
// console.log(a)


// // question 1:

// let person = {
//     name: "mkl",
//     age: 19,
//     city: "patna",
// }

// person.email = "example@gmail.com"
// delete person.city


// for(let key in person){
//     console.log(`Value of ${key} is ${person[key]}`)
// }


// question2:

// let obj = {
//     firstName: "manas",
//     middleName: "kumar",
//     lastName: "lal"
// }

// let convertToFullName = (param) => {
//     return `${param.firstName} ${param.middleName} ${param.lastName}`
// }

// let fullName = convertToFullName(obj)
// console.log(fullName)


// // question3:

// obj = {
//     name: "lsdajf",
//     age: 24,
//     city: "bgp",
//     isMarried: true,
// }

// let noOfKeys = Object.keys(obj).length;
// console.log(noOfKeys)

// //question 4:

// let arr = [
//     {name: "a", role: "admin"},
//     {name: "b", role: "user"},
//     {name: "c", role: "admin"},
//     {name: "d", role: "superAdmin"},
//     {name: "e", role: "admin"},
// ]

// function filterArray(arr, role){
//     let filteredItem = arr.filter((item)=>{
//         return item.role === role
//     })
//     let resultArray = filteredItem.map(item=>{
//         return item.name
//     })
//     return resultArray
// }

// let resultArray = filterArray(arr, 'superAdmin')
// console.log(resultArray)


// // question5:

// let products = [
//     {id:1, name: "samsung Galaxy"},
//     {id:2, name: "poco m24"},
//     {id:3, name: "apple m2"}
// ]

// function search(products, searchKeyword){
//     let filteredArray = products.filter(obj=>{
//         return obj.name.toLowerCase().includes(searchKeyword.toLowerCase())
//     })
//     console.log(filteredArray)
// }

// search(products, "2");


// // questin 6:

let comments = [
    { postId: 1, comment: "hello" },
    { postId: 2, comment: "owesome video bhaiya" },
    { postId: 1, comment: "how are you" },
    { postId: 1, comment: "hello" },
    { postId: 2, comment: "owesome video bhaiya" },
    { postId: 1, comment: "how are you" }
]


function groupByPost(comments) {
    let groupedComments = {}

    comments.forEach(obj => {
        let { postId, comment } = obj;
        if (groupedComments.hasOwnProperty(postId)) {
            groupedComments[postId].push(comment)
        } else {
            groupedComments[postId] = [comment]
        }
    });

    console.log(groupedComments)

}

groupByPost(comments)

// // question 7:

// let params = {
//     search: "alpha",
//     page: 2,
//     sort: 'asc',
//     falna: 'aldsjf',
// }

// function createUrl(params){
//     let url = "";
//     for(let key in params){
//         url = url + `${key}=${params[key]}&`
//     }
//     let finalUrl = url.slice(0, url.length-1)
//     return finalUrl
// }


// let url = createUrl(params)
// console.log(url)









let person = {
    name:"abbas",
    city:"mashad",
    age:23,
};
person.email = "@abbas.com"
delete person.age
for (const key in person) { console.log(key,`${person[key]}+"233"`,);
}


let obj = [ 
    {name:"",role:"admin"},
    {name:"",role:"admin"},
    {name:"",role:"admin"}
]

























// =========================================================
// 🌟 objects.js — All About JavaScript Objects (With Urdu Tarka)
// =========================================================

// 🔹 1. OBJECT CREATION (آبجیکٹ بنانا)
// =========================================================
const person = {
name: "Manas",
age: 23,
city: "Karachi"
};
console.log(person);
// Alternate way using constructor
const user = new Object();
user.name = "Muskan";
user.age = 20;
console.log(user);

// Another way using Object.create()
const proto = { greet: function() { console.log("Hello from prototype!"); } };
const manas = Object.create(proto);
manas.name = "Manas Kumar";
manas.greet(); // Example of inherited method

// =========================================================
// 🔹 2. ACCESSING PROPERTIES (پراپرٹی تک رسائی حاصل کرنا)
// =========================================================
console.log(person.name); // Dot notation
console.log(person["city"]); // Bracket notation (useful for dynamic keys)

let prop = "age";
console.log(person[prop]); // Access by variable key

// =========================================================
// 🔹 3. ADDING / UPDATING / DELETING PROPERTIES (پراپرٹی شامل، اپڈیٹ، حذف)
// =========================================================
person.country = "Pakistan"; // Add new property
person.age = 24; // Update existing property
delete person.city; // Delete property
console.log(person);

// =========================================================
// 🔹 4. NESTED OBJECTS (آبجیکٹ کے اندر آبجیکٹ)
// =========================================================
const student = {
name: "Ali",
marks: {
math: 85,
english: 92
}
};
console.log(student.marks.math); // Access nested property

// =========================================================
// 🔹 5. OBJECT METHODS (آبجیکٹ کے طریقے)
// =========================================================

// Object.keys() — returns all keys as array
console.log(Object.keys(person));

// Object.values() — returns all values
console.log(Object.values(person));

// Object.entries() — returns [key, value] pairs
console.log(Object.entries(person));

// Object.assign() — copies properties from one object to another
const target = { a: 1 };
const source = { b: 2, c: 3 };
Object.assign(target, source);
console.log(target);

// Object.freeze() — locks object (no change allowed)
const frozen = Object.freeze({ name: "Locked", age: 25 });
frozen.name = "TryChange"; // ❌ ignored
console.log(frozen);

// Object.seal() — allows update but not add/delete
const sealed = Object.seal({ city: "Lahore" });
sealed.city = "Karachi"; // ✅ allowed
sealed.country = "PK"; // ❌ not added
console.log(sealed);

// hasOwnProperty() — checks if key exists
console.log(person.hasOwnProperty("age")); // true

// =========================================================
// 🔹 6. SPREAD & DESTRUCTURING (پھیلانا اور نکالنا)
// =========================================================

// Spread — creates copy or merges
const obj1 = { x: 1, y: 2 };
const obj2 = { y: 99, z: 3 };
const merged = { ...obj1, ...obj2 };
console.log(merged); // {x:1, y:99, z:3}

// Destructuring — extract properties into variables
const car = { brand: "Toyota", model: "Corolla", year: 2024 };
const { brand, year } = car;
console.log(brand, year);

// Nested destructuring
const employee = { name: "Sara", job: { title: "Engineer", salary: 80000 } };
const { job: { title } } = employee;
console.log(title); // "Engineer"

// =========================================================
// 🔹 7. OPTIONAL CHAINING (احتیاطی سلسلہ)
// =========================================================
// Prevents error if nested property is undefined
const order = { customer: { name: "Rehmat" } };
console.log(order.customer?.name); // ✅ "Rehmat"
console.log(order.payment?.status); // ✅ undefined (no crash)

// =========================================================
// 🔹 8. THIS KEYWORD INSIDE OBJECT METHOD (اہم concept)
// =========================================================
// ‘this’ refers to the current object — اردو: یہ اسی آبجیکٹ کو اشارہ کرتا ہے
const laptop = {
brand: "HP",
model: "Pavilion",
showInfo: function() {
console.log("Brand:", this.brand, "| Model:", this.model);
}
};
laptop.showInfo(); // "HP Pavilion"

// In arrow function, ‘this’ doesn’t refer to the object
const phone = {
brand: "Samsung",
show: () => {
console.log("Brand:", this.brand); // ❌ undefined — arrow function ka apna this nahi hota
}
};
phone.show();

// =========================================================
// 🔹 9. OBJECT ITERATION (looping over object)
// =========================================================
const animal = { name: "Cat", color: "White", legs: 4 };
for (let key in animal) {
console.log(key, ":", animal[key]); // key-value print karega
}

// =========================================================
// 🔹 10. OBJECT CLONING (کاپی بنانا)
// =========================================================
// Shallow copy (spread or assign)
const original = { a: 10, b: { nested: 20 } };
const shallowCopy = { ...original };
shallowCopy.a = 99;
shallowCopy.b.nested = 999; // affects original (same reference)
console.log(original);

// Deep copy (independent nested copy)
const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.b.nested = 1000; // doesn’t affect original
console.log(original, deepCopy);

// =========================================================
// 🔹 11. OBJECT UTILITY FUNCTIONS (فائدہ مند فنکشنز)
// =========================================================

// Object.fromEntries() — reverse of Object.entries()
const arr = [["fruit", "apple"], ["color", "red"]];
const objFromArr = Object.fromEntries(arr);
console.log(objFromArr);

// Object.is() — strict comparison (better than === for NaN)
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(+0, -0)); // false

// =========================================================
// END OF FILE — OBJECTS IN JAVASCRIPT WITH URDU TARKA 😎
// =========================================================
