// modulo para crear filtros 
// el uso destinado es para crear un div con inputs dinamicos donde se agregen filtros
// los filtros seran usados para incluirrlos en la peticion
let filtros = [
    {
        label: "Por mes año",
        type: "month",
        id: "mes",
        tag: "input",
    },
    {
        label: "Menor a fecha",
        type: "date",
        id: "menor_fecha",
        tag: "input",
    },
    {
        label: "Mayor a fecha",
        type: "date",
        id: "mayor_fecha",
        tag: "input",
    },
    {
        label: "Tipo PST",
        type: "",
        id: "tipo_pst",
        tag: "select",
        data_options: [
            {
                value: "1",
                text: "HOSPEDAJE"
            },
            {
                value: "31",
                text: "GUIA DE TURISTAS"
            },
        ]
    },
    {
        label: "Estado de solicitud",
        type: "text",
        id: "",
        tag: "select",
        data_options: [
            {
                value: "1",
                text: "Nueva Solicitud"
            },
            {
                value: "2",
                text: "Solicitud con observaciones"
            },
            {
                value: "3",
                text: "Observaciones atendidas"
            },
            {
                value: "4",
                text: "Solicitud Rechazada"
            },
            {
                value: "5",
                text: "Solicitud Aceptada"
            }
        ]
    },
];

export const init_filtros = () => {
    let destino = document.querySelector(".cont_filtros_dinamicos");
    destino.innerHTML = "";
    let nodo_FiltDinami = crear_nodo();
    destino.insertAdjacentElement("beforeEnd", nodo_FiltDinami);

    let lista = destino.querySelector(".lista_filtros");

    let data_filtros = new Array();
    data_filtros = filtros;




    // for (let t of data_filtros) {
    //     let item = crear_item_filtro(t);
    //     lista.insertAdjacentElement("beforeEnd", item);
    // }
    ME_filtros_controles(nodo_FiltDinami);
};
//---------------------------------------------------------------------------------------------------------------------------------------
// para crear el nodo  padre y el selector de filtros
export const crear_nodo = () => {
    let filt_dinami = document.createElement("div");
    filt_dinami.className = "filtros_dinamicos";
    filt_dinami.innerHTML = `<div class="selector_filtros">
                            <div class="form">
                                <label for="catalogoFiltros"> Selecciona un filtro</label>

                            </div>
                            <div class="controles_selectrorFiltros">
                                <div class="control_agregar">
                                    <button type="button" class="btn btn-primary" data-evento="agregar_filtro">Agregar</button>
                                </div>
                            </div>
                        </div>
                        <div class="lista_filtros"></div>`;

    let select = crear_nodo_select();
    let label = filt_dinami.querySelector('label[for="catalogoFiltros"]');
    label.insertAdjacentElement("afterend", select);
    return filt_dinami;
};

export const crear_nodo_select = () => {
    // crear las opciones para el selector de filtros

    let select = document.createElement("select");
    select.id = "catalogoFiltros";
    select.className = "form-select";

    let option = document.createElement("option");
    option.value ="";
    option.text = "Seleccione una opcion";
    select.insertAdjacentElement("beforeEnd", option)

    for (let index = 0; index < filtros.length; index++) {
        let element = filtros[index];
        element["value"] = index;
        let option = document.createElement("option");
        option.value = element.value;
        option.text = element.label;
        select.insertAdjacentElement("beforeEnd", option)
    }
    return select;
};

//-----------------------------------------------------------------------------------------------------------------------------------
// para los items filtros

export const crear_item_filtro = (data = {}) => {
    // crear nodo de item de filtros
    let cont = document.createElement("div");
    cont.className = "itemFiltro";
    cont.innerHTML = `<div class="form mb-3">
                            <label for="filtro_${data.id}">${data.label}</label>
                            
                        </div>
                        <div class="itemControles">
                            <div class="eliminar">
                                <button type="button" class="btn btn-danger" data-evento="eliminar_filtro">Eliminar</button>
                            </div>
                        </div>`;
    let label = cont.querySelector("label[for^=filtro]");
    let element = crear_elemet_filtro(data);
    label.insertAdjacentElement("afterend", element);
    return cont;
};

export const crear_elemet_filtro = (data) => {
    // crear el input, select con opciones para el filtro
    let nodo = document.createElement(data.tag);
    nodo.className = "form-control";
    nodo.id = "filtro_" + data.id;
    console.log(!!data.type);
    // nodo.type = (!!data.type) ? data.type : "text";
    nodo.setAttribute("type", (!!data.type) ? data.type : "text");


    switch (data.tag) {
        case "select":
            for (var _option of data.data_options) {
                var option = document.createElement("option");
                option.value = _option.value;
                option.text = _option.text;
                nodo.insertAdjacentElement("beforeEnd", option)
            }
            break;

        default:
            break;
    }


    return nodo;
}

//--------------------------------------------------------------------------------------------------------------------------
// Manipulador de eventos del selector de filtros

export const ME_filtros_controles = (_nodo) => {
    if (_nodo) {
        let lista = _nodo.querySelector(".lista_filtros");
        let selector = _nodo.querySelector(".selector_filtros");
        _nodo.addEventListener("click", (e) => {
            const target = e.target;
            console.log(target);
            let evento = target.getAttribute('data-evento');
            let nodo = target;
            if (!evento) {
                // busqueda hacia los nodos padre 
                let busqueda = target.closest('[data-evento]');
                if (busqueda) {
                    evento = busqueda.getAttribute('data-evento');
                    nodo = busqueda;
                }
            }

            if (evento) {
                switch (evento) {
                    case "agregar_filtro":
                        var select = selector.querySelector("#catalogoFiltros");
                        if (select) {
                            var item_filtro = filtros.find(item => item.value.toString() === select.value);
                            var item = crear_item_filtro(item_filtro);
                            lista.insertAdjacentElement("beforeEnd", item);
                        }
                        break;
                    case "eliminar_filtro":
                        var item = target.closest(".itemFiltro");
                        item.remove()
                        break;
                    default:
                        break;
                }
            }

        });
    }
};

export const al_agregar_filtro = ()=>{
    // al seleccionar un filtro  se debe ser dehabilitar dicho filtro
    // volver a habilityar el filtro seleccionado
};


//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------
export const extraer_data_filtros = () => {
    // extraer la data de los inputs, selects y regresar una estrusctura

};