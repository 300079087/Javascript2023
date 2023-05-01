"use strict";
/*
   JavaScript 7th Edition
   Chapter 11
   Chapter Case

   Author:   
   Date:     

   Filename: js11.js


*/

window.addEventListener("load", init);

function init() {
   // Page Objects
   let stories = document.getElementById("stories");
   let news = document.getElementById("news");
   let sInput = document.getElementById("sInput");
   let sButton = document.getElementById("sButton"); 
   let suggestBox = document.getElementById("suggestBox");    
 
   //Create a request object
   const xhr = new XMLHttpRequest();

   //Open the request and send it
   xhr.open("get", "commentary.html");
   xhr.send(null);

   //Retrieve archived articles from web server
   sButton.onclick = () => 
   {
      fetch("archives.pl?skey=" + encodeURIComponent(sInput.value))
      .then (response => {
         if(response.ok){
            return response.text();
         } else{
            return "Unable to retrieve commentary";
         }
      })
      .then ( comtext => stories.innerHTML = comtext)
      .catch (stories.innerHTML = "Network Failure");
   }
   
   //Handle changing request state
   xhr.onreadystatechange = function()
   {
      if (xhr.readyState === 4)
      {
         if (xhr.status >= 200 && xhr.status < 300)
         {
            //Manage response
            stories.innerHTML = xhr.responseText;
         }
         else
         {
            //Failed
            console.log("Request failed: " + xhr.statusText);
         }
      }
   }


 
}