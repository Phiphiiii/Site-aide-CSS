const button_css = document.getElementById("button_css");

function CSS_base() {
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

    let totalCSS_base = "button {\n" + tailleCSS + borderCSS + colorCSS + "}";
    return totalCSS_base;
}

function CSS_hover() {
    let tailleCSS_hover =
        "\t" + range_width_hover.name + ": " + range_width_hover.value + " ;\n" +
        "\t" + range_height_hover.name + ": " + range_height_hover.value + " ;\n";

    let borderCSS_hover = "";
    if (border_hover.checked) {
        borderCSS_hover =
            "\t" + border_type_hover.name + ": " + range_border_hover.value + "px " + border_type_hover.value + " ;\n" +
            "\t" + color_border_hover.name + ": " + color_border_hover.value + " ;\n" +
            "\t" + border_top_left_hover.name + ": " +
                border_top_left_hover.value + "px " +
                border_top_right_hover.value + "px " +
                border_bottom_right_hover.value + "px " +
                border_bottom_left_hover.value + "px ;\n";
    }

    let colorCSS_hover =
        "\t" + color_fond_hover.name + ": " + color_fond_hover.value + " ;\n" +
        "\t" + color_text_hover.name + ": " + color_text_hover.value + " ;\n";

    let totalCSS_hover = "button:hover {\n" + tailleCSS_hover + borderCSS_hover + colorCSS_hover + "}";
    return totalCSS_hover;
}

function copyCSS() {
    const base = CSS_base();
    const hover = CSS_hover();

    let total = base + "\n" + hover;
    navigator.clipboard.writeText(total);
}

button_css.addEventListener("click", copyCSS);