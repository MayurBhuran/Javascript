
//example 1
document.getElementById("changeTextButton").
addEventListener("click",function () {
  let paragraph = document.getElementById("myParagraph")
paragraph.textContent = "the paragraph is change";
  
})

//example 2

document
.getElementById("highLightFirstCity")
.addEventListener("click",function(){
  let citieslist = document.getElementById("citieslist");
citieslist.firstElementChild.classList.add("highlight");
})

// example 3

 document.getElementById("changeOrder").addEventListener
 ("click", function() {
   let coffeeType= document.getElementById("coffeeType");
   coffeeType.textContent = "Espresso";
   coffeeType.style.backgroundColor = "brown";
   coffeeType.style.padding = "10px"; }); 
 // example 4
 document.getElementById("addNewItem").addEventListener
 ('click',function(){
  let newItem  = document.createElement("li")  
  newItem.textContent="eggs"
    document.getElementById("shoppingList").appendChild(newItem)  
 });
 //exapmle 6
 document
 .getElementById("clickMeButton")
 .addEventListener("dblclick",function(){
  alert("chaicode")
 })
 //exmaple 7

document
.getElementById("tealist").addEventListener
('click', function(event){
 if (event.target && event.target.matches(".teaitem")) {
   alert("You Selected:" +event.target.textContent)
 }
  
})
