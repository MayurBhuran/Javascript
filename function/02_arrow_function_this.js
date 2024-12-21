const user ={
  username:"ganga",
  price : 4500,

  welcomemessge: function () {
    // console.log(`${this.username}, welcome to webasite`);
    // console.log(this);
    
  }
}
// user.welcomemessge()
// user.username ="hitiesh"

// user.welcomemessge()
//console.log(this);


// function chai() {
//   let username="piyuesh"
//   console.log(this.username);
  
// }
// chai()

// const chai =function() {
//   let username = "jayesh"
//   console.log(this.username);
  
// }

// const chai =() => {
//    let username = "jayesh"
//   console.log(this);
    
//  }


// chai()

// const addtwo =(num1,num2) => {
//   return num1 + num2
// }


//const addtwo =(num1,num2) =>  (num1 + num2)
//const addtwo =(num1,num2) =>  num1 + num2
const addtwo =(num1,num2) => ({ username : "jayesh"})


console.log(addtwo(2,3));
