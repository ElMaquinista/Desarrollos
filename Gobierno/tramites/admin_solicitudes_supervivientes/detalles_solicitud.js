let detalles_solicitud = null;
((async () => {
    detalles_solicitud = await ((() => {
        // --------------------------------
        // empieza scope
        // --------------------------------

        let registro_detalle = null;
        const c_ocultar = "ocultar";

        const peticion_detalle_solicitud = async (id_ahome_supervivientes) => {
            let peticion = await fetch('./detalle_solicitud.json')
                .then((response) => response.json())
                .then((json) => json);
            console.log("peticion", peticion);
            registro_detalle = peticion;

            if (peticion.success) {
                registro_detalle = peticion.detalles;
            } else {
                registro_detalle = null;
            }

            // let peticion = await catalogos_peru.get_contratistas();
            // catalogo_contratistas = peticion;

            return peticion;
        };

        const manager_eventos_detalles = (nodo) => {
            if (nodo) {
                nodo.addEventListener("click", function eventos_detalles(e) {
                    const target = e.target;
                    // console.log(target);

                    let evento = target.getAttribute('data-evento');
                    let desencadenador = target.getAttribute('data-desencadenador');
                    let heredado = target.getAttribute('data-evento-heredado');

                    if (heredado) {
                        buscar_nodos_padre(e, (element) => {
                            let bandera_control = false; // parar detener las iteraciones hacia nodos padre 

                            const bnp_evento = element.getAttribute("data-evento");
                            const bnp_desencadenador = element.getAttribute('data-desencadenador');

                            if (bnp_evento && bnp_desencadenador) {
                                evento = bnp_evento;
                                desencadenador = bnp_desencadenador;
                                bandera_control = true;
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
                                    case 'retornar_solicitudes':
                                        d = {};
                                        d.nodo_solicitudes = document.querySelector('.pizarra_solicitudes_supervivientes');
                                        d.nodo_solicitudes.classList.remove(c_ocultar);

                                        d.nodo_detalles = document.querySelector('.pizzarra_detalles_solicitud');
                                        d.nodo_detalles.classList.add(c_ocultar);

                                        // destruir datos de detalles

                                        break;
                                    case 'ver_pdf_solicitud':
                                        console.log("se ha  solicitado el modal para ver el pdf");
                                        lanzar_modal_visualizar_pdf();
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
            } else {
                console.log('manager_eventos_solicitudes_supervivientes nodo vacio', nodo);
            }
        };
        manager_eventos_detalles(document.querySelector('.pizzarra_detalles_solicitud'));


        const crear_nodo_cabecera = () => {
            let nodo = document.createElement('div');
            nodo.className = 'titulo_detalle';

            nodo.innerHTML = `
                <span class="retornar_solicitudes" data-evento="retornar_solicitudes" data-desencadenador = "data-evento"><i
                        class="fas fa-arrow-left retornar_solicitudes" data-evento-heredado="true"></i></span>
                <div class="label_titulo solicitud">
                    aqui va el titulo del la solicitud
                </div>
                `;
            return nodo;
        };

        const crear_nodo_dato = async (data = {}) => {
            let div = document.createElement('div');
            div.className = 'item_dato';
            d = {};
            switch (data.tipo) {
                case 'texto':
                    div.innerHTML = `
                        <div class="font-weight-bold">${data.label}</div>
                        <div>${data.value}</div>
                    `;
                    break;
                case 'imagen':
                    div.innerHTML = `
                        <div class="font-weight-bold text-center">${data.label}</div>
                        <div><img class="w-100" src="${data.value}" alt=""></div>
                    `;
                    break;
                case 'pdf':
                    d = {};
                    d.div_canvas = document.createElement('div');

                    d.div_canvas.setAttribute("data-evento", "ver_pdf_solicitud");
                    d.div_canvas.setAttribute("data-desencadenador", "data-evento");
                    div.innerHTML = `
                        <div class="font-weight-bold text-center">${data.label}</div>
                    `;
                    let datos_canvas = {
                        url_pdf: data.value,
                        classnombre: "canvas_pdf_solicitud"
                    }
                    d.canvas = await construir_miniatura_canvas_pdf(datos_canvas);
                    d.div_canvas.insertAdjacentElement("beforeEnd", d.canvas);
                    div.insertAdjacentElement("beforeEnd", d.div_canvas);
                    break;

                default:
                    break;
            }

            return div;
        };

        const pintar_detalle_solicitud = async () => {

            let nodo_detalles = document.querySelector('.pizzarra_detalles_solicitud');
            let nodo_cabecera = crear_nodo_cabecera();
            nodo_detalles.innerHTML = "";
            nodo_detalles.insertAdjacentElement('beforeEnd', nodo_cabecera);

            if (registro_detalle) {
                nodo_cabecera.querySelector('.label_titulo').innerHTML = registro_detalle.tipo_formato;
                // agregar eventos 

                let array_datos = new Array();
                // label --- nombre columna
                array_datos.push(['Tipo de formato', 'tipo_formato', "texto", 'datos']);
                array_datos.push(['Clave', 'clave', "texto", 'datos']);
                array_datos.push(['Usuario', 'usuario', "texto", 'datos']);
                array_datos.push(['Fecha de solicitud', 'date_created', "texto", 'datos']);
                array_datos.push(['Nombre', 'nombre', "texto", 'datos']);
                array_datos.push(['Domicilio', 'domicilio', "texto", 'datos']);
                array_datos.push(['Teléfono', 'telefono', "texto", 'datos']);
                array_datos.push(['Fecha de nacimiento', 'fecha_nacimiento', "texto", 'datos']);
                array_datos.push(['Edad', 'edad', "texto", 'datos']);
                array_datos.push(['Tipo de identificacion oficial', 'tipo_identificacion_oficial', "texto", 'datos']);
                array_datos.push(['Folio de identificacion oficial', 'folio_identificacion_oficial', "texto", 'datos']);
                array_datos.push(['Tipo de identificacion beneficio', 'tipo_identificacion_beneficio', "texto", 'datos']);
                array_datos.push(['Curp', 'curp', "texto", 'datos']);

                array_datos.push(['Observacion', 'observacion', "texto", 'datos']);
                array_datos.push(['Solicitud PDF', 'url_pdf', "pdf", 'anexos']);
                array_datos.push(['Firma del solicitante', 'url_firma_solicitante', "imagen", 'anexos']);

                let nodo_datos = document.createElement('div');
                nodo_datos.className = "datos_solicitud";

                let nodo_datos_anexos = document.createElement('div');
                nodo_datos_anexos.className = "datos_solicitud_anexos";

                for (let index = 0; index < array_datos.length; index++) {
                    const element = array_datos[index];

                    let dat_columna = registro_detalle[element[1]];

                    if (dat_columna) {
                        let data = {
                            label: element[0],
                            value: dat_columna,
                            tipo: element[2]
                        }
                        let nodo_dato = null;
                        switch (element[3]) {
                            case 'datos':
                                nodo_dato = await crear_nodo_dato(data);
                                nodo_datos.insertAdjacentElement("beforeEnd", nodo_dato);
                                break;
                            case 'anexos':
                                nodo_dato = await crear_nodo_dato(data);
                                nodo_datos_anexos.insertAdjacentElement("beforeEnd", nodo_dato);
                                break;

                            default:
                                break;
                        }
                    }

                }
                nodo_detalles.insertAdjacentElement("beforeEnd", nodo_datos);
                nodo_detalles.insertAdjacentElement("beforeEnd", nodo_datos_anexos);


            } else {

                nodo_cabecera.querySelector('.label_titulo').innerHTML = 'Sin registro';

                let nodo_para_vacio = document.createElement('div');
                nodo_para_vacio.classList = "sin_registro";
                nodo_para_vacio.innerText = 'No se encontro el registro de la solicitud';
                nodo_detalles.insertAdjacentElement('beforeEnd', nodo_para_vacio);

            }


        };

        const lanzar_modal_visualizar_pdf = () => {
            let nodo_cuerpo = document.createElement("div");
            nodo_cuerpo.innerHTML = `
                <div> <iframe class="frame_pdf_solicitud" src="${registro_detalle.url_pdf}" frameborder="0"></iframe> </div>
                `;

            let data = {
                id: "PDF_solicitud_supervivientes",
                titulo: "PDF comprobante de solicitud",
                nodo_cuerpo: nodo_cuerpo,
                className: "clase_div_modal",
            };
            modal_desechable_b4.crear_modal(data);
        };

        // get 
        const get_registro_detalle = () => {
            return registro_detalle;
        };

        return {
            peticion_detalle_solicitud,
            pintar_detalle_solicitud,
            get_registro_detalle
        }

        // --------------------------------
        // termina scope
        // --------------------------------
    })());
})());
