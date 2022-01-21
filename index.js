// Write your code here!

// const body = document.querySelector("body");
// body.removeChild("#main");

main.remove();

const newHeader = document.createElement("h1");
newHeader.setAttribute("id", "victory");
newHeader.textContent = "YOUR-NAME is the champion";
document.body.appendChild(newHeader);
