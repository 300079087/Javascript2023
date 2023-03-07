"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-03

      Project to create a New Year's Eve countdown clock
      Author: austin steffes
      Date:   3/6

      Filename: project07-03.js
*/

let currentTime = document.getElementById("currentTime");
let daysLeftBox = document.getElementById("days");
let hrsLeftBox = document.getElementById("hours");
let minsLeftBox = document.getElementById("minutes");
let secsLeftBox = document.getElementById("seconds");

setInterval(countDown, 1000);

function countDown()
{
      let now = new Date()
      currentTime.textContent = now.toLocaleString();

      let newYear = new Date(1/1/24);
      let nextYear = now.getFullYear(); + 1

      newYear.setFullYear(nextYear);

      let timeLeft = newYear.getTime() - now.getTime();
      let daysLeft = timeLeft / (1000 * 60 * 60 * 24);
      let hrsLeft = (daysLeft % 1) * 24;
      let minsLeft = (hrsLeft % 1) * 60;
      let secsLeft = (minsLeft % 1) * 60;

      daysLeftBox.textContent = Math.floor(daysLeft);
      hrsLeftBox.textContent = Math.floor(hrsLeft);
      minsLeftBox.textContent = Math.floor(minsLeft);
      secsLeftBox.textContent = Math.floor(secsLeft);
    
}     