const user ={
  username:"ganga",
  price : 4500,

  welcomemessge: function () {
    // console.log(`${this.username}, welcome to webasite`);
    // console.log(this);
    
  }
}
// user.welcomemessge()
// user.username ="hitiesh"

// user.welcomemessge()
//console.log(this);


// function chai() {
//   let username="piyuesh"
//   console.log(this.username);
  
// }
// chai()

// const chai =function() {
//   let username = "jayesh"
//   console.log(this.username);
  
// }

// const chai =() => {
//    let username = "jayesh"
//   console.log(this);
    
//  }


// chai()

// const addtwo =(num1,num2) => {
//   return num1 + num2
// }


//const addtwo =(num1,num2) =>  (num1 + num2)
//const addtwo =(num1,num2) =>  num1 + num2
const addtwo =(num1,num2) => ({ username : "jayesh"})


console.log(addtwo(2,3));


const printhello = () => 
{
  console.log("Hello");
}
printhello()

let arrowmul=(a,b) =>{
  console.log("Multiplication");
  return a*b

}
arrowmul(2,3)
// console.log(arrowmul(2,3));


//practice

function countVowels(str){
  for(const char of str){
    if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
       char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
      console.log(`${char} is a vowel`);
    } 
  }
}


countVowels("hello world");


let arr  = [1,3,4,5,6,7,8,99]

arr.forEach((val,idx,arr) => {
  console.log(val,idx,arr);
  
})

//methods

//10 map
let number = [23,45,66,78]

let newarr = number.map((val)=>
  {
    return val * val;
  })

  console.log(newarr);

let calsqure=(number)=> {
  console.log(number * number);
  
}

//filter

let arrnum = [1,23,4,5,6,7,8,22]

let evenarr = arr.filter((val)=> {
  return val%2===0
})

console.log(evenarr);

//reduce

let arr1 = [1,23,4,5,6]

// const output = arr1.reduce((res , curr) =>{
//   return res + curr;
// })
const output = arr1.reduce((prev,curr)=>{
  return prev> curr ? prev : curr;
})
console.log(output);

// givn students marks. filter out the marks that scored above 90and 90

let studentsmarks = [45,24,90,97,56,94,91]

let above90 = studentsmarks.filter((marks) => {
  return marks > 90;
})
console.log(above90);
