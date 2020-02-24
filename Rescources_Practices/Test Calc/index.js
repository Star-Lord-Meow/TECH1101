const input1 = document.querySelector("#anyNumber1");
const input2 = document.querySelector("#anyNumber2");
const addBut = document.querySelector("#add")
const subBut = document.querySelector("#sub")
const multBut = document.querySelector("#mult")
const divsBut = document.querySelector("#divs")
const display = document.querySelector(".display");

function addcompu() {
    const input1 = Number(document.getElementById("anyNumber1").value);
    const input2 = Number(document.getElementById("anyNumber2").value);
    const addOnly = input1 + input2;
    console.log(addOnly);
    display.textContent = addOnly;
  }
addBut.addEventListener("click", addcompu);

function subcompu() {
    const input1 = Number(document.getElementById("anyNumber1").value);
    const input2 = Number(document.getElementById("anyNumber2").value);
    const subOnly = input1 - input2;
    console.log(subOnly);
    display.textContent = subOnly;
}
subBut.addEventListener("click", subcompu);

function multcompu() {
    const input1 = Number(document.getElementById("anyNumber1").value);
    const input2 = Number(document.getElementById("anyNumber2").value);
    const multOnly = input1 * input2;
    console.log(multOnly);
    display.textContent = multOnly;
}
multBut.addEventListener("click", multcompu);

function divscompu() {
    const input1 = Number(document.getElementById("anyNumber1").value);
    const input2 = Number(document.getElementById("anyNumber2").value);
    const divsOnly = (input1 / input2);
    console.log(divsOnly);
    display.textContent = divsOnly;
}
divsBut.addEventListener("click", divscompu);