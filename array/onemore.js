//reverse an array
let Number =[1,2,3,4,5] 
 Number.reverse()
 console.log(Number);
 
//max and min number
let AllNumber=[10,30,40,90,70,80]
  AllNumber = Math.max(...AllNumber)
  console.log(AllNumber);

  let MINAllNumber=[10,30,40,90,70,80]
  MINAllNumber=Math.min(...MINAllNumber)
  console.log(MINAllNumber);
  
// check if element exist in array

let element = [1,2,3,4,6,7]
let checkElement = 7;
let iselementexist = element.includes(checkElement)
console.log(iselementexist);

// sum of array element

let number=[1,3,4,5]
let addition = 0
for (let i = 0; i < number.length; i++) {
  addition  += number[i];
  
}

console.log(addition);

// remove duplicates
let DUplicates =[1,23,4,5,6,5,5,8]
let RemoveDuplicates = [...new Set(DUplicates)]

console.log(RemoveDuplicates);

//practice apna clg

let heroes = ["Zeus","Ironman","Superman","hulk","thor","agent"]

for(let idx=0; idx < heroes.length; idx++){
  console.log(heroes[idx]);
  
  
}

let cricketer = ["Rohit","Virat","Surya","KL"]
for (let player of cricketer) {
  console.log(player.toUpperCase());
}

let marks =[85,97,44,37,76,60]
let total=0
for (let mark of marks) {
  total += mark;
}let average = total/marks.length;
console.log(`Total Marks of class is ${total} and average is ${average}`);

let items=[250,645,300,900,50]

for (let i = 0; i < items.length; i++) {
  let offer = items[i]/10;
  items [i]-= offer;
}
console.log(items); 
  

