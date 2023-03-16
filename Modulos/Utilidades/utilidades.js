// requirido => 
function buscar_nodos_padre(e, funcion_switch) {
    let path = e.path || (e.composedPath && e.composedPath());

    if (path) {
        // para buscar clases en los elementos padre
        for (let index = 0; index < path.length; index++) {
            let bandera_control = false;
            const element = path[index];
            let nombre_nodo = element.nodeName.toLowerCase();
            if (nombre_nodo.includes("html")) {
                break;
            }
            const def_clase_del_objeto_pulsado = element.getAttribute("class");

            if (def_clase_del_objeto_pulsado !== null) {

                bandera_control = funcion_switch(element);

            }

            if (bandera_control) {
                break;
            }
        }
    }
}