console.log("running!!");
const start = document.querySelector("#start");
const clear = document.querySelector("#clear");
const display = document.querySelector(".display");
const num = document.querySelector("#max");

/* function randomNumber(num) {
 const comPute = Math.ceil(Math.random() * num.value);
 console.log(randomNumber());
 return comPute;
} */

function randomNumber(){
  const comPute = Math.ceil(Math.random() * num.value);
  console.log(comPute);
  return comPute;
}

function startFn() {
  const showRandom = randomNumber();
  display.textContent = showRandom;
}
start.addEventListener("click", startFn);

function clearFn() {
  document.querySelector("#max").value = null;
  display.textContent = " ";
}
clear.addEventListener("click", clearFn);
