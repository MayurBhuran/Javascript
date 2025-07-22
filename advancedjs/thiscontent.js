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