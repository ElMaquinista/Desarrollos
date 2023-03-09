const notificaciones = (data) => {
    // ocultarLoaderMain();
    let nodo_zona_mensajes = document.querySelector('.zona_mensajes');

    const manager_eventos_lista_mensajes = () => {
        let nodo_lista_mensjaes = nodo_zona_mensajes.querySelector('.lista_mensajes');
        nodo_lista_mensjaes.addEventListener("click", function lista_mensajes(e) {
            const target = e.target;
            let clases_pulsado = target.getAttribute('class');
            switch (true) {
                case clases_pulsado.includes("asunto "):
                    console.log("Se ha pulasado en un mensaje");
                    actualizar_mensaje_a_leido(target);
                    break;

                default:
                    break;
            }
        });
    };
    manager_eventos_lista_mensajes();

    const quitar_visualizado = () => {
        let nodo_lista_visualizando = nodo_zona_mensajes.querySelectorAll('.lista_mensajes .visualizando');

        if (nodo_lista_visualizando) {
            for (let i = 0; i < nodo_lista_visualizando.length; i++) {
                const mensaje = nodo_lista_visualizando[i];

                mensaje.classList.remove('visualizando');

                mensaje.classList.add('leido');
            }
        }

    };
    const actualizar_mensaje_a_leido =(nodo)=>{
        if(nodo){
            nodo.classList.remove('no_leido');
            nodo.classList.add('leido')
        }
    };

    return {
        manager_eventos_lista_mensajes,
        quitar_visualizado,
        actualizar_mensaje_a_leido
    };
};