//const start = document.querySelector("#app");
//start.addEventListener("onload", () => {});

// function startFn() {
//     app.textContent = "text";
// }
//start.addEventListener("onload", startFn);
const link = document.getElementById("_hjRemoteVarsFrame");
const href = link.getAttribute("src");


console.log("link", link);
console.log("href", href);
const box = document.querySelector("#box1");
box.setAttribute("class", "hello");