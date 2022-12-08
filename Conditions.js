

const BottleCount = 10;

if (BottleCount == 10) //if-else
{
    console.log("Box is filled. Ready for dispach");
}
else {
    console.log("Box is incomplete");
}

//Nesting if-else...
const MobileCompany = "Vivo";
const MobileNumber = 123;
if (MobileCompany == "Vivo") {
    if (MobileNumber == 123) {
        console.log("Yes it is Mobile Phone");
    }
    else {
        console.log("It is Button Phone")
    }
}
else {
    console.log("It maybe other Electronic devices");
}

// Using Logical Operators &&,||,!

const Manager="Amar",id=10437;
if((Manager=="Amar" || id==10437))
{
    console.log("Yes He is the Manager of LAMP" );
}
else{
    console.log("One Small Correction, He was Senior Developer");
}

///Switch Statement

let Choice=3;
switch(Choice){
    case 1:console.log("Monday !");
           break;
    case 2:console.log("Tuesday !");
            break;
    case 3:console.log("Wednesday !");
            break;
    case 4:console.log("Thrusday !");
            break;
    case 5:console.log("Friday !");
            break;
    case 6:console.log("Saturday !");
            break;
    case 7:console.log("Sunday !");
            break;
    default:alert("Please enter correct input");
}

// Looping 
// For Loop

const MobileBrand=['Apple','Vivo','Samsung','Oppo','Realme'];
for(let ice=0;ice<MobileBrand.length;ice++)  //const MobileList of MobileBrand
{
    console.log(MobileBrand[ice]);
}
for(let ice=5;ice<=15;ice++)
{
    console.log(ice);
}

//An example of Iteration or while Loop

let ice=1;
while(ice<=10)
{
    console.log(i);
    i++;
}

//Functions

// function emergency(){
//     alert("Fire in our building please get down using emergency door");
// }
// emergency();

const myText="Hello this is Milton";
console.log("Before change " + ', '+myText);
const newString=myText.replace("Milton","AmARNATH");
console.log("After change"+', '+newString);

// const myArray = ['I', 'love', 'chocolate', 'frogs'];
// const madeAString = myArray.join(' ');
// console.log(madeAString);
// const madeAnotherString = myArray.join();
// console.log(madeAnotherString);

function nameChanging(name = 'Mugesh') {
    console.log(`Greetings, ${name}`);
}

// nameChanging('vijay');
nameChanging('Ajith');



const output = console.log;
function one() {

    const zebra = 10;
    output(zebra)
}

function two() {
    const xerox = 5;
    console.log(xerox);
}

one();
two();


//IIFE Immediately Invoke Function Expression Asyns Function..........
(() => {
    console.log("IIFE");
})();


(one)();
one();

// const transmit = prompt("Enter ur name");
// alert(`hello ${transmit}`);

const arr[1,2,3,4,5];

