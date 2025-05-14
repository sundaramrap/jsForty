## Overview

This project demonstrate basic introduction to javaScript where output is printed on browser console and also on the web page (document.write) .
//document.write is an obsolete method now.
It consist of an HTML file (first.html) and a linked JavaScript file(script.js).

## Files

- first.html : The main HTML file which include script .
- script.js : A Js file containing code to print output on the
  console .

## Content of first.html

 <body> tag contains - <h1> tag --> welcome to javascript

<head>tag contain ---> <script src=""> tag ,which is added below the title tag

## Content of script.js

-console.log("Hello ,pragya");
-console.log("This is my 40days of Javascript ");
-document.write("check the browser console for a mesage!");

Important Notes

- The script tag is implemented with defer or async tag.
- document.write() ---> is used directly in the HTML document when the page is loading .
  ---> \* if <script> tag includes async or defer , document.write () ma not funtion properly properly

* async and defer alter the script potentially after the document has been parsed, at this point document.write cannot write to the document without over writing it entirely .

## How to run

- open first.html in any modern web browser
- on Mouse (right-click → "Inspect" → Console tab) to view
