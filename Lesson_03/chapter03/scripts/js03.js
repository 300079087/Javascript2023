/*   JavaScript 7th Edition
     Chapter 3
     Chapter case

     Tipton Turbines
     Program to display games results in a web table
     Author: Austin Steffes
     Date:   2/1

     Filename: js03.js
 */
    
    //Creating a array with the days of the week. 
     let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

     //Watching for when the window loads.
     window.addEventListener("load", addWeekDays);
     

     //Creating a function and while loop in order to add the array data into the days of the week on the screen.
     function addWeekDays()
     {
        let i = 0; //initial value of variable

        let headingCells = document.getElementsByTagName("th");

        while (i < 7)
        {
            headingCells[i].innerHTML = weekDays[i];
            i++;
        }
     }

     //Watching for when the window loads.
     window.addEventListener("load", showGames);

     //Creating the function and loop for the games.
     function showGames()
     {
        for (let i = 0; i < gameDates.length; i++)
        {
            let gameInfo = "";

            switch(gameResults[i])
            {
                case "W":
                    gameInfo += "<p class ='win'>";
                    break;
                case "L":
                    gameInfo += "<p class='lose'>";    
                    break;
                case "S":
                    gameInfo += "<p class= 'suspended'>";
                    break;
                case "P":
                    gameInfo += "<p class='postponed'>";
                    break;
            }

            if (gameLocations[i] === "h")
            {
                gameInfo += "vs. ";
            }
            else if (gameLocations[i] === "a")
            {
                gameInfo += "@ ";
            }

            //includes the opponents
            gameInfo += gameOpponents[i] + "<br>";

            gameInfo += gameResults[i] + ": (" + runsScored[i] + " - " + runsAllowed[i] + ")";

            if (gameInnings[i] < 5)
            {
                gameInfo += " [" + gameInnings[i] + "]***";
            }
            else if (gameInnings[i] < 9)
            {
                gameInfo += " [" + gameInnings[i] + "]*";
            }
            else if (gameInnings[i] > 9)
            {
                gameInfo += " [" + gameInnings[i] + "]";
            }
            
            let tableCell = document.getElementById(gameDates[i]);
            tableCell.insertAdjacentHTML("beforeEnd", gameInfo);
        }
     }