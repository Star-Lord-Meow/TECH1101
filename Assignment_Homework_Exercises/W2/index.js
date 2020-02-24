// console.log("hello world");

const bob = "bob";
let lotto = "00000000";

lotto = "dave";

let myfriend = "Bob";

const arr = ["0", "0", "0", "0", "0", "0", "0", "0"];

const obj = {
  name: "roger",
  age: 27,
  gender: "non-binary",
  class: ["sodvy", "tech1101"]
};
// console.log(bob, lotto);

// FUnction Declaration!
// function dave (parameters) {

// }

function relationship(bf, gf) {
  return bf + " is dating " + gf;
}

function addOne(num) {
  return num + 1;
}

// console.log(
//   "relationship Function: ",
//   relationship("Jeff", "Ashley"),
//   "addOne Function: ",
//   addOne(5)
// );

// Function Expression
const janet = function() {
  const name = "Jon";
  const age = 65;
  console.log(name, age);
  return name + " is this many years old " + age;
};

console.log(janet());

function AddMultiples(num) {
  return 5 * num;
}

console.log(AddMultiples(8));

function helloWorld() {
  return "hello world!";
}

console.log(helloWorld());

// function
// take two parameters
// and return or console.log() the result
// using this multipler *

const multi = (param1, param2) => {
  return param1 * param2;
};
console.log(multi(4, 5));

const multi2 = function(param1, param2) {
  return param1 * param2;
};
console.log(multi2(4, 5));

function multiple(param1, param2) {
  return param1 * param2;
}
console.log(multiple(3, 4));

