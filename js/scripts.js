/*!
* Start Bootstrap - Bare v5.0.9 (https://startbootstrap.com/template/bare)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// set up text to print, each item in array is new line
var hText = new Array(
    "Welcome To My Web Portfolio!"
    );
    var iSpeed = 100; // time delay of print out
    var iIndex = 0; // start printing array at this posision
    var iArrLength = hText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines
     
    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row
     
    function htypewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("hometext");
     
     while ( iRow < iIndex ) {
      sContents += hText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + hText[iIndex].substring(0, iTextPos) + "_";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != hText.length ) {
       iArrLength = hText[iIndex].length;
       setTimeout("htypewriter()", 500);
      }
     } else {
      setTimeout("htypewriter()", iSpeed);
     }
    }
    

    
    htypewriter();
