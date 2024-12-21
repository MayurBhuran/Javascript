
function saymyname () {
    // console.log("S");
    // console.log("U");
    // console.log("M");
    // console.log("i");
    // console.log("T");
      
}

//sayname reference
saymyname() //execution

function addTwonumber(number1,number2){
  console.log(number1 +number2); 
  
}
function addTwonumber(number1,number2){
  // let result = number1 + number2
  // return result 
  
  return number1+ number2
}
const result = addTwonumber(33,"45")

//console.log("result: ",result);

function loginuserMessage(username = "sam"){
  if(username ===undefined){
    console.log("please enter the username");
    return
  }
  return `${username} just log in `
}

//clogonsole.log(loginuserMessage("Samir"));
 
//console.log(loginuserMessage("nick"));



function CalclulateCartPrice(val1,val2,...num1) {
  return num1
}
 
console.log(CalclulateCartPrice(200,300,45000,2310));

const user = {
  username : "kiran",
  price : 4500
}

function handleobjet(anyobject) {
  console.log(`username is ${anyobject.username} and the price is ${anyobject.price}`);
  
}

//handleobjet(user)

handleobjet({
  username:"ravi",
  price : 5000
})


const myNewarray = [220,450,5,560,3320]

function returnSecondvalue(getarray){
  return getarray[2]
}

console.log(returnSecondvalue(myNewarray));
