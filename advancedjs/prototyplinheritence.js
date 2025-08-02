// function Person(name) {
//   this.name = name;
// } 
// Person.prototype.greet = function() {
//   console.log(`Hello, my name is ${this.name}`);
// }
// let hitesh = new Person("Hitesh");
// hitesh.greet(); 


function Marval(newhero){
  this.newhero = newhero;
}

Marval.prototype.shotname=function(){
  console.log(`Hey ,those have ${this.newhero} shotname`);  
}
 let Ironman = new Marval("ironman")
 Ironman.shotname()
