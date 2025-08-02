const person = {
  name: 'john',
  greet(){
    console.log(`Hello, my name is ${this.name}`);
  }
}
person.greet(); // 

const greetfunction = person.greet;
greetfunction(); 

const boundgreet = person.greet.bind({name: 'Hitesh'})
boundgreet(); 

//call

const userdetail ={
  name :  'rajesh',
  age: 40,
  work:"driver",
  gatherdeatils:function(){
    console.log(this);  
  }
}
userdetail.gatherdeatils()

const userdetail2 ={
  name :  'rajesh',
  age: 48,
  work:"driver",
  // gatherdeatils:function(){
  //   console.log(this.age);  
  // }
}
userdetail.gatherdeatils.call(userdetail2)