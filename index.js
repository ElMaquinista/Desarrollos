// import { saludo } from "./ejemplo.js";
// import { saludo } from "./ejemplo.js?version=10";
let nombre = "./ejemplo.js" + "?version=1";
// import { saludo } from "moduleA";
import { saludo } from nombre;

let moduleA = null;


// let editor = null;
// (async () => {
//     editor = await import(nombre);
//     // editor.init();
//     console.log(editor);
//     init();
// })();


// const init = () => {
//     editor.saludo();
// };



window.addEventListener("popstate", function name(e) {
    history.pushState(null, null, window.location.pathname);
    history.pushState(null, null, window.location.pathname);
}, false);