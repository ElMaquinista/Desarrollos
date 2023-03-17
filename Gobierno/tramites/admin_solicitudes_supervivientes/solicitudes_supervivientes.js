const solicitudes_supervivientes = async () => {
    // ocultarLoader();
    let obj_datatable = new datatable_generico();

    let registros_solicitudes_supervivientes = null

    const c_ocultar = 'ocultar';

    const peticion_solicitudes_supervivientes = async () => {
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
                                    }else{
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
                { data: 'id360', title: 'id 360', class: "id360_solicitante" },
                { data: 'nombre', title: 'Nombre', class: "nombre_completo" },
                { data: null, title: 'Fecha de solicitud', class: 'fecha_solicitud' },
                // { data: 'time_updated', title: 'Hora de solicitud', class: 'hora de solicitud' },
                { data: 'tipo_formato', title: 'Tipo de Solicitud', class: "tipo_solicitudes" },
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

    // get
    const get_registros_solicitudes_supervivientes = () => {
        return registros_solicitudes_supervivientes;
    };
    // --------
    return {
        pintar_tabla_solicitudes_supervivientes,
        get_registros_solicitudes_supervivientes
    };
}