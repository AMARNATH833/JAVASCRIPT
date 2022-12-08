

const list={
    myName:"amar",
    age:23,
    "pin code":607803, // Here multiword property is used and it must be inside the double quotes or single quotes.
    'Add Value':null,// Both Null & undefined will return the same which are declaring...
    // user.likes birds = true //It will throw error
};
// console.log(list)
 
list.age=22;//changing the value after initalization...

let vegtable={
    fruits:[
        {n:"apple",c:"red"},
        {n:"orange",c:"orange"}, //veg.fruits[0].n //.c
    ]
    
}
let mine={
    fruit:{
        orange:{
            name:"orange",  //if(mine.orange.name=="apple"){console.log("price is 50Rupee")}
            color:"orange"  //mine.['fruit']['orange']['name'] or mine.orange.name.color
        },
        apple:{
            name:"apple",
            color:"red"
        }
    }
}
console.log();



// console.log(vegtable);

// console.log("age" in list);

// console.log(list)


// for(let i in list)
// {
//     console.log(list[i]);
// }

// let answer=Object.values(list);

// console.log(Object.entries(list)); //TO view the values which are present in the object....


// console.log("location" in list);
// console.log(Object.hasOwnProperty("myName")); //hasOwnProperty & hasOwn are used to check the property which is present 
                                            // or not.. but hasOwn has introducted for the replace of hasOwnProperty


// console.log(list instanceof(Object)); //To check the type of object or not!
// alert(list.myName);
// console.log(list.myName);
// console.log(list.age);

//---To add a value to the object
// list.isAdmin=true;
// console.log(list)
// list.location="chennai";
// console.log(list)


//----To Delete(remove) a property from object..
// delete list.isAdmin;
// console.log(list)

//Adding,Removing(deleting) the property using squareBrackets....(ERROR_NEEDTOLEARN)
// const aspire={
//     aspire["address"]:101 **explore
// };
// console.log(aspire[address]);

// Objects as object properties
// const person={
//     form:["amar","nath"],
// };
            //By Both Methods it can be done....
// const person={
//     name:{
//         first:"amar",
//         last:"name",
//     }
// }
// console.log(person);







































// let fruit = prompt("Which fruit to buy?", "orange");

// let bag = {
//   [fruit]: 5, // the name of the property is taken from the variable fruit
// };

// console.log(bag.orange);