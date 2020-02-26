const SubmitBut = document.querySelector("#submit"); //assigning new const to button id (submit) in the html
const display = document.querySelector("#TaxOwedOuput"); //assigning const display equavalent to label id.
const display2 = document.querySelector("#EffectiveTaxRate");
const display3 = document.querySelector("#RetainedEarnings");
const display4 = document.querySelector("#errorOut");

function submit() {
    const a = 48535; //tax range
    const b = 97069;
    const c = 150473;
    const d = 214368;
    let input1 = Number(document.getElementById("anyNumber1").value); //no need to declare a const = "anyNumber1" because you can call id right away from html. Lesson learned from your comment on my previous assignment.
    let empty = document.getElementById("anyNumber1").value;

    if(empty.trim(empty) === ""){//if your input is null or white spaces. this trim is only for spaces before and after the input number. "".length" is no an option either. this is not a perfect validation. i really want to learn how to do it without tweaking the html code or inputing the other special characters like /^\s*$/, in the code. if you have an idea please teach me.
        display4.textContent = "Error: Enter a number";
    }else if (input1 <= a){ //if input1 is less than or = to 48535.
        const compu2 = (input1-0)*.15;
        const totalCompu = compu2 + 0;
        const etr = (totalCompu / input1) *100;
        const returnE = input1 - totalCompu;
        display.textContent = "$" + totalCompu.toFixed(2);
        display2.textContent = etr.toFixed(2);
        display3.textContent = "$" + returnE.toFixed(2);
    }else if(input1 > a && input1 <= b){//if input1 is greater than 48535 but less than or equal to 97069
        const perCe = a *.15;
        const compu2 = (input1-a) *.205;
        const totalCompu = compu2 + perCe;
        const etr = (totalCompu / input1) *100;
        const returnE = input1 - totalCompu;
        display.textContent = "$" + totalCompu.toFixed(2);
        display2.textContent = etr.toFixed(2);
        display3.textContent = "$" + returnE.toFixed(2);
    }else if(input1 > b && input1 <= c){//if input1 is greater than 97069 but less than or equal to 150473
        const perCe = b *.15;
        const compu2 = (input1-b) *.260;
        const totalCompu = compu2 + perCe;
        const etr = (totalCompu / input1) *100;
        const returnE = input1 - totalCompu;
        display.textContent = "$" + totalCompu.toFixed(2);
        display2.textContent = etr.toFixed(2);
        display3.textContent = "$" + returnE.toFixed(2);
    } else if(input1 > c && input1 <= d){//if input1 is greater than 150473 but less than or equal to 214368
        const perCe = c *.15;
        const compu2 = (input1-c) *.290;
        const totalCompu = compu2 + perCe;
        const etr = (totalCompu / input1) *100;
        const returnE = input1 - totalCompu;
        display.textContent = "$" + totalCompu.toFixed(2);
        display2.textContent = etr.toFixed(2);
        display3.textContent = "$" + returnE.toFixed(2);
    }else if(input1 > d){ //if input1 is greater than 214368
        const perCe = d *.15;
        const compu2 = (input1-d) *.330;
        const totalCompu = compu2 + perCe;
        const etr = (totalCompu / input1) *100;
        const returnE = input1 - totalCompu;
        display.textContent = "$" + totalCompu.toFixed(2);
        display2.textContent = etr.toFixed(2);
        display3.textContent = "$" + returnE.toFixed(2);       
    }else{//if your input is not a number and not null
        display4.textContent = "Error: Enter a number"; 
    }
}
SubmitBut.addEventListener("click", submit);

document.appendChild('p', display3);
display3.textContent = 'dkjhdlkjfhjklg';
document.removeChild
document.replaceChild
document.parentElement

function clearFn() {
  document.querySelector("#anyNumber1").value = null;
  display.textContent = null;
  display2.textContent = null;
  display3.textContent = null;
  display4.textContent = null;
}
clear.addEventListener("click", clearFn);
