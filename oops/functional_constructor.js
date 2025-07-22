function Person (name,age){
  this.name =name
  this.age=age

}
function Car (make,model){
  this.make= make
  this.model=model
}

let mycar = new Car("BMW","Safari")
//  console.log(mycar);

let mynewcar = new Car("tata","farari")
// console.log(mynewcar);


function TEA (type){
  this.type=type
  this.describe  = function(){
    return  `this is a cup of${this.type}`
  }
}
let Lemontea = new TEA("lemon tea")

// console.log(Lemontea);

function Animal(Species){
  this.Species=Species;
}

Animal.prptptype.sound = function () {
  return `${this.Species} make a sound`;
}

let elephant = new Animal("elephant")
console.log(elephant.sound());


function Drink(name) {
  if (!new.target) {
    throw new Error("Drink must be called with new key")

     }
     this.name=name

}



