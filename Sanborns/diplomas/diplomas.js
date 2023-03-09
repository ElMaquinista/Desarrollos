

const diplomas = (data) => {
    // ocultarLoaderMain();
    let array_estaciones = new Array();

    function scroll_inicio() {
        let nodo_carrusel = document.querySelector('.diplomas_carrusel');
        console.log("posicion actual_carrusel", nodo_carrusel.scrollLeft);
        nodo_carrusel.scroll(0, 0);
    }
    const mapear_elemtos_carrusel = () => {
        let nodo_carrusel = document.querySelector('.diplomas_carrusel');
        let nodos_carrusel = nodo_carrusel.querySelectorAll(".carrusel_card");


        let ancho_tagetas = nodos_carrusel[0].clientWidth;

        let scroll_actual = nodo_carrusel.scrollLeft;

        let scroll_total = nodo_carrusel.scrollWidth;

        let array_estaciones_temp = new Array();
        let contador_carrusel = 0;

        for (let j = 0; j < nodos_carrusel.length; j++) {
            const item = nodos_carrusel[j];

            array_estaciones_temp.push(contador_carrusel);
            contador_carrusel += ancho_tagetas;
        }

        console.log("array_estaciones_temp", array_estaciones_temp);

        array_estaciones = array_estaciones_temp;

    };
    mapear_elemtos_carrusel();

    const carrusel_item_siguiente = () => {
        let nodo_carrusel = document.querySelector('.diplomas_carrusel');
        let nodos_carrusel = nodo_carrusel.querySelectorAll(".carrusel_card");

        let posicion_actual = nodo_carrusel.scrollLeft;
        let estacion_siguiente = 0;

        for (let i = 0; i < array_estaciones.length; i++) {
            const estacion = array_estaciones[i];
            if (estacion >= posicion_actual) {
                if (array_estaciones[i + 1]) {
                    estacion_siguiente = array_estaciones[i + 1];
                } else {
                    estacion_siguiente = estacion;
                }
                break;
            }
        }
        console.log("posicion_actual", posicion_actual);
        console.log("estacion_siguiente", estacion_siguiente);
        nodo_carrusel.scroll(estacion_siguiente, 0);

    };

    const carrusel_item_anterior = () => {
        let nodo_carrusel = document.querySelector('.diplomas_carrusel');
        let nodos_carrusel = nodo_carrusel.querySelectorAll(".carrusel_card");

        let posicion_actual = nodo_carrusel.scrollLeft;
        let estacion_anterior = 0;

        for (let i = 0; i < array_estaciones.length; i++) {
            const estacion = array_estaciones[i];
            // console.log("estacion", estacion);
            let estacion_futura = array_estaciones[i - 1];
            if (estacion >= posicion_actual) {
                // console.log("ver anterior", estacion_futura)s;
                if (typeof estacion_futura !== 'undefined') {
                    estacion_anterior = estacion_futura;
                } else {
                    console.log()
                    estacion_anterior = estacion;
                }
                break;
            }
        }
        console.log("posicion_actual", posicion_actual);
        console.log("estacion_anterior", estacion_anterior);
        nodo_carrusel.scroll(estacion_anterior, 0);
    };


    const manager_eventos_carrusel = () => {
        let nodo_carrusel = document.querySelector('.diplomas_carrusel');
        nodo_carrusel.addEventListener("click", function abrir_pdf(e) {
            const target = e.target;

            console.log("target carrusel ", target);
            let clase_pulsada = target.getAttribute("class");

            switch (true) {
                case clase_pulsada.includes('canvas_diploma'):
                    $('#modal_visor_pdf').modal({ show: true });

                    break;
                case clase_pulsada.includes('imagen_card'):
                    $('#modal_visor_pdf').modal({ show: true });

                    break;

                default:
                    break;
            }


        });
    };
    manager_eventos_carrusel();

    async function construir_miniatura_canvas_pdf(url_pdf,) {
        let retorno = await pdfjsLib.getDocument(url_pdf).then(async (pdf) => {
            let pdf_estado = {
                pdf: url_pdf,
                currentPage: 1,
                zoom: 0.5
            };
            pdf_estado.pdf = pdf;
            let div_canvas_respuesta = await pdf_estado.pdf.getPage(pdf_estado.currentPage).then((page) => {

                let canvas_requisito = document.createElement('canvas');
                canvas_requisito.classList.add('canvas_diploma');

                let contexto_canvas = canvas_requisito.getContext('2d');

                let vista_port = page.getViewport(pdf_estado.zoom);
                //                console.log("vista_port", vista_port);
                canvas_requisito.width = vista_port.width;
                canvas_requisito.height = vista_port.height;
                page.render({
                    canvasContext: contexto_canvas,
                    viewport: vista_port
                });

                return canvas_requisito;
            });
            return div_canvas_respuesta;
        });
        return retorno;
    }

    const cambiar_por_mimiaturas = async () => {
        let nodos_imagen = document.querySelectorAll('.div_imagen_card');

        for (let i = 0; i < nodos_imagen.length; i++) {
            const nodo_diploma = nodos_imagen[i];


            let miniatura_pdf = await construir_miniatura_canvas_pdf('./diploma.pdf');
            // let miniatura_pdf = await construir_miniatura_canvas_pdf('https://empresas.claro360.com/sanborns/resources/views/diplomas/diploma.pdf');
            nodo_diploma.innerHTML = ``;

            nodo_diploma.insertAdjacentElement("beforeend", miniatura_pdf);
        }
        return true;
    };
    cambiar_por_mimiaturas();
    return {
        scroll_inicio,
        mapear_elemtos_carrusel,
        carrusel_item_siguiente,
        carrusel_item_anterior,
        cambiar_por_mimiaturas
    };
};
