"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Chapter Case

      Application to generate a slide show
      Author: Austin S
      Date:   2/15/23

      Filename: js05.js
*/


/*  !IMPORTANT NOTE:
 *  Be sure to watch the first video to see code changes 
 *     you need to make in the lightbox_data.js file.  
 *     You will be shown a quick way to make those changes.
 * 
 *          OR
 * 
 *   On page 174, in your book, when told to add the code
 * 
 *           image.src = imgFiles[i];
 * 
 *      instead, type in 
 * 
 *          image.src = "images/" + imgFiles[i];
 */

//Watching and calling the function createlightbox when the window loads.
window.addEventListener("load", createlightbox);

//Creating our function and its properties.
function createlightbox()
{
      //variables
      let lightbox = document.getElementById("lightbox")

      let lbTitle = document.createElement("hi");
      let lbCounter = document.createElement("div");
      let lbPrev = document.createElement("div");
      let lbNext = document.createElement("div");
      let lbPlay = document.createElement("div");
      let lbImages = document.createElement("div");
      
      //the code below, is appending the child to the lightbox and grabbing the specific set id. 
      lightbox.appendChild(lbTitle);
      lbTitle.id = "lbTitle";
      lbTitle.textContent = lightboxTitle;

      lightbox.appendChild(lbCounter);
      lbCounter.id = "lbCounter";
      let currentImg = 1;
      lbCounter.textContent = currentImg + " / " + imgCount;

      lightbox.appendChild(lbPrev);
      lbPrev.id = "lbPrev";
      lbPrev.innerHTML = "&#9664;";
      lbPrev.onclick = showPrev;

      lightbox.appendChild(lbNext);
      lbNext.id = "lbNext";
      lbNext.innerHTML = "&#9654";
      lbNext.onclick = showNext;

      lightbox.appendChild(lbPlay);
      lbPlay.id = "lbPlay";
      lbPlay.innerHTML = "&#9199";
      let timeID;
      lbPlay.onclick = function()
      {
            if(timeID) 
            {
                  window.clearInterval(timeID);
                  timeID = undefined;
            }
            else
            {
                  showNext();
                  timeID = window.setInterval(showNext, 1500);
            }
      }

      lightbox.appendChild(lbImages);
      lbImages.id = "lbImages";

      //Add Images from imgFiles array to container.
      for (let i = 0; i < imgCount; i++)
      {
            //Creating image variable setting it to element img, setting src, and alt to the array and incrementation by 1 in the loop. Displaying 
//the images in order and their set captions. Finally, appending the child to it.
            let image = document.createElement("img");
            //putting correct file path, (images).
            image.src = imgFiles[i];
            image.alt = imgCaptions[i];
            image.onclick = createOverlay;
            lbImages.appendChild(image);
      }

      //create another fucnction to show next image.
      function showNext()
      {
            lbImages.appendChild(lbImages.firstElementChild),
            (currentImg < imgCount) ? currentImg++ : currentImg = 1;
            lbCounter.textContent = currentImg + " / " + imgCount;
      }

      //creating another function to show the prev image.
      function showPrev()
      {
            lbImages.insertBefore(lbImages.lastElementChild,
            lbImages.firstElementChild); 
            (currentImg > 1) ? currentImg-- : currentImg = imgCount;
            lbCounter.textContent = currentImg + " / " + imgCount;
      }
      
      //creating the overlay function so when they click on the image it goes to a overlay. 
      function createOverlay()
      {
            //creating overlay variable, creating it equal to a div statement, and equaling the div statement to lbOverlay. 
            let overlay = document.createElement("div");
            overlay.id = "lbOverlay";

            let figureBox = document.createElement("figure");
            overlay.appendChild(figureBox);

            //the code this specifics the object we are using.
            //getting an error on this line due to cloneNode. Where am I going wrong?
            let overlayImage = this.cloneNode("true");
            figureBox.appendChild(overlayImage);

            let overlayCaption = document.createElement("figcaption");
            overlayCaption.textContent = this.alt;
            figureBox.appendChild(overlayCaption);

            //creating the close button on the overlay. 
            let closeBox = document.createElement("div");
            closeBox.id = "lbOverlayClose";
            closeBox.innerHTML = "&times;";
            closeBox.onclick = function()
            {
                  document.body.removeChild(overlay);
            }
            overlay.appendChild(closeBox);

            document.body.appendChild(overlay);
      }

}