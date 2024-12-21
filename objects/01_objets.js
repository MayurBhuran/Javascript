//singalton 

//objets literals

const mysym = Symbol("key1")
const myuser = {
  Name : "Saurbh",
  [mysym]:"mykey1",
  age : 23,
  location:" ratnagiri",
  email : "raamraja@gmail.com",
  isloggedin: false,
  lastloggedindays : ["monday", "friday"]
}

// console.log(myuser.email);
// console.log(myuser["email"]);
// console.log(myuser[mysym]);

myuser.email = "ramka khajna.com"
//Object.freeze(myuser)
myuser.email = "ramkaraj aakri.com"
//console.log(myuser);

myuser.greeting = function(){
     console.log("heloo js user");
      
}
myuser.greeting2 = function(){
  console.log(`heloo js user, ${this.Name}`);
   
}

console.log(myuser.greeting());
console.log(myuser.greeting2());
