var c = 300
let a=3000
if (true){
  let a=10
  const b = 243
  var c = 390 

  //console.log("Inner: ",a);
  
}

//console.log(c);
//console.log(a);
//console.log(b);

function one (){
  const username = "Dinesh"

  function two (){
    const website = "youtube"
    console.log(username);
    
  }
   // console.log(website);
  
     two()

}

one()

if(true) {
  const username="jayesh"
  if(username=== "jayesh"){
    const website = "Instagram"
    console.log(username+website);
    
  }
  //console.log(website);
  
}
//console.log(username);


//****************intresting*********** *//

console.log(addone(3))
function addone(num){
  return num +1
}
const addtwo = function(num){
  return num+2
}
console.log(addtwo(5))