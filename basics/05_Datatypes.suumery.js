//   Primitive 

//  7 Types : string number boolean null undefined symbol bgitint

// Reference (Non primitive)

//array objects function

// stack ( primitive)  ,Heap (Non Primitive )

let myYoutubeName = "battlegroundmobileindia"
anothername = "esoprts india"

console.log(myYoutubeName);
console.log(anothername);

let user1 = {
    email: "user@google.com",
    upi  : "user@abc"
}

let user2 = user1

user2.email = "rohit@google.com"

console.log(user1.email);
console.log(user2.email);