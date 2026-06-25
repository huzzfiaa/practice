// let person = {
//     name: 'Manas Kumar Lal',
//     streetAddress: 'tanti bazar road',
//     isMarried: false,
//     address:{
//         city:'bhagalpur',
//         pincode: 812004,
//     }
//     // ..
//     //..
//     //..
//     //..
// }

// let name = person.name;
// let add = person.streetAddress;
// let isMarried = person.isMarried;

// // destructuring
// let { isMarried, name, streetAddress, address: {pincode} } = person;

// console.log(name);
// console.log(streetAddress);
// console.log(isMarried);

// console.log(pincode)


// let arr = [1,2,3];

// let [a,b,c] = arr;
// console.log(a, b, c)


// Basic destructuring
// let arr = [1,2,3,'manas', false];

// let [first, second, third] = arr;

// console.log(first)
// console.log(second)
// console.log(third)


// destructuring with rest operator

// let arr = [1,2,3,'manas', false];

// let [first, second, third, ...others] = arr;

// console.log(first)
// console.log(second)
// console.log(third)
// console.log(others)


//  default values
// let [a, b, c, d = 0] = [5, 10, 15, 20]
// console.log(a, b, c, d);


// skip items
// let [, , c, , e] = [1,2,3,4,5]
// console.log(c,e);


// swap
// let a = 5; b = 10;
// let temp = a;
// a = b;
// b = temp;
// console.log(a, b)

// swap using destructure method
// let a = 5; b = 10;
// [a, b] = [b, a];
// console.log(a, b);

// // nested destructuring
// let [a,,,[x ,y]] = [1,2,3,[5,6]];
// console.log(a);
// console.log(x,y);


// destructuring with objects

//basic destructuring

// let obj = {
//     name:'manas',
//     age:21,
// }

// let {name, age} = obj
// console.log(name, age)

// destructuring with rest operator
// let obj = {
//     name: 'manas',
//     age: 21,
//     city: 'bhagalpur',
//     isMarried: false,
// }

// let { name, age, ...others } = obj;
// console.log(name, age, others);


// default values
// let { name, age = 18 } = {
//     name: 'manas',
// }

// console.log(name, age);


// rename variable
// let {name: fullName} = {
//     name: 'Manas Kumar Lal'
// }

// console.log(fullName);


// let obj = {
//     name: 'manas kumar lal',
//     age: 21,
//     address: {
//         city: 'bhagalpur',
//         pincode: 812004,
//         arr: [1, 2, 3, 4, 5]
//     }
// }

// let {
//     name: fullName,
//     age,
//     address: {pincode: code, arr:[a,b]},
// } = obj;

// console.log(fullName)
// console.log(age)
// console.log(code)

// console.log(a,b);


// array destructuring in function parameters

// function sum([a, b]){
//     console.log(a + b);
// }

// // let a = 10, b = 5;
// let arr = [10, 5]
// sum(arr);


// object destructuring in function parameters
// function greet({name, age}){
//     console.log(`hello ${name}, your age is ${age}`)
// }

// let obj = {
//     name: 'manas kumar lal',
//     age:21,
// }

// greet(obj);


// Q.1

// let arr = [1,2,3];
// let copyArr = {...arr};
// console.log(copyArr)


// Q.2
// let obj = {
//     name: 'manas kumar lal',
//     age: 21,
// }

// let objWithCity = {
//     ...obj,
//     city:'bhagalpur'
// }

// objWithCity.streetAddress = 'road';

// console.log(objWithCity)
// console.log(obj);


// Q.3

// function seperateEvenOdd(...arr) {
//     let even = arr.filter((elem) => {
//         return elem % 2 === 0
//     })
//     let odd = arr.filter((elem) => {
//         return elem % 2 !== 0
//     })
//     return {
//         even,
//         odd
//     }
// }


// let { even, odd } = seperateEvenOdd(1, 2, 3, 5, 9, 10, 11)

// console.log(even)
// console.log(odd)

function useState(initialValue){
    let value = initialValue;

    function setValue(val){
        value = val
    }

    function getValue(){
        return value;
    }

    return [getValue, setValue];
}


let [getCount, setCount] = useState(0);
console.log(getCount());
setCount(5);
console.log(getCount());