"use strict";
/*  JavaScript 7th Edition
    Chapter 10
    Project 10-04

    Chess Board Drag and Drop
    
    Author: 
    Date:   

    Filename: project10-04.js
*/


// Page Objects
let pieces = document.getElementsByTagName("span");
let boardSquares = document.querySelectorAll("table#chessboard td");
let whiteBox = document.getElementById("whiteBox");
let blackBox = document.getElementById("blackBox");

//loop iterates through all contents pieces collection
for (let i = 0; i < pieces.length; i++)
{
    //make the chess pieces draggable
    pieces[i].setAttribute("draggable", "true");

    //Create an event handler for the dragstart event that sets the text of event target’s id in the dataTransfer object.
    pieces[i].addEventListener("dragstart", function(e)
    {
        e.dataTransfer.setData("text", e.target.id);
    });
}

//loop through all itmes in boardSquares node list
for (let i = 0; i < boardSquares.length; i++)
{
    boardSquares[i].addEventListener("dragover", function(e) 
    {
        e.preventDefault();
    });
    boardSquares[i].addEventListener("drop", function(e)
    {
        e.preventDefault();
        //Declare the pieceID variable that gets the id value from the dataTransfer object.
        let pieceID = e.dataTransfer.getData("text");
        let movingPiece = document.getElementById(pieceID);

        if (e.target.tagName == "TD")
        {
            e.target.appendChild(movingPiece);
        }
        else if (e.target.tagName == "SPAN")
        {
            let occupyingPiece = e.target;
            let square = occupyingPiece.parentNode;

            //Use the appendChild() method to append movingPiece as a child of square.
            square.appendChild(movingPiece);

            if (occupyingPiece.className == "white")
            {
                whiteBox.appendChild(occupyingPiece);
            }
            else
            {
                blackBox.appendChild(occupyingPiece);
            }
        }
    });
}

