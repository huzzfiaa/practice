//promises
//ak code ha jo ki future me chle ga so ab is ka do he result ho sakte ha ke ya to chale ga ya ni chale ga {resolve} mani chalega {reject} mani ni chle ga
//so basically promises ka apna hi world ho ta ha .. ab jab ye future me chale ga to hum is ko stor karsate ha ..
//ya to "resolve" ho ga ya "reject" agar resolve state me ha to "then" chale ga or gaar reject   hoa to "catch" chale ga
//creating promise//
 
let ans = new Promise((resolve, reject) => {
    if (true) {
        resolve("resolve hogaya tha");
    } else {
        reject("reject howa tha");
    }
});

ans.then(function (message) {
    console.log("the answer will be correct:", message);
})
.catch(function (error) {
    console.log("the answer is not correct:", error);
});
  
//2 example

let eans = new Promise((resolve, reject) => {
    let n=Math.floor(Math.random()*10);
    if(n>5){return resolve(n,);}
    else{reject(n,);}
});
eans.then(function(result){console.log("num 5 se kam ha");})
.catch(function(error){console.log("num 5 se bara ha");});