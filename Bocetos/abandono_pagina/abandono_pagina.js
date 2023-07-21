const beforeUnloadListener = (event) => {
    console.log("entro el 1");

    event.preventDefault();
    return (event.returnValue = "En verdad desea salir?");
};

const nameInput = document.querySelector("#name");

// nameInput.addEventListener("input", (event) => {
//     console.log("entro el 2");
//     if (event.target.value !== "") {
//         addEventListener("beforeunload", beforeUnloadListener, { capture: true });
//     } else {
//         removeEventListener("beforeunload", beforeUnloadListener, {
//             capture: true,
//         });
//     }
// });

// window.onunload = function () {
//     alert("hola");
// }

window.onbeforeunload = preguntarAntesDeSalir;

function preguntarAntesDeSalir() {
    console.log("entro el 3");
    alert("hola");
    // return "¿Seguro que quieres salir?";

    event.returnValue = '';
}