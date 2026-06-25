

          //obj and array me spread and rest ka seeen same ha



// spred            
//matlab phe la dena
let arr = [13,4,53,"fd"];
let newar = [...arr,1,2,5,4,3,2]; // {...} spread operator ha us arry ki sari values a gaye gi oar is arr ki value bhi likh sak te ha
console.log(newar);


// copy array with spread operator
let arrau =[1,3,4,5,34];
let copyrefrence = arrau;// copyrefrence me arrau ka refreeence copy ho ga is arry me kush change yani push or pop karen ge to asliarray me  bhi ho ga
let copy = [...arrau];//kush change ni ho ga asal array me

// merge two arrays
let arr1= ['captain', 'dost']
let arr2= ['spider man'];
let mergedArr = [...arr1, ...arr2]; 
console.log(mergedArr);

//shallow and deep copy

// Shallow copy
let obj1 = { a: 1, b: { x: 10 } };
let shallow = { ...obj1 };  // or Object.assign({}, obj1)

shallow.b.x = 99;
console.log(obj1.b.x);  // 99 (affected ❌)


// Deep copy
let obj2 = { a: 1, b: { x: 10 } };
let deep = JSON.parse(JSON.stringify(obj2));

deep.b.x = 99;
console.log(obj2.b.x);  // 10 (not affected ✅)

// spread string
let str = 'Manas Kumar Lal';
let arrd = [...str];
console.log(arrd);


//rest
// destructuring in rest
operator
let arrw= ["manas", "muskan", "mehek"];
let [user1, user2, user3]=arrw;
console.log(user1, user2, user3)

let gropup = [1,4,53,44,5,2,4,4]
let [first,second,theard,...passed] = gropup; //[first,second,theard,...passed] is  array ke andar ko index samjo or ji nam se save kia ha in ko array ki andar ki valu ka vari able bana dia ha 
console.log(first); //  first ak variable bana ha is ki value 1 ho gi
console.log(theard);// therd ak variable bana ha is ki value 53 ho gi


