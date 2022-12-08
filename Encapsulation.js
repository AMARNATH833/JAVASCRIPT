
//Encapsulation in JavaScript......


 class EmployeeDetails{
    setEmployeeDetails(myName ,id, salary,bool){

        this.myName=myName;
        this.id=id;
        this.salary=salary;
        this.bool=bool;
     }

     getMyName(){
        return this.myName;
     }
     getId(){
        return this.id;
     }
     getSalary(){
        return this.salary;
     }
     getBool(){
      return this.bool;
     }
 }

const details=new EmployeeDetails();
details.setEmployeeDetails('amar',10437,11111,false);
console.log("1 : "+details.getMyName());
console.log("2 : "+typeof details.getMyName());
console.log("3 : "+details.getId());
console.log("4 : "+typeof details.getId());
console.log("5 : "+details.getSalary());
console.log(details.getBool());