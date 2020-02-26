function add2(param1, param2){
    return param1 + param2;
}0
console.log("This is Addition: " + add2(3,4));

function div2(para1, para2){
    return para1 / para2;
}
console.log("This is Division: " + div2(10, 2));

function sub3(num1,num2,num3){
    return (num1 - num2) -num3;
}
console.log("This is Subtraction: " + sub3(15,5,6));

const stris = function(){
    const stri1 = "Kobe";
    const stri2 = "Bryant";
    return stri1 + " 24 " + stri2;
};
console.log(stris());

let animal = { 
    Kind: "Cow",
    Type: "Mamal",
    Legs: "Four",
    Count: "4",
}
console.log(animal);

var name = prompt("What is your name?");
alert("Hi! " + name + " How you doin?");
console.log("Hi! " + name + " How you doin?");

const Ages = function (){
    husbandAge = 55;
    wifeAge = 45;
}
    let husbandAge = prompt('How old are you?', 55);
    let wifeAge = prompt('How old are you?', 45);
    console.log(Ages(55,45))
alert(husbandAge + wifeAge);
console.log(husbandAge + wifeAge);
