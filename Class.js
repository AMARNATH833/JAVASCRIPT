

class Bottle{
    
    constructor(size,color,model){
        this.size=size;
        this.color=color;
        this.model=model;
    }


    capacity(){
        console.log("Capacity of the Bottle is 1L ");
    }
    brand(){
        console.log("Brand name of Bottle is MILTON ");
    }
}

let person1=new Bottle("Big","silver",2020);
let person2=new Bottle("Medium","Black",2022);
person1.capacity();
person1.brand();
person2.capacity();
person2.brand();
console.log("-----------------------");
console.log(person1.size);
console.log(person1.model);
console.log(person1.color);
console.log(person2.size);
console.log(person2.model);
console.log(person2.color);