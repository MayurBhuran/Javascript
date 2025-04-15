const myobject = {
  js:'javascript',
  cpp:'c++',
  rb:'ruby'
}
for (const key in myobject) {
  console.log(`${key} shortcut is for ${myobject[key]}`);
  
}

const programming =["js","rb",'py','cpp']

for (const key in programming){
  console.log(programming[key]);
  
}