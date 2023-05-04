
let div_tabs_titulos = document.querySelector('.contendor_tabs.titulos');
div_tabs_titulos.addEventListener('click', function eventos(e) {
    let target = e.target;
    console.log('target', target);
    buscar_nodos_padre(e, (element) => {
        let bandera_control = false; // parar detener las iteraciones hacia nodos padre 
        const clase_objeto_padre = element.getAttribute("class");
        let data = {};
        switch (true) {
            case clase_objeto_padre.includes("titulo_seccion"):

                data.id_seccion = element.getAttribute('data-id_seccion');
                console.log('id_seccion', data.id_seccion);
                let titulo_activo = document.querySelector('.contendor_tabs.titulos .titulo_seccion.active');
                titulo_activo.classList.remove('active');
                let div_contenedor = document.querySelector('.contendor_tabs.contenido .contenedor.active');
                div_contenedor.classList.remove('active');


                let titulo_futuro = document.querySelector('.contendor_tabs.titulos .titulo_seccion[data-id_seccion="' + data.id_seccion + '"]');
                titulo_futuro.classList.add('active');
                let contendor_futuro = document.querySelector('.contendor_tabs.contenido .contenedor[data-id_seccion="' + data.id_seccion + '"]');
                contendor_futuro.classList.add('active');



                bandera_control = true;
                break;

            default:
                break;
        }

        return bandera_control;
    });
})

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