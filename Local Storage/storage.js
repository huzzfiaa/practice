// local storaage me value dalna 
localStorage.setItem('name','dcefrer');
// value lana ho to
localStorage.getItem('name')
let dev =localStorage.name;
console.log(dev);
// value delet karna ha to
localStorage.removeItem('name') // local storage se hat gaye ha
// pora local storage clear kar na ha to
localStorage.clear()   
// array ko ke sae stor kawae
let arr = [1,233,4,5,5,]
localStorage.setItem('arrr',arr) //ab agar hum localStorage.getItem('arrr') to ye arr ko string bana de ga  or jason.parse karne ka bhi ko faida ni ho ga

localStorage.setItem('sd',JSON.stringify(arr));
JSON.parse.localStorage.getItem(sd);//ab ye array format me hi ho ga


