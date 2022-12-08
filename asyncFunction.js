
//---------------------------setTimeout()--------------------------------------------

// document.getElementById("asun");//setTimeout Example of Asynchronous Function

//-----------------------------------------------------------------------------------

// function myFuntion(){            //setTimeout() using normal functions
//     console.log("Hello Amar");
// }

//-----------------------------------------------------------------------------------

// setTimeout(myFuntion,2000);

// setTimeout(()=>{
//     console.log("Now totally you waited for 7 seconds for ME! :) ");
// },7000);

// setTimeout(()=>{  //-----NESTED setTimeout() arrow functions
//     console.log(3);
//     setTimeout(()=>{
//         console.log(2); 
//         setTimeout(()=>{
//             console.log(1);
//             setTimeout(()=>{
//                 console.log("Happy Birthday AMAr");
//             },1000);
//         },1000);
//     },1000);
// },1000);


// console.log("Lets go!");
// setTimeout(()=>console.log("middle of the race!!"),5000)
// console.log("Reached Finish Line!!!");

//--------------------------------------------------------------------------------------

// Example of await

let promise = new Promise(function (resolve) {
    setTimeout( ()=> {
    resolve('Promise resolved and taken time 5 Seconds ! :) ')}, 5000); 
});

async function asyncFunc() {
    let result = await promise; 
    console.log(result);
    console.log('hello');
}

asyncFunc();

//-------------------------------------------




// function doStep1(init) {
//     return init + 1;
    
//   }
  
//   function doStep2(init) {
//     return init + 2;
//   }
  
//   function doStep3(init) {
//     return init + 3;
//   }
  
//   function doOperation() {
//     let result = 0;
//     result = doStep1(result);
//     result = doStep2(result);
//     result = doStep3(result);
//     console.log(`result: ${result}`);
//   }
  
//   doOperation();


//--------------------------------------------------------------------------------------------

// function wish(){
//     console.log("Hello Amar Happy Morning ! Have a Great Day!!!");
// }
// const id=setTimeout(wish,5000);
// console.log("Hello Gopi,Have a Great Day!"); //This prints first becoz 

// clearTimeout(id); //clearTimeout is used to clear the timing which set before in the program....
// console.log("Timeout stopped");

//-----------------------------------------------------------------------------------------------
