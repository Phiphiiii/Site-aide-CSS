const range_width_active = document.getElementById("jauge_width_active");
const valeur_width_active = document.getElementById("valeur_width_active");
const range_height_active = document.getElementById("jauge_height_active");
const valeur_height_active = document.getElementById("valeur_height_active");

function updateTaille_active() {
    if (active.checked && action.checked) {
        bouton.style.width = range_width_active.value * 5 + "px";
        bouton.style.height = range_height_active.value * 5 + "px";
    }
}

function updateTexte() {
    if (active.checked && action.checked) {
        valeur_width_active.textContent = range_width_active.value;
        valeur_height_active.textContent = range_height_active.value;
    }
}

range_width_active.addEventListener("input", updateTexte);
range_height_active.addEventListener("input", updateTexte);

bouton.addEventListener("mousedown", updateTaille_active);
bouton.addEventListener("mouseup", updateTaille);
