const color_fond_active= document.getElementById("background-color_active");
const color_text_active= document.getElementById("text-color_active");

function updateColor_active() {
    if (active.checked && action.checked) {
        bouton.style.color = color_text_active.value;
        bouton.style.backgroundColor = color_fond_active.value;
    }
}

bouton.addEventListener("mousedown", updateColor_active);
bouton.addEventListener("mouseup", updateColor);