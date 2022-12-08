
// var json='{"first":"amar","second":"nath","age":22}';
// var details=JSON.parse(json);

// console.log(details.first+" "+details.age);

//--------------------------------------STINGIFY---------------------------------
const student={
    name:"Amar",
    age:22,
    dept:"lamp"
}

const stringifyState=JSON.stringify(student)

console.log(stringifyState);
console.log(typeof stringifyState);
// console.log(stringifyState.length);
// for(let i in stringifyState)
// {
//     console.log(stringifyState[i]);
// }
// console.log(stringifyState.indexOf("p"));

//------------------------------------JSONPARSE--------------------------------------------

const toJsonValue=JSON.parse(stringifyState);

console.log(typeof toJsonValue);
console.log(toJsonValue);
// console.log(toJsonValue.name);
// console.log(toJsonValue.age);
// console.log(toJsonValue.dept);  

//------------------------------------------------------------------------------