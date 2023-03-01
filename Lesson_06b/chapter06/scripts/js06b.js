"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Chapter case

      Order Form Code
      Author: austin steffes
      Date:   2/28/23

      Filename: js06b.js
 */
let subButton = document.getElementById("subButton");

subButton.addEventListener("click", validateName);


function validateName()
{
   let cardName = document.getElementById("cardName");
   if (cardName.validity.valueMissing)
   {
      cardName.setCustomValidity("Enter your name as it appears on the card");
   }
   else
   {
      cardName.setCustomValidity("");  
   }
}

function validateCard()
{
   let card = document.forms.payment.elements.credit[0];
   if (card.validity.valueMissing)
   {
      card.setCustomValidity("Select your credit card");
   }
   else
   {
      card.setCustomValidity("");
   }
}

















/* ------- Luhn Algorithm used for Validating Credit Card Numbers   ----- */

function luhn(idNum) {
   let string1 = "";
   let string2 = "";
   
   // Retrieve the odd-numbered digits starting from the back
   for (let i = idNum.length - 1; i >= 0; i-= 2) {
      string1 += idNum.charAt(i);
   }
   // Retrieve the even-numbered digits starting from the back and double them
   for (let i = idNum.length - 2; i >= 0; i-= 2) {
      string2 += 2*idNum.charAt(i);
   }
   
   // Return whether the sum of the digits is divisible by 10
   return sumDigits(string1 + string2) % 10 === 0;
   
   function sumDigits(numStr) {
      let digitTotal = 0;
      for (let i = 0; i < numStr.length; i++) {
         digitTotal += parseInt(numStr.charAt(i));
      }
      return digitTotal;
   }
}
   

