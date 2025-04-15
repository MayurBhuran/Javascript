// adding the 1 to 5 no in while loop

let sum = 1;
let i =1

while (i<=5) {
  sum +=i
  i++;
  
}
// console.log(sum);

// 2. add the while loop that count the 5 to 1 store in countdown

let countdown=[]
let k=5;
while (k>0) {
  countdown.push(k)
  k--;
}
// console.log(countdown);

//3. create the teacollection using do while an dsire the favorite tea int it

// let teacollection = [];
// let tea;

// do {
//   tea=prompt(`Enter yiur Favorite tea(type"stop to finish)`)

//   if(tea!="stop"){
//     teacollection.push(tea)
//   }
// } while (tea!="stop");
// // console.log(teacollection);

//4 add the 1to 3 and stores inti total usng do while
let total=0
let m=1
do {
  total += m;
  m++;
} while (m<=3);
console.log(total);

//5 multipy the 2 4 6 by 2 using for

let multipledNumber =[];
let numbers =[2,4,6]

for (let l = 0; l < numbers.length; l++) {
 takenumber= numbers[l]*2;
 multipledNumber.push(takenumber)
  
}
console.log(multipledNumber);

