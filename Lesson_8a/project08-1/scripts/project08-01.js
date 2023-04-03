"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: austin steffes
      Date:   3/29/23

      Filename: project08-01.js
*/

let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");

/*--------------- Object Code --------------------*/

class Timer {
      constructor(min, sec) {
            this.minutes = min;
            this.seconds = sec;
            this.timeID = null;
        }
      runPause()
      {
            let countDown = () =>
            {
                  console.log(this.minutes);
                  console.log(this.seconds);

                  if (this.seconds > 0) {
                        this.seconds--;
                    } else if (this.minutes > 0) {
                        this.minutes--;
                        this.seconds = 59;
                    } else {
                        window.clearInterval(this.timeID);
                        this.timeID = null;
                    }


                    minBox.value = this.minutes;
                    secBox.value = this.seconds;
            };

            if (this.timeID)
            {
                  window.clearInterval(this.timeID);
                  this.timeID = null;
            }
            else 
            {
                  this.timeID = window.setInterval(countDown, 1000);
            }

      

}}


  




/*---------------Interface Code -----------------*/
/* Interface Objects */
let runPauseTimer = document.getElementById("runPauseButton");

let myTimer = new Timer(minBox.value, secBox.value);

minBox.onchange = () => { myTimer.minutes = minBox.value; }
secBox.onchange = () => { myTimer.seconds = secBox.value; }
runPauseTimer.onclick = () => { myTimer.runPause(minBox, secBox); }
