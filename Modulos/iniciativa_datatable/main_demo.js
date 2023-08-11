import * as inic_dt from "./inciativa_datatble.js";
// let utils = await import("./../../Modulos/Utilidades/utilidades_module.js");

let objDataTable = null;

export async function lanzazor() {

    let para_datatable = {};

    // let entorno = await peticion_detalles_entorno();
    let peticion = await leer_archivo_json("./demo.json");

    let data_pintar = new Array();

    // -----------------------------------------despues
    para_datatable.data = peticion.data;

    para_datatable.paginacion = {
        hab: true,
        item_pagina: 20
    };


    para_datatable.columnas = [
        { data: 'id', title: 'id', class: 'id360', defaultContent: ``, width: "120px" },
        { data: 'tipo_consulta', title: 'tipo_consulta', class: 'tipo_consulta', defaultContent: ``, width: "200px" },
        { data: null, title: 'Acciones', class: 'acciones', defaultContent: ``, width: "100px" },
    ];

    // para_datatable.columnas = [
    //     { data: 'id', title: 'No. Usuario', class: 'id360', defaultContent: ``, width: "120px" },
    //     { data: 'usuario', title: 'Usuario', class: 'usuario_llave', defaultContent: ``, width: "100px" },
    //     { data: 'correo', title: 'Correo', class: 'correo', defaultContent: ``, width: "100px" },
    //     { data: null, title: 'Jerarquía', class: 'jerarquia', defaultContent: ``, width: "100px" },
    //     { data: 'nombre', title: 'Nombre', class: 'nombre', defaultContent: ``, width: "150px" },
    //     { data: 'apellido_paterno', title: 'Apellido Paterno', class: 'apellido_paterno', defaultContent: ``, width: "150px" },
    //     { data: 'apellido_materno', title: 'Apellido Materno', class: 'apellido_materno', defaultContent: ``, width: "150px" },
    //     { data: null, title: 'Permisos Cliente', class: 'permisos_cliente', defaultContent: ``, width: "300px" },
    //     { data: null, title: 'Permisos Operador', class: 'permisos_operador', defaultContent: ``, width: "300px" },
    //     { data: null, title: 'Permisos Administrador', class: 'permisos_admninistrador', defaultContent: ``, width: "300px" },
    //     { data: null, title: 'Acciones', class: 'acciones', defaultContent: ``, width: "100px" },
    // ];

    para_datatable.render = [
        // {
        //     target: "_all_tr",
        //     render: function (data, row, nodo_row, nodo_cell) {

        //     }
        // },
        {
            target: "_all_td",
            render: function (data, row, nodo_row, nodo_cell) {
                nodo_row.setAttribute("data-id", row.id);
            }
        },
        {
            target: "permisos_cliente",
            render: function (data, row, nodo_row, nodo_cell) {
                // data => data que entró a la tabla
                // row => data del renglo actual
                // nodo_row => nodo del renglon actual
                // nodo_cell => nodo de la celda actual
                nodo_cell.insertAdjacentElement("beforeEnd", crear_nodo_per_cliente(row));
                hab_deshab_control_bloque([nodo_cell]);

            }
        },
        {
            target: "permisos_operador",
            render: function (data, row, nodo_row, nodo_cell) {
                nodo_cell.insertAdjacentElement("beforeEnd", crear_nodo_per_operador(row));
                hab_deshab_control_bloque([nodo_cell]);
            }
        },
        {
            target: "permisos_admninistrador",
            render: function (data, row, nodo_row, nodo_cell) {
                nodo_cell.insertAdjacentElement("beforeEnd", crear_nodo_per_administrador(row));
                hab_deshab_control_bloque([nodo_cell]);
            }
        },
        {
            target: "jerarquia",
            render: function (data, row, nodo_row, nodo_cell) {
                let data_jerarquia = {
                    area: row.area,
                    puesto: row.puesto,
                    id360: row.id
                };
                nodo_cell.insertAdjacentElement("beforeEnd", crear_nodo_jerarquia(data_jerarquia));
            }
        },
        {
            target: "acciones",
            render: function (data, row, nodo_row, nodo_cell) {
                nodo_cell.innerHTML = `
                              <button type="button" class="btn btn-warning m-1" data-evento="editar_renglon"><i class="fas fa-edit" data-evento-heredado="true"></i></button>
                              <button type="button" class="btn btn-info m-1" data-evento="agregar_renglon_hijo"><i class="fas fa-arrow-down"></i></button>
                               `;
            }
        }
    ];
    // para_datatable.

    para_datatable.nodoDestino = document.querySelector('.div_tabla_usuarios');

    objDataTable = new inic_dt.inicDataTable(para_datatable);

    // objDataTable = new inic_dt.inicDataTable();
    // objDataTable.constructor_X(para_datatable);



    console.log("objDataTable", objDataTable);

    ME_tabla_usurios(objDataTable.nodo_DataTable);

    // _---------------------------------- antes

    // nodo_destino.insertAdjacentElement("beforeEnd", nodo_estructura_tabla);
    // // agregar el manager de eventos 
    // ME_tabla_usuarios(nodo_estructura_tabla);
    // ME_tabla_usuarios_cambio_v2(nodo_estructura_tabla);
}

export function agregar_renglon_tabla() {

    let id360 = "temp" + getRandomInt(1000000);

    let data_renglon = {
        id: id360,
        id360,
        usuario: "",
        contrasenia: "",
        correo: "",
        nombre: "",
        apellido_paterno: "",
        apellido_materno: ""
    };

    let render = [{
        target: "usuario_llave",
        render: function (data, row, nodo_row, nodo_cell) {
            nodo_row.classList.add("pendiente_guardar");
            nodo_row.setAttribute('data-r-sin_guardar', "true");
            nodo_cell.innerHTML = "";
            nodo_input = crear_nodo_input("", "", "Usuario");
            nodo_cell.insertAdjacentElement("beforeEnd", nodo_input);
        }
    },
    {
        target: "correo",
        render: function (data, row, nodo_row, nodo_cell) {
            nodo_row.classList.add("pendiente_guardar");
            nodo_cell.innerHTML = "";
            nodo_input = crear_nodo_input("", "", "Correo");
            nodo_cell.insertAdjacentElement("beforeEnd", nodo_input);
        }
    },
    {
        target: "nombre",
        render: function (data, row, nodo_row, nodo_cell) {
            nodo_row.classList.add("pendiente_guardar");
            nodo_cell.innerHTML = "";
            nodo_input = crear_nodo_input("", "", "Nombre");
            nodo_cell.insertAdjacentElement("beforeEnd", nodo_input);
        }
    },
    {
        target: "apellido_paterno",
        render: function (data, row, nodo_row, nodo_cell) {
            nodo_row.classList.add("pendiente_guardar");
            nodo_cell.innerHTML = "";
            nodo_input = crear_nodo_input("", "", "Apellido Paterno");
            nodo_cell.insertAdjacentElement("beforeEnd", nodo_input);
        }
    },
    {
        target: "apellido_materno",
        render: function (data, row, nodo_row, nodo_cell) {
            console.log(nodo_row);
            nodo_row.classList.add("pendiente_guardar");
            nodo_cell.innerHTML = "";
            nodo_input = crear_nodo_input("", "", "Apellido Materno");
            nodo_cell.insertAdjacentElement("beforeEnd", nodo_input);
        }
    },
    {
        target: "acciones",
        render: function (data, row, nodo_row, nodo_cell) {
            console.log(nodo_row);
            nodo_row.classList.add("pendiente_guardar");
            nodo_cell.innerHTML = "";
            nodo_input = document.createElement("div");
            nodo_input.innerHTML = `
                <button type="button" class="btn btn-danger m-1" data-evento="eliminar_renglon_temp"><i class="fas fa-trash" data-evento-heredado="true"></i></button>
            `;
            nodo_cell.insertAdjacentElement("beforeEnd", nodo_input);
        }
    },]
    objDataTable.agregar_renglon_tabla(data_renglon, render);

}
export const buscar_renglon_dt = () => {
    let buscado = objDataTable.get_renglon(0);
    console.log(buscado);
}

//----------------------------------------------------------------
// fucniones para el modulo de ususarios en telepresencia
const ME_tabla_usurios = (nodo_me) => {
    console.log("nodo_me", nodo_me);
    if (nodo_me) {
        nodo_me.addEventListener("click", function fn_tabla_usuarios(e) {
            const target = e.target;
            let evento = target.getAttribute('data-evento');
            let heredado = target.getAttribute('data-evento-heredado');
            let nodo = target;
            if (heredado) {
                // busqueda hacia los nodos padre 
                let busqueda = target.closest('[data-evento]');
                if (busqueda) {
                    evento = busqueda.getAttribute('data-evento');
                    nodo = busqueda;
                }
            }

            // console.log("evento", evento);
            // console.log("heredado", heredado);


            let d = {};
            let nodo_tr = null;
            let nodo_hijo = null;
            let index = null;
            let data = null;
            if (evento) {
                switch (evento) {
                    case "eliminar_renglon_temp":
                        // navegar hata su renglon
                        nodo_tr = nodo.closest("tr");
                        nodo_tr.remove();
                        break;
                    case "editar_renglon":
                        // editar el renglon por ahora no se abirará el renglon hijo(por ahora)

                        // convertir el contenido de determinadas columnas en input agregagando su respectiva data
                        nodo_tr = nodo.closest("tr");
                        index = nodo_tr.getAttribute("data-dt-index");

                        convertir_renglon_editable(nodo_tr, index);

                    case "agregar_renglon_hijo":
                        // mostrar detalles de renglon
                        nodo_tr = nodo.closest("tr");
                        index = nodo_tr.getAttribute("data-dt-index");

                        console.log("objDataTable ", nodo_tr);

                        nodo_hijo = objDataTable.conmutador_tr_hijo(nodo_tr);

                        if (nodo_hijo) {
                            // mostrando el nodo hijo
                            data = objDataTable.get_renglon(index);

                            crear_nodo_detalle_renglon_hijo(nodo_hijo.querySelector("td"), data);
                        } else {
                            // el nodo hijo ya se ocultó o no se pudo mostrar
                        }

                        break;
                    default:
                        break;
                }
            }
        });

        nodo_me.addEventListener("change", function fn_tabla_usuarios(e) {
            const target = e.target;

            console.log("target desde change", target);

            let evento = target.getAttribute('data-evento');
            let heredado = target.getAttribute('data-evento-heredado');
            let nodo = target;
            if (heredado) {
                // busqueda hacia los nodos padre 
                let busqueda = target.closest('[data-evento]');
                if (busqueda) {
                    evento = busqueda.getAttribute('data-evento');
                    nodo = busqueda;
                }
            }

            // console.log("evento", evento);
            // console.log("heredado", heredado);


            let d = {};
            if (evento) {
                switch (evento) {

                    default:
                        break;
                }
            }

            // busqueda ascedente hacia el nodo de renglon 
            let busqueda_tr = target.closest('tr');
            if (busqueda_tr) {

                // verificar si es un nuevo usuarios

                let es_nuevo = busqueda_tr.getAttribute("data-r-sin_guardar");
                if (es_nuevo) {
                    // no queda aplicado a los usuarios que van a ser agregados 
                    return;
                }
                // busqueda_tr.setAttribute("data-modificado", true);

                if (busqueda_tr.classList.contains("tr_tieneHijo")) {
                    busqueda_tr.setAttribute("data-modificado", true);
                    let busqueda_hijo = busqueda_tr.nextSibling;

                    if (busqueda_hijo && busqueda_hijo.classList.contains("tr_hijo")) {
                        busqueda_hijo.setAttribute("data-modificado", true);
                    }

                } else if (busqueda_tr.classList.contains("tr_hijo")) {
                    busqueda_tr.setAttribute("data-modificado", true);
                    let busqueda_padre = busqueda_tr.previousSibling;
                    if (busqueda_padre && busqueda_padre.classList.contains("tr_tieneHijo")) {
                        busqueda_padre.setAttribute("data-modificado", true);
                    }
                }

            }
        });
    }
};

const crear_nodo_detalle_renglon_hijo = (nodo_contenedor, data) => {
    let nodo = document.createElement("div");
    nodo.className = "detalles";
    if (nodo_contenedor && data) {

        let nodo_documento = crear_nodo_input();
        nodo.insertAdjacentElement("beforeEnd", nodo_documento);


        nodo_contenedor.insertAdjacentElement("beforeEnd", nodo);
    }
};

const crear_nodo_input = (id, clase, placeholder) => {
    let nodo_input = document.createElement("div");
    nodo_input.className = "input-group mb-3";
    nodo_input.innerHTML = `
                    <input type="text" id="${id}" class="form-control ${clase}" placeholder="${placeholder}" aria-describedby="basic-addon1">
                `;
    return nodo_input;
};

const crear_nodo_input2 = () => {
    let nodo = document.createElement("input");
    nodo.className = "";
    return nodo;
};

export const re_dibujar_tabla = () => {
    objDataTable.re_dibujar();
}

export const convertir_renglon_editable = (nodo, index) => {
    //  los renglones editables tienen un nodo hijo con mas detalles
    if (nodo) {
        let data_editando = nodo.getAttribute("data-td-editando");
        let data_modificado = nodo.getAttribute("data-modificado");
        let data = objDataTable.get_renglon(index);

        let nodo_input = null;
        let render = [
            {
                target: "tipo_consulta",
                render: function (data, row, nodo_row, nodo_cell) {
                    nodo_row.classList.add("pendiente_guardar");
                    nodo_cell.innerHTML = "";
                    nodo_input = crear_nodo_input("", "", "Tipo Consulta");
                    nodo_input.querySelector("input").value = row.tipo_consulta;
                    nodo_cell.insertAdjacentElement("beforeEnd", nodo_input);
                }
            },
        ];

        let render_reversa = [
            {
                target: "tipo_consulta",
                render: function (data, row, nodo_row, nodo_cell) {
                    nodo_cell.innerHTML = "";
                    nodo_cell.innerHTML = row.tipo_consulta;
                }
            }
        ];


        if (data) {
            if (!data_editando) {
                // se encontro la data del renglon

                for (let item_render of render) {
                    let target = item_render.target;

                    let td = nodo.querySelector("td." + target);

                    if (td) {
                        item_render.render(data, data, nodo, td);

                        // agregar bandera del estado de editando
                        nodo.setAttribute("data-td-editando", true);
                    }
                }
                return;
            }

            if (data_modificado && data_modificado === "true" && data_editando && data_editando === "true") {
                // aqui nos se podrá cerrrar la edicion hasta hacerlo guardado
            } else {
                // el renglon no ha sido modificado por que lo se puede regresar a su estado original

                for (let item_render of render_reversa) {
                    let target = item_render.target;

                    let td = nodo.querySelector("td." + target);

                    if (td) {
                        item_render.render(data, data, nodo, td);

                        // agregar bandera del estado de editando
                        nodo.setAttribute("data-td-editando", false);
                    }
                }
                nodo.removeAttribute("data-td-editando");

            }


        }
    }

};