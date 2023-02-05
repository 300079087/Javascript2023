/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Austin Steffes
      Date:   1/26

      Filename: project02-02.js
 */
 
//Creating function verifyForm.
function verifyForm() {
      let name = document.getElementById("name").value;
      let phone = document.getElementById("phone").value;
      let email = document.getElementById("email").value;

      if (name && phone && email)
      {
            window.alert("Thank you!");
      }
      else
      {
            window.alert("Please fill in all fields.");
      }

}

document.getElementById("submit").addEventListener("click", verifyForm);
