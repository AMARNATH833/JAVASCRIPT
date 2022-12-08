
//----------------------Block-Scoped Variables----------------------------------------------------

// if(true){       //To see the scope of the variables.. var will be behaves like global variables
//   var test=true; //let test=true; // let will behaves like local variable
// }
// alert(test)

//Same for the looping also let will be local variable and var be the global variale


// for(var i=0;i<10;i++)  //
// {
//     var one=1;   
// }
// alert(i)
// alert(one)

//---------------------------Block-Scoped Functions----------------------------------------------------------

// function a(){
//     var value=123;
//     console.log(value);
// }
// a();
//  console.log(value);

// function looping(){
//     for(var i=0;i<10;i++){
//         console.log(i);
//     }
//     console.log("Loop came to last : "+i);
// }
// looping();

//-------------------------------------Arrow Functions-----------------------------------------------------

// let multi=function(number1,number2){
//     console.log(number1*number2);
// }
// multi(5,5)

// //Above can returned as.... in ARROW FUNCTIONS

// let multiplay=(num1,num2)=>{
//     console.log(num1*num2);
// }
// multiplay(4,4)
//---------------------------------------Template Literals----------------------------

// let age=22;
// console.log(`My current age is : ${age} old!`)
// let customer={name:"Amar"}
// console.log(`And My name is ${customer.name}Nath`)
// let paragraph=`This is an example of 
// Template Iterals using multiline
// in the code`
// console.log(paragraph)

//-------------------------------Spread Operator---------------------------------------------

// let array1=[1,2,3,4,4]
// console.log(array1)
// console.log(...array1)
// let array2=[...array1,5,6,7]
// console.log(array2)

// let amar=[5,6,7]
// let mugesh=amar;
// console.log(mugesh)
// amar.push(4);
// console.log(mugesh)
// console.log(amar)

// ()=>{}

//-----------------------------Destructuring Assignment-----------------------------------------

// const person={
//     name:"Amar",
//     age:22,
//     gender:"Male"
// }
// let name=person.name;
// let age=person.age;
// let gender=person.gender;
// console.log(name);
// console.log(age);
// console.log(gender);

//Above can retyped as 

// const person={
//     name:"Amar",
//     age:22,
//     gender:"Male"
// }

// let {name:name1,age:age1,gender:gender1}=person; // re assinging name
// console.log(name1)
// console.log(age1)
// console.log(gender1)


// let Number1=5;
// let Number2=10;
// console.log(Number1,Number2)
// // [Number1,Number2]=[Number2,Number1];     //not working(swapping)
// console.log(Number1)
// console.log(Number2)
//-----------------------------Extended Parameter handling---------------------------------------------

// function f (x, y = 7, z = 42) { //Giving values inside the functions itself.....
//     sum= x + y + z
// }
// f(1)
// if(sum==50){
//     console.log("correct")
// }
// else{
//     console.log("wrong");
// }

//----------------------------------------------------------------------------------
// 0b111110111
// if( 0b111110111 === 503)            //parseInt("111110111", 2)  
// {
//     console.log("yes");
// }
// else{
//     console.log("no");
// }

//-----------------------------------SYMBOL TYPE------------------------

// Symbol("three") !== Symbol("two")
// const three=Symbol();
// const two=Symbol();
// if(typeof three ==="symbol")
// {
//     console.log("true")
// }
// else{
//     console.log("false")
// }



// let oppo={
//     model:"f3",
//     price:15000
// }
// console.log(oppo)
// console.log(typeof oppo)
// let newState=JSON.stringify  (oppo)//
// console.log("Now it is in stringify stage : "+newState)//and can be accessed using the index value
// console.log(newState[20])
// console.log(typeof newState)
// const srini=JSON.parse(newState)
// console.log("Now it is in parse stage : "+srini)
// console.log(typeof srini)
// console.log(Object.keys(srini))
// console.log(Object.values(srini))
// console.log(Object.getOwnPropertyNames(srini))
// console.log(Object.getOwnPropertySymbols(srini))
// console.log(Object.getOwnPropertyDescriptors(srini))
// console.log(Object.getOwnPropertyDescriptor(srini))

//----------------------------------Set------------------------------------------------

// let box=new Set() //dp
// box.add("Amar")
// box.add("Gopi")
// box.add("Amar")
// console.log(box)
// console.log(box.has("Amar"))
// console.log(box.entries())
// console.log(box.size)
// // console.log(box.values())
// for(let key of box.values()){
//     console.log("values of box(set): "+key)
// }
// console.log("Type of : "+typeof box)

// let sum=10
// const number=[1,2,3]
// number.forEach(myFunction);

// function myFunction(item){
//      console.log(sum+=item);
// };
// myFunction();
// console.log(...number)

//-----------------------------------------------MAP-------------------------------------------------------

//WeekMap   const wSet2=new WeakMap(["object_name"])

// const route=new Map();//dpa
// console.log(route)
// route.set(1,"neyveli")
// route.set(2,"covai")
// route.set(2,"salem")
// route.set(3,"salem")
// route.set("hello","erode")
// route.set("bool",true)
// // route.clear();
// console.log(route)
// // console.log(route.get("hello"))
// // console.log(route.get("bool"))
// console.log(route.has("bool"))

//-----------------------------------------------Generator--------------------------------------------------------------

// function* genrate(){
//     let count=0;
//     for(let i=0;i<10;i++){
//         count++;
//         yield i
//     }
//     return count;
// }
// let flow=genrate();
// console.log(flow.next())
// // for(let i=0;i<=10;i++){
// //     console.log(flow.next())
// // }
// console.log(flow)


// function* range (start, end, step) {
//     while (start < end) {
//         yield start
//         start += step
//     }
// }

// let iterate=range(0,12,2)
// // console.log(iterate.next())

// for (let i of range(0, 10, 3)) {
//     console.log(i)
// }

//----------------------------------------------------WEEKSET--------------------------------------------------------

// const wSet=new Set([1,2,3,4]);
// console.log(wSet)

// let fruits={
//     orange:"orange",
//     apple:"red",
// };
// const wSet2=new WeakSet([fruits])
// console.log(wSet2)
// console.log(typeof wSet2)


// var add = function(a,b){
//     return a + b;
//   }
  
//   // Arrow Function Expression
// var arrowAdd = (a,b) => a + b;

// console.log(arrowAdd(4,4))
// console.log(add(5,5))

//------------------------------------------New Built-In Methods----------------------------------------------
//Object property Assignment

var display={
    value1:"amar",
    value2:"mugesh"
}
var Window={
    win:1,
    win2:23.456,
    help:108,
    Nvalue:{
        name:"Iphone",
        price:200000
    }
}
display=Window;
console.log(display.help)
// Object.assign(display,Window)
// console.log(display['value1'])
// console.log(display['win'])
// console.log(display.win2)
// console.log(display.help)
// console.log(display.Nvalue['name'])
// console.log(display.Nvalue['price'])

//Array element finding

// let array=[1,2,3,4,5,6]
// console.log(array.find(x=>x>5))

//String repeat()

// let paragraph="Amar has a Vivo Phone ";
// console.log(`This is to inform that ${paragraph.repeat(3)} `)

//Number type Checking

// console.log(Number.isFinite(123))

// function check(value){
//     if(isNaN(value))
//     {
//         return NaN;
//     }
//     return value;
// }
// console.log(check("true"));
// console.log(Number.isInteger(2))

// console.log(1+2==0.3)
// console.log(Number.isSafeInteger(5059876556671110))

//-------------Number currency Formating----------------------

// var usd=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"})
// console.log(usd.format(1234567))
// var ind=new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR"})
// console.log(ind.format(987654))

// var usdNumber=new Intl.NumberFormat("en-US")
// console.log(usdNumber.format(1234567))
// var indNumber=new Intl.NumberFormat("en-IN")
// console.log(indNumber.format(987654))


// //-------Number sign Determination----------
// console.log(Math.sign(5))
// console.log(Math.sign(0))
// console.log(Math.sign(-0))
// console.log(Math.sign(-260)) 
// console.log(Math.sign(NaN))