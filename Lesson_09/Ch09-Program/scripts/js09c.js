"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Chapter case
      
      Eating Well in Season Retrieving Data from Local Storage
  Author: Austin steffes
      Date:   4/13/23

      Filename: js09c.js
 */

let keys = ["name", "email", "phone", "address", 
"city","state","zip","allergies","frequency","size"];

for (let item of keys)
{
      let newRow = document.createElement("tr");

      //display storage key
      let keyCell = document.createElement("td");
      keyCell.textContent = item;
      newRow.appendChild(keyCell);

      //display key value
      let keyValue = document.createElement("td");
      keyValue.textContent = localStorage.getItem(item);
      newRow.appendChild(keyValue);

      //append key=name
      document.getElementById("prefTable").appendChild(newRow);
}

//remove eating well keys remove preference 
document.getElementById("removePrefBtn").onclick = function()
{
      for (let item of keys)
      {
            localStorage.removeItem(item);
      }
}

//write cookie
function writeCookie(name,value,expDate,path,domain,secure)
{
      if (name && value)
      {
            let cStr = name + "=" + encodeURIComponent(value);
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

