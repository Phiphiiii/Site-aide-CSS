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

function moveButton(e) {
    console.log("x =", e.clientX, "y =", e.clientY);

    function followMouse(ev) {
        bouton.style.top = ev.pageY + "px";
        bouton.style.left = ev.pageX + "px";
        bouton.style.cursor = "grab";
    }

    document.addEventListener('mousemove', followMouse);

    document.addEventListener('mouseup', function stop() {
        document.removeEventListener('mousemove', followMouse);
        document.removeEventListener('mouseup', stop);
    });
}

bouton.addEventListener('mousedown', moveButton);
