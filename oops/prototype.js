let computer = {cpu:23}
let lenovo ={scrren:"4k",
   __proto__: computer,
}
let Tomhardware={}

 console.log(`lenovo`,lenovo.__proto__);

let genariccar = {tyres:4}

let tesla = {driver:"AI"}

Object.setPrototypeOf(tesla,genariccar)

console.log(`tesla`,Object.getPrototypeOf(tesla));






