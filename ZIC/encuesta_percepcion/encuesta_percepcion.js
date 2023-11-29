// import "/Recursos/nice-select2_2.1.0/js/nice-select2.js";  // no se puede usar como moduo

console.log("NiceSelect", NiceSelect);
let NS2_mejorCobertura = null; // objero de nice-select2
let i_vagon = ".pizarra_encuesta_percepcion"; // varaible para indicar el contendor general, evitando pegarle
let n_vagon = null;
let cata_preguntas = [ // arreglo de preguntas que seran pinrtadas 
    {
        text: "¿Qué operador tiene la mejor promoción de pospago?",
        tag: "select",
        categoria: "Precio",
        id: "mejor_promocion_postpago",
        tipo_red: "1"
    },
    {
        text: "¿Qué operador tiene la mejor promoción de prepago?",
        tag: "select",
        categoria: "Precio",
        id: "mejor_promocion_prepago",
        tipo_red: "1"
    },
    {
        text: "¿Qué operador tiene la mejor promoción en fija?",
        tag: "select",
        categoria: "Precio",
        id: "mejor_promocion_prepago",
        tipo_red: "2"
    },
    {
        text: "¿Qué operador consideras como mejor?",
        tag: "select",
        categoria: "Publicidad",
        id: "mejor_operador",
        tipo_red: ""
    },
    {
        text: "Qué operador hace mas publicidad?",
        tag: "select",
        categoria: "Publicidad",
        id: "mas_publicidad",
        tipo_red: ""
    },
    {
        text: "Qué operador elige como favorito?",
        tag: "select",
        categoria: "Publicidad",
        id: "favorito",
        tipo_red: ""
    },
    {
        text: "",
        tag: "textarea",
        categoria: "Detalle",
        id: "detalle",
        tipo_red: ""
    },
    {
        text: "",
        tag: "map",
        categoria: "Ubucación",
        id: "ubicacion",
        tipo_red: ""
    },
];

let operadores = [
    {
        value: "Claro",
        text: "Claro",
        tipo_red: "1"
    },
    {
        value: "Entel",
        text: "Entel",
        tipo_red: "1" //fija
    },
    {
        value: "Movistar",
        text: "Movistar",
        tipo_red: "2" // movil
    },
];

//--------------------------------------------------------------------------------------------------------------------------------------
export const init = () => {
    n_vagon = document.querySelector(i_vagon);
    let panel_preguntas = n_vagon.querySelector(".panel_preguntas");
    ME_encuesta_percepcion(n_vagon);

    let NS2_options = {
        searchable: true,
        placeholder: "Selecciona una opción",
        selectedtext: "Seleccionados"
    };
    NS2_mejorCobertura = NiceSelect.bind(n_vagon.querySelector("#operador_utilizado"), NS2_options);
    console.log("NS2_mejorCobertura", NS2_mejorCobertura);

    pintar_preguntas(panel_preguntas);
}
export const recargar_preguntas = () => {
    let panel_preguntas = n_vagon.querySelector(".panel_preguntas");
    panel_preguntas.innerHTML = ``;

    // cambiar los
    let select = document.querySelector("#operador_utilizado");
    select.innerHTML = crear_opciones_operadores();
    NS2_mejorCobertura.update()

    pintar_preguntas(panel_preguntas);
}

export const crear_opciones_de_selccion = () => {
    // se deben crear las las opciones solo de las lienas
    let opciones_data = NS2_mejorCobertura.selectedOptions.map(x => x.data);



};

//-------------------------------------------------------------------------------------------------------------------------
// getter
export const get_NS2_mejorCobertura = () => {
    return NS2_mejorCobertura;
};
export const get_map = () => {
    return map;
};

//-------------------------------------------------------------------------------------------------------------------------
// para las preguntas
export const pintar_preguntas = (_nodo) => {
    let ch = n_vagon.querySelector('.selector_atencion input[type="radio"]:checked');
    let ch_TA = null;
    if (_nodo) {
        ch = ch_TA = ch.getAttribute("data-tipo_red");
        for (let pregunta of cata_preguntas) {
            let TA = pregunta.tipo_red;
            let pintar = true;
            let precondicion = pregunta.precondicion;
            if (TA) {
                if (ch !== TA) {
                    pintar = false;
                }
            }

            if (pintar) {
                crear_cont_pregunta(_nodo, pregunta);
            }

        }
    }
    // especiales
    let pos = obtener_posicion();
    if (pos) {
        render_map_rnt(pos.latitud, pos.longitud);
    } else {
        render_map_rnt();
    }
};
export const crear_cont_pregunta = (_nodo, data) => {
    // crear contenedor de preguntas / categoria
    let id = "categoria_" + data.categoria;
    let cont = null;
    let item_pregunta = null;
    if (data) {

        cont = n_vagon.querySelector("#" + id);
        if (!cont) {
            cont = document.createElement("div");
            cont.className = "categoria p-2";
            cont.id = id;
            cont.innerHTML = `<div class="titulo">${data.categoria}</div>
            <div class="preguntas"></div>`;
            _nodo.insertAdjacentElement("beforeEnd", cont);
        }

        item_pregunta = crear_item_pregunta(data);

        cont.querySelector(".preguntas").insertAdjacentElement("beforeEnd", item_pregunta);

    }
};
export const crear_item_pregunta = (data) => {
    // crear una rpegunta
    let cont = null;
    if (data) {
        cont = document.createElement("div");
        cont.className = "item_pregunta";

        switch (data.tag) {
            case "select":
                cont.innerHTML = `
                    <label for="${data.id}"> ${data.text}</label>
                    <select class="form-select  form-select-sm mb-3 border border-danger" aria-label=".form-select-lg example"
                        id="${data.id}">
                        <option selected>Selecciona una opción</option>
                        ${crear_opciones_operadores()}
                    </select>
                `;
                break;
            case "textarea":
                cont.innerHTML = `
                    <label for="${data.id}">${data.text}</label>
                    <textarea class="form-control border border-danger" placeholder="" id="${data.id}" style="height: 100px"></textarea>
                `;
                break
            case "map":
                cont.innerHTML = `
                        <div class="col-12 col-md-6" mx-auto><div class="mt-2" id="map"></div></div>
                    `;
                break;
            default:
                break;
        }

    }
    return cont;
};

export const crear_opciones_operadores = () => {
    // crear las opciones para los select, pelecionar el operador
    let ch = n_vagon.querySelector('.selector_atencion input[type="radio"]:checked');
    let tipo_red = null;
    let cont = document.createElement("select");
    if (operadores) {
        tipo_red = ch.getAttribute("data-tipo_red");
        for (let operador of operadores) {
            if (tipo_red === operador.tipo_red) {
                let opcion = document.createElement("option");
                opcion.text = operador.text;
                opcion.value = operador.value;
                cont.insertAdjacentElement("beforeEnd", opcion);
            }
        }
    }
    return cont.innerHTML;
};

export const crear_options_de_data = (data) => {
    // retornar string de de opciones dependiendo de la data
    // recibe un arreglo
    let cont = document.createElement("select");

    for (let item of data) {
        let opcion = document.createElement("option");
        opcion.text = item.text;
        opcion.value = item.value;
        cont.insertAdjacentElement("beforeEnd", opcion);
    }

    return cont.innerHTML;
};

export const ritual_operador_multiple = () => {
    // secuancia de acciones en caso de tener multilpes operadores seleccionados
    let opciones = NS2_mejorCobertura.selectedOptions.map(x => x.data); // opciones seleccionadas
    let s_opciones = crear_options_de_data(opciones);

    let arr_select = n_vagon.querySelectorAll(".panel_preguntas_precondicion .item_pregunta select");


    if (arr_select && opciones.length >= 2) {
        n_vagon.querySelector(".panel_preguntas_precondicion").classList.remove("d-none");
        for (let nodo of arr_select) {
            nodo.innerHTML = s_opciones;
        }
    } else {
        for (let nodo of arr_select) {
            // nodo.innerHTML= s_opciones;
            nodo.innerHTML = `<option selected="">Selecciona una opción</option>`;
        }
        n_vagon.querySelector(".panel_preguntas_precondicion").classList.add("d-none");
    }

};

//-------------------------------------------------------------------------------------------------------------
// manejador de eventos

export const ME_encuesta_percepcion = (_nodo) => {
    if (_nodo) {
        _nodo.addEventListener("click", (e) => {
            // console.log("click", e);s
            preambulo_eventos(e, (evento, nodo) => {
                switch (evento) {
                    default:
                        break;
                }
            })
        });
        _nodo.addEventListener("change", (e) => {
            // console.log("change", e);s
            preambulo_eventos(e, (nodo, evento) => {
                switch (evento) {
                    case "select_operador_utilizado":
                        var opciones = NS2_mejorCobertura.selectedOptions.map(x => x.data.text)
                        console.log(opciones);
                        if (opciones) {
                            // NS2_mejorCobertura.selectedtext = opciones.toString();
                            // NS2_mejorCobertura.update();
                        }

                        ritual_operador_multiple();
                        break;
                    case "red_fija":
                        recargar_preguntas();
                        break;
                    case "red_movil":
                        recargar_preguntas();
                        break;
                    default:
                        break;
                }
            })
        });
    }
};

const preambulo_eventos = (e, fn_switch = function name(e) { }) => {
    const target = e.target;
    // console.log(target);
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

    if (evento && fn_switch) {
        fn_switch(nodo, evento);
    }
};



//-------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------
// mapa
let map = null;
let marker = null;
let circle = null;
let autocomplete = null;

export const render_map_rnt = (lat = 19.4363632, lng = - 99.1861065, zoom = 5, _marker = false) => {
    const initialLocation = { lat, lng };
    map = new google.maps.Map(n_vagon.querySelector('#map'), {
        center: initialLocation,
        zoom
    });



    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        position: (_marker) ? initialLocation : null
    });

    circle = new google.maps.Circle({
        map: map,
        radius: 50, // Radio del círculo en metros
        fillColor: '#00AAFF',
        fillOpacity: 0.3,
        strokeColor: '#00AAFF',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        position: (_marker) ? initialLocation : null
    });

    map.setCenter(initialLocation);
    marker.setPosition(initialLocation);
    map.setZoom(15);
    circle.setCenter(initialLocation);

    // autocomplete = new google.maps.places.Autocomplete(document.getElementById('new_request_8'));
    // autocomplete.addListener('place_changed', updateMapAndFields);

    //    marker.addListener('dragend', updateLatLngInputs);
    marker.addListener('dragend', checkMarkerBounds);
    marker.addListener('drag', checkMarkerBounds);
    function updateMapAndFields() {
        const place = autocomplete.getPlace();
        if (!place.geometry)
            return;
        validate_address(document.getElementById('new_request_8'));
        map.setCenter(place.geometry.location);
        marker.setPosition(place.geometry.location);
        map.setZoom(15);
        circle.setCenter(place.geometry.location);
        // Autocompletar los campos de dirección
        const addressComponents = place.address_components;
        for (const component of addressComponents) {
            const componentType = component.types[0];
            switch (componentType) {
                case 'street_number':// numero
                    document.getElementById('new_request_16').value = component.long_name;
                    break;
                case 'route':
                    document.getElementById('new_request_15').value = component.long_name;
                    break;
                case 'sublocality_level_1':
                    document.getElementById('new_request_13').value = component.long_name;
                    break;
                case 'administrative_area_level_1':// estado 
                    document.getElementById('new_request_11').value = component.long_name;
                    document.getElementById("new_request_11").value = document.getElementById("new_request_11").value === ''
                        ? ''
                        : document.getElementById("new_request_11").value;
                    break;
                case 'locality': // municipio
                    document.getElementById('new_request_12').value = component.long_name;
                    document.getElementById("new_request_12").value = document.getElementById("new_request_12").value === ''
                        ? ''
                        : document.getElementById("new_request_12").value;
                    break;
                case 'postal_code':
                    document.getElementById('new_request_14').value = component.long_name;
                    break;
            }
        }
        const position = place.geometry.location;
        document.getElementById('new_request_9').value = position.lat();
        document.getElementById('new_request_10').value = position.lng();
    }
    function checkMarkerBounds() {
        const newPosition = marker.getPosition();
        const circleCenter = circle.getCenter();
        const distance = google.maps.geometry.spherical.computeDistanceBetween(circleCenter, newPosition);

        if (distance > circle.getRadius()) {
            // Restablecer la posición del marcador al límite del círculo
            const heading = google.maps.geometry.spherical.computeHeading(circleCenter, newPosition);
            const newPositionAtRadius = google.maps.geometry.spherical.computeOffset(circleCenter, circle.getRadius(), heading);
            marker.setPosition(newPositionAtRadius);
        }
        document.getElementById('new_request_9').value = marker.getPosition().lat();
        document.getElementById('new_request_10').value = marker.getPosition().lng();
    }
};



export const obtener_posicion = () => {
    // obtener la 
    let latitud = null;
    let longitud = null;
    let respuesta = null;
    if (navigator.geolocation) {
        var success = function (position) {
            respuesta = { latitud, longitud };
            latitud = position.coords.latitude;
            longitud = position.coords.longitude;
            console.log("latitud", latitud);
            console.log("longitud", longitud);
        }
        navigator.geolocation.getCurrentPosition(success, function (msg) {
            console.error(msg);
        });
    }
    return respuesta;
};
