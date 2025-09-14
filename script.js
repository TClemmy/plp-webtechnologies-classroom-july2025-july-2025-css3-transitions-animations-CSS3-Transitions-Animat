// For the heart beat
const theHeart = document.querySelector('.heart');
theHeart.addEventListener('click', () =>{
   theHeart.classList.toggle('beating'); 
});
// For the flip card
const card = document.querySelector('.card');
card.addEventListener('click', () =>{
   card.classList.toggle('flipped');
});
// ***** The calculator *****
//Global variables
let inputbox = document.getElementById("inputBox");
let newLine = true;
let value1;
let currentOperator;
//digits function
function digitBtn(button)
{
   if(newLine)
      {
         inputbox.value = button;
         newLine = false;
      }
   else
      {
         let currentValue = inputbox.value;
         inputbox.value = currentValue + button;
      }
}
//AC function
function btnAC()
{
   inputbox.value = 0;
   newLine = true;
}
//Operator function
function operatorBtn(operator)
{
   currentOperator = operator;
   value1 = parseInt(inputbox.value);
   newLine = true;
}
//equals function
function equalsBtn()
{
   let value2 = parseInt(inputbox.value);
   let results;
   switch(currentOperator)
      {
         case "+":
            results = value1 + value2;
            break;
         case "-":
            results = value1 - value2;
            break;
         case "X":
            results = value1 * value2;
            break;
         case "/":
            results = value1 / value2;
            break;
      }
   inputbox.value = results;
   value1 = 0;
   newLine = true;
}


function displayInfo()
{
   const display = document.getElementById("display");
   const username = document.getElementById("username").value;
   const colour = document.getElementById("colour").value;
   const favoutiteNo = document.getElementById("fnumber").value;
   
   let info = display.innerHTML = 'My name is ${username}.textContent, my favourite color and number is ${colour.textContent}, and ${fnumber.textContent}';
   return info;
}





