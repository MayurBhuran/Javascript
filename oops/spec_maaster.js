let car = {
  make :"Toyoto",
  model:"camru",
  year: 2024,
  start :function(){
    return `${this.make} car got started in ${this.year}`

  },

}
// console.log(car.start());

function Person(name,age){
  this.name = name
  this.age = age
}
let john =new Person("john doe",40)
// console.log(john.name);

function animal (type){
  this.type =type
}
animal.prototype.speak =function(){
  return `${this.type}makes a sound`
}

Array.prototype.himaesh =function(){
  return`custom method ${this}`
}

let myArray =[1,2,3]
// console.log(myArray.himaesh());

let mynewArray =[1,2,3,4,5,6,7]
// console.log(mynewArray.himaesh());

class Vehicle {
  constructor(make,model){
    this.make=make
    this.model=model
  }
  start(){
    return`${this.model} is  Car from ${this.make}`
  }
}

class Car extends Vehicle {
  drive(){
    return`${this.make} : this is an inheritance example`

  }
}
let myCar =new Car("toyoto","corolla")

console.log(myCar.start());
console.log(myCar.drive()); 