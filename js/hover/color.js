const color_fond_hover= document.getElementById("background-color_hover");
const color_text_hover= document.getElementById("text-color_hover");

function updateColor_hover() {
    if (hover.checked && action.checked) {
        bouton.style.color = color_text_hover.value;
        bouton.style.backgroundColor = color_fond_hover.value;
    }
}

bouton.addEventListener("mouseenter", updateColor_hover);
bouton.addEventListener("mouseleave", updateColor);