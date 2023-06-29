const funciones_usuarios = () => {
    // ocultarLoaderMain();

    let peticion_usuarios_data = null;
    let peticion_entorno = null;

    let nodo_tabla_usuarios = null;
    let renders_tabla_usuarios = null;
    let columnas_usuarios = null;
    let plantilla_data_usuario = {
        id: "9991347359",
        usuario: "cliente31cacayacucho@claro360.com.pe",
        contrasenia: "Lpi6lx8KQQRcIMZqYTSacQ==",
        correo: "cliente31cacayacucho@claro360.com.pe",
        nombre: "cliente31",
        apellido_paterno: "CAC Ayacucho",
        apellido_materno: "-",
        permisos_cliente: [
            {
                identificador: "categoria",
                id: "",
                tipo_dato: "bool",
                valor: "1"
            },
            {
                identificador: "cac",
                id: "",
                tipo_dato: "bool",
                valor: "1",
            }
        ],
        permisos_operador: [
            {
                identificador: "categoria",
                id: "",
                tipo_dato: "bool",
                valor: "1",
            },
            {
                identificador: "documento",
                id: "",
                tipo_dato: "text",
                valor: "123456789",
            }
        ],
        permisos_admninistrador: [
            {
                identificador: "categoria",
                id: "",
                tipo_dato: "bool",
                valor: "1",
            },
            {
                identificador: "historico",
                id: "",
                tipo_dato: "bool",
                valor: "1",
            }
        ]
    };

    const peticion_detalles_entorno = async () => {
        // peticion que trae los datos miscelaneos como tipos de consulta, regiones, etc...
        mostrarLoaderMain();
        let peticion = await RequestPOST("/API/V1/Videollamadas/entorno/info", {}).then((response) => {
            return response;
        });

        peticion_entorno = null;

        if (peticion.success) {
            peticion_entorno = peticion;
        }
        ocultarLoaderMain();
        return peticion;
    };


    const peticion_usuarios = async () => {
        // let peticion = await RequestGET("/API/V1/Videollamadas/meeting/getRoom");


        let peticion = {
            success: true,
            failure: false,
            usuarios: [
                {
                    id: "9991347359",
                    usuario: "cliente31cacayacucho@claro360.com.pe",
                    contrasenia: "Lpi6lx8KQQRcIMZqYTSacQ==",
                    correo: "cliente31cacayacucho@claro360.com.pe",
                    nombre: "cliente31",
                    apellido_paterno: "CAC Ayacucho",
                    apellido_materno: "-",
                    permisos_cliente: [
                        {
                            identificador: "categoria",
                            id: "",
                            tipo_dato: "bool",
                            valor: "1"
                        },
                        {
                            identificador: "cac",
                            id: "",
                            tipo_dato: "text",
                            valor: "1",
                        },
                        {
                            identificador: "modulo",
                            id: "",
                            tipo_dato: "text",
                            valor: "1",
                        },
                        {
                            identificador: "region",
                            id: "",
                            tipo_dato: "text",
                            valor: "1",
                        }
                    ],
                    permisos_operador: [
                        {
                            identificador: "categoria",
                            id: "",
                            tipo_dato: "bool",
                            valor: "1",
                        },
                        {
                            identificador: "documento",
                            id: "",
                            tipo_dato: "text",
                            valor: "123456789",
                        },
                        {
                            identificador: "senias",
                            id: "",
                            tipo_dato: "bool",
                            valor: "1",
                        },
                        {
                            identificador: "hogar",
                            id: "",
                            tipo_dato: "bool",
                            valor: "1",
                        },
                        {
                            identificador: "moviles",
                            id: "",
                            tipo_dato: "bool",
                            valor: "1",
                        }
                    ],
                    permisos_admninistrador: [
                        {
                            identificador: "categoria",
                            id: "",
                            tipo_dato: "bool",
                            valor: "1",
                        },
                        {
                            identificador: "historico",
                            id: "",
                            tipo_dato: "bool",
                            valor: "1",
                        },
                        {
                            identificador: "dashboard",
                            id: "",
                            tipo_dato: "bool",
                            valor: "1",
                        },
                        {
                            identificador: "usuarios",
                            id: "",
                            tipo_dato: "bool",
                            valor: "1",
                        }
                    ]
                },
                {
                    id: "9991347360",
                    usuario: "cliente32cacayacucho@claro360.com.pe",
                    contrasenia: "bUnjLa6PqitcIMZqYTSacQ==",
                    correo: "cliente32cacayacucho@claro360.com.pe",
                    nombre: "cliente32",
                    apellido_paterno: "CAC Ayacucho",
                    apellido_materno: "-",
                    permisos_cliente: [
                        {
                            identificador: "categoria",
                            id: "",
                            tipo_dato: "bool",
                            valor: "1"
                        },
                        {
                            identificador: "cac",
                            id: "",
                            tipo_dato: "text",
                            valor: "0",
                        },
                        {
                            identificador: "modulo",
                            id: "",
                            tipo_dato: "text",
                            valor: "1",
                        },
                        {
                            identificador: "region",
                            id: "",
                            tipo_dato: "text",
                            valor: "0",
                        }
                    ],
                    permisos_operador: [
                        {
                            identificador: "categoria",
                            id: "",
                            tipo_dato: "bool",
                            valor: "0",
                        },
                        {
                            identificador: "documento",
                            id: "",
                            tipo_dato: "text",
                            valor: "123456789",
                        },
                        {
                            identificador: "senias",
                            id: "",
                            tipo_dato: "bool",
                            valor: "0",
                        },
                        {
                            identificador: "hogar",
                            id: "",
                            tipo_dato: "bool",
                            valor: "1",
                        },
                        {
                            identificador: "moviles",
                            id: "",
                            tipo_dato: "bool",
                            valor: "1",
                        }
                    ],
                    permisos_admninistrador: [
                        {
                            identificador: "categoria",
                            id: "",
                            tipo_dato: "bool",
                            valor: "1",
                        },
                        {
                            identificador: "historico",
                            id: "",
                            tipo_dato: "bool",
                            valor: "0",
                        },
                        {
                            identificador: "dashboard",
                            id: "",
                            tipo_dato: "bool",
                            valor: "0",
                        },
                        {
                            identificador: "usuarios",
                            id: "",
                            tipo_dato: "bool",
                            valor: "1",
                        }
                    ]
                }
            ]
        };

        peticion_usuarios_data = peticion;

        return peticion;
    };


    const crear_estuctura_tabla = (columnas) => {
        let clase_tabla = "table table-bordered";

        // ---------------------
        let nodo_tabla = document.createElement("table");
        nodo_tabla.className = clase_tabla;
        nodo_tabla.classList.add("align-middle");
        nodo_tabla.classList.add("text-center");
        nodo_tabla.style.width = "max-content"; // permite que la tabla se muestra con scroll horizontal, aun si el ancho de la tabla es variable 


        let html_thead = "";

        for (columna of columnas) {
            let s_width = (!!columna.width) ? columna.width : "";
            html_thead += `<th scope="col" class="${columna.class}" style="width:${s_width};">${columna.title}</th>`;
        }


        // htm
        let html_interno_tabla = `
        <thead class="">
            <tr class="">
                ${html_thead}
            </tr>
        </thead>
        <tbody class="tbody">

        </tbody>`;


        nodo_tabla.innerHTML = html_interno_tabla;
        return nodo_tabla;

    };



    const crear_renglon_tabla = (renglon, columnas, arrdata, arr_render) => {
        let nodo_renglon = document.createElement('tr');
        nodo_renglon.className = "";
        nodo_renglon.setAttribute("data-id360", renglon.id)


        for (columna of columnas) {
            let nodo_columna_td = document.createElement('td');
            nodo_columna_td.className = columna.class;
            nodo_columna_td.classList.add("align-middle");
            nodo_columna_td.classList.add("text-center");

            //-------------------
            if (columna.defaultContent) {
                if (typeof columna.defaultContent === "string") {
                    nodo_columna_td.innerHTML = columna.defaultContent;
                }
                // if (isNode(columna.defaultContent)) {
                //     nodo_columna_td.insertAdjacentElement("beforeEnd", columna.defaultContent.cloneNode());
                // }

            }

            // validar valor desde columnas 
            if (columna.data !== null) {
                // significa que se agregó llave
                // nodo_columna_td.innerHTML = renglon[columna.data];

                let nodo_dato = null;

                if (columna.data === "id") {
                    nodo_columna_td.innerHTML = renglon[columna.data];
                } else {
                    nodo_columna_td.innerHTML = "";
                    let nodo_dato = crear_nodo_input("", "", "");
                    nodo_dato.querySelector("input").value = renglon[columna.data];
                    nodo_columna_td.insertAdjacentElement("beforeEnd", nodo_dato);

                }

            }

            // aqui aplicamos el render 
            let render_concidencias = null;
            let render_all = null;

            if (nodo_columna_td.className && nodo_columna_td.className !== "" && arr_render) {
                // buscar los render que correspondan 

                render_concidencias = arr_render.filter(item => (nodo_columna_td.classList.contains(item.target)));

                render_all = arr_render.filter(item => (item.target === "_all"));

                // aplicar los render 
                if (render_concidencias) {
                    for (item_render of render_concidencias) {
                        // aplicar la fucnion de render 
                        try {
                            item_render.render(arrdata, renglon, nodo_renglon, nodo_columna_td);
                        } catch (error) {
                            console.error("error en en el render", item_render);
                            console.error("error render", error);
                        }
                    }
                }


            } else {
                console.log("no se encontraron render para aplicar");
            }

            nodo_renglon.insertAdjacentElement("beforeEnd", nodo_columna_td);

        }
        return nodo_renglon;
    };


    const rellenar_tabla_data = (nodo_tabla, columnas, arrdata, arr_render) => {
        if (nodo_tabla) {

            // por renglonnes 
            if (arrdata) {
                for (renglon of arrdata) {

                    let nodo_renglon = crear_renglon_tabla(renglon, columnas, arrdata, arr_render);

                    nodo_tabla.querySelector(".tbody").insertAdjacentElement("beforeEnd", nodo_renglon);

                }

            } else {
                console.log("no se encontro data ");
            }
        } else {
            nodo_tabla.querySelector(".tbody").insertAdjacentHTML("beforeEnd", "sin registros para mostrar");
        }

    };

    const verificar_data_para_pintar = (pajar, llave_busqueda, valor_busqueda, llave_retorno) => {
        // pajar es un arreglo en el que va a buscar y validar la llave para regresar una respuesta para html
        let respuesta = "";
        if (pajar) {
            let item_busqueda = pajar.find(item => {
                let actual = item[llave_busqueda];
                if (actual === valor_busqueda) {
                    return item;
                }
            });

            if (item_busqueda) {
                switch (item_busqueda.tipo_dato) {
                    case "bool":
                        if (item_busqueda[llave_retorno] === "1") {
                            respuesta = "checked";
                        }
                        break;
                    case "text":
                        respuesta = item_busqueda[llave_retorno];
                        break;
                    default:
                        console.log("tipo de dato no esta definido en el switch", item_busqueda.tipo_dato);
                        break;
                }
            }

        }
        return respuesta;
    };


    const crear_nodo_per_cliente = (data) => {

        let nodo_div_contendor = document.createElement("div");
        nodo_div_contendor.className = "w-100 h-100 overflow-visible";

        let arr_permisos = data.permisos_cliente;

        let id360 = data.id;
        // console.log("crear_nodo_per_operador id360", id360);

        nodo_div_contendor.innerHTML = `
        <div class=" form-switch d-flex justify-content-center btn-group-toggle" data-toggle="buttons">
            
            <label for="chb_cliente_${id360}" class="btn btn-outline-primary active" >
                <input type="checkbox" class=""  json-etiqueta="permisos_cliente" 
                id="chb_cliente_${id360}"
                data-permiso="chb_cliente"
                data-control-bloque="true"
                ${verificar_data_para_pintar(arr_permisos, "identificador", "categoria", "valor")}
                >
            Cliente</label>
        </div>
        <div class="row w-100 pt-1 permisos">
            <div class="col p-1 " >
                <label for="cliente_cac_${id360}" class="form-check-label">
                    CAC
                </label> 
                <select class="form-control form-control-sm" type="text" placeholder="CAC"
                    data-permiso="cliente_cac"
                    aria-label=".form-control-sm" id="cliente_cac_${id360}">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>    
            </div>
            <div class="col p-1 " >
                <label for="cliente_modulo_${id360}" class="form-check-label">
                    Módulo
                </label>
                <input class="form-control form-control-sm" type="text" placeholder="Modulo"
                    aria-label=".form-control-sm" id="cliente_modulo_${id360}"}
                    data-permiso="cliente_modulo" >
            </div>
            <div class="col p-1 " >
                <label for="cliente_region_${id360}" class="form-check-label">
                    region
                </label>
                <input class="form-control form-control-sm" type="text" placeholder="Región"
                    aria-label=".form-control-sm" id="cliente_region_${id360}" 
                    data-permiso="cliente_region">
            </div>
        </div>
        `;

        // agregar valores 
        nodo_div_contendor.querySelector('[data-permiso="cliente_cac"]').value = verificar_data_para_pintar(arr_permisos, "identificador", "cac", "valor");
        nodo_div_contendor.querySelector('[data-permiso="cliente_modulo"]').value = verificar_data_para_pintar(arr_permisos, "identificador", "modulo", "valor");
        nodo_div_contendor.querySelector('[data-permiso="cliente_region"]').value = verificar_data_para_pintar(arr_permisos, "identificador", "region", "valor");

        return nodo_div_contendor;
    };
    // const crear_nodo_per_cliente_old = (data) => {

    //     let nodo_div_contendor = document.createElement("div");
    //     nodo_div_contendor.className = "w-100 overflow-hidden";

    //     let arr_permisos = data.permisos_cliente;

    //     nodo_div_contendor.innerHTML = `
    //     <div class="input-group form-switch d-flex justify-content-center">
    //         <input class="form-check-input" type="checkbox" value="" id="chb_cliente" json-etiqueta="permisos_cliente" 
    //         ${verificar_data_para_pintar(arr_permisos, "identificador", "categoria", "valor")}
    //         data-control-bloque="true"
    //         >
    //         <label class="form-check-label ps-2">
    //             Cliente
    //         </label>
    //     </div>
    //     <div class="row pt-2 permisos">
    //         <div class="col input-group">
    //             <input class="form-control form-control-sm" type="text" placeholder="CAC"
    //                 aria-label=".form-control-sm" id="cliente_cac" >
    //             <!-- <label class="form-check-label">
    //                 Cliente
    //             </label> -->
    //         </div>
    //         <div class="col input-group">
    //             <input class="form-control form-control-sm" type="text" placeholder="Modulo"
    //                 aria-label=".form-control-sm" id="cliente_modulo" >
    //             <!-- <label class="form-check-label">
    //                 Cliente
    //             </label> -->
    //         </div>
    //         <div class="col input-group">
    //             <input class="form-control form-control-sm" type="text" placeholder="Región"
    //                 aria-label=".form-control-sm" id="cliente_region" >
    //             <!-- <label class="form-check-label">
    //                 Cliente
    //             </label> -->
    //         </div>
    //     </div>
    //     `;

    //     // agregar valores 
    //     nodo_div_contendor.querySelector("#cliente_cac").value = verificar_data_para_pintar(arr_permisos, "identificador", "cac", "valor");
    //     nodo_div_contendor.querySelector("#cliente_modulo").value = verificar_data_para_pintar(arr_permisos, "identificador", "modulo", "valor");
    //     nodo_div_contendor.querySelector("#cliente_region").value = verificar_data_para_pintar(arr_permisos, "identificador", "region", "valor");

    //     return nodo_div_contendor;
    // };

    const crear_nodo_per_operador = (data) => {
        let nodo_div_contendor = document.createElement("div");
        nodo_div_contendor.className = "w-100 overflow-hidden ";

        let arr_permisos = data.permisos_operador;
        let id360 = data.id;


        nodo_div_contendor.innerHTML = `
            <div class="form-switch d-flex justify-content-center" >
            <input class="btn-check " type="checkbox" 
                ${verificar_data_para_pintar(arr_permisos, "identificador", "categoria", "valor")}
                data-control-bloque="true"
                id="chb_operador${id360}"
            data-permiso="chb_operador">
                <label for="chb_operador${id360}" >
                    Operador
                </label>
            </div>

            <div class="pt-2 permisos">
                <div class="">
                    <label for="operador_documento_${id360}" class="form-check-label" >
                        Documento
                    </label> 
                    <input class="form-control form-control-sm" type="text"
                        placeholder="Documento" aria-label=".form-control-sm"
                        id="operador_documento_${id360}" data-permiso="operador_documento">
                </div>
                <div class="row pt-2" >
                    <div class="col p-1 form-switch" >
                        <input class="btn-check" type="checkbox"
                            id="operador_señas_${id360}"
                            data-permiso="operador_señas"
                            ${verificar_data_para_pintar(arr_permisos, "identificador", "senias", "valor")}>
                        <label for="operador_señas_${id360}" >
                            Señas
                        </label>
                    </div>
                    <div class="col p-1 form-switch" >
                        <input class="btn-check" type="checkbox"
                            id="operador_hogar_${id360}"
                            data-permiso="operador_hogar"
                            ${verificar_data_para_pintar(arr_permisos, "identificador", "hogar", "valor")}>
                        <label for="operador_hogar_${id360}" >
                            Hogar

                        </label>
                    </div>
                    <div class="col p-1 form-switch" >
                        <input class="btn-check" type="checkbox"
                            id="operador_moviles_${id360}"
                            data-permiso="operador_moviles"
                            ${verificar_data_para_pintar(arr_permisos, "identificador", "moviles", "valor")}>
                        <label for="operador_moviles_${id360}" >
                            Móviles
                        </label>
                    </div>
                </div>
            </div>
        `;
        // agregar valores 
        nodo_div_contendor.querySelector('[data-permiso="operador_documento"]').value = verificar_data_para_pintar(arr_permisos, "identificador", "documento", "valor");

        return nodo_div_contendor;
    }
    // const crear_nodo_per_operador_old = (data) => {
    //     let nodo_div_contendor = document.createElement("div");
    //     nodo_div_contendor.className = "w-100 overflow-hidden ";

    //     let arr_permisos = data.permisos_operador;


    //     nodo_div_contendor.innerHTML = `
    //         <div class="input-group d-flex justify-content-center">
    //             <input class="form-check-input" type="checkbox" value="" id="chb_operador"
    //             ${verificar_data_para_pintar(arr_permisos, "identificador", "categoria", "valor")}
    //             data-control-bloque="true">
    //             <label class="form-check-label ps-2">
    //                 Operador
    //             </label>
    //         </div>

    //         <div class="pt-2 permisos">
    //             <div class="input-group">
    //                 <input class="form-control form-control-sm" type="text"
    //                     placeholder="Documento" aria-label=".form-control-sm"
    //                     id="operador_documento" data-permiso="operador_documento">
    //                 <!-- <label class="form-check-label" >
    //                 Cliente
    //             </label> -->
    //             </div>
    //             <div class="row pt-1">
    //                 <div class="col p-1 input-group">
    //                     <input class="form-check-input" type="checkbox" value=""
    //                         id="operador_señas"
    //                         ${verificar_data_para_pintar(arr_permisos, "identificador", "senias", "valor")}>
    //                     <label class="form-check-label ps-2" >
    //                         Señas
    //                     </label>
    //                 </div>
    //                 <div class="col p-1 input-group">
    //                     <input class="form-check-input" type="checkbox" value=""
    //                         id="operador_hogar"
    //                         ${verificar_data_para_pintar(arr_permisos, "identificador", "hogar", "valor")}>
    //                     <label class="form-check-label ps-2" >
    //                         Hogar
    //                     </label>
    //                 </div>
    //                 <div class="col p-1 input-group">
    //                     <input class="form-check-input" type="checkbox" value=""
    //                         id="operador_moviles"
    //                         ${verificar_data_para_pintar(arr_permisos, "identificador", "moviles", "valor")}>
    //                     <label class="form-check-label ps-2" >
    //                         Móviles
    //                     </label>
    //                 </div>
    //             </div>
    //         </div>
    //     `;
    //     // agregar valores 
    //     nodo_div_contendor.querySelector("#operador_documento").value = verificar_data_para_pintar(arr_permisos, "identificador", "documento", "valor");

    //     return nodo_div_contendor;
    // }

    const crear_nodo_per_administrador = (data) => {

        let nodo_div_contendor = document.createElement("div");
        nodo_div_contendor.className = "w-100 overflow-hidden";

        let arr_permisos = data.permisos_admninistrador;
        let id360 = data.id;

        nodo_div_contendor.innerHTML = `
            <div class="form-switch d-flex justify-content-center" >
                <input class="btn-check" type="checkbox"
                    id="chb_administrador_${id360}"
                    data-permiso="chb_administrador"
                    ${verificar_data_para_pintar(arr_permisos, "identificador", "categoria", "valor")}
                    data-control-bloque="true">
                <label for="chb_administrador_${id360}" >
                    Administrador
                </label>
                <hr>
            </div>
            <div class="row pt-2 permisos " >
                <div class="col p-1 form-switch" >
                    <input class="btn-check" type="checkbox"
                                    id="administrador_historico_${id360}"
                                    data-permiso="administrador_historico"
                                    ${verificar_data_para_pintar(arr_permisos, "identificador", "historico", "valor")}>
                    <label for="administrador_historico_${id360}" >
                        historico
                    </label>
                </div>
                <div class="col p-1  form-switch">
                    <input class="btn-check" type="checkbox"
                        id="administrador_dashboard_${id360}"
                        data-permiso="administrador_dashboard"
                        ${verificar_data_para_pintar(arr_permisos, "identificador", "dashboard", "valor")}>
                    <label for="administrador_dashboard_${id360}">
                        dashboard 
                    </label>
                </div>
                <div class="col p-1 form-switch">
                    <input class="btn-check" type="checkbox"
                                id="administrador_usuarios_${id360}"
                                data-permiso="administrador_usuarios"
                                ${verificar_data_para_pintar(arr_permisos, "identificador", "usuarios", "valor")} >
                    <label for="administrador_usuarios_${id360}">
                        Usuarios
                    </label>
                </div>
            </div>
        `;

        return nodo_div_contendor;
    }

    // const crear_nodo_per_administrador_old = (data) => {

    //     let nodo_div_contendor = document.createElement("div");
    //     nodo_div_contendor.className = "w-100 overflow-hidden";

    //     let arr_permisos = data.permisos_admninistrador;

    //     nodo_div_contendor.innerHTML = `
    //         <div class="input-group d-flex justify-content-center">
    //             <input class="form-check-input" type="checkbox" value=""
    //                 id="chb_administrador"
    //                 ${verificar_data_para_pintar(arr_permisos, "identificador", "categoria", "valor")}
    //                 data-control-bloque="true">
    //             <label class="form-check-label ps-2" >
    //                 Administrador
    //             </label>
    //             <hr>
    //         </div>
    //         <div class="row pt-2 permisos">
    //             <div class="col input-group">
    //                 <input class="form-check-input" type="checkbox" value=""
    //                     id="administrador_historico"
    //                     ${verificar_data_para_pintar(arr_permisos, "identificador", "historico", "valor")}>
    //                 <label class="form-check-label ps-2" >
    //                     historico
    //                 </label>
    //             </div>
    //             <div class="col  input-group">
    //                 <input class="form-check-input" type="checkbox" value=""
    //                     id="administrador_dashboard"
    //                     ${verificar_data_para_pintar(arr_permisos, "identificador", "dashboard", "valor")}>
    //                 <label class="form-check-label ps-2">
    //                     dashboard
    //                 </label>
    //             </div>
    //             <div class="col input-group">
    //                 <input class="form-check-input" type="checkbox" value=""
    //                     id="administrador_usuarios"
    //                     ${verificar_data_para_pintar(arr_permisos, "identificador", "usuarios", "valor")} >
    //                 <label class="form-check-label ps-2">
    //                     Usuarios
    //                 </label>
    //             </div>
    //         </div>
    //     `;

    //     return nodo_div_contendor;
    // }



    const lanzador = async () => {

        let peticion = await peticion_usuarios();

        let data_usuarios = peticion.usuarios;

        console.log("data_usuarios", data_usuarios);

        let columnas = [
            { data: 'id', title: 'No. Usuario', class: 'id360', defaultContent: ``, width: "120px" },
            { data: 'usuario', title: 'Usuario', class: 'usuario_llave', defaultContent: ``, width: "100px" },
            { data: 'correo', title: 'Correo', class: 'correo', defaultContent: ``, width: "100px" },
            { data: 'nombre', title: 'Nombre', class: 'nombre', defaultContent: ``, width: "150px" },
            { data: 'apellido_paterno', title: 'Apellido Paterno', class: 'apellido_paterno', defaultContent: ``, width: "150px" },
            { data: 'apellido_materno', title: 'Apellido Materno', class: 'apellido_materno', defaultContent: ``, width: "150px" },
            { data: null, title: 'Permisos Cliente', class: 'permisos_cliente', defaultContent: ``, width: "300px" },
            { data: null, title: 'Permisos Operador', class: 'permisos_operador', defaultContent: ``, width: "300px" },
            { data: null, title: 'Permisos Administrador', class: 'permisos_admninistrador', defaultContent: ``, width: "300px" },
            { data: null, title: 'Acciones', class: 'acciones', defaultContent: ``, width: "100px" },
        ];
        columnas_usuarios = columnas;

        let render = [
            {
                target: "permisos_cliente",
                render: function (data, row, nodo_row, nodo_cell) {
                    nodo_cell.insertAdjacentElement("beforeEnd", crear_nodo_per_cliente(row));
                }
            },
            {
                target: "permisos_operador",
                render: function (data, row, nodo_row, nodo_cell) {
                    nodo_cell.insertAdjacentElement("beforeEnd", crear_nodo_per_operador(row));
                }
            },
            {
                target: "permisos_admninistrador",
                render: function (data, row, nodo_row, nodo_cell) {
                    nodo_cell.insertAdjacentElement("beforeEnd", crear_nodo_per_administrador(row));
                }
            }
        ];

        renders_tabla_usuarios = render;

        let nodo_estructura_tabla = crear_estuctura_tabla(columnas);
        nodo_tabla_usuarios = nodo_estructura_tabla;


        // agregarle la data
        rellenar_tabla_data(nodo_estructura_tabla, columnas, data_usuarios, render);



        // insertar el nodo document
        let nodo_destino = document.querySelector('.div_tabla_usuarios');
        nodo_destino.insertAdjacentElement("beforeEnd", nodo_estructura_tabla);

        // agregar el manager de eventos 
        ME_tabla_usuarios(nodo_estructura_tabla);
        ME_tabla_usuarios_cambio(nodo_estructura_tabla);

    };

    const crear_nodo_input = (id, clase, placeholder) => {
        let nodo_input = document.createElement("div");
        nodo_input.className = "input-group mb-3";
        nodo_input.innerHTML = `
                        <input type="text" id="${id}" class="form-control ${clase}" placeholder="${placeholder}" aria-describedby="basic-addon1">
                    `;
        return nodo_input;
    };

    const agregar_renglon_tabla = () => {

        let data_renglon = {
            id: "temp" + getRandomInt(1000000),
            usuario: "",
            contrasenia: "",
            correo: "",
            nombre: "",
            apellido_paterno: "",
            apellido_materno: ""
        };
        let renders = renders_tabla_usuarios.slice();
        renders.push(
            {
                target: "usuario_llave",
                render: function (data, row, nodo_row, nodo_cell) {
                    nodo_row.classList.add("pendiente_guardar");
                    nodo_row.setAttribute('data-r-sin_guardar', "true");

                    nodo_cell.innerHTML = "";

                    let nodo_input = crear_nodo_input("", "", "Usuario");

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
            },
        )


        let renglon = crear_renglon_tabla(data_renglon, columnas_usuarios, peticion_usuarios_data, renders);

        // deshabilitar los input
        let nodos_permisos = renglon.querySelectorAll(".permisos input");
        console.log("nodos_permisos", nodos_permisos);
        if (nodos_permisos) {
            for (nodo of nodos_permisos) {
                nodo.disabled = true;
            }
        }

        //  incurstar en la vista 
        nodo_tabla_usuarios.querySelector(".tbody")
            .insertAdjacentElement("beforeEnd", renglon);
    };

    const ME_tabla_usuarios = (nodo_me) => {
        // manager de eventos de usuarios
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

                if (evento) {
                    switch (evento) {
                        case "eliminar_renglon_temp":
                            // navegar hata su renglon
                            d.tr = nodo.closest("tr");
                            d.tr.remove();
                            break;

                        default:
                            break;
                    }
                }
            });

        }
    };

    const ME_tabla_usuarios_cambio = (nodo_me) => {
        //manager de eventos pero solo de cambio
        if (nodo_me) {
            nodo_me.addEventListener("change", function fn_tabla_usuarios_cambio(e) {
                const target = e.target;
                console.log(target);

                // busqueda de la celda td 
                let bandera_control = target.getAttribute("data-control-bloque");
                if (bandera_control === "true") {
                    let busqueda_td = target.closest('td');
                    let input_permisos = busqueda_td.querySelectorAll(".permisos input");
                    if (input_permisos) {
                        for (input_p of input_permisos) {
                            // if (target.checked) {
                            //     input_p.disabled = false;
                            // } else {
                            //     input_p.disabled = true;
                            // }
                            let tipo = input_p.type;


                            if (tipo) {
                                switch (tipo) {
                                    case "text":
                                        if (target.checked) {
                                            input_p.disabled = false;
                                        } else {
                                            input_p.disabled = true;
                                        }
                                        break;
                                    case "checkbox":
                                        // console.log("checkbox", input_p.parentNode);s
                                        // if (target.checked) {
                                        //     input_p.parentNode.classList.remove("disabled");
                                        // } else {
                                        //     input_p.parentNode.classList.add("disabled");
                                        // }
                                        if (target.checked) {
                                            input_p.disabled = false;
                                        } else {
                                            input_p.disabled = true;
                                        }
                                        break;

                                    default:
                                        break;
                                }
                            }

                        }
                    }
                }

                // busqueda asceedente hacia el nodo de renglon 
                let busqueda_tr = target.closest('tr');

                if (busqueda_tr) {

                    // verificar si es un nuevo usuarios

                    let es_nuevo = busqueda_tr.getAttribute("data-r-sin_guardar");


                    if (es_nuevo) {
                        // no queda aplicado a los usuarios que van a ser agregados 
                        return;
                    }

                    busqueda_tr.setAttribute("data-modificado", true);
                }
            });
        }

    }

    const extraer_info_renglon = (nodo) => {
        let respuestas = {};
        if (nodo && nodo.localName === "tr") {

            if (columnas_usuarios) {

                for (columna of columnas_usuarios) {

                    let llave_json = null;
                    let caso_espaecial = false;
                    if (columna.data) {
                        llave_json = columna.data;
                    } else if (columna.class) {
                        llave_json = columna.class;
                        caso_espaecial = true;
                    }

                    // console.log("columna", columna);

                    let nodo_td = nodo.querySelector("." + columna.class);

                    let nodo_categoria = null;
                    if (caso_espaecial) {
                        switch (columna.class) {
                            case "permisos_cliente":
                                let obj_per_cliente = {};
                                nodo_categoria = nodo_td.querySelector('[data-permiso="chb_cliente"]');
                                obj_per_cliente["categoria"] = (nodo_categoria.checked) ? "1" : "0";
                                obj_per_cliente["descripcion"] = "permisos_cliente";

                                if (nodo_categoria.checked) {
                                    obj_per_cliente["cac"] = nodo_td.querySelector('[data-permiso="cliente_cac"').value;
                                    obj_per_cliente["modulo"] = nodo_td.querySelector('[data-permiso="cliente_modulo"').value;
                                    obj_per_cliente["region"] = nodo_td.querySelector('[data-permiso="cliente_region"').value;
                                } else {
                                    obj_per_cliente["cac"] = null;
                                    obj_per_cliente["modulo"] = null;
                                    obj_per_cliente["region"] = null;
                                }

                                respuestas["permisos_cliente"] = obj_per_cliente;

                                break;
                            case "permisos_operador":
                                let obj_pe_operador = {};
                                nodo_categoria = nodo_td.querySelector('[data-permiso="chb_operador"]');
                                obj_pe_operador["categoria"] = (nodo_categoria.checked) ? "1" : "0";
                                obj_pe_operador["descripcion"] = "permisos_operador";

                                if (nodo_categoria.checked) {
                                    obj_pe_operador["documento"] = nodo_td.querySelector('[data-permiso="operador_señas"').value;
                                    obj_pe_operador["señas"] = (nodo_td.querySelector('[data-permiso="operador_señas"').checked) ? "1" : "0";
                                    obj_pe_operador["hogar"] = (nodo_td.querySelector('[data-permiso="operador_señas"').checked) ? "1" : "0";
                                    obj_pe_operador["moviles"] = (nodo_td.querySelector('[data-permiso="operador_señas"').checked) ? "1" : "0";

                                } else {
                                    obj_pe_operador["documento"] = "";
                                    obj_pe_operador["señas"] = "";
                                    obj_pe_operador["hogar"] = "";
                                    obj_pe_operador["moviles"] = "";
                                }
                                respuestas["permisos_operador"] = obj_pe_operador;

                                break;
                            case "permisos_admninistrador":
                                let obj_pe_administrador = {};
                                nodo_categoria = nodo_td.querySelector('[data-permiso="chb_administrador"');
                                obj_pe_administrador["categoria"] = (nodo_categoria.checked) ? "1" : "0";
                                obj_pe_administrador["descripcion"] = "permisos_admninistrador";

                                if (nodo_categoria.checked) {
                                    obj_pe_administrador["historico"] = (nodo_td.querySelector('[data-permiso="administrador_historico"').value) ? "1" : "0";
                                    obj_pe_administrador["dashboard"] = (nodo_td.querySelector('[data-permiso="administrador_dashboard"').value) ? "1" : "0";
                                    obj_pe_administrador["usuarios"] = (nodo_td.querySelector('[data-permiso="administrador_usuarios"').value) ? "1" : "0";

                                } else {
                                    obj_pe_administrador["historico"] = "";
                                    obj_pe_administrador["dashboard"] = "";
                                    obj_pe_administrador["usuarios"] = "";
                                }
                                respuestas["permisos_administrador"] = obj_pe_administrador;

                                break;

                            default:
                                break;
                        }

                    } else {
                        let nodo_input = nodo_td.querySelector("input");
                        if (nodo_input) {
                            respuestas[llave_json] = nodo_input.value;
                        }
                    }

                }
            }

        } else {
            console.log("nodo no vlaidado", nodo);
        }

        return respuestas;

    };

    const recaudar_usuarios_modificados = () => {
        let pendintes_modificados = document.querySelectorAll('[data-modificado]');
        let respuestas = new Array();
        if (pendintes_modificados) {
            for (pendiente of pendintes_modificados) {
                let id360 = pendiente.getAttribute("data-id360");

                respuestas.push(extraer_info_renglon(pendiente));

            }
        }
        return respuestas;
    };


    const recaudar_nuevos_usuarios = () => {
        let pendintes_guardar = document.querySelectorAll('[data-r-sin_guardar="true"]');
        let respuestas = new Array();
        if (pendintes_guardar) {
            for (pendiente of pendintes_guardar) {
                let id360 = pendiente.getAttribute("data-id360");

                respuestas.push(extraer_info_renglon(pendiente));

            }
        }

        return respuestas;
    };

    const guardar = () => {
        console.log("modificados", recaudar_usuarios_modificados());
        console.log("nuevos", recaudar_nuevos_usuarios());
    };
    function isNode(obj) {
        return obj.toString().indexOf(' HTML') > 0;
    }
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const get_variables = () => {
        return {
            peticion_usuarios_data,
            nodo_tabla_usuarios,
            renders_tabla_usuarios,
            columnas_usuarios,
            peticion_entorno,
        }
    };


    return {
        peticion_usuarios,
        lanzador,
        crear_nodo_per_cliente,
        isNode,
        agregar_renglon_tabla,
        recaudar_nuevos_usuarios,
        extraer_info_renglon,
        recaudar_usuarios_modificados,
        guardar,
        verificar_data_para_pintar,
        get_variables,
        peticion_detalles_entorno
    }
};
