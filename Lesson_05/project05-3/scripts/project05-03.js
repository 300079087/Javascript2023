"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-03

      Project to create a table of headings from an article
      Author: austin stef
      Date:   2/15/23

      Filename: project05-03.js
*/

//Creating initial variables here.
let sourceDoc = document.getElementById("source_doc");
let tOc = document.getElementById("toc");
let headingCount = 1;
const HEADING = "H2";

//The for loop here going from first child element, through last child then finally to null.
for (let childNode = sourceDoc.firstElementChild; childNode !== null; childNode = childNode.nextElementSibling)
{
      //Figuring out if the childNode is equal to the value of the heading constant.
      if(childNode.nodeName === HEADING)
      {
            //More variables, and using the childNode and inserting.
            let anchor = document.createElement("a");
            anchor.name = "doclink" + headingCount;
            childNode.insertBefore(anchor, childNode.firstElementChild);

            let listItem = document.createElement("li");
            let link = document.createElement("a");

            listItem.appendChild(link);
            link.textContent = childNode.textContent;

            link.href = "#doclink" + headingCount;
            tOc.appendChild(listItem);
            headingCount++;
      }
}