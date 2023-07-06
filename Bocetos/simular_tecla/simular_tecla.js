var keyboardEvent = document.createEvent("KeyboardEvent");
var initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? "initKeyboardEvent" : "initKeyEvent";

keyboardEvent[initMethod](
    "keydown", // event type: keydown, keyup, keypress 
    true,      // bubbles 
    true,      // cancelable 
    window,    // view: should be window 
    false,     // ctrlKey 
    false,     // altKey 
    false,     // shiftKey 
    false,     // metaKey 
    15,        // keyCode: unsigned long - the virtual key code, else 0 
    0          // charCode: unsigned long - the Unicode character associated with the depressed key, else 0 
);

// document.addEventListener("keydown", function (e) {
//     // console.log(e);
//     var codigo = event.which || event.keyCode;
//     console.log(codigo);
// });


function lanzar_tecla() {
    // console.log("evento lanzado");
    // document.dispatchEvent(keyboardEvent);
    // document.dispatchEvent(evento_tecla_tab);
    console.log("algo lanzado");
}
function no_deberia() {
    console.error("no se deberia haber lanzado");
}

var evento_tecla = new KeyboardEvent("keydown", { which: 32, key: ' ', code: 'Space', keyCode: 32, charCode: 32 });
var evento_tecla_enter = new KeyboardEvent("keydown", { which: 13, key: ' ', code: 'Enter', keyCode: 13, charCode: 13 });
let evento_tecla_tab = new KeyboardEvent("keydown", { which: 9, key: ' ', code: 'Tab', keyCode: 9, charCode: 9 });



//-------------------------
let nodo_panel = document.querySelector(".test_cambio_enter");
nodo_panel.addEventListener("keyup", function (e) {
    const target = e.target;
    // console.log(e);
    var codigo = event.which || event.keyCode;
    console.log(codigo);

    if (target.localName === "input") {
        if (codigo === 13) {
            // console.log("Tecla ENTER");
            // simular un tab para acceder siguiente elemento del tabindex
            // document.dispatchEvent(evento_tecla_tab);

            let index = arr_nodos_tabindex.indexOf(target);

            console.log("index", index);

            if (index !== undefined && index !== "") {
                if (index < arr_nodos_tabindex.length - 1) {

                    console.log("seleccion de nodo");

                    let nodo_siguiente = arr_nodos_tabindex[index + 1];
                    nodo_siguiente.scrollIntoView();
                    nodo_siguiente.focus();
                    try {
                        nodo_siguiente.select();
                    }catch (error) {

                    }
                } else {
                    // seleccionar el siguinte boton
                }
            }

        }
    }
});


/// cambio de estrategia 
let arr_nodos_tabindex = new Array();

const almacenar_nodos_tab = () => {
    arr_nodos_tabindex = new Array();
    let nodo_seccion = document.querySelector(".test_cambio_enter");

    if (nodo_seccion) {
        let list_nodos = nodo_seccion.querySelectorAll("input, button");
        if (list_nodos) {
            arr_nodos_tabindex = Array.apply(null, list_nodos);
        }
    }

};

almacenar_nodos_tab();

function lanzar_algo() {
    console.warn("se continua el proceso");
}