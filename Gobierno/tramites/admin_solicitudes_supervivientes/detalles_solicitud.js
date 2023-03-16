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
                            return bandera_control;
                        });
                    }


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

        const crear_nodo_dato = (data = {}) => {
            let div = document.createElement('div');
            switch (data.tipo) {
                case 'texto':
                    div.innerHTML = `
                    <div class="item_dato">
                        <div class="font-weight-bold">${data.label}</div>
                        <div>${data.value}</div>
                    </div>`;
                    break;

                default:
                    break;
            }

            return div;
        };

        const pintar_detalle_solicitud = () => {

            let nodo_detalles = document.querySelector('.pizzarra_detalles_solicitud');
            let nodo_cabecera = crear_nodo_cabecera();
            nodo_detalles.innerHTML = "";
            nodo_detalles.insertAdjacentElement('beforeEnd', nodo_cabecera);

            if (registro_detalle) {
                nodo_cabecera.querySelector('.label_titulo').innerHTML = registro_detalle.tipo_formato;
                // agregar eventos 
                manager_eventos_detalles(nodo_detalles);

                let array_datos = new Array();
                // label --- nombre columna
                array_datos.push(['Clave', 'clave', "texto"]);
                array_datos.push(['Estado', 'estado', "texto"]);
                array_datos.push(['Fecha de solicitud', 'date_created', "texto"]);
                array_datos.push(['Tipo de formato', 'tipo_formato', "texto"]);
                array_datos.push(['Fecha de nacimiento', 'fecha_nacimiento', "texto"]);
                array_datos.push(['Nombre', 'nombre', "texto"]);
                array_datos.push(['Edad', 'edad', "texto"]);
                array_datos.push(['Domicilio', 'domicilio', "texto"]);
                array_datos.push(['Folio de identificacion oficial', 'folio_identificacion_oficial', "texto"]);
                array_datos.push(['Tipo de identificacion oficial', 'tipo_identificacion_oficial', "texto"]);
                array_datos.push(['Tipo de identificacion beneficio', 'tipo_identificacion_beneficio', "texto"]);
                array_datos.push(['Curp', 'curp', "texto"]);
                array_datos.push(['Observacion', 'observacion', "texto"]);

                for (const key in registro_detalle) {

                    for (let j = 0; j < array_datos.length; j++) {
                        const element = array_datos[j];

                        if (element[1] === key) {
                            console.log(key);

                            let data = {
                                label: element[0],
                                value: registro_detalle[key],
                                tipo: element[2]
                            }
                            let nodo_dato = crear_nodo_dato(data);
                            nodo_detalles.insertAdjacentElement("beforeEnd", nodo_dato);
                        }

                    }
                }

            } else {

                nodo_cabecera.querySelector('.label_titulo').innerHTML = 'Sin registro';

                let nodo_para_vacio = document.createElement('div');
                nodo_para_vacio.classList = "sin_registro";
                nodo_para_vacio.innerText = 'No se encontro el registro de la solicitud';
                nodo_detalles.insertAdjacentElement('beforeEnd', nodo_para_vacio);



            }


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
