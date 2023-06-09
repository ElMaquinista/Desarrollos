const solicitudes_supervivientes = async () => {
    // ocultarLoader();
    let obj_datatable = new datatable_generico();

    let registros_solicitudes_supervivientes = null

    const c_ocultar = 'ocultar';

    const peticion_solicitudes_supervivientes = async (fecha_inicio, fecha_fin) => {
        let peticion = await fetch('./solicitudes_supervivientes.json')
            .then((response) => response.json())
            .then((json) => json);
        console.log("peticion", peticion);
        registros_solicitudes_supervivientes = peticion;

        if (peticion.success) {
            registros_solicitudes_supervivientes = peticion.solicitudes;
        } else {
            registros_solicitudes_supervivientes = null;
        }

        // let peticion = await catalogos_peru.get_contratistas();
        // catalogo_contratistas = peticion;

        return peticion;
    };
    await peticion_solicitudes_supervivientes();

    const manager_eventos_botonera_fuciones = () => {
        let nodo = document.querySelector('.botonera_funciones');
        if (nodo) {
            nodo.addEventListener("click", async function eventos_botonera_funciones(e) {
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
                        return bandera_control;
                    });
                }

                let d = {};

                if (desencadenador && evento) {

                    switch (desencadenador) {
                        case 'data-evento':

                            switch (evento) {
                                case "traer_registro_intervalo":
                                    d = {};
                                    console.log("traer registros por fecha");
                                    d.validacion = validar_para_traer_registros();
                                    if (d.validacion) {
                                        await repintar_tabla_solicitudes_supervivientes();
                                    }
                                    break;
                                case "traer_registros_excel":
                                    console.log("traer registros excel");
                                    break;
                                case "traer_registros_zip":
                                    console.log("trear registros en zip");
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
            console.log('nodo de botonera de funciones no encontrado');
        }
    };
    manager_eventos_botonera_fuciones();

    const manager_eventos_solicitudes_supervivientes = (nodo) => {
        if (nodo) {
            nodo.addEventListener("click", async function eventos_tabla(e) {
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
                        return bandera_control;
                    });
                }

                let d = {};

                if (desencadenador && evento) {

                    switch (desencadenador) {
                        case 'data-evento':

                            switch (evento) {
                                case 'detallar_solicitud':
                                    d = {};
                                    d.nodo_solicitudes = document.querySelector('.pizarra_solicitudes_supervivientes');
                                    d.nodo_solicitudes.classList.add(c_ocultar);

                                    d.nodo_detalles = document.querySelector('.pizzarra_detalles_solicitud');
                                    d.nodo_detalles.classList.remove(c_ocultar);

                                    d.id_ahome_supervivientes = nodo.getAttribute('data-id_ahome_supervivientes');

                                    console.log("d.id_ahome_supervivientes", d.id_ahome_supervivientes);

                                    if (d.id_ahome_supervivientes) {
                                        // hacer peticion de detalles
                                        await detalles_solicitud.peticion_detalle_solicitud(d.id_ahome_supervivientes);
                                        // pintar los detalles
                                        await detalles_solicitud.pintar_detalle_solicitud();
                                    } else {
                                        console.log('Identificador no encontrado');
                                    }
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

    async function pintar_tabla_solicitudes_supervivientes() {
        obj_datatable.id_contenedor_datatable = "div_solicitudes_supervivientes";
        obj_datatable.id_tabla = "tabla_solicitudes_supervivientes";
        obj_datatable.className_tabla = "tabla_solicitudes_supervivientes responsive nowrap table table-hover";
        let datos_tabla = registros_solicitudes_supervivientes;
        // console.log("datos_tabla", datos_tabla);
        if (datos_tabla !== null) {
            obj_datatable.datos_tabla = datos_tabla;
            obj_datatable.columnas_tabla = [// reeemplazado
                { data: 'id', title: 'Folio', class: "id_ahome_supervivientes" },
                { data: 'nombre', title: 'Nombre', class: "nombre_completo" },
                { data: null, title: 'Fecha de solicitud', class: 'fecha_solicitud' },
                // { data: 'time_updated', title: 'Hora de solicitud', class: 'hora de solicitud' },
                { data: 'tipo_formato', title: 'Tipo de Solicitud', class: "tipo_solicitudes" },
                { data: 'detalles.alias', title: 'test Detalles', class: "tipo_solicitudes" },
                { data: null, title: 'Acciones', class: "acciones" },
            ];
            // obj_datatable.orden = [[3, "desc"], [4, "desc"], [1, "desc"]];
            obj_datatable.columnDefs = [// reemplazado
                // {
                //     targets: "_all",
                //     sortable: false
                // },
                {
                    targets: "fecha_solicitud",
                    data: null,
                    defaultContent: ``,
                    render: function (data, type, row) {

                        return row.date_created + " " + row.time_created;
                    }
                },
                {
                    targets: "acciones",
                    data: null,
                    defaultContent: ``,
                    render: function (data, type, row) {
                        return `<button type="button" class =" btn btn-dark btn-sm btn_acceder_sala" 
                                        data-id360 = "${row.id360}"
                                        data-nombre = "${row.nombre}"
                                        data-id_ahome_supervivientes = "${row.id}"
                                        data-correo = "${row.correo}"
                                        data-desencadenador = "data-evento"
                                        data-evento= "detallar_solicitud"
                                        ><i class="fas fa-info-circle" data-evento-heredado="true"></i></button>`;
                    }
                }
            ];
        } else {
            console.log("datos nulos");
        }
        obj_datatable.habiliar_filtros_encabezado = true;
        obj_datatable.crear_nodo_datatable();
        await obj_datatable.construir_tabla();
        // console.log("nodo_datatable", obj_datatable.nodo_datatable);s
        // obj_datatable.nodo_datatable.addEventListener("click", evento_datatable);

        // incrustar nodo datatable a nodo existente 
        let nodo_destino = document.querySelector('.panel_solicitudes_supervivientes');
        nodo_destino.insertAdjacentElement("beforeEnd", obj_datatable.nodo_datatable);

        manager_eventos_solicitudes_supervivientes(obj_datatable.nodo_datatable);

        return obj_datatable;
    }
    pintar_tabla_solicitudes_supervivientes();



    const pintar_nueva_solicitud = (data) => {
        data = {
            "clave": "35/45/64/6879",
            "url_pdf": "https://lineamientos.s3.amazonaws.com/Instituciones/solicitudes_ahome/supervivientes/45/supervivientes68f1061c.pdf",
            "estado": "1",
            "date_updated": "2023-03-13",
            "tipo_formato": "SUPERVIVENCIA",
            "date_created": "2023-03-13",
            "id360": "9991336774",
            "fecha_nacimiento": "1991-09-19",
            "url_firma_solicitante": "https://lineamientos.s3.amazonaws.com/Instituciones/solicitudes_ahome/supervivientes/45/firma8a738f62.png",
            "nombre": "Demo nuevo renglon para usar socket",
            "edad": "31 años",
            "time_updated": "17:46:51",
            "domicilio": "DEMO",
            "folio_identificacion_oficial": "E5S4G46EA5",
            "time_created": "17:46:50",
            "tipo_identificacion_oficial": "PASAPORTE",
            "id": "100",
            "tipo_identificacion_beneficio": "PENSIONADO IMSS",
            "curp": "SFGE654654EFGEFG46",
            "observacion": "demo",
            "activo": "1"
        };
        obj_datatable.agregar_renglon_datatable(data, "id");
    };

    const despintar_solicitud = (data) => {
        // despintar renglon 
        obj_datatable.buscar_eliminar_renglon_datatable_idendificador("id", "80");

        // sacar usuario de la vista de detalle 
    };

    // repintar por nueva peticion
    const repintar_tabla_solicitudes_supervivientes = async () => {
        // validacion antesde borrar y destruir

        let validacion = validar_para_traer_registros();

        if (!validacion) {
            return false;
        }

        // lanzar loader;

        // destruir la tabla 
        obj_datatable.destruir_tabla();
        // limpiar el div pizarra 
        document.querySelector('.panel_solicitudes_supervivientes').innerHTML = "";
        // peticion de los nuevos datos

        registros_solicitudes_supervivientes = null;

        registros_solicitudes_supervivientes

        let s_fecha_inicio = document.querySelector(".fecha_inicio");
        let s_fecha_fin = document.querySelector(".fecha_fin");

        await peticion_solicitudes_supervivientes(s_fecha_inicio, s_fecha_fin);

        // pintar los nuevos datos de peticion
        pintar_tabla_solicitudes_supervivientes();

        // ocultar loader

        

    }


    // validar para peticion

    const validar_nodo = (nodo) => {
        // el nodo debe tener sus validaciones requerias en forma de el atributo data
        if (nodo) {
            // que no tenga cadena vacia 

            // que tenga la longitud maxima 

            // que tenga la longitud minima 


        }

    }

    const validar_para_traer_registros = () => {
        // retorna un boolean indica estado de validacion 
        // fechas completas 
        let nodo_fecha_inicio = document.querySelector('#fecha_inicio');

        let nodo_fecha_fin = document.querySelector('#fecha_fin');

        if (!nodo_fecha_inicio || !nodo_fecha_fin) {
            console.log("nodo fecha inicio", nodo_fecha_inicio, "nodo fecha fin", nodo_fecha_inicio);
            return false;
        }

        let fecha_inicio = nodo_fecha_inicio.value;
        let fecha_fin = nodo_fecha_fin.value;

        if (!fecha_inicio || !fecha_fin) {
            console.log('valor no valido', fecha_inicio, fecha_fin);
            return false;
        }

        // fecha de inicio debe ser menor o igual que fecha final

        let date_inicio = new Date(fecha_inicio);
        let date_fin = new Date(fecha_fin);

        if (date_inicio > date_fin) {
            console.log('la fecha de inicio debe ser menor o igual a la fecha de fin');
            lanzar_aviso('La fecha de inicio debe ser menor o igual que la fecha Final');
            return false;
        }

        // retornar si estado de validacion

        return true;

    };

    const lanzar_aviso = (texto) => {
        alert(texto);
    };

    // get
    const get_registros_solicitudes_supervivientes = () => {
        return registros_solicitudes_supervivientes;
    };
    const get_datatable = () => {
        return obj_datatable;
    };

    // --------
    return {
        pintar_tabla_solicitudes_supervivientes,
        get_registros_solicitudes_supervivientes,
        pintar_nueva_solicitud,
        despintar_solicitud,
        get_datatable
    };
}