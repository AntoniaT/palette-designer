"use strict"

let colorPicker = "input";

colorPicker.addEventListener("input", setBaseColor);

function setBaseColor(red, green, blue){
  let rbgString = `rgb(${rr}, ${gg}, ${bb},)`;
  console.log(rbgString);
}
let pickedColor = setBaseColor();

function calculateColors(){

}