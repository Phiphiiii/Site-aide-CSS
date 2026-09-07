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