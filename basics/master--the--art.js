//the difference in var -- let -- const//
//var = old es5 js
// 1)var = function scoped =>var apne parant  fuction me kabhi bhi use ho sakta ha
//2)function hux(){for(var a =1;a<13;a++){console.log(a)} console.log(a);} ++loop end hone ka bad bhi console.log(); chala loop ki value 12 ani thi magar var ki waga se jab hum ne use function me console.lo(a); print ki to hume 13 milla kiu ka avar ki waja se a ki ap ni valu bhi add ho gai++
// 3)var adds it self to the window object
// is hoisted 


// let -- const = new es6 js
// 1)let -- const = braces scoped
//2)function hux(){for(let a =1;a<13;a++){console.log(a)} console.log(a);} ++loop end hone ka bad  console.log();  nahi chala  ga loop ki value 12 ani ha kiu ka jab function me loop ka "{} braces" close hojae ga us ka bad agar hum console.log(a); kare ga to hume error melle ga kiu ka wo valu loop me hi raha gi or loop ka bad ni chale ge to hame as a result 12 answer milla ga++
//3)let -- const dont adds it self to window object
// not hoisted

// window object//
// window object wo koi bhi cheese hoti ha jo k khud java scrip ki na ho or wo chess browser se le ya borrow kare "example" prompt , elert , var //.
// browser js ko kush feature , function , data ha or wo window ka andar ho te ha//

// browser contex api//
// browser contex api consest of 3 things wwindow , stack , heap memory
//  wwindow browser js ko kush feature data ha or wo window ka andar ho te ha//
// stack jis order me koi kam perform ho 
// heap memory me intermidet processed memory stor hoti ha

// execution contaxt//
// execution contax basically ak imaganary container ho ta ha jo ka function ke call hone par ban ta ha//
//it consist os 3 things -- variable -- function -- laxical enviorment//
//function jiu(){var d=12;function hj(){var f = 23;}} jab ye function call ho ga yani {jiu();} to ya apna enviormantal contax bana le ga//

//laxical enviorment//
//ye ba ta tta ha k function k andar kioa kia cheeze include or konsi ni//
// ye bata ta ha ka function kin cheezo ko access kar sak ta ha or kin ko ni//
//it hold scope and scope chain//

// how to copy refference//
// jesa k hum jante ha k refference ak data bype hota ha jo k brackets me ho ta ha {}-[]-() to hum jub bhi is ko copy karte ha to is ka reference copy hota ha.//
//for example//
//var a =[1,2,3,4,];
//var b=a;
//b.pop (); is ki waja se a and b dono ki end ki value remove hojae gi//
// to solve that ka hum jab b ki valu remove ya add kare to  ki ho or a ki na oh to//
//var a =[1,2,3,4,];
//var b=[...a]; var b/container =[...reference value] yahe sayntax ha
//b.pop ();

// how to copy object//
//var obj = {name:"huzaifa",class:12,}
//var copyobj ={...obj}; ab serif copy object ki valu change ho gi

//truthy -- false//
//java script jo bhi cheez hum likhte ha wo ya to truthy hote ha ya false
// flase vale are 0-false-undefine-NaN-document.all is k illawa sare valu truthy hote ha
// for example
//if(3){console.log("ggghh");}
//else{console.log("sdbhdbhbjhd")} ab is me "3"truthy hakiu ka wo {0-false-undefine-NaN-document.all} is k illwa ha or agar is
 
//forEach--forin--dowhile  loops//
//for Each loop is used for array  .. or us array ki temporary copy bante ha jo k sarif loop me use hote ha
//for example//
//let a=[2,34,4,5,6,7,23,34]
//a.forEach(function(val){console.log(val*2);}) is ka matlab k ak ak value {variable "val"me stor horahi ha or us me hur bar 2 multiply horaha ha}
// for in loop object k liya use hota ha
 //let object ={name:"huzaifa",class:3,rollnum:13243,}
 //for(let key in object){console.log(key,object[key]);} is variable {key} ki waja se "name, class,rollnumber print hoga" or object[key] ki waja se un ki valu yani particullar key ki valu {huzaifa,, 3,, 2r33535 }print ho ga//
 ///do while
 // do while tab istamal hota ha k jab hum chahe k koi chzees kam az kam ak bar print ho or is k bad is condition chale
 //let a =12;
 //do{console.log("hello");
// a++;}
 //while(a>199) ye condition pe puri n utar rahi pir bhi ye ak bar print hoga

 //call back function//
 // asa code jese hum bolte ha ke jab complete hojana or function chalana to us me normal function use hota ha us ko call back function kehte ha ye asocoronus java script ka part ha//
//setTimeout(function(){console.log("hjdbnhbh")},4000) ab ye function 4 second ke bad chle ga

//first call function //
// first call functoin ka matlab hota ha k ap ak function ko as a valu bhi use kar sakte ho//
//function container(c){
    //c();}
//container(function(){console.log("han g kia hall ha");});
//const greet = function() {
  //  console.log("Hello!");};
  //greet(); // Output: Hello!
  
  // arrays behind the seens//
  // arrays basically object ho te ha 
  //let arr=[2,4,5,6,23,34,43] "ye actual asa hoga jese define kia ha"
///arr={ 0:2,1:4 and soon} 
// ab hume tab pata chale ga ke array ak arry ha yani jub hum console me ye type kare ga{array.is array([]) == ture}-- jab objecct ho ga{array.is array([]) == false}
   // internally arrays in js are objects
   
   // To check if a variable is really an array:
//console.log(Array.isArray([])); // true
//console.log(Array.isArray({})); // false

//how to delete the key of object
//let a ={name:"huxan",age:23,}
//delete a.age "this will delete the age key also value will be deleted"
//console.log(a);

//example of first class //

function yar(y,a){y();a();}
yar(function(){console.log("hello hana g");},function(){console.log("hello dveeve g");})

// ---------------- SIMPLE (Child Version) ----------------

// Iteration:
// "Iteration" matlab ek kaam ko baar-baar repeat karna,
// jaise loop har chakkar me same step karta rehta hai.

// Closure:
// "Closure" matlab function apne parent ka samaan (variables)
// yaad rakhta hai, chahe parent function khatam hi kyun na ho jaye.


// ---------------- HR / INTERVIEW VERSION ----------------

// Iteration:
// "Iteration is the repeated execution of a block of code,
// typically controlled by loops such as for, while, or forEach."

// Closure:
// "A closure is a function that retains access to variables
// from its lexical scope even after the outer function has executed."



const users = [
  { name: "Hassan", active: true },
  { name: "Ali", active: false },
  { name: "Sara", active: true }
];

const result = users
  .filter(u => u.active)     // sirf active users
  .map(u => u.name);         // unka naam nikalo

console.log(result);