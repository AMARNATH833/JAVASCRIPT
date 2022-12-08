

// let promise=new Promise((resolve,reject)=>{

//     let files=true;
//     if(files)
//     {
//         resolve("File is location get found!");
//     }
//     else
//     {
//         reject("Sorry! File is not found");
//     }
// });

// promise.then(value=>console.log("Yes "+value))
//        .catch(error=>console.log("No "+error));

// ------------------------Async Function --------------------------------

// async function bottle(){

//     let capacity=true;

//     if(capacity)
//     {                               // if async is not mentioned function
//         return "Bottle filled"      // return Promise.resolve("Bottle filled");
//     }
//     else{
//         throw "Bottle is empty"     // return Promise.reject("Bottle filled");
//     }
// }

// bottle().then(value=>console.log(value))
//         .catch(error=>console.log(error));

//-------------------------------------------------------------------------------

//  let value=undefined;

    // let promise=new Promise((resolve,reject)=>{
    //     let value=1+3;
    //     if(value==4){
    //         resolve("Problem is get Solved");
    //     }
    //     else{
    //         reject("Here is an issue you have look on it")
    //     }
    // });

    // promise.then(function(message){
    //     console.log("This is in the Then block : " + message)
    // }).catch(function(message){
    //     console.log("This is in the Catch block : "+message)
    // })

    // console.log(promise);    