"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-01

      Project to validate a form used for setting up a new account
      Author: austin steffes
      Date:   2/22/23

      Filename: project06-01.js
*/
submitButton.addEventListener("click", function()
{

//creating variables and setting them equal
let submitButton = document.getElementById("submitButton");
let pwd = document.getElementById("pwd");
let pwd2 = document.getElementById("pwd2");
let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

//creating if else structure below

//fails pattern match.
if (!pwd.value.match(regex))
{
      pwd.setCustomValidity("Your password must be at least 8 characters with at least one letter and one number.");
}
//pwd not equal to pwd2.
else if (pwd.value !== pwd2.value)
{
      pwd2.setCustomValidity("Your passwords must match");
}
else
{
      pwd.setCustomValidity("");
      pwd2.setCustomValidity("");
}

})