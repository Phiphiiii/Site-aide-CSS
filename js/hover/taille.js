const range_width_hover = document.getElementById("jauge_width_hover");
const valeur_width_hover = document.getElementById("valeur_width_hover");
const range_height_hover = document.getElementById("jauge_height_hover");
const valeur_height_hover = document.getElementById("valeur_height_hover");

function updateTaille_hover() {
    if (hover.checked && action.checked) {
        bouton.style.width = range_width_hover.value * 5 + "px";
        bouton.style.height = range_height_hover.value * 5 + "px";
    }
}

function updateTexte() {
    if (hover.checked && action.checked) {
        valeur_width_hover.textContent = range_width_hover.value;
        valeur_height_hover.textContent = range_height_hover.value;
    }
}

range_width_hover.addEventListener("input", updateTexte);
range_height_hover.addEventListener("input", updateTexte);

bouton.addEventListener("mouseenter", updateTaille_hover);
bouton.addEventListener("mouseleave", updateTaille);
