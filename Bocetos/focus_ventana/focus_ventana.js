console.log("Vigilar el focus de la pantalla");

// let nodo_vigilar = document.querySelector(".test_vigilar");
// nodo_vigilar.addEventListener("focus", function vigilancia(e){
//     console.log("");
// })



var nCounter = 0;
var nCounter_out = 0;

// Set up event handler to produce text for the window focus event
// window.addEventListener("focus", function (event) {
//     document.getElementById('message').innerHTML = "window has focus " + nCounter;
//     nCounter = nCounter + 1;
// }, false);

// let nofo_focus = document.querySelector(".body");
window.addEventListener("focus", function (event) {
    console.log(event);
    document.getElementById('message').innerHTML = "window has focus " + nCounter_out;
    nCounter_out = nCounter_out + 1;
}, false);
window.addEventListener("blur", function (event) {

    console.log(event);

    document.getElementById('message_focus_out').innerHTML = "window has´t focus " + nCounter_out;
    nCounter_out = nCounter_out + 1;
}, false);

const form = document.getElementById("form");

nofo_focus.addEventListener("focusin", (event) => {
    event.target.style.background = "pink";
});

nofo_focus.addEventListener("focusout", (event) => {
    event.target.style.background = "";
});