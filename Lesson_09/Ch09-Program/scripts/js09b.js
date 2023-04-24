"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Chapter case
      
      Eating Well in Season 
  Author: Austin steffes
      Date:   4/13/23
      
      Filename: js09b.js
 */

// Retrieve text
let qString = location.search.slice(1);

// Replace encoded characters
qString = qString.replace(/\+/g, " ");
qString = decodeURIComponent(qString);

let formData = qString.split(/&/g);

for (let items of formData)
{
      //Extract field names and values
      let fieldValuePair = items.split(/=/);
      let fieldName = fieldValuePair[0];
      let fieldValue = fieldValuePair[1];

      //Create label containing field name
      let fieldLabel = document.createElement("label");
      fieldLabel.textContent = fieldName;
      document.getElementById("contactInfo").appendChild(fieldLabel);

      //Create disabled input box field value
      let inputBox = document.createElement("input");
      inputBox.id = fieldName;
      inputBox.name = fieldName;
      inputBox.value = fieldValue;
      inputBox.disabled = true;
      document.getElementById("contactInfo").appendChild(inputBox);

}

//store data local storage user signs up
document.getElementById("signupBtn").onclick = function()
{
      //data fields saved local storage
      let formFields = document.querySelectorAll("#contactInfo input, input[type=radio], textarea");

      //write each field name value local storage
      for (let fields of formFields)
      {
            localStorage.setItem(fields.name, fields.value);
      }

      console.log(localStorage);
      location.href = "./js09c.html";

}
