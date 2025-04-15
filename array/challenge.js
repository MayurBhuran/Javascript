// create a arrya of cities having names"tokiyo,paris, london ,usa,shikago" acess the 3 city an store as third city

let Cities = ["tokiyo","paris", "london" ,"usa","shikago"]

const ThirdCity = Cities[3] ;

console.log(ThirdCity);

/* declre an array named as teaflavourd that contains the 
the strings grren tea ,black tea,oolang tea
access the first element of the arrray and store it in a variable named first tea*/

let teaflavourss =["greentea","blacktea","oolongtea"]
const firsttea= teaflavourss[2]
console.log(firsttea);

/* 3) you have an array named teatypes containing
herabltea,whitetea,masala chai,chamge the second element array
to jasmine tea*/

let teatypes=["herbaltea","whitetea","masala tea"]
teatypes[2]="jasmine tea"
console.log(teatypes);

/* city visited conatinning the mumbai kolkata up\
add delhi city using push*/

// const Cityvisited =["mumbai","kolkatta","up"]
// Cityvisited.push("delhi")
// console.log(Cityvisited);

/* pop lst element */

// let Cityvisited =["mumbai","kolkatta","up"]
// let Softcopies = Cityvisited;
// console.log(Softcopies);
// Cityvisited.pop(1)

// console.log(Cityvisited);

//chalnege 7

let Cityvisited =["mumbai","kolkatta","up"]
let Hardcopies=Cityvisited.slice();
// let Hardcopies = [Cityvisited]
console.log(Hardcopies);

//merging two array

let IplTeams = ["Mumbai","chennai","Kokatta","Punjab"]
let IPLWinners=["Mumbai","chennai","kolkatta","rajstan"]
let alliplteams= IplTeams.concat(IPLWinners)
console.log(alliplteams);

//length of Array

let States =['maharatsra','delhi','punjab','hydrabad']
let Arraylength = States.length
console.log(Arraylength);

