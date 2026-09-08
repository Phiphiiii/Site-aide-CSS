const bouton = document.getElementById("button_centre");
const action = document.getElementById("action");
const hover = document.getElementById("hover");
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