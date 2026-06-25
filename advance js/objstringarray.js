          // string //

          let firstname ="muhammad"
          let middleneme ="ali"
          let fullname = firstname+middleneme;
          //is ko sth me klikhne ka assan tarika
          let fullname2=`${firstname} ${middleneme}`
                    console.log(fullname2)

                    //  backtick me jo bhi cheeze hogi us ko empletlitrals kehte ha or  `${}` is method ko string interpolution or is ke ander ki value ko place holder khete ha ...

//escape charecter 
str = "jjj\neeeee"
console.log(str);
// \n se gap creat hoga ta ha string ke bich me

// \ is ki madad se string me ak or string add kar sakte ho


// strings are immutalne matlab ke hum in ko change ni karsak te //
strd = "hello dd"
strd [3]="d"// ye string ha jis ki waja se l d se tabdil ni ho ga

// STRINGS ARE IMMUTABLE MATLAB KI WO KABI CHANGE NI HO SAKTE ORIGNAL STRING CANT BE CHANGE

//strings properties and method in js


//properties
//jese lenth.string ye koi kam ni karraha hota ye bas hume bataraha ho ta he ke is me kia he jese string .lenth us ki lenght bataey ga
// property ko bata ne me parentheses ni lagta () is not use for property
.length

// method 

// ye string ke sath koi kam kar ta ha

//methods me  pherentheses use hote ha

//( ) used in method

let ok = "kala totl nn"
ok.toUpperCase(); //ye method us ko upper case me change ni kare ga kiun ke orignal string ko change ni kar sakte
let oktoupeercase=ok.toUpperCase();
console.log(ok,oktoupeercase); //ye method us ko upper case me change ni kare ga kiun ke orignal string ko change ni kar sakte -- magar us ki copy ko zaror ok  orignal ha or oktoupeercase is ki copy
let lowercaseok=ok.toLowerCase();
let trimmerok=ok.trim();//space hata deta ha
let includ=ok.includes("o");//jo cheeze hum ne pherentheses me dale ha argr wo us string me ho ga to ture mele ga warna false
let indexok= ok.indexOf(h)//pherentheses me jo cheeze ho gi us ka index batae ga
let cherecterok= ok.charAt(4)//pherentheses me idex denge to us index pe mojod cheeze milagi
let replace=ok.replace("kala","white")// pherentheses me phele wo likhte ha jisko replace kar na ho dosare me wo likh te ha jis k sath replace kar na ho
let replaceall=ok.replaceAll("kala","white")// jidar jidar kala likhkha ho ga wha hawha replace hoga

let slice=ok.slice(1,4)//1 value jahan se cut karna ha 2 value jahan tak cut karna ha
console.log(slice);

    //ARRAY//

   // refrence daata type ha

  // is me literl method yani k arry=[] ha   ... or constructer method yani arrary=new Array [];
  
  //arrays are unmutable
  //methods in array
//  Push()array ke last me kush add karta ha jo bracket me do ye arry ke length return kartaha
//  Pop()arry ke last item ko remove karta ha jo last me hikal ta ha usi ko return karta ha
//unshift() array ke first se item add karta ha length return ho gi
//shift()arry ke first se remove karta ha jo item nikla ha wo return ho ga
//slice(from index, to index)arry me se kush cut kar deta ha
//splice(kis index se shuru go ga , us ke bad kia add karna ha)ak time pe remove and add ka kam karta hha
//concat(first array,second array) 2 array ko combine karta ha
//spread operator
//let newarray=[...arr1,...arr2,...arr3] 3 aryas ko combine ka de ga mostly concat ki jaga ye use hota ha
//to string() array string me tabdell ho ga ta ha
//includ(hjjj) array me agar hjjj ho ga to  ture ho ga else false
//join(and) array ko string me tabdil kar ta ha jo cheeze hum ne brackets ke ander de ho te ha us ki mada d se join kar ta ha
//reers() order revers ho ga ta ha
let test= fruits.find(function
(item) {
return item === "mango"
})
console.log(test) //"array ke ande agar mango ho ga to mango print ho ga warna un define"
//flat()parent array ki nested arrys ko tor deta ha



// array itation method
.map((item,index,arr)=>{})// ye ak hier order function ha jo ke apne ander bhi ak hunction leta ha
.map((item,index,arr)=>{})// ye basically apne andar ak function leta ha ye loop se ziya da power full hota ha ye ap ko array me mojod item index of item and index deta ha
