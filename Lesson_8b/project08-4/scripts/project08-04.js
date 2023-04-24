"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-04

      Retrieve Staff Data from a JSON File
      Author: Austin Steffes
      Date:   4/6/23

      Filename: project08-04.js
*/


let getFileButton = document.getElementById("getFile");
let containerBox = document.getElementById("container");

getFileButton.onchange = function() {
   // Retrieve information about the selected file
   let JSONfile = this.files[0];
   
   // Read the contents of the selected file
   let fr = new FileReader();
   fr.readAsText(JSONfile); 

   // Once the file has finished loading, parse the JSON file
   fr.onload=function()
   { 
      let staff = JSON.parse(fr.result);
      makeStaffTable(staff);
   }
   
};

function makeStaffTable(staff)
{
   let staffTable = document.createElement("table");
   let headerRow = document.createElement("tr");
   
   // Setup headers
   for (let key in staff.directory[0]) {
      let headerCell = document.createElement("th");
      headerCell.id = "headerCell";
      headerCell.textContent = key;
      headerRow.appendChild(headerCell);
   }


// Add the header row to the table
staffTable.appendChild(headerRow);

for (let i in staff.directory)
{
   let tableRow = document.createElement("tr");
   let directory = staff.directory[i];
   
   for (let j in directory)
   {
      let tableCell = document.createElement("td");
      tableCell.textContent = directory[j];
      tableRow.appendChild(tableCell);
   }
   staffTable.appendChild(tableRow);
}

// Add the table to the container
containerBox.appendChild(staffTable);
}

