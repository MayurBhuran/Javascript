//for of

//[{} {} {}]

const arr = [1, 2, 3,4,5,6 ]

for (const num of arr) {
 // console.log(num);
  
}

const greetings = "hello world"

for (const grret of greetings){
 // console.log(`each char is ${grret}`);
  
}

// maps 
const map = new Map()
map.set ('In',"India")
map.set ('USA',"united states of america")

// console.log(map);

for (const [key,value] of map) {
  console.log(key,':-' ,value);
  
}

// const myobject = {
//   game1: 'NFS'
//   game2:'BGMI'
//   game3:'freefire'
// }
// for (const [key,value] of myobject) {
//   console.log(key,":",value);
  
  
// }