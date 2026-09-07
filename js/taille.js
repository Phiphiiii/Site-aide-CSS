const range_width = document.getElementById("jauge_width");
const valeur_width = document.getElementById("valeur_width");
const range_height = document.getElementById("jauge_height");
const valeur_height = document.getElementById("valeur_height");

function updateTaille() {
    valeur_width.textContent = range_width.value;
    valeur_height.textContent = range_height.value;
    bouton.style.width = range_width.value * 5 + "px";
    bouton.style.height = range_height.value * 5 + "px";
}

range_width.addEventListener("input", updateTaille);
range_height.addEventListener("input", updateTaille);
