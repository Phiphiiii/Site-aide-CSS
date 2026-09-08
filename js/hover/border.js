const border_hover = document.getElementById("border_hover");
const border_type_hover = document.getElementById("type_border_hover");
const range_border_hover = document.getElementById("jauge_border_hover");
const color_border_hover = document.getElementById("border_color_hover");
const border_top_left_hover = document.getElementById("border_radius_top_left_hover");
const border_top_right_hover = document.getElementById("border_radius_top_right_hover");
const border_bottom_right_hover = document.getElementById("border_radius_bottom_right_hover");
const border_bottom_left_hover = document.getElementById("border_radius_bottom_left_hover");

function updateBorder_hover() {
    if (hover.checked && action.checked) {
        if (border_hover.checked) {
            bouton.style.border = range_border_hover.value + "px" + " " + border_type_hover.value + color_border.value;
            bouton.style.borderRadius = border_top_left_hover.value + "px " + border_top_right_hover.value + "px " + border_bottom_right_hover.value + "px " + border_bottom_left_hover.value + "px";
        }
        else {
            bouton.style.border = "none";
        }
    }
}

bouton.addEventListener("mouseenter", updateBorder_hover);
bouton.addEventListener("mouseleave", updateBorder);