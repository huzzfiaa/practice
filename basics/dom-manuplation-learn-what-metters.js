//what is dom
//document object model mane front end ki js

//4 piller of dom
//1>selection of element
//2>changing css   
//3>changing html
//4> event listeners

//selection of element
//document.querySelector("h1")//is sa  querySelector (is me batate ha k html me kia select karna ha)
//document.querySelector(".box")//class select hote ha
//document.querySelector("#box")//id select hote ha

//changinghtml
//let a = document.querySelector("h1");
//a.innerHTML="JNVFDJK"; // WE FIRDT STORED THE DATA OF DOCUMENT IN VARIABLE A THEN CHANGED BY a.innerHTML=""; IT WILL CHANGE THE CONTENT OF THAT DIV

//changing css
//let a = document.querySelector("h1");
//a.innerHTML = "JNVFDJK";
//a.style.color = "red"; // is se css ki koi se bhi proper ty di ga sak ti ha

//event lisners
//is kakam hota h ki jo bhi activity hum apne device se karte ha yani ,, click ,, drag ,, us ka responce dena
//let a = document.querySelector("h1");
///a.addEventListener("click",function(){console.log("hcchdbdch");})//click se mani kese ho ga or function mane kia hoga

//example
 //let body = document.querySelector("body");
 //let button = document.querySelector("button");
 //let hu=0
 //button.addEventListener('click',function(){if(hu==0){body.style.backgroundColor="red";hu=1}
 //else{body.style.backgroundColor="black";hu=0;} }) // agur hum click pe click kare ga to bg red ho ga or do bara karega t black hoga

//how to select multiple id of class
//document.querySelector(".box")//is ki help se ye html me jay ga or agear 20 tags .box ke nam se banae ho ga to un me se sub se phele wale ko select karlega
//is problem ko over kum karne ke liye ye karte ha
//document.querySelectorall(".box")//is ke waga se 20 ki 20 tags select hoge
//ab ye as an arry saave karta he to hum jese foreach laga kar sare arry ko print kar wate tha to ase hi is ko bhi kar wa sakte ha 
 
//difference between .ineerhtml -- .textcontent
//.ineerhtml("<h1>..</h1>") is ki madat se h1 ka tag banta ha
//.textcontent is ki waga se .textcontent("<h1>..</h1>")srif text ayga