//differencee in secronous an ansecronous.
//sync js ka matlb ha ki jab tak ak kam khta nahi ho jata to dosa shor he na hi karna or ja pehly wale ka result ajay to usi k bad dosara kam shoro karna ha//
//async ka matlab ha ki sab kam ak sath suru kardo jis ka javab phele a jay to answer kar dena//
//asunc me jab sab kam ak sath stae hote ha to jis ka result penl ajata ha to vo phele print hojata ha//
//exam ple//
//nsole.log("DSDDSSD");//sync//sab se phely
//tTimeout(function(){console.log("yaiuuucui");},8000)//async//ye kam complet kare ga jese 2s ka wait
//nsole.log("DSDDSSD");//sync //2 1ke bae


//js astnuc nahi ha//
//basiclly kia ha ki jo javascript ha wo single thread ha matlab ak kam at atime par kar ti ha//
//ja bhi hum js likh te ha to  us ka thora code sync hota ha oor thora async //
//hum ye samaj sakte ha k jab cose run hota ha to 2 box banjate ha ak ka nam "main stack"ho ta ha or dosare ka"side stack"
//sync mainstack me chal ta he or side stack me anyc chacta ha//
//for example//
console.log("jbdask1");
console.log("jbdask2");
console.log("jbdask3");
setTimeout(function(){console.log("jbdask4");},0)
console.log("jbdask5");
console.log("jbdask8");
//upper diya gay code me se line number 20 async ha or baki sare sync //
//ab ye jo sara sync code ha wo main stack me chale ga or jab wo sara sync code chala le to phir wo side stack se puche ga k thumara kam pora ho gaya ha or wo jesa hio pora ho jae ga to to wo print ho jay ga//
//coversation between main and side stack is knopwn as "event loop"
//sync => main stak=>extecution
//async=>storing the data in to the side stack and excecuting until the data in main stack is executed//

//call back//
//call back  == function//
//jab bhi hum async code likhte ha jesa k
fetch
XMLHttpRequest
axios
Promise
setInterval
setTimeout
//ye jitna bhi async code ha vo kisi or server pe request beage ta ha or hume kabhi bhi naipata hota ka is ka answer kab ae ga //
// ye 3 chezee jo neche di hoi ha vo kehte ha k jab bhi answer a jae to answer dede na ya print kar de na//
callback 
async awite
.catch
//call back basiclly bata tta ha ki jo re quest humne server pe baji thi vo accpt ho ga ha ya ni//

//promises
//ak code ha jo ki future me chle ga so ab is ka do he result ho sakte ha ke ya to chale ga ya ni chale ga {resolve} mani chalega {reject} mani ni chle ga
//so basically promises ka apna hi world ho ta ha .. ab jab ye future me chale ga to hum is ko stor karsate ha ..
//ya to "resolve" ho ga ya "reject" agar resolve state me ha to "then" chale ga or gaar reject   hoa to "catch" chale ga
//creating promise//
//then -- catch me humesha function likha jata ha
 
//2 example

let eans = new Promise((resolve, reject) => {
    let n=Math.floor(Math.random()*10);
    if(n>5){return resolve(n,);}
    else{reject(n,);}
});
eans.then(function(result){console.log("num 5 se kam ha");})
.catch(function(error){console.log("num 5 se bara ha");});


//async await
//async await tab likh te ha k jab hume promises me then se bach na ho//
//jab hum then hata en ga to hame await laga na pare ga
//async function (){fetch('https:randomuser.me/api/')//--async kisi  bhi function ko bana ne ke liye us se pehle async likhnaparta ha
//let raw =fetch('https:randomuser.me/api/')--jab bhikisi ap se data lete ha to wo raww format me ho ta he is line me serif fecch ki valu varable raw me stor kar wai ha
//let ans await raw.json(); -- ye raw data ko meaning full data me covert kare gi
//console.log(ans);--ab jab bhi us ki valu print kar wai ga to api ka data print ho ga console pe

//concurrency
//concurrency is basically the execution of sync data in main stack -- holding of async data in side stack then after it complete its tansk than its excicution in main stack

//Parallelism in JavaScript
//JavaScript is single-threaded, meaning it normally does only one task at a time.
//These let JavaScript run code in the background without blocking the main thread.
// ab is ka matlab ha ki js run to main stack wala sync codde kar rahi hogi lakin on the back ya hum khe sakte ha ke behind js side stack wala code bhi process kar rahi hogi ta ki wo future me us code side stack wale ko main stack me la kar chala sake
//Parallelism: Many tasks handled at the same time using multiple threads 

//https://chatgpt.com/share/6817cba0-c91c-800f-b387-130127bdb786/