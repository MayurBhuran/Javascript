/* write a function named maketea that takes one 
pararmeter tyoroftea and returs a string like maiking
grren tea when it called store in it names teaorder */

function maketea(tyoroftea) {
  return `MAikng ${tyoroftea}`
   console.log(test);
}
let greet = maketea("masala tea")
console.log(greet);


// write a function in function and get oreder confirm 

function ordertea(teatypes) {
  function confirmOrder() {
    return `order is confirmed for Chai`
  }
  return confirmOrder()
}
let orderconfirmatiom = ordertea("chai")
// console.log(orderconfirmatiom);


// arrow function

// const Calclulatetotal = (price,quantity) => {
//   return price * quantity;
//   console.log(Calclulatetotal);
  
// }
// let totalcost =Calclulatetotal(499*100)
// return totalcost()


//higher order function

function createteamaker(name) {
  return function(teatype){
    return `Making ${teatype} ${name}`;
  }
}

let teamaker =createteamaker("hitesh");
let result =teamaker("green tea")
console.log(result);
