let num = 23 // integer 
let floatnum = 1.22 // float num


let numer = new Number(121)// internal lly number ak object hi hota ha
// jub bhi hume deak na ho k numbe rke pas kia kia methods ha to hum  constrcctor function ka istamal karte ha 

// note "Constructor ek function hai jo object create hote hi chal jata hai aur object ki initial values set karta hai."


// number ki properties 
Number// ak obj ha

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.NaN);

// numbers ke method

let pp = 12.1 // pp abhi ak floting num ha is ko inte ger me con vert karne ke liya
let intpp =  Number.parseInt(pp);
let flotpp = Number.parseFloat(pp);
let isfinit = Number.isFinite(pp)
// nopte ye method ase hi likha jae ga 
console.log(isfinit);

// method for premitive type
kk = 23434.873444444;
console.log(kk.toFixed(3));// DECIMAL KE BD JISTE VALUE SHOW KARNI HA LIKH OD  IS ME DICIMAL KE BAD 3 VALUE SHOW HO GI OR YE NUMBE RKO STRING BANA DETA HA
console.log(kk.toExponential(3))// ey value ko exponential me dekha ta ha
console.log(kk.toPresesion(3))// ye 1 value se count kar ta h aki ap ko kitne valu chaia ye val;ue ko round off karta ha












