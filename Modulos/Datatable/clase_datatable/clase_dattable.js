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
    fn_rowCallback = function (row, data, index) {}
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

        objeto_datatable = $(nodo_datable).children("#" + id_tabla).DataTable({
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
            rowCallback: funcion_rowCallback
        }
        );
        // datatble = objeto_datatable;
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
                break; s
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


}


function test_crear_tabla() {
    let data_test = new datatable_generico();
    data_test.id_contenedor_datatable = "hola";
    data_test.id_tabla = "tabla_creditos";
    data_test.className_tabla = "tabla_creditos";
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

        //                 $('input', this.footer()).on('keyup change clear', function () {
        //                     if (that.search() !== this.value) {
        //                         that.search(this.value).draw();
        //                     }
        //                 });
        //             });
        //     },
        // });
    });
}

var datatble = null;