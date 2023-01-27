/*    JavaScript 7th Edition
      Chapter 2
      Chapter case

      Fan Trick Fine Art Photography
      Variables and functions
      Author:  Austin Steffes
      Date:   1/24

      Filename: js02.js
 */

      //Testing to see if the js is connected.
      console.log('Works');

      //Constants variables.
      const EMP_COST = 100;
      const BOOK_COST = 350;
      const REPRO_COST = 1250;
      const TRAVEL_COST = 2;

      //When the window loads it wiil use the setupForm function.
      window.addEventListener('load', setupForm);

      //Creating a function that sets pre set values into the form.
      function setupForm() {

            document.getElementById("photoNum").value = 1;
            document.getElementById("photoHrs").value = 2;
            document.getElementById("makeBook").checked = false;
            document.getElementById("photoRights").checked = false;
            document.getElementById("photoDist").value = 0;

            getEstimate();

            document.getElementById("photoNum").onchange = getEstimate;
            document.getElementById("photoHrs").onchange = getEstimate;
            document.getElementById("photoDist").onchange = getEstimate;
            document.getElementById("makeBook").onchange = getEstimate;
            document.getElementById("photoRights").onchange = getEstimate;
      }

      //This function is going to get the estimated total amount that the said person owes.
      function getEstimate() {
            let totalCost = 0;
            let photographers = document.getElementById("photoNum").value;
            let hours = document.getElementById("photoHrs").value;
            let distance = document.getElementById("photoDist").value;
            let buyBook = document.getElementById("makeBook").checked;
            let buyRights = document.getElementById("photoRights").checked;

      //Add the cost of photographers for the hours covered.
      totalCost += photographers * hours * EMP_COST;

      //Add the cost of distance per photographer per mile.
      totalCost += photographers * distance * TRAVEL_COST;

      //Adding the cost of the book if purchased.
      totalCost += buyBook ? BOOK_COST : 0;

      //Add the cost of photo rights if purchased.
      totalCost += buyRights ? REPRO_COST : 0;

      document.getElementById("estimate").innerHTML = "$" + totalCost;
      }
