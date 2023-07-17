// import * as temp_modal from "./modal_desechable.js";
import moduloA from "./funcionesA.js";

// temp_modal.lanzar_modal_demo();

export let number = 50;
export let modulo = null;
if (number > 42) {

    // import("./modal_desechable.js")
    //   .then(module => module.lanzar_modal_demo());

     modulo=await import("./modal_desechable.js");

    modulo.lanzar_modal_demo();

      console.log(modulo);
  }
  console.log("number ", number );
  // suma();
  
  console.log(moduloA.meta)

