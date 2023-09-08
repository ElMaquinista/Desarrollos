let ponds = new Array();

// vertificar que todos tengan archivos
let archivos = new Array();

function obtenerArchivos_Ponds() {
    if (ponds) {
        for (let pond of ponds) {
            let nodo_pond = pond.element;
            let nodo_seccion_requisito = nodo_pond.closest(".item_requisito");
            if (pond.getFile() && pond.getFile().file) {
                // contiene archivo 
                archivos.push(pond.getFile().file);
                nodo_pond.classList.remove("is-invalid");
            } else {
                nodo_pond.classList.add("is-invalid");
                archivos = new Array();
                nodo_pond.scrollIntoView();
            }
        }
    }
}