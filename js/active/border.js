const border_active = document.getElementById("border_active");
const border_type_active = document.getElementById("type_border_active");
const range_border_active = document.getElementById("jauge_border_active");
const color_border_active = document.getElementById("border_color_active");
const border_top_left_active = document.getElementById("border_radius_top_left_active");
const border_top_right_active = document.getElementById("border_radius_top_right_active");
const border_bottom_right_active = document.getElementById("border_radius_bottom_right_active");
const border_bottom_left_active = document.getElementById("border_radius_bottom_left_active");

function updateBorder_active() {
    if (active.checked && action.checked) {
        if (border_active.checked) {
            bouton.style.border = range_border_active.value + "px" + " " + border_type_active.value + color_border.value;
            bouton.style.borderRadius = border_top_left_active.value + "px " + border_top_right_active.value + "px " + border_bottom_right_active.value + "px " + border_bottom_left_active.value + "px";
        }
        else {
            bouton.style.border = "none";
        }
    }
}

bouton.addEventListener("mousedown", updateBorder_active);
bouton.addEventListener("mouseup", updateBorder);