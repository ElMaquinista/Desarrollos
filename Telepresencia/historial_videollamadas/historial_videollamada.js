const historico_genral = (() => {


    const crear_tabla_reporteGeneral = () => {
        let arr_data = null;

        if (peticion_llamadas_data_ext) {
            arr_data = peticion_llamadas_data_ext.data;

            ins_DTbitacora.id_contenedor_datatable = "div_datatableReporteGenenral";
            ins_DTbitacora.id_tabla = "tabla_ReporteGeneral";
            ins_DTbitacora.className_tabla = "reporteGeneral";
            ins_DTbitacora.datos_tabla = arr_data;
            inst_DTgeneral.columnas_tabla = [
                // -------------------- data de llamada
                { data: 'id_llamada', title: 'Folio videollamada', class: "id_llamada" },
                { data: null, title: 'Fecha y hora de registro de llamada', class: 'registro_fecha_hora' },
                { data: null, title: 'Fecha y hora de inicio de llamada', class: 'llamada_fecha_hora_inicio' },
                { data: null, title: 'Fecha y hora de fin de llamada', class: 'llamada_fecha_hora_fin' },
                { data: 'detalle.renglon.quien_corta', title: 'Quien corta', class: 'llamada_quien_corta' },
                { data: 'detalle.renglon.tipo_consulta', title: 'Tipo de llamada', class: "llamada_tipo_consulta" },
                { data: 'detalle.renglon.lsm', title: 'Lenguaje de Señas', class: "llamada_lsm" },
                { data: 'detalle.renglon.duracion_llamada', title: 'Duracion de llamada', class: 'llamada_duracion' },
                { data: 'detalle.renglon.resultado_llamada', title: 'Resultado de llamada', class: 'llamada_reesultado_llamada' }, // fue contesatda? cancelada?
                // -------------------- data operador
                { data: 'detalle.renglon.id360_operador', title: 'Codigo Agente (el último)', class: 'llamada_id360_operador' }, //* es el ultimo en caso de que sea redirigida
                { data: null, title: 'ID usuario (operador)', class: null },
                { data: null, title: 'Nombre agente', class: 'llamada_nombre_operador' }, //! pendiente traer la data del operador 
                { data: 'id_llamada', title: 'Gestion ID', class: 'id_llamada' },
                // -------------------- data cliente
                { data: 'detalle.renglon.id360_cliente', title: 'ID cliente', class: 'llamada_id360_cliente' },
                { data: null, title: 'Nombre y apellido', class: 'llamada_nombre_cliente' },
                { data: 'detalle.renglon.telefono_cliente', title: 'Teléfono', class: 'llamada_telefono_cliente' },
                { data: 'detalle.renglon.tipo_documento', title: 'Tipo de documento', class: 'llamada_tipo_documento' },
                { data: 'detalle.renglon.no_documento', title: 'No. de documento', class: 'llamada_no_documento' },
                // -------------------- data cac
                { data: null, title: 'Gestion Seleccionada', class: null }, // tipo de gestion que selecciono el cliente
                { data: 'detalle.renglon.region_identificador', title: 'Region', class: null },
                { data: 'detalle.renglon.cac_identificador', title: 'CAC', class: null },
                { data: 'detalle.renglon.modulo_identificador', title: 'Modulo', class: null },
                { data: 'detalle.renglon.pregunta1', title: 'Pregunta 1', class: 'llamada_pregunta1' }, //! traer la data de las respuestas de satisfaccion del cliente
                { data: 'detalle.renglon.pregunta2', title: 'Pregunta 2', class: 'llamada_pregunta2' },
                { data: 'detalle.renglon.pregunta3', title: 'Pregunta 3', class: 'llamada_pregunta3' },
                { data: 'detalle.renglon.pregunta4', title: 'Pregunta 4', class: 'llamada_pregunta4' },
                { data: null, title: 'Estado Retroalimentación', class: 'llamada_retroalimentacion' },
            ];
            ins_DTbitacora.columnDefs = [
                {
                    targets: "_all",
                    sortable: false
                },
                {
                    targets: "registro_fecha_hora",
                    render: function (data, type, row) {
                        let contenido = "";
                        if (row.fecha !== undefined && row.fecha !== null && row.fecha !== "") {
                            contenido += " " + row.fecha;
                        }
                        if (row.hora !== undefined && row.hora !== null && row.hora !== "") {
                            contenido += " " + row.hora;
                        }
                        return contenido;
                    }
                },
                {
                    targets: "llamada_fecha_hora_inicio",
                    render: function (data, type, row) {
                        let contenido = "";
                        let renglon = row.detalle.renglon;
                        if (renglon.fecha_inicio_llamada !== undefined && renglon.fecha_inicio_llamada !== null && renglon.fecha_inicio_llamada !== "") {
                            contenido += " " + row.hora_inicio_llamada;
                        }
                        if (renglon.hora_inicio_llamada !== undefined && renglon.hora_inicio_llamada !== null && renglon.hora_inicio_llamada !== "") {
                            contenido += " " + row.hora;
                        }
                        return contenido;
                    }
                },
                {
                    targets: "llamada_fecha_hora_fin",
                    render: function (data, type, row) {
                        let contenido = "";
                        let renglon = row.detalle.renglon;
                        if (renglon.fecha_fin_llamada !== undefined && renglon.fecha_fin_llamada !== null && renglon.fecha_fin_llamada !== "") {
                            contenido += " " + renglon.fecha_fin_llamada;
                        }
                        if (renglon.hora_fin_llamada !== undefined && renglon.hora_fin_llamada !== null && renglon.hora_fin_llamada !== "") {
                            contenido += " " + renglon.hora_fin_llamada;
                        }
                        return contenido;
                    }
                },
                {
                    targets: "llamada_nombre_operador",
                    render: function (data, type, row) {
                        let contenido = "";
                        let renglon = row.detalle.renglon;
                        if (renglon.nombre_operador !== undefined && renglon.nombre_operador !== null && renglon.nombre_operador !== "") {
                            contenido += " " + renglon.nombre_operador;
                        }
                        if (renglon.apellido_paterno_operador !== undefined && renglon.apellido_paterno_operador !== null && renglon.apellido_paterno_operador !== "") {
                            contenido += " " + renglon.apellido_paterno_operador;
                        }
                        if (renglon.apellido_materno_operador !== undefined && renglon.apellido_materno_operador !== null && renglon.apellido_materno_operador !== "") {
                            contenido += " " + renglon.apellido_materno_operador;
                        }
                        return contenido;
                    }
                },
                {
                    targets: "llamada_nombre_cliente",
                    render: function (data, type, row) {
                        let contenido = "";
                        let renglon = row.detalle.renglon;
                        if (renglon.nombre_cliente !== undefined && renglon.nombre_cliente !== null && renglon.nombre_cliente !== "") {
                            contenido += " " + renglon.nombre_cliente;
                        }
                        if (renglon.apellido_paterno_cliente !== undefined && renglon.apellido_paterno_cliente !== null && renglon.apellido_paterno_cliente !== "") {
                            contenido += " " + renglon.apellido_paterno_cliente;
                        }
                        if (renglon.apellido_materno_cliente !== undefined && renglon.apellido_materno_cliente !== null && renglon.apellido_materno_cliente !== "") {
                            contenido += " " + renglon.apellido_materno_cliente;
                        }
                        return contenido;
                    }
                },
                {
                    targets: "llamada_retroalimentacion",
                    render: function (data, type, row) {
                        let contenido = "";
                        let renglon = row.detalle.renglon;
                        // verificar las pregntas de retroalimentacion
                        let completado = true;
                        for (let i = 1; i <= 5; i++) {
                            let pregunta = renglon['pregunta' + i];
                            if (!!pregunta) {

                            } else {
                                renglon = false;
                                break;
                            }
                        }

                        return contenido;
                    }
                },
            ];
            ins_DTbitacora.fn_rowCallback = function (row, data, index) {
                // console.log("fn_rowCallback row", row);
                // console.log("fn_rowCallback data", data);
                // console.log("fn_rowCallback index", index);
            }

            ins_DTbitacora.crear_nodo_datatable();
            ins_DTbitacora.construir_tabla();

            return ins_DTbitacora.nodo_datatable;
        } else {
            return null;
        }
    };

    let obj_fullcalendar = null;
    const crear_nodo_fullcalendar = () => {
        let nodo_fullcalendar = document.createElement('div');
        nodo_fullcalendar.id = "";
        nodo_fullcalendar.className = "div_contenedor_fullcalendar_porfecha";
        nodo_fullcalendar.innerHTML = `<div id='fullcalendar_llamadas_fecha'></div>`;

        let calendarEl = nodo_fullcalendar.getElementById('fullcalendar_llamadas_fecha');

        obj_fullcalendar = new FullCalendar.Calendar(calendarEl, {
            initialDate: '2023-01-12',
            editable: true,
            selectable: true,
            businessHours: true,
            dayMaxEvents: true, // allow "more" link when too many events
            events: [
                {
                    title: 'All Day Event',
                    start: '2023-01-01'
                },
                {
                    title: 'Long Event',
                    start: '2023-01-07',
                    end: '2023-01-10'
                },
                {
                    groupId: 999,
                    title: 'Repeating Event',
                    start: '2023-01-09T16:00:00'
                },
                {
                    groupId: 999,
                    title: 'Repeating Event',
                    start: '2023-01-16T16:00:00'
                },
                {
                    title: 'Conference',
                    start: '2023-01-11',
                    end: '2023-01-13'
                },
                {
                    title: 'Meeting',
                    start: '2023-01-12T10:30:00',
                    end: '2023-01-12T12:30:00'
                },
                {
                    title: 'Lunch',
                    start: '2023-01-12T12:00:00'
                },
                {
                    title: 'Meeting',
                    start: '2023-01-12T14:30:00'
                },
                {
                    title: 'Happy Hour',
                    start: '2023-01-12T17:30:00'
                },
                {
                    title: 'Dinner',
                    start: '2023-01-12T20:00:00'
                },
                {
                    title: 'Birthday Party',
                    start: '2023-01-13T07:00:00'
                },
                {
                    title: 'Click for Google',
                    url: 'http://google.com/',
                    start: '2023-01-28'
                }
            ]
        });

    };

    const aditamentos_controles_generales = () => {
        $(document).ready(function () {
            $('.js-example-basic-multiple').select2();
        });
    };

    const test_encontrar_valor = ()=>{
        let arr = [
            { name: "string 1", value: "this", other: "that" },
            { name: "string 2", value: "this", other: "that" }
        ];

        let obj = arr.find(o => o.name === 'string 3'); // en caso de no ser encontrado regresa undefined
        console.log("encontrar: ", obj);
    };
    test_encontrar_valor();

    const lanzador = () => {
        let nodo_objetivo_fullcalendar = document.querySelector("#contenedor_fullcalendar_llamadas_fecha");


        // nodo_objetivo_fullcalendar.insertAdjacentHTML
        aditamentos_controles_generales();
    };
    lanzador();

    return {
        lanzador,
        crear_nodo_fullcalendar,
        test_encontrar_valor
    };

})();

