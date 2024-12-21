// arrays 

const myarr = [1,2,3,4,5,6,7,8]
const myFav = [ "rohit","virat" ,"abd" , "surya" , "kl" ]

const myarr2 = new Array(1,2,2,3,4,5,6)

//console.log(myarr[1]);

// array Method

//myarr.push(9)
//myarr.pop(4)
//myarr.unshift(4)
//myarr.shift()

//console.log(myarr.includes(10));
//console.log(myarr.indexOf(10));

const newarray  = myarr.join()
//console.log(newarray);

console.log(myarr);


//slice splice

console.log("A" , myarr);

const myn1 = myarr.slice(1,3)

console.log(myn1);
console.log("B" , myarr);

const myn2 = myarr.splice(1,3)
console.log("C" , myarr);

console.log(myn2);

 



