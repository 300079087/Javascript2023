"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-04

      Project to store high scores from a game in a cookie
      Author: 
      Date:   

      Filename: project09-04.js
*/

/* Page Objects */
let bestText = document.getElementById("best");
let clockTimer = document.getElementById("timer");

// Custom event that runs when the puzzle is solved
window.addEventListener("puzzleSolved", updateRecord);

// Event listener that is run when the page loads
window.addEventListener("load", function() {

      if (document.cookie)
      {
            bestText.textContent = getBestTime() + ' seconds';
      }
});

//getBestTime() function

function getBestTime()
{
      if (document.cookie)
      {
            let cookieArray = document.cookie.split('=');
            return parseInt(cookieArray[1]);
      }
      else
      {
            return 9999;
      }
}

//updateRecord() function

function updateRecord()
{
      let solutionTime = parseInt(clockTimer.value);
      let bestTime = getBestTime();

      if (solutionTime < bestTime)
      {
            bestTime = solutionTime;
            bestText.textContent = `${bestTime} seconds`;

            storeBestTimeCookie(bestTime);

      }
}

function storeBestTimeCookie(bestTime) {
      
      writeCookie("besttime", bestTime, 90*24*60*60);
  }
  


//copy functions from chapter program
function writeCookie(name,value,age,expDate,path,domain,secure)
{
      if (name && value)
      {
            let cStr = name + "=" + encodeURIComponent(value);
            if (age) cStr += ";max-age=" + age;
            if (expDate) cStr += ";expires=" + expDate.toUTCString();
            if (path) cStr += ";path=" + path;
            if (domain) cStr += ";domain=" + domain;
            if (secure) cStr += ";secure";
            document.cookie = cStr;
      }
}

function readCookie()
{
      let fields = {};

      if (document.cookie)
      {
            let cookieList = document.cookie.split("; ");

            for (items of cookieList)
            {
                  let cookie = items.split("=");
                  let name = cookie[0];
                  let value = decodeURIComponent(cookie[1]);
                  fields[name] = value;
            }

            return fields;
      }
}