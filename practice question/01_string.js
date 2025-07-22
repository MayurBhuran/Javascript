//Write a program to find the length of a string without using the length property.

const findLength = (str) => {
  let count = 0;
  for (let char of str) count++;
  return count;
};
console.log(findLength("hello"));

// print the even numbers from 1 to 100

for (let num = 0;  num<=100; num++ % 2) {

  if(num % 2 ===0 && num<=100){

   // console.log("num = ", num);
  }
}

//odd Numbers:
// Print all odd numbers between 1 and 20.
for (let od=1;od<=20000;od++){
 
  if(od % 2 !== 0){

   // console.log("odd= ",od);

  }

}


// Sum of Numbers:
// Calculate the sum of numbers from 1 to 100.
let sum = 0;

for (let i = 1; i <= 100; i++) {
  sum += i;
}
//console.log("Sum from 1 to 100 =", sum);

// Multiplication Table:
// Write a program that prints the multiplication table of a number (e.g., 5).

for (let num = 0; num <=10; num++) {
 
 console.log("5 *", num, "=", num * 5);
}
// Countdown:

// Print numbers from 10 to 1 using a while loop
let countdown = 100;
while (countdown >= 1) {
  setTimeout(() => {
    //
    // console.log(countdown);
  },3000 * (100 - countdown));
  countdown--;
}

//guess the number game
 let numguess = 50;
 let usernum = prompt("Guess the number : ")

 while(usernum !==numguess){
  usernum = prompt("U enterd wrong numbeer , please guess agian :")

 }
 console.log("conguraltion u guess RIght");
 