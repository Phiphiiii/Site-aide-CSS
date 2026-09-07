const button_css = document.getElementById("button_css");

function copyCSS() {
    let tailleCSS =
        "\t" + range_width.name + ": " + range_width.value + " ;\n" +
        "\t" + range_height.name + ": " + range_height.value + " ;\n";

    let borderCSS = "";
    if (border.checked) {
        borderCSS =
            "\t" + border_type.name + ": " + range_border.value + "px " + border_type.value + " ;\n" +
            "\t" + color_border.name + ": " + color_border.value + " ;\n" +
            "\t" + border_top_left.name + ": " +
                border_top_left.value + "px " +
                border_top_right.value + "px " +
                border_bottom_right.value + "px " +
                border_bottom_left.value + "px ;\n";
    }

    let colorCSS =
        "\t" + color_fond.name + ": " + color_fond.value + " ;\n" +
        "\t" + color_text.name + ": " + color_text.value + " ;\n";

    let totalCSS = "button {\n" + tailleCSS + borderCSS + colorCSS + "}";

    navigator.clipboard.writeText(totalCSS);
}

button_css.addEventListener("click", copyCSS);