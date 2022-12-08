

// let stationary=["pen","pencil","alphabet","ballpoint","catage",'pen']
// console.log(stationary);

// stationary=stationary.sort();
// let index=2;
// console.log(...stationary); // array and using spread operator also....
// console.log(stationary.at(index)); //to find using index

// const shop=["light","fan"]
// const market=stationary.concat(shop) //concat of 2 strings
// console.log(market);

// console.log(stationary.copyWithin(0,4)); //copywithin(target,start,end)

//-------------------------------------------------------- to check key:value pair

// const entry=stationary.entries();
// for(let i=0;i<stationary.length;i++)
// {
//     console.log(entry.next().value);
// }
// ------------------------------------------------------------

//fill
// console.log(stationary.fill("amar")); // to fill the data to the required location of the array. 

//-------------------------------------------------------------
//To display the first element which is greater than the given number .....
// const array1 = [5, 12, 8, 130, 44];

// for(let i=0;i<array1.length;i++)
// {
//     const found = array1.findIndex(element => element > 10); //find used for first element greater than than required number
//     //And findIndex used time the index of the first element which is greater than the given number....
//     console.log(found);
// }

//findLast(),findLastIndex() used to find from the last of the array!.....

//---------------------------------------------------------------------------

//flat() is used to a array with all sub-array elements concats into a single array...

// const array1 = [0, 1, 2, [3, 4]];
// console.log(arr1.flat());
// const array2 = [0, 1, 2, [[[3, 4]]]];
// console.log(arr2.flat(2));

//-------------------------------------------------------------------------------

//includes() used to check the values present in the array or not....
//indexof() is used to find the index of the required in the array, if not it will return -1

// const array1 = [5, 12, 8, 130, 44];

// console.log(array1.includes(8));
// console.log(array1.indexOf(8));

//----------------------------------------------------------

//join() is used to join the all the values in the array in a single value...
//keys() is used to display the keys of the each index of the value...

// console.log(stationary.join(' $ '));
// console.log(stationary.keys());

//lastIndexOf() is used to find the last index of the word which are present n number of times
// console.log(stationary.lastIndexOf('pen'));
//----------------------------------------------------------------------------------------------

//pop() is used to remove the last element in the array 

// console.log("Before pop :   "+stationary);
// stationary.pop()
// console.log("After pop :    "+stationary);


//----------------------------------------------------------
//push() is used to add elements in the last of the array...
//reverse() is used to display in the reverse order

// stationary.push('mobile',50,true)
// console.log(stationary);
// console.log(stationary.reverse());

//--------------------------------------------------------------

//slice() used to used show change made in the array in another, which doesnot make any change in the original array

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals);
// console.log(animals.slice(-2)); //(2,4),(-2),(2,-1)

//---------------------------------------------------------------------------
//toLocateString() is used to change the number type to which display as currency of the particular country

// var currency= 100000;
// var current=currency.toLocaleString('hi-IN',{style:'currency',currency:'INR'})
// console.log(current);

//------------------------------------------------------------------------
//unswift() is used to add the value in before of array i.e begining of the array...

// const array=[5,6,7]
// console.log(array.unshift(1,2,3,4)); // it will return the size of the array;.....
// console.log(array);

//--------------------------------------------------------------------------------

let array=[{person:"amar",age:22},{person2:"mugesh",age2:33}]
for(let i=0;i<array.length;i++)
{
    if(array[person.age]>=20)
    {
        console.log(first)
    }
}

array[1].age2=44
console.log(array)