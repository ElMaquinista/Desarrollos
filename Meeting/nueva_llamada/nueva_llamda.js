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

            bandera_control = funcion_switch(element);

            if (bandera_control) {
                break;
            }
        }
    }
}
const manager_eventos_recurrente = () => {
    let nodo_recursivos = document.querySelector('contenedor_llamada_recurrente');

    if (nodo_recursivos) {
        nodo_recursivos.addEventListener("click", function llamda_recurrente(e) {
            const target = e.target;
            // console.log(target);

            let evento = target.getAttribute('data-evento');
            let desencadenador = target.getAttribute('data-desencadenador');
            let heredado = target.getAttribute('data-evento-heredado');

            let nodo = target;

            if (heredado) {
                buscar_nodos_padre(e, (element) => {
                    let bandera_control = false; // parar detener las iteraciones hacia nodos padre 

                    const bnp_evento = element.getAttribute("data-evento");
                    const bnp_desencadenador = element.getAttribute('data-desencadenador');

                    if (bnp_evento && bnp_desencadenador) {
                        evento = bnp_evento;
                        desencadenador = bnp_desencadenador;
                        bandera_control = true;
                        nodo = element;
                    }

                    // console.log("bnp_evento", bnp_evento);
                    // console.log("bnp_desencadenador", bnp_desencadenador);
                    return bandera_control;
                });
            }

            // console.log("evento", evento);
            // console.log("desencadenador", desencadenador);
            // console.log("heredado", heredado);


            let d = {};

            if (desencadenador && evento) {

                switch (desencadenador) {
                    case 'data-evento':

                        switch (evento) {
                            case 'mostrar_ayuda':

                                break;

                            default:
                                break;
                        }

                        break;
                    case 'id':

                        break;
                    case 'clase':

                        break;

                    default:
                        break;
                }
            }
        });

    }
};