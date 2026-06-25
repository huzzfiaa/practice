let arr=[1,2,5,6,];
arr.push(t2);
console.log(arr);//org me change karta ha last me add karta

let t2=[1,2,5,6,5,];
t2.pop();
console.log(t2);//org me change karta ha last me remove karta 

let ay=[3,4,5,6,];
ay.shift()
console.log(ay);// arr ke first item ko remove karta ha

let ay3=[3,4,5,6,];
ay.unshift("huzaifa")
console.log(ay);// arr ke first me ksh add karne ke kam ata ha



//q1
let jarr=[4,3,5]; 


 let oo = [{name:"ddd",number:45,},{name:"s",number:445,}]
let sum=oo.reduce((art,adc)=>{
    return art+adc;
});

let avgper=sum/jarr.length;
console.log(`"percentage" ${avgper}%`)


//q2
 const namew = new Array(23);
 let po=namew.fill(3)
 console.log(po);

//q3
let sd = new Array(34);
for (let d = 1; d <= sd.length; d++) {
  console.log(d);
}

//q4
let abaabdila= ["rde","cdsc","scd","c"]
abaabdila.unshift("suparaman"),abaabdila.push("mehdi")
abaabdila.splice(3,1,"gggggg")//3 index se 1 item remove kar ke ggg likhde ga
abaabdila.includes("rde");
//abaabdila[4]+="gggg"
console.log(abaabdila);

//q5
let pp={}
let cheak=Array.isArray(pp)//jo bracets me hoga wo agar array ho ga to ture wnr na false
console.log(cheak);

//q6
Array.from("variable jo string ko hold kare")// strind ke variable ko array banat aha


//Rule (yaad rakh)

//👉 Same API use ho rahi hai ≠ dependent
//👉 Data pass ho raha hai ≠ dependent

//👉 Only THIS matters:

//“Kya second API ko first ka result chahiye?”

//🧠 Interview Line (perfect)

//APIs are not dependent just because they interact with the same data source. Dependency exists only when one API requires the output of another to execute.


