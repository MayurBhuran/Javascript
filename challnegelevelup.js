/* 1.using the for loop make an array of black tea , soft tea,
chai,oolong tea. now the brak the arraya when the chia is hit and tsore
it in  selecyed teas
 */

// let teas =  ["black tea","soft tea","chai","oolong tea"]
// let selectedtea=[];

// for (let i = 0; i < teas.length; i++) {
//   if (teas[i]==="chai") {
//     break;
    
//     selectedtea.push(teas[i])
//   }
// }
// console.log(selectedtea);

/*make a array of cities using for loop and ramove the pa
ris and store all remaning in the anew arrayvisistedcities*/

let cities=['london','hongkong','gaaba','paris','berlin']
let visitedcities = []

for (let x = 0; x < cities.length; x++) {
  if (cities[x]==="paris") {
    continue;
    
  }
  visitedcities.push(cities[x])
}
// console.log(visitedcities);

/*use the for of loop to iterate 1 2 3 4 5 6
and stop at 4 is found store the number in smallnumber
*/

let numbers = [ 1,2,3,4,5,6]
let smallnumber=[]
for (const num of numbers) {
  if (num=== 4) {
    break
    
  }
  smallnumber.push(num)
}
// console.log(smallnumber);
/* use the forof loop to itretev array ["chai","green tea","hearbal tea","black tea"]
and skip the her bal tea store the other teas in prefrredtea*/ 


let teatypes=["chai","green tea","hearbal tea","black tea"]
let prefrredtea=[]

for (const tea of teatypes ) {
  if (tea === "herbal tea") {
    continue;
  }
  prefrredtea.push(tea)
}
// console.log(prefrredtea);


/* use for in loop to through an object contaning thr poputaions
stop thr loop when berlin is found store all in the citypopulations
*/

let citiespopulation={
  "london":890000,
  "newyork":900000,
  "tokoyo":10000,
  "berlin":239000,
  "korea":239999
};

let citynewpopulation={}   
// console.log(Object.values(citiespopulation));

for (const city in citiespopulation) {
  // console.log(citiespopulation[city]);
  // key =value
  if (city ==="berlin") {
    break;
  }
        citynewpopulation[city]=citiespopulation[city];

  }
  // console.log(citynewpopulation);
  
  // cities population below the 300000

let worldspopulation={
    "london":890000,
    "newyork":9000,
    "tokoyo":10000,
    "berlin":239000,
    "korea":239999
  };
let largepopulation ={}
for (const city in worldspopulation) {
  if (worldspopulation[city]>300000) {
    continue;
  }
  largepopulation[city]=worldspopulation[city]
  }
  // console.log(largepopulation);
  
// using foreach loop 

let teacollection=["green tea","hearbal tea","chai","black tea"]
let availableteas = []

teacollection.forEach(function(tea)  {
  
  if (tea=== "chai") {
  return;
    
  }
  availableteas.push(tea)
});
// console.log(availableteas);

// using foreach remove the gabba and store all in the travelcities

let worldcities=['london','hongkong','gaaba','paris','berlin']
let  travelcities = []

worldcities.forEach(city => {
  if (city=== 'gaaba') {
    return;
    
  }
  travelcities.push(city)
});
// console.log(travelcities);


// using for loop skip the 7 and duoble the all numbers reamins itb and store it in doublenumbers

let Newnumbers = [1,2,3,4,5,6,7,8,9,10]
let doublenumbers=[]

for (let l = 0; l < Newnumbers.length; l++) {
    if (numbers[l]=== 7) {
    return
 }
 doublenumbers.push(numbers[l] * 2)
}
 console.log(doublenumbers);
 