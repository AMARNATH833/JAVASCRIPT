
// //Inheritance in JavaScript.....

// class Animal{
//     color="black";

//     alive(){
//         console.log("Still alive");
//     }
// }


// class Dog extends Animal{

//     name="Jimmy";
    
//     sleep(){
//         console.log("Yes he is sleeping Now : ");
//     }
// }
// class Fish extends Animal{
//     name="AngelFish";

//     swim(){
//         console.log("yes is Swimming now : ");
//     }
// }
// class Cow extends Animal{
//     name="Acer";

//     roam(){
//         console.log("yes is Roaming now : ");
//     }
// }

// let dog=new Dog();
// let fish=new Fish();
// let cow=new Cow();
// dog.alive();
// console.log(dog.color);
// fish.alive();
// console.log(fish.color);
// cow.alive();   

//-------------------------------INHERITANCE USING SUPER CLASS-----------------------------------

class Animal{

    constructor(name,color){
        this.name=name;
        this.color=color
    }
    description(){
        console.log("Hi",this.name);
        console.log("Color of",this.color);
    }
}

class Dog extends Animal{
    
    constructor(name,type,color){
        super(name,color)
        this.type=type;
    }
    description(){
        super.description();
        console.log("You are the type of",this.type);
    }
}

class Dolphin extends Animal{

    constructor(name,bread,color){
        super(name,color)
        this.bread=bread;
    }
    description(){
        super.description();
        console.log("You are  bread of",this.bread);
    }
}
 let dog=new Dog("Jimmy","white","GermanShephard");
 let dolphin=new Dolphin("Lime","Grey","happy");

//  console.log(dog.name);
//  console.log(dog.color);
//  console.log(dog.type);

//  console.log(dolphin.name);
//  console.log(dolphin.color);
//  console.log(dolphin.bread);

dog.description();
dolphin.description();

//------------------------------------------------------------------------------------------------