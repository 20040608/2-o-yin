var elForm = document.querySelector(".js-form");
var elInput = document.querySelector(".js-input");
var elSpan = document.querySelector(".js-span")
var elItem1 = document.querySelector(".js-item1");
var elItem2 = document.querySelector(".js-item2")
var elItem3 = document.querySelector(".js-item3")
var elItem4 = document.querySelector(".js-item4")

elForm.addEventListener('submit', function(e){
   e.preventDefault();
   
   elItem1.textContent = item1().toFixed(2);
   elItem2.textContent = item2().toFixed(2);
   elItem3.textContent = item3().toFixed(2);
   elItem4.textContent = item4().toFixed(2);
})

function item1(a = 3.6){
   return +elInput.value / a
   
}

function item2(a = 20.1){
   return +elInput.value / a
}

function item3(a = 70){
   return +elInput.value / a
}

function item4(a = 800){
   return +elInput.value / a
}