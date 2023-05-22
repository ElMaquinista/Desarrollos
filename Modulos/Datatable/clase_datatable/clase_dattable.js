//-------------------------------------
//
//-------------------------------------
class datatable_generico {
    id_contenedor_datatable = "datatable_default"; // se puede reemplazar
    className_contenedor_datatable = "datatable_default"; // se puede reemplazar
    nodo_datatable = null; // objeto padre que contiene toda la tabla
    objeto_datatable = null; // objeto datatable
    id_tabla = "deafult"; // se puede reeemplazar
    className_tabla = "deafult"; // se puede reeemplazar
    datos_tabla = [//default test
        {
            id360: 1,
            nombre: "nombre",
            apellido_paterno: "garcia",
            estado: "disponible"
        },
        {
            id360: 2,
            nombre: "nombre 2",
            apellido_paterno: "Flores",
            estado: "disponible"
        }
    ];
    columnas_tabla = [// defecto, reemplazar
        { data: 'id360', title: 'id 360' },
        { data: 'nombre', title: 'Nombre' },
        { data: null, title: 'Estado', class: "controles" },
        // { data: 'id360', title: 'Id360' },
        // { data: 'id_sala', title: 'Id sala' },
        // { data: null, title: 'Controles' },
    ];
    columnDefs = [// defecto, reemplazar
        {
            targets: "_all",
            sortable: false
        },
        {
            targets: 1,
            render: function (data, type, row) {
                let contenido = data;
                if (row.apellido_paterno !== null && row.apellido_paterno !== "" && row.apellido_paterno !== undefined) {
                    contenido += " " + row.apellido_paterno;
                }
                // if (row.apellido_materno !== null && row.apellido_materno !== "" && row.apellido_materno !== undefined) {
                //     contenido += " " + row.apellido_materno;
                // }
                return contenido;
            }
        },
        {
            targets: -1,
            data: null,
            defaultContent: ``,
            render: function (data, type, row) {
                return `<button type="button" class =" btn btn-info btn-sm btn_acceder_sala" id-data-360 = "${row.id360}" id="id360_${row.id360}">Asignar</button>`;
            }
        }
    ];
    orden = [// Por Defecto reeplazar
        [0, "desc"]
    ];
    habiliar_filtros_encabezado = false;
    fn_rowCallback = function (row, data, index) { };
    obj_constr_datatable_ext = {};
    crear_nodo_datatable() {

        let id_contenedor_datatable = this.id_contenedor_datatable;
        let className_contenedor_datatable = this.className_contenedor_datatable;
        let div_general = document.createElement("div");
        div_general.id = id_contenedor_datatable;
        div_general.className = className_contenedor_datatable + "table-hover";
        let columnas = this.columnas_tabla;
        let html_columnas = "";
        let id_tabla = this.id_tabla;
        let className_tabla = this.className_tabla;
        for (let index = 0; index < columnas.length; index++) {
            let clase_columna = "";

            if (columnas[index].class) {
                clase_columna = columnas[index].class;
            }

            html_columnas += `<th class="` + clase_columna + `">` + columnas[index].title + `</th>`;
        }

        div_general.innerHTML = `
                <table id="` + id_tabla + `" class="` + className_tabla + ` display"
                    style="width:100%">
                    <thead>
                        <tr>
                            ` + html_columnas + `
                        </tr>
                    </thead>
                </table>
        `;
        return div_general;
    }

    async construir_tabla() {
        this.nodo_datatable = this.crear_nodo_datatable();
        let nodo_datable = this.nodo_datatable;
        let objeto_datatable = this.objeto_datatable;
        let id_tabla = this.id_tabla;
        let columnas_tabla = this.columnas_tabla;
        let columnas_def = this.columnDefs;
        let datos_tala = this.datos_tabla;
        let order = this.orden;
        let funcion_rowCallback = this.fn_rowCallback;
        let obj_constr_ext = this.obj_constr_datatable_ext;

        let obj_contructor = {
            "aProcessing": true,
            "aServerSide": true,
            "Destroy": true,
            "language": {
                "url": "https://cdn.datatables.net/plug-ins/1.13.4/i18n/es-ES.json"
            },
            // "initComplete": Filtro_Encabezados(false),
            data: datos_tala,
            columns: columnas_tabla,
            columnDefs: columnas_def,
            order: order,
            initComplete: "",
            rowCallback: funcion_rowCallback,
        };

        let extendido = Object.assign(obj_contructor, obj_constr_ext);

        console.log("obj_contructor", obj_contructor);

        objeto_datatable = $(nodo_datable).children("#" + id_tabla).DataTable(
            obj_contructor
        );

        datatble = objeto_datatable;

        this.objeto_datatable = objeto_datatable;
        return true;
    }
    incrustar_tabla(nodo_incrustar) {
        let nodo_datatable = this.nodo_datatable;
        nodo_incrustar.appendChild(nodo_datatable);
    }

    eliminar_renglon_datatable(index) {
        let objeto_datatable = this.objeto_datatable;
        objeto_datatable.row(':eq(' + index + ')').remove().draw();
    }
    buscar_renglon_datatable(columna, valor) {
        let objeto_datatable = this.objeto_datatable;
        let x = 0;
        let solicitud = valor;
        let indice = -1;
        while (true) {

            const row = objeto_datatable.row(':eq(' + x + ')')
            const row_data = row.data();

            if (!row_data)
                break;
            // console.log(row);
            if (row_data[columna].toString() === solicitud.toString()) {

                indice = x;
                break;
            }
            x++;
        }
        // console.log("itinerancia", indice);
        return indice;
    }
    agregar_renglon_datatable(datos_columnas, identificador) {
        let objeto_datatable = this.objeto_datatable;
        this.buscar_eliminar_renglon_datatable_idendificador(identificador, datos_columnas[identificador]);
        objeto_datatable.row.add(datos_columnas).draw(false);
    }
    buscar_eliminar_renglon_datatable_idendificador(llave, valor) {
        let objeto_datatable = this.objeto_datatable;
        let index = this.buscar_renglon_datatable(llave, valor);
        if (index > -1) {
            this.eliminar_renglon_datatable(index);
        }
    }
    modificar_renglon_datatable(llave_busqueda, valor_busqueda, llave, valor) {
        let objeto_datatable = this.objeto_datatable;
        let index = this.buscar_renglon_datatable(llave_busqueda, valor_busqueda);
        // console.log("index_nusqueda", index)
        if (index > -1) {
            // console.log("datos_row_llave", objeto_datatable.row(index).data()[llave]);
            objeto_datatable.row(index).data()[llave] = valor;
            let nuevo_row = objeto_datatable.row(index).data();
            this.eliminar_renglon_datatable(index);
            objeto_datatable.row.add(nuevo_row).draw(true);
        }
    }
    dibujar_tabla() {
        this.objeto_datatable.draw();
    }
    destruir_tabla() {
        let objeto_datatable = this.objeto_datatable;
        objeto_datatable.destroy();
    }

    get nodo_datatable() {
        return this.nodo_datatable;
    }
    get objeto_datatable() {
        return this.objeto_datatable;
    }
    get id_tabla() {
        return this.id_tabla;
    }
    set id_tabla(nuevo_id) {
        this.id_tabla = nuevo_id;
    }
    get className_tabla() {
        return this.className_tabla;
    }
    set className_tabla(nuevo_classname) {
        this.className_tabla = nuevo_classname;
    }
    get datos_tabla() {
        return this.datos_tabla;
    }
    set datos_tabla(in_datos) {
        this.datos_tabla = in_datos;
    }
    get columnas_tabla() {
        return this.columnas_tabla;
    }
    set columnas_tabla(data) {
        this.columnas_tabla = data;
    }
    get columnDefs() {
        return this.columnDefs;
    }
    set columnDefs(data) {
        this.columnDefs = data;
    }
    get id_contenedor_datatable() {
        return this.id_contenedor_datatable;
    }
    set id_contenedor_datatable(data) {
        this.id_contenedor_datatable = data;
    }
    get className_contenedor_datatable() {
        return this.className_contenedor_datatable;
    }
    set className_contenedor_datatable(data) {
        this.className_contenedor_datatable = data;
    }
    get orden() {
        return this.orden;
    }
    set orden(data) {
        this.orden = data;
    }
    get habiliar_filtros_encabezado() {
        return this.habiliar_filtros_encabezado;
    }
    set habiliar_filtros_encabezado(data) {
        this.habiliar_filtros_encabezado = data;
    }
    get fn_rowCallback() {
        return this.fn_rowCallback;
    }
    set fn_rowCallback(funcion) {
        this.fn_rowCallback = funcion;
    }

    get obj_constr_datatable_ext() {
        return this.obj_constr_datatable_ext;
    }
    set obj_constr_datatable_ext(data) {
        this.obj_constr_datatable_ext = data;
    }

}


function test_crear_tabla() {
    let data_test = new datatable_generico();
    data_test.id_contenedor_datatable = "hola";
    data_test.id_tabla = "tabla_creditos";
    data_test.className_tabla = "tabla_creditos";
    data_test.datos_tabla = [//default test
        {
            id360: 1,
            nombre: "nombre",
            apellido_paterno: "garcia",
            estado: "disponible",
            ocupacion: "constructor",
            velocidad: "20",
            pendiente: "1",
            tangente: "2",
            radio: "3",
            extra: {
                extra: "extra"
            },
            bitacora: [
                {
                    id_catalogo: "1",
                    evento: "registro de llamada"
                }
            ]
        },
        {
            id360: 2,
            nombre: "nombre 2",
            apellido_paterno: "Flores",
            estado: "disponible",
            ocupacion: "lector",
            velocidad: "20",
            pendiente: "3",
            tangente: "2",
            radio: "3",
            extra: {
                extra: "extra"
            },
            bitacora: [
                {
                    id_catalogo: "1",
                    evento: "registro de llamada"
                }
            ]
        },
        {
            id360: 3,
            nombre: "nombre 2",
            apellido_paterno: "Flores",
            estado: "disponible",
            ocupacion: "lector",
            velocidad: "30",
            pendiente: "2",
            tangente: "2",
            radio: "3",
            extra: {
                extra: "extra"
            },
            bitacora: [
                {
                    id_catalogo: "1",
                    evento: "registro de llamada"
                }
            ]
        },
        {
            id360: 4,
            nombre: "nombre 2",
            apellido_paterno: "Flores",
            estado: "disponible",
            ocupacion: "lector",
            velocidad: "10",
            pendiente: "3",
            tangente: "2",
            radio: "3",
            extra: {
                extra: "extra"
            },
            bitacora: [
                {
                    id_catalogo: "1",
                    evento: "registro de llamada"
                }
            ]
        },
        {
            id360: 5,
            nombre: "nombre 2",
            apellido_paterno: "Flores",
            estado: "disponible",
            ocupacion: "lector",
            velocidad: "20",
            pendiente: "3",
            tangente: "2",
            radio: "3",
            extra: {
                extra: "extra"
            },
            bitacora: [
                {
                    id_catalogo: "1",
                    evento: "registro de llamada"
                }
            ]
        },
        {
            id360: 6,
            nombre: "nombre 2",
            apellido_paterno: "Flores",
            estado: "disponible",
            ocupacion: "lector",
            velocidad: "10",
            pendiente: "3",
            tangente: "2",
            radio: "3",
            extra: {
                extra: "extra"
            },
            bitacora: [
                {
                    id_catalogo: "1",
                    evento: "registro de llamada"
                }
            ]
        },
        {
            id360: 7,
            nombre: "nombre 2",
            apellido_paterno: "Flores",
            estado: "disponible",
            ocupacion: "lector",
            velocidad: "10",
            pendiente: "1",
            tangente: "2",
            radio: "3",
            extra: {
                extra: "extra"
            },
            bitacora: [
                {
                    id_catalogo: "1",
                    evento: "registro de llamada"
                }
            ]
        },
        {
            id360: 8,
            nombre: "nombre 2",
            apellido_paterno: "Flores",
            estado: "disponible",
            ocupacion: "lector",
            velocidad: "10",
            pendiente: "1",
            tangente: "2",
            radio: "3",
            extra: {
                extra: "extra"
            },
            bitacora: [
                {
                    id_catalogo: "1",
                    evento: "registro de llamada"
                }
            ]
        },
    ];
    data_test.columnas_tabla = [
        { data: null, title: 'id 360', class: 'detalles_renglon', defaultContent: `<button type="button" class =" btn btn-success btn-sm btn_acceder_sala"" data-evento="detalles_renglon">ver detalles</button>` },
        { data: 'id360', title: 'id 360' },
        { data: 'nombre', title: 'Nombre', class: "nombre" },
        { data: 'estado', title: 'estado' },
        { data: 'ocupacion', title: 'ocupacion' },
        { data: 'velocidad', title: 'velocidad' },
        { data: 'pendiente', title: 'pendiente', class: "pendiente" },
        { data: 'tangente', title: 'tangente' },
        { data: 'radio', title: 'radio' },
        { data: null, title: 'Estado', class: "controles extra" },
        { data: null, title: 'Estado', class: "controles extra" },
    ];
    data_test.obj_constr_datatable_ext = {
        colReorder: true,
        responsive: true,
        // scrollY: "300px",
        scrollX: true,
        scrollCollapse: true,
        paging: false,
        fixedColumns: {
            left: 1,
            right: 1
        },
        "bFilter": true,
        "bInfo": true,
        "bAutoWidth": true,
        dom: 'Bfrtip',
        // buttons: [
        //     'copyHtml5',
        //     'excelHtml5',
        //     'csvHtml5',
        //     'pdfHtml5',
        //     'colvis',
        // ],
        buttons: [
                'copyHtml5',
                'excelHtml5',
                'csvHtml5',
            {
                text: 'PDF',
                extend: 'pdfHtml5',
                footer: true,
                header: true,
                exportOptions: {
                    stripHtml: true,
                    stripNewlines: false,
                    // columns: ':visible'
                },
                // pageSize: 'LEGAL',
                customize: function (doc) {

                    // Get the row data in in table order and search applied
                    var table = $('#tabla_creditos').DataTable();
                    var rowData = table.rows({ order: 'applied', search: 'applied' }).data();
                    var headerLines = 0;  // Offset for accessing rowData array

                    var newBody = []; // this will become our new body (an array of arrays(lines))
                    // testeo de objetos 
                    console.log("doc", doc);
                    console.log(" doc.content[1]", doc.content[1]);
                    console.log(" doc.content[0]", doc.content[0]);
                    console.log(" doc.content", doc.content);

                    console.log("doc.content[1].table.body", doc.content[1].table.body);


                    //Loop over all lines in the table
                    doc.content[1].table.body.forEach(function (line, i) {

                        // Remove detail-control column
                        newBody.push(
                            // las columnas 
                            [line[1], line[2], line[3], line[4], line[9]]
                        );

                        if (line[0].style !== 'tableHeader' && line[0].style !== 'tableFooter') {

                            var data = rowData[i - headerLines];

                            console.log("data renglon", data)

                            // Append child data, matching number of columns in table
                            // las celdas deben de ser las mismas que los encabezados, deben ser la misma cantidad
                            newBody.push(
                                [
                                    { text: '** Child data:', style: 'defaultStyle' },
                                    { text: data.nombre, style: 'defaultStyle' },
                                    { text: data.ocupacion, style: 'defaultStyle' },
                                    { text: '<div>hola</div>', style: 'defaultStyle' },
                                    { text: '', style: 'defaultStyle' },
                                ]
                            );

                        } else {
                            headerLines++;
                        }

                    });

                    //Overwrite the old table body with the new one.
                    doc.content[1].table.headerRows = 1;
                    //doc.content[1].table.widths = [50, 50, 50, 50, 50, 50];
                    doc.content[1].table.body = newBody;
                    doc.content[1].layout = 'lightHorizontalLines';

                    //.---------
                    // console.log("newBody.slice();", newBody.slice());
                    // doc.content[2] = {...doc.content[1]};
                    // doc.content[2].table.headerRows = 1;
                    // doc.content[2].table.body = newBody.slice();s
                    // doc.content[2].table.body = [[
                    //     { text: '** Child data:', style: 'defaultStyle' },
                    //     { text: "", style: 'defaultStyle' },
                    //     { text: "", style: 'defaultStyle' },
                    //     { text: '<div>hola</div>', style: 'defaultStyle' },
                    //     { text: '', style: 'defaultStyle' },
                    // ]];
                    //.............

                    doc.styles = {
                        subheader: {
                            fontSize: 10,
                            bold: true,
                            color: 'black'
                        },
                        tableHeader: {
                            bold: true,
                            fontSize: 10.5,
                            color: 'black'
                        },
                        lastLine: {
                            bold: true,
                            fontSize: 11,
                            color: 'blue'
                        },
                        defaultStyle: {
                            fontSize: 5,
                            color: 'black',
                            text: 'center',
                            // background: "red"
                        }
                    };
                }
            },
            {
                extend: 'excelHtml5',
                text: '<i class="fa fa-file-excel-o"></i>',
                titleAttr: 'Excel',
                "oSelectorOpts": { filter: 'applied', order: 'current' },
                "sFileName": "report.xls",
                action: function (e, dt, button, config) {
                    exportTableToCSV.apply(this, [$('#myTable'), 'export.xls']);

                }

            },
            'colvis'
        ],
    };
    data_test.columnDefs = [
        {
            targets: "_all",
            sortable: true
        },
        {
            targets: 'nombre',
            render: function (data, type, row) {
                let contenido = data;
                if (row.apellido_paterno !== null && row.apellido_paterno !== "" && row.apellido_paterno !== undefined) {
                    contenido += " " + row.apellido_paterno;
                }
                // if (row.apellido_materno !== null && row.apellido_materno !== "" && row.apellido_materno !== undefined) {
                //     contenido += " " + row.apellido_materno;
                // }
                return contenido;
            }
        },
        {
            targets: 'controles extra',
            data: null,
            defaultContent: ``,
            render: function (data, type, row) {
                return `<button type="button" class =" btn btn-info btn-sm btn_acceder_sala" id-data-360 = "${row.id360}" id="id360_${row.id360}">Asignar</button>`;
            }
        },
        {
            target: "pendiente",
            visible: true,
            searchable: false,
        }
    ];
    data_test.crear_nodo_datatable();
    data_test.construir_tabla();
    let div_tabla = document.querySelector("#test_tabla");
    console.log(div_tabla);
    data_test.incrustar_tabla(div_tabla);
    console.log("objeto_tabla", data_test.objeto_datatable);
    let children = data_test.nodo_datatable.querySelector("#deafult");
    console.log("children", children);

    $(document).ready(function () {
        // Setup - add a text input to each footer cell
        $('#tabla_creditos tfoot th').each(function () {
            var title = $(this).text();
            $(this).html('<input type="text" placeholder="Search ' + title + '" />');
        });

        // DataTable
        // var table = $('#tabla_creditos').DataTable({
        //     initComplete: function () {
        //         // Apply the search
        //         this.api()
        //             .columns()
        //             .every(function () {
        //                 var that = this;

        //                 $('input', this.footer()).on('keyup change clear', functi on () {
        //                     if (that.search() !== this.value) {
        //                         that.search(this.value).draw();
        //                     }
        //                 });
        //             });
        //     },
        // });
    });

    // -----------------------------------------------filtros personalizados 

    //--- agregar los eventos e identificar el objeto de datatable 
    document.querySelector('#txt_velocidad').addEventListener("change", function temp(e) {
        data_test.dibujar_tabla();
    });
    document.querySelector('#txt_Pendiente').addEventListener("change", function temp(e) {
        data_test.dibujar_tabla();
    });

    // ----------------------
    console.log("objeto_datatable", data_test.objeto_datatable)

    $.fn.dataTable.ext.search.push(
        function filtro_pendiente(settings, searchData, index, rowData, counter) {
            if (settings.nTable.id !== 'tabla_creditos') {
                return true;
            }
            if (index === 0) {
                console.log("settings", settings);
                console.log("searchData", searchData);
                console.log("index", index);
                console.log("rowData", rowData);
                console.log("counter", counter);
            }


            // var min = parseInt($('#min').val(), 10);
            // var max = parseInt($('#max').val(), 10);
            // var age = parseFloat(rowData[""]) || 0; // using the data from the 4th column

            // if ((isNaN(min) && isNaN(max)) ||
            //     (isNaN(min) && age <= max) ||
            //     (min <= age && isNaN(max)) ||
            //     (min <= age && age <= max)) {
            //     return true;
            // }



            var pendiente = parseInt($('#txt_Pendiente').val(), 10);
            // console.log("pendiente", pendiente);

            if ((isNaN(pendiente)) ||
                (pendiente == rowData.pendiente)
            ) {
                return true;
            }
            return false;
        }
    );
    $.fn.dataTable.ext.search.push(
        function filtro_velocidad(settings, searchData, index, rowData, counter) {
            if (settings.nTable.id !== 'tabla_creditos') {
                return true;
            }
            // if (index === 0) {
            //     console.log("settings", settings);
            //     console.log("searchData", searchData);
            //     console.log("index", index);
            //     console.log("rowData", rowData);
            //     console.log("counter", counter);
            // }


            // var min = parseInt($('#min').val(), 10);
            // var max = parseInt($('#max').val(), 10);
            // var age = parseFloat(rowData[""]) || 0; // using the data from the 4th column

            // if ((isNaN(min) && isNaN(max)) ||
            //     (isNaN(min) && age <= max) ||
            //     (min <= age && isNaN(max)) ||
            //     (min <= age && age <= max)) {
            //     return true;
            // }



            var velocidad = parseInt($('#txt_velocidad').val(), 10);
            // console.log("txt_velocidad", velocidad);s

            if ((isNaN(velocidad)) ||
                (velocidad == rowData.velocidad)
            ) {
                return true;
            }
            return false;
        }
    );


    // detalles del renglin homologo
    ME_dattagble(document.querySelector('#tabla_creditos'));


    //---------------------------------------------------------
    // obtener data de datatable pero es toda la data contenida dentro del datatable
    var data_extraida = data_test.objeto_datatable.rows().data();

    console.log("data_extraida", data_extraida);

    // obtener data con los filtros aplicados
    var data_extraida_filtros = data_test.objeto_datatable.rows({ "search": "applied" });

    console.log("data_extraida_filtros", data_extraida_filtros);

    // -------------------------------------------------------
    data_test.objeto_datatable.on('draw', function () {
        var data_extraida = data_test.objeto_datatable.rows().data();

        console.log("data_extraida", data_extraida);

        // obtener data con los filtros aplicados
        var data_extraida_filtros = data_test.objeto_datatable.rows({ "search": "applied" }).data();

        console.log("data_extraida_filtros", data_extraida_filtros);
    });
}

var datatble = null;

function data_filtrada() {
    var data_extraida_filtros = datatble.rows({ "search": "applied" });

    console.log("data_extraida_filtros", data_extraida_filtros);
}

// --------------
var detailRows = null;

//--------------- agregar manager de eveentos 

const ME_dattagble = (nodo_objetivo) => {
    if (nodo_objetivo) {
        nodo_objetivo.addEventListener("click", async function ME_reporte_general_click(e) {
            const target = e.target;


            let evento = target.getAttribute('data-evento');
            let heredado = target.getAttribute('data-evento-heredado');
            let nodo = target;

            // if (heredado) {
            //     buscar_nodos_padre(e, (element) => {
            //         let bandera_control = false; // parar detener las iteraciones hacia nodos padre 

            //         const bnp_evento = element.getAttribute("data-evento");

            //         if (bnp_evento) {
            //             evento = bnp_evento;
            //             bandera_control = true;
            //             nodo = element;
            //         }

            //         // console.log("bnp_evento", bnp_evento);
            //         return bandera_control;
            //     });
            // }

            // console.log("evento", evento);
            // console.log("heredado", heredado);


            let d = {};
            if (evento) {
                switch (evento) {
                    case 'detalles_renglon':
                        d.tr = nodo.closest('tr');
                        console.log("d.tr", d.tr);
                        console.log("d.tr class", d.tr.className);

                        // seleccionar
                        d.row = datatble.row(d.tr);
                        console.log("d.row", d.row);

                        function format(d) {
                            return (
                                'Full name: ' +
                                d.nombre +
                                ' ' +
                                d.apellido_paterno +
                                '<br>' +
                                'Salary: ' +
                                d.estado +
                                '<br>' +
                                'The child row can contain any data you wish, including links, images, inner tables etc.'
                            );
                        }

                        if (d.row.child.isShown()) {
                            d.tr.classList.remove('details');
                            d.row.child.hide();

                            // Remove from the 'open' array
                            // detailRows.splice(idx, 1);
                        } else {
                            d.tr.classList.add('details');
                            d.row.child(format(d.row.data())).show();

                            // // Add to the 'open' array
                            // if (idx === -1) {
                            //     detailRows.push(d.tr.attr('id'));
                            // }
                        }

                        break;

                    default:
                        break
                }
            }
        });
    }
}
test_crear_tabla()