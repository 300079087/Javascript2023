/*    JavaScript 7th Edition
      Chapter 2
      Project 02-03

      Application to return the shape of a clicked object
      Author: Austin Steffes
      Date:   1/26/23

      Filename: project02-03.js
 */

      //Square
      document.getElementById("square").onmouseover = function() {
      document.getElementById("feedback").innerHTML = "You're hovering over the square";};

      document.getElementById("square").onmouseout = function() {
      document.getElementById("feedback").innerHTML = "";};
            
      //Triangle
      document.getElementById("triangle").onmouseover = function() {
      document.getElementById("feedback").innerHTML = "You're hovering over the triangle";};
      
      document.getElementById("triangle").onmouseout = function() {
      document.getElementById("feedback").innerHTML = "";};
            
      //Circle
      document.getElementById("circle").onmouseover = function() {
      document.getElementById("feedback").innerHTML = "You're hovering over the circle";};
            
      document.getElementById("circle").onmouseout = function() {
      document.getElementById("feedback").innerHTML = "";};
                        
            
            
            
            