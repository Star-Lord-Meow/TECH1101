const start = document.querySelector("#start");
const clear = document.querySelector("#clear");
const display = document.querySelector(".display");

/* function randomNumber(num) {
 const comPute = Math.ceil(Math.random() * num.value);
 return comPute;
} */

function randomNumber(){
  const comPute = Math.ceil(Math.random() * num.value);
  return comPute;
}

function startFn() {
  const showRandom = randomNumber();
  display.textContent = showRandom;
}
start.addEventListener("click", startFn);

function clearFn() {
  document.querySelector("#max").value = null;
  display.textContent = "Random number will go here";
}
clear.addEventListener("click", clearFn);