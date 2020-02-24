console.log("hello and testing1")

const fname = document.querySelector("#firstName");
const submit = document.querySelector("#submit");
submit.addEventListener("click", function(){
console.log("This button is working!");
}
);
/* fname.addEventListener("click", function(){
    console.log("working...");
});
 */
 const show = document.querySelector("#show");
 function fn(){
     show.textContent = fname.value;
 }
 submit.addEventListener("click",fn);

const lname = document.querySelector("#lastName");
 const button2 = document.querySelector("#submit2");
button2.addEventListener("click", function(){
    console.log("This is button 2");
})
function ln(){
    show2.textContent = lname.value;
};
submit2.addEventListener("click",ln);



