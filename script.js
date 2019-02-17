"use strict"

// set the base color 
let baseColor = document.querySelector("#baseColor");
let colorPicker = document.querySelector("input");

// select the harmony button
let harmonySelector = document.querySelector("#pet-select");

// select the divs were the colors should be shown
const colorOne = document.querySelector("#colorOne");
const colorTwo = document.querySelector("#colorTwo");
const colorThree = document.querySelector("#colorThree");
const colorFour = document.querySelector("#colorFour");

// select the harmony options from the list
let analougeSelected = document.querySelector("#analouge");
let monochromatic = false;
let complementarySelected = false;
let triadSelected = false;
let compoundSelected = false;
let shadesSelected = false;

// if an input is given
colorPicker.addEventListener("input", setBaseColor);

// get the selected base color and color the first div background 
function setBaseColor(){
  //set the default color to be the picked value
  let defaultColor = colorPicker.value;

  console.log(defaultColor); //for testing

  //style the first div in picked color
  baseColor.style.backgroundColor = defaultColor; 
}
harmonySelector.addEventListener("change", createHarmony);

// create Harmony color style by changing the harmony button

function createHarmony(event){
  let color1 = event.target.value;

  if (color1){
    colorOne.style.backgroundColor = "green";
    colorTwo.style.backgroundColor = "red";
    colorThree.style.backgroundColor = "black";
    colorFour.style.backgroundColor = "pink";

    console.log("working");
  }
}

// for testing: getting the hex value in 3 values for RGB
let hex = '#e66465';

console.log(hex.substring(1, 3));
console.log(hex.substring(3, 5));
console.log(hex.substring(5, 7));

/*
setBaseColor(rgbString);

convertToColorString(){

}
calculateHarmonies(){

}
 let pickedColor = setBaseColor();

function calculateColors(){

} */

/* doing the fancy math
   r /= 255;
   g /= 255;
   b /= 255;
 
   let h, s, l;

   const min = Math.min(r,g,b);
   const max = Math.max(r,g,b);
  
   if( max === min ) {
     h = 0;
   } else
   if (max === r) {
     h = 60 * (0 + (g - b) / (max - min) );
   } else
   if (max === g) {
     h = 60 * (2 + (b - r) / (max - min) );
   } else
   if (max === b) {
     h = 60 * (4 + (r - g) / (max - min) );
   }
  
   if (h < 0) {h = h + 360; }
  
   l = (min + max) / 2;
  
   if (max === 0 || min === 1 ) {
     s = 0;
   } else {
     s = (max - l) / ( Math.min(l,1-l));
   }
   // multiply s and l by 100 to get the value in percent, rather than [0,1]
   s *= 100;
   l *= 100;


   console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing
*/