// Encaapsulation
class BankAccount {
  #balance=300000

  deposit(amount){
    this.#balance+=amount 
    return this.#balance;
  }
  getbalance(){

    return`$ ${this.#balance}`
  }
}
  let account =new BankAccount()
  // console.log(account.getbalance());
  
// abstraction
class Coffeamchine{
  start(){
    return`starting the coffee machine`
  }
  brewCoffee(){
    return`brewing coffee`
  }
  pressStartButton(){
    let msgone=this.start()
    let msgtwo=this.brewCoffee()
    return `${msgone} and ${msgtwo}`
  }                                                                                                                                                                                                                                                                                                                                                                                                                 
}
let Mymachine =new Coffeamchine()
// console.log(Mymachine.start)
// console.log(Mymachine.brewCoffee());
// console.log(Mymachine.pressStartButton());

//Polymorphism
  
class bird{
  fly(){
    return `i can fly`
  }

}
//Polymorphism
  
class Bird {
  fly() {
    return `I can fly`;
  }
}

class Penguin extends Bird {
  fly() {
    return `penguin cannot fly, but I can swim`;
  }
}

let genericBird = new Bird();
let penguin = new Penguin();
// console.log(genericBird.fly());
// console.log(penguin.fly());

//static method

class calculator{
   static add(a,b){
    return a+b
  }
}
//  let minCalc= new calculator()
//  console.log(minCalc.add(2,3));
console.log(calculator.add(2,3));

//  gatter and setter

class employee{
  constructor(name,salary){
    this.name=name
    this._salary=salary
  }
  get salary(){
    return `you are not allowed to see the salary` 
   }
   set salary(value){
    if(value<0){
      console.log("invalid salary");
      
    }else{
      this._salary=value
    }
 }
}
let emp =new employee("John",50000)
 console.log(emp.salary);
 emp.salary=-1000