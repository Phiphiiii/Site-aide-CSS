const bouton = document.getElementById("button_centre");
const action = document.getElementById("action");
const hover = document.getElementById("hover");
const active = document.getElementById("active");
const action_show = document.getElementById("action_show");

function actionShow() {
    if (action.checked) {
        action_show.style.visibility = "visible";
    }
    else {
        action_show.style.visibility = "hidden";
    }
}

action.addEventListener("change", actionShow);

// AIDE DE L'IA

const elements = [
    document.getElementById("base"),
    document.getElementById("hover"),
    document.getElementById("active"),
    bouton
];

function moveButton(e) {
    const element = e.currentTarget;

    function followMouse(ev) {
        element.style.position = "fixed";
        element.style.top = ev.pageY + "px";
        element.style.left = ev.pageX + "px";
        element.style.cursor = "grab";
    }

    document.addEventListener("mousemove", followMouse);

    document.addEventListener("mouseup", function stop() {
        document.removeEventListener("mousemove", followMouse);
        document.removeEventListener("mouseup", stop);
    });
}

elements.forEach(element => {
    element.addEventListener("mousedown", moveButton);
});