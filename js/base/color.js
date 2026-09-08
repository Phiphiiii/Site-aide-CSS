const color_fond= document.getElementById("background-color");
const color_text= document.getElementById("text-color");

function updateColor() {
    bouton.style.color = color_text.value;
    bouton.style.backgroundColor = color_fond.value;
}

color_fond.addEventListener("input", updateColor);
color_text.addEventListener("input", updateColor);