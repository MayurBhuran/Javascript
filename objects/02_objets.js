// const tinderuser = new object () singleton

const tinderuser = {}

tinderuser.id = "123abc"
tinderuser.name = "Strom"
tinderuser.isloggedin = false
tinderuser.pno= 9309879876

//console.log(tinderuser);

const regularuser = {
  email: "sureshnkima@323gmail.com",
  fullname : {
    userfullname : {
      userfirstname : "sam",
      userlastname : "pandit"
    }
  }
}
//console.log(regularuser.fullname.userfullname);

const obj1 = {1:"d", 2:"f"}
const obj2 = {3:"t", 4: "u"}
const obj4 = {9:"o", 7: "i"}

//const obj3 = Object.assign ({} ,obj1,obj2,obj4)

const obj3 = {...obj1,...obj2,...obj4}
//console.log(obj3);

const users = [
  {
    id : 2324,
    email :"SKGUQFYE.gmail.com"
  },
  {
    id : 2324,
    email :"SKGUQFYE.gmail.com"
  },
  {
    id : 2324,
    email :"SKGUQFYE.gmail.com"
  }
  
] 
users[1].email
// console.log(tinderuser);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty('isloggedin'));



// destructring

const course = {
  coursename: "Js in hindi",
  coursefees: 1999,
  courseteacher: "vishal babar"
}

const {courseteacher:teacher} = course

console.log(teacher);

//API Struture
 
// {
//   "name": "dinesh",
//   "coursename": "htmlka badshssh"
//   "price": 6544
// }

//json format
[
  {},
  {},
  {},
]