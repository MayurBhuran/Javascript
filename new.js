// const a = 18;
// const b = 24;

// // Addition of two values
// function add(a,b) {
//     return  a + b;
// }
// const result = add(18,24)
// console.log(result);

// function divide(b,a) {
//   return b/a;
// }
// const divresult = (24,18)
// console.log(divresult)

// function increment(a,b) {
  
//   return [a+1,b+1];
// }
// let [num1,num2]=increment(18,24)

// // console.log(num1)
// // console.log(num2)


// function filterNumbers(arr) {
//   const myarray =["ram","sham",1,2,3,4,5,6]
//    return arr.filter(item => typeof item === 'number');;
//  }
// console.log(filterNumbers);

// function removeDuplicates(arr) {
//   const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
//   const uniqueArray = removeDuplicates(arrayWithDuplicates);
//   return(uniqueArray);
// }
// console.log(removeDuplicates);

function sumofn(n){
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
// console.log(sumofn(10));

function printmulticationtable(n){
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
  }
  return n;

}
let n = 5;
//  printmulticationtable(n);

function countvowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}
let str = "hello world";
//  console.log(countvowels(str));

const squareNumbers = (arr) => (
  arr.map(num => num * num)
);
//  console.log(squareNumbers([1, 2, 3, 4, 5]));

const filterEvenNumbers = (arr) => 
(
  arr.filter(num => num % 2 === 0)
);
  // console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

  const sumPositiveNumbers = (arr) => (
  arr.reduce((acc, num) => (num > 0 ? acc + num : acc), 0)
  );
  // console.log(sumPositiveNumbers([-1, 2, -3, 4,8, -5]));

  const getNames = (arr) => (
  arr.map(obj => obj.name)
  );
  const people = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Bob', age: 35 }
  ];
// console.log(getNames(people));

const findLongestWord = (arr) => (
  arr.reduce((longest, word) => (word.length > longest.length ? word : longest), '')
);
//  console.log(findLongestWord(['apple', 'banana', 'cherry', 'date']));


// const person = {
//   name: "Hitesh",
//   age: 19.5,
//   introduce() {
//   //   console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
//   // }
// };

// person.introduce(); // Output: Hi, my name is Hitesh and I am 19.5 years old.

// function outer() {
  
// }

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  getDetails(){
      return `Make: ${this.make},Model ${this.model}`;
  }
}

class Car {}
class car extends Vehicle {
  startEngine(){
    return`Engine Started`
  }
}

const myCar = new Car('Toyota', 'Corolla');
console.log(myCar.getDetails());   
console.log(myCar.startEngine());