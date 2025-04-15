const useremail = []

if (useremail) {
  console.log("Got the user email");
  
}else {
  console.log("don't have user email");
  
}

//falsy value 

// false , 0,-0, bigInt On ,"", null,undefined,NaN  

//truty value

//"0", "false", " ", [ ], {},function(){ }

// if(useremail.length===0){
//   console.log("array is empty");
  
// }

const emptyobj = {}

if (Object.keys(emptyobj).length===0){
  console.log("oject is empty");
  
}

// nullish coalescing operator (??): null defined

let val1;
val1 =5 ?? 23
val1 =null ?? 23
val1 =undefined ?? 23

console.log(val1);

//terniary opeartor 

// condition ? true : false

const iceteaprice = 100
iceteaprice<= 90 ? console.log("less than 90") : console.log("more than 90");

