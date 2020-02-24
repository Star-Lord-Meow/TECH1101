const date = document.querySelector("#date");
function getDate() {
    console.log(date);
    const currentYear = new Date().getFullYear();
    date.textContent = currentYear;
  }
getDate();
  
