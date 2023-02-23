"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: austin steffes 
      Date:   2/22/23

      Filename: project06-03.js
*/

let useShip = document.getElementById("useShip");

useShip.addEventListener("click", copyShippingToBilling)

function copyShippingToBilling()
{
      if(useShip.checked)
      {
            let firstnameShip = document.getElementById("firstnameShip");
            let firstnameBill = document.getElementById("firstnameBill");
            firstnameBill.value = firstnameShip.value;
            
            // copy last name
            let lastnameShip = document.getElementById("lastnameShip");
            let lastnameBill = document.getElementById("lastnameBill");
            lastnameBill.value = lastnameShip.value;
            
            // copy address line 1
            let address1Ship = document.getElementById("address1Ship");
            let address1Bill = document.getElementById("address1Bill");
            address1Bill.value = address1Ship.value;
            
            // copy address line 2
            let address2Ship = document.getElementById("address2Ship");
            let address2Bill = document.getElementById("address2Bill");
            address2Bill.value = address2Ship.value;
            
            // copy city
            let cityShip = document.getElementById("cityShip");
            let cityBill = document.getElementById("cityBill");
            cityBill.value = cityShip.value;
            
            // copy state
            let stateShip = document.getElementById("stateShip");
            let stateBill = document.getElementById("stateBill");
            stateBill.selectedIndex = stateShip.selectedIndex;
            
            // copy country
            let countryShip = document.getElementById("countryShip");
            let countryBill = document.getElementById("countryBill");
            countryBill.value = countryShip.value;
            
            // copy zip code
            let codeShip = document.getElementById("codeShip");
            let codeBill = document.getElementById("codeBill");
            codeBill.value = codeShip.value;
      }
}

let formElements = document.querySelectorAll("input[type='text']");
let fieldCount = formElements.length;
let errorBox = document.getElementById("errorBox");

for (let i = 0; i < fieldCount; i++) {
      formElements[i].addEventListener('invalid', showValidationError);
    }
    
    // declare the showValidationError function
    function showValidationError(evt) {
      // prevent the browser from applying the native browser tools to respond to invalid data
      evt.preventDefault();
      // set the textContent property of errorBox to the text string "Complete all highlighted fields"
      errorBox.textContent = 'Complete all highlighted fields';
    }