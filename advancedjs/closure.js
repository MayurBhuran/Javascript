function outer() {
  let counter = 4;
  return function () {
    counter++;
    return counter;
  };
}

let increment = outer();
console.log(increment());

function createCounter() {
    let count = 0;
    
    return function(){
        count++;
        console.log(count)
    }
}
const counter = createCounter();
counter()

