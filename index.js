document.getElementById("body").style.backgroundColor="silver";
let h1Title=document.getElementById("title");
h1Title.style.color="green";

document.getElementById("veges").style.textTransform="uppercase"
document.getElementById("fruits").style.textTransform="uppercase"

let newFruit=document.createElement("li");
newFruit.textContent ="orange";
document.getElementById("fruList").appendChild(newFruit);

let newveges=document.createElement("li");
newveges.textContent="spinach";
document.getElementById("vegList").appendChild(newveges);
