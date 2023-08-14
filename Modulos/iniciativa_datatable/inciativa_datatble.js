// esta basado en las clases de bootstrap 4 





export class inicDataTable {
    // en la data de entrada la llave index si es la tiene sera sobreescrita por fines internos

    init = {
        data: [],// array de info para pintar
        render: {}, // fucniones que se aplican despues de pintar la data
        paginacion: {    // opcional
            hab: false,
            items_pagina: 20
        }
    };
    nodo_DataTable = null;

    constructor(_init) {
        // debe recibir init  con la dara necesaria para crear la tabla
        let init = Object.assign({}, _init);
        let nodo_contenedor = init.nodoDestino;
        let crear_estuctura_tabla = this.crear_estuctura_tabla;
        let rellenar_tabla_data = this.rellenar_tabla_data;
        let agregar_index_data = this.agregar_index_data;
        let nodo_DataTable = null;

        // agregar un identificador unico, con alcance solo interno, 
        // para tener un identificador unico de manera local
        agregar_index_data(init.data);

        // validar paginacion
        // let paginacion = paginar_tabla(init.paginacion);

        nodo_DataTable = crear_estuctura_tabla(init.columnas, this);

        rellenar_tabla_data(nodo_DataTable, init.columnas, init.data, init.render, this);


        nodo_contenedor.insertAdjacentElement("beforeEnd", nodo_DataTable);
        this.init = init;
        this.nodo_DataTable = nodo_DataTable
        return this;
    }

    agregar_index_data(arr_data) {
        if (arr_data) {
            let index = 0;
            for (let item of arr_data) {
                item.index = index;
                index++;
            }
        }
    }

    crear_estuctura_tabla(columnas, that = this) {
        let clase_tabla = "table table-bordered";
        // ---------------------
        let nodo_tabla = document.createElement("table");
        nodo_tabla.className = clase_tabla;
        nodo_tabla.classList.add("align-middle");
        nodo_tabla.classList.add("text-center");
        nodo_tabla.style.width = "max-content"; // permite que la tabla se muestra con scroll horizontal, aun si el ancho de la tabla es variable 


        let html_thead = "";
        for (let columna of columnas) {
            let s_width = (!!columna.width) ? columna.width : "";
            html_thead += `<th scope="col" class="${columna.class}" style="width:${s_width};">${columna.title}</th>`;
        }



        let html_interno_tabla = `
        <thead class="">
            <tr class="">
                ${html_thead}
            </tr>
        </thead>
        <tbody class="tbody">
    
        </tbody>`;
        nodo_tabla.innerHTML = html_interno_tabla;
        // console.log("nodo_tabla", nodo_tabla);
        return nodo_tabla;
    };

    crear_renglon_tabla(renglon, columnas, arrdata, arr_render, that = this) {
        let nodo_renglon = document.createElement('tr');
        nodo_renglon.className = "";
        nodo_renglon.setAttribute("data-dt-index", renglon.index);
        renglon["_nodo"]= nodo_renglon;



        for (let columna of columnas) {
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
                nodo_columna_td.innerHTML = renglon[columna.data];

                // if (columna.data === "id") {
                //     nodo_columna_td.innerHTML = renglon[columna.data];
                // } else {
                //     nodo_columna_td.innerHTML = "";
                //     let nodo_dato = crear_nodo_input("", "", "");
                //     nodo_dato.querySelector("input").value = renglon[columna.data];
                //     nodo_columna_td.insertAdjacentElement("beforeEnd", nodo_dato);
                // }

            }

            // aqui aplicamos el render 
            let render_concidencias = null;
            let render_all = null;
            if (nodo_columna_td.className && nodo_columna_td.className !== "" && arr_render) {
                // buscar los render que correspondan 

                render_concidencias = arr_render.filter(item => (nodo_columna_td.classList.contains(item.target)));
                render_all = arr_render.filter(item => (item.target === "_all_td"));
                // aplicar los render 
                if (render_concidencias) {
                    for (let item_render of render_concidencias) {
                        // aplicar la funcion de render 
                        try {
                            item_render.render(arrdata, renglon, nodo_renglon, nodo_columna_td);
                        } catch (error) {
                            console.error("error en en el render", item_render);
                            console.error("error render", error);
                        }
                    }
                }
                if (render_all) {
                    for (let item_render of render_all) {
                        // aplicar la funcion de render 
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

    rellenar_tabla_data(nodo_tabla, columnas, arrdata, arr_render, that = this,) {
        let crear_renglon_tabla = that.crear_renglon_tabla;
        if (nodo_tabla) {
            // por renglonnes 
            if (arrdata) {
                for (let renglon of arrdata) {

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
    crear_nodo_input(that = this, id, clase, placeholder) {
        let nodo_input = document.createElement("div");
        nodo_input.className = "input-group mb-3";
        nodo_input.innerHTML = `
                        <input type="text" id="${id}" class="form-control ${clase}" placeholder="${placeholder}" aria-describedby="basic-addon1">
                    `;
        return nodo_input;
    };



    paginar_tabla(config) {
        // debe hacer la separacion de la data por paginas
        //debe hacer el nodo de los botones de paginacion
        let respuesta = {};
        if (config && config.hab) {

        }
    }
    conmutador_tr_hijo(nodo_padre) {
        // pintar un nodo hijo al renglon seleccionado
        let nodo_hijo = null;
        if (nodo_padre) {

            if (nodo_padre.classList.contains("tr_tieneHijo")) {
                nodo_padre.classList.remove("tr_tieneHijo");
                nodo_hijo = nodo_padre.nextSibling;
                if (nodo_hijo.classList.contains("tr_hijo")) {
                    nodo_hijo.remove();
                }
            } else {
                nodo_padre.classList.add("tr_tieneHijo");

                nodo_hijo = document.createElement("tr");
                nodo_hijo.className = "tr_hijo";
                nodo_hijo.innerHTML = `<td colspan="100%" class="columna_hijo"></td>`;
                nodo_padre.insertAdjacentElement("afterend", nodo_hijo);
            }
        }
        return nodo_hijo;
    }

    agregar_renglon_tabla(data, renders_temporales) {
        // agrregar un fila al final de la tabla
        // debe tener la misma data de las columnas 
        // los renders reemporales solo se aplicaran a este renglon

        let crear_renglon_tabla = this.crear_renglon_tabla;
        let columnas = this.init.columnas;
        let data_completa = this.init.data;

        let data_renglon = data;
        let renders = this.init.render.slice();
        // estos render son temporales y solo sirven mientras este metodo esté en ejecución
        renders.concat(renders_temporales);


        let renglon = crear_renglon_tabla(data_renglon, columnas, data_completa, renders, this);


        //  incurstar en la vista 
        this.nodo_DataTable.querySelector(".tbody")
            .insertAdjacentElement("beforeEnd", renglon);
        return renglon;
    }
    get_renglon(_index) {
        let index = parseInt(_index);
        let data = this.init.data;
        let buscado = null;
        if (data) {
            buscado = data.find(item => item.index === index);
        }
        return buscado;
    }

    re_dibujar(){
        // borrar la tabla pintada 
        this.init.nodoDestino.innerHTML = ``;

        let init = this.init;
        let nodo_contenedor = init.nodoDestino;
        let crear_estuctura_tabla = this.crear_estuctura_tabla;
        let rellenar_tabla_data = this.rellenar_tabla_data;
        let agregar_index_data = this.agregar_index_data;
        let nodo_DataTable = null;

        // agregar un identificador unico, con alcance solo interno, 
        // para tener un identificador unico de manera local
        agregar_index_data(init.data);

        // validar paginacion
        // let paginacion = paginar_tabla(init.paginacion);

        nodo_DataTable = crear_estuctura_tabla(init.columnas, this);

        rellenar_tabla_data(nodo_DataTable, init.columnas, init.data, init.render, this);


        nodo_contenedor.insertAdjacentElement("beforeEnd", nodo_DataTable);
    }


    get nodo_DataTable() {
        return this.nodo_DataTable;
    }
    get data() {
        return this.init.data;
    }
}

