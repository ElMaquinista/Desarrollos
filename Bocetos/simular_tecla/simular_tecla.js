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

document.addEventListener("keydown", function (e){
    // console.log(e);
    var codigo = event.which || event.keyCode;
    console.log(codigo);
});


function lanzar_tecla() {
    // console.log("evento lanzado");
    // document.dispatchEvent(keyboardEvent);
    document.dispatchEvent(evento_tecla_enter);
}

var evento_tecla = new KeyboardEvent("keydown", {which:32,  key:' ', code:'Space',keyCode:32, charCode:32});
var evento_tecla_enter = new KeyboardEvent("keydown", {which:13,  key:' ', code:'Enter',keyCode:13, charCode:13});


