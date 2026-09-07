// EXEMPLE
    const bouton = document.getElementById("button_centre");

// WIDTH
    const range_width = document.getElementById("jauge_width");
    const valeur_width = document.getElementById("valeur_width");

    function updateWidth() {
        valeur_width.textContent = range_width.value;
        bouton.style.width = range_width.value * 5 + "px";
    }

    range_width.addEventListener("input", updateWidth);

// HEIGHT
    const range_height = document.getElementById("jauge_height");
    const valeur_height = document.getElementById("valeur_height");

    function updateHeight() {
        valeur_height.textContent = range_height.value;
        bouton.style.height = range_height.value * 5 + "px";
    }

    range_height.addEventListener("input", updateHeight);

// BORDER
    const border = document.getElementById("border");
    const border_type = document.getElementById("type_border");
    const range_border = document.getElementById("jauge_border");
    const color_border = document.getElementById("border_color");
    const border_top_left = document.getElementById("border_radius_top_left");
    const border_top_right = document.getElementById("border_radius_top_right");
    const border_bottom_right = document.getElementById("border_radius_bottom_right");
    const border_bottom_left = document.getElementById("border_radius_bottom_left");

    function updateBorder() {
        if (border.checked) {
            bouton.style.border = range_border.value + "px" + " " + border_type.value + color_border.value;
            bouton.style.borderRadius = border_top_left.value + "px " + border_top_right.value + "px " + border_bottom_right.value + "px " + border_bottom_left.value + "px";
        }
        else {
            bouton.style.border = "none";
        }
    }

    border.addEventListener("change", updateBorder);
    border_type.addEventListener("change", updateBorder);
    range_border.addEventListener("input", updateBorder);
    color_border.addEventListener("input", updateBorder);
    border_top_left.addEventListener("input", updateBorder);
    border_top_right.addEventListener("input", updateBorder);
    border_bottom_right.addEventListener("input", updateBorder);
    border_bottom_left.addEventListener("input", updateBorder);

// COULEUR
const color_fond= document.getElementById("background-color");
const color_text= document.getElementById("text-color");

function updateColor() {
    bouton.style.color = color_text.value;
    bouton.style.backgroundColor = color_fond.value;
}

color_fond.addEventListener("input", updateColor);
color_text.addEventListener("input", updateColor);

// REGLAGE AFFICHAGE
    const button_reglage = document.getElementById("button_reglage");
    const reglage_div = document.getElementById("box1");

    function showREGLAGE() {
        if (reglage_div.style.visibility == "visible") {
            reglage_div.style.visibility = "hidden";
        } else {
            reglage_div.style.visibility = "visible";
        }
    }

    button_reglage.addEventListener("click", showREGLAGE);

updateWidth();
updateHeight();
updateBorder();