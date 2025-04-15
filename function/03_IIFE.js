// Immeaditiealy Woked Function Expressions

(function chai(){ //name IIFE
  console.log(`DB CONNECTED`);
})();

( function aurcode (){
  console.log(`DB CONNECTED TWO`);
} ) ();

( (name)=> {  // simple iife
  console.log(`DB CONNECTED To ${name}`);
  
}) (`hitesh`) 