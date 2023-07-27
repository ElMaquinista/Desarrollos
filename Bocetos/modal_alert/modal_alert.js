

let html_multiplexor_filtro = `
    <div class="seleccion_filtro_publicador">
        <div class="form-check">
            <input class="form-check-input" type="radio" name="filtro_publicador" id="filtro_publicador_sin"
                value="sin_filtro" checked = "true" data-evento="sin_filtro">
            <label class="form-check-label" for="filtro_publicador_sin">
                Sin Filtro
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="filtro_publicador" id="filtro_publicador_blur" value="filtro_blur"
            data-evento="filtro_blur" >
            <label class="form-check-label" for="filtro_publicador_blur">
            Filtro blur
            </label>
        </div>
            <div class="form-check">
            <input class="form-check-input" type="radio" name="filtro_publicador" id="filtro_publicador_person" value="filtro_imagen"
            data-evento="filtro_imagen">
            <label class="form-check-label" for="filtro_publicador_person">
                Filtro personallizado
            </label>
        </div>
    </div> <hr>
        `;
let html_opciones_filtros = `
    <div class="seleccion_filtro_blur d-none">
        <div class="form-check">
            <input class="form-check-input" type="radio" name="filtro_blur" id="filtro_blur_high" value="high"
                checked>
            <label class="form-check-label" for="filtro_blur_high">
            Filtro blur intenso
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="filtro_blur" id="f_blur_low" value="low">
            <label class="form-check-label" for="f_blur_low">
                Filtro blur leve
            </label>
        </div>
    </div>

    <hr>

    <div class="seccion_imagen_personalizada d-none position-relative">
        <div class="contendor_catalogo_fondos border">
            <div>
                <img src="./img_fondos/paisaje_1.jpg" class="item_imagen" alt="" data-evento="seleccionar_imagen">
            </div>
            <div>
                <img src="./img_fondos/paisaje_2.jpg" class="item_imagen" alt="" data-evento="seleccionar_imagen">
            </div>
            <div>
                <img src="./img_fondos/paisaje_1.jpg" class="item_imagen" alt="" data-evento="seleccionar_imagen">
            </div>
            <div>
                <img src="./img_fondos/paisaje_2.jpg" class="item_imagen" alt="" data-evento="seleccionar_imagen">
            </div>
            <div>
                <img src="./img_fondos/paisaje_1.jpg" class="item_imagen" alt="" data-evento="seleccionar_imagen">
            </div>
            <div class="contenedor_subir_imagen border">
                <div class="container-input">
                    <input type="file" name="file-1" id="file-1" class="inputfile inputfile-1"
                        data-multiple-caption="{count} archivos seleccionados" multiple
                        data-evento = "nueva_imagen" />
                    <label for="file-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="iborrainputfile" width="20" height="17"
                            viewBox="0 0 20 17">
                            <path
                                d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z">
                            </path>
                        </svg>
                        <span class="iborrainputfile"></span>
                    </label>
                </div>
            </div>
            <div class="imagen_personalizada d-none position-relative">
                <img src="" class="item_imagen" alt="Imagen personalizada" data-evento="seleccionar_imagen">
                <span class="cancelar_imagen´" data-evento="remover_img_personal">X</span>
            </div>
        </div>
    </div>
    `;

const ME_filtros_publisher = (_nodo) => {
    if (_nodo) {
        _nodo.addEventListener("change", async function ME_changue(e) {
            const target = e.target;

            console.log("caaambio", target);

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
                    case "nueva_imagen":
                        d.nodo_contenedor_archvo = document.querySelector(".contenedor_subir_imagen");
                        d.archivo = document.querySelector('.contenido_modal_filtros_publisher .contenedor_subir_imagen  input[type="file"]').files[0];
                        d.nodo_contenedor_img_perso = document.querySelector(".imagen_personalizada");
                        d.nodo_img_perso = document.querySelector(".contenido_modal_filtros_publisher .imagen_personalizada img");
                        if (d.archivo) {
                            console.log(d.archivo);
                            d.base64 = await get_base64_promesa(d.archivo);
                            if (d.base64) {
                                console.log("Ses subio la imagen");
                                d.nodo_img_perso.src = d.base64;
                                d.nodo_contenedor_archvo.classList.add("d-none");
                                d.nodo_contenedor_img_perso.classList.remove("d-none");
                            }
                        }
                        break;
                    case "sin_filtro":
                        d.nodo_conf_blur = document.querySelector(".seleccion_filtro_blur");
                        d.nodo_conf_img = document.querySelector(".seccion_imagen_personalizada");
                        d.nodo_conf_blur.classList.add("d-none");
                        d.nodo_conf_img.classList.add("d-none");
                        break;
                    case "filtro_blur":
                        d.nodo_conf_blur = document.querySelector(".seleccion_filtro_blur");
                        d.nodo_conf_img = document.querySelector(".seccion_imagen_personalizada");
                        d.nodo_conf_blur.classList.remove("d-none");
                        d.nodo_conf_img.classList.add("d-none");
                        break;
                    case "filtro_imagen":
                        d.nodo_conf_blur = document.querySelector(".seleccion_filtro_blur");
                        d.nodo_conf_img = document.querySelector(".seccion_imagen_personalizada");
                        d.nodo_conf_blur.classList.add("d-none");
                        d.nodo_conf_img.classList.remove("d-none");
                        break;
                    case "remover_img_personal":
                        d.nodo_subir_img = document.querySelector(".contenedor_subir_imagen");
                        d.nodo_img_per = document.querySelector(".imagen_personalizada");

                        d.nodo_subir_img.classList.remove("d-none");
                        d.nodo_img_per.classList.add("d-none");
                        d.nodo_img_per.classList.remove("active");

                        // borrar el archivo
                        d.nodo_subir_img.querySelector('input[type="file"]').value = "";

                        break;

                    default:
                        break;
                }
            }

        });

        // -----------------------------------------------------------
        _nodo.addEventListener("click", async function ME_changue(e) {
            const target = e.target;

            console.log("click", target);

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
                    case "remover_img_personal":
                        d.nodo_subir_img = document.querySelector(".contenedor_subir_imagen");
                        d.nodo_img_per = document.querySelector(".imagen_personalizada");

                        d.nodo_subir_img.classList.remove("d-none");
                        d.nodo_img_per.classList.add("d-none");

                        break;
                    case "aplicar_filtro":


                        aplicar_filtros();

                        break;
                    case "seleccionar_imagen":
                        d.nodos_imagenes = document.querySelector(".contendor_catalogo_fondos .item_imagen.active");
                        if (d.nodos_imagenes) {
                            d.nodos_imagenes.classList.remove("active");
                        }
                        nodo.classList.add("active");

                        break;
                    default:
                        break;
                }
            }
        });
    }
};

const aplicar_filtros = () => {
    let nodo_cont_tipo_filtros = document.querySelector(".contenido_moda_filtros_publisher");
    let nodo_radio_tipo_filtro_publicador = document.querySelector('input[name="filtro_publicador"]:checked');

    console.log("nodo_radios_tipo_filtro", nodo_radio_tipo_filtro_publicador);

    if (nodo_radio_tipo_filtro_publicador) {
        let tipo_filtro = nodo_radio_tipo_filtro_publicador.value;
        switch (tipo_filtro) {
            case "filtro_blur":
                let nodo_blur_seleccion = document.querySelector('input[name="filtro_blur"]:checked');

                if (nodo_blur_seleccion) {
                    switch (nodo_blur_seleccion.value) {
                        case "high":
                            aplicar_filtro_publisher("blur_low");

                            break;
                        case "low":
                            aplicar_filtro_publisher("blur_low");
                            break;

                        default:
                            break;
                    }
                }
                break;
            case "filtro_imagen":
                d.nodo_imagen_seleccionada = document.querySelector(".contendor_catalogo_fondos .item_imagen.active");
                if (d.nodo_imagen_seleccionada) {
                    // en caso de que se haya seleccionado una imagen
                    aplicar_filtro_publisher("img");
                } else {
                    // nose ha seleccioando alguna imagen para el filtro 
                    Alert("se debe seleccionar una imagen");

                }
                break;
            case "sin_filtro":
                aplicar_filtro_publisher("clear");
                break;
            default:
                break;
        }
    }

};

//---------------------------------------------------------
//---------------------------------------------------------
//---------------------------------------------------------
//---------------------------------------------------------
async function aplicar_filtro_publisher(caso, data) {
    // verificar que haya publicador 
    if (_publisher) {
        if (caso) {
            switch (caso) {
                case "blur_low":
                    _publisher.applyVideoFilter({
                        type: 'backgroundBlur',
                        blurStrength: 'low',
                    });
                    break;
                case "blur_high":
                    _publisher.applyVideoFilter({
                        type: 'backgroundBlur',
                        blurStrength: 'low',
                    });
                    break;
                case "clear":
                    _publisher.clearVideoFilter()
                    break;
                case "img":
                    let archivo_imagen = get_archivo_imagen();
                    let base_64_archivo = null;

                    if (archivo_imagen) {
                        base_64_archivo = await get_base64_promesa(archivo_imagen);
                        if (base_64_archivo) {
                            _publisher.applyVideoFilter({
                                type: 'backgroundReplacement',
                                backgroundImgUrl: base_64_archivo
                            });
                        }
                    }

                    break;
                default:
                    break;
            }
        }
    }
}

function get_base64_promesa(file) {
    // prometer un archivo
    return new Promise((resolve, reject) => {
        let reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = async () => {

            resolve(reader.result);
        };

        reader.onerror = (error) => {
            reject(error);
        };


    });
}
function get_archivo_imagen() {
    let nodo__input = document.querySelector('.seccion_imagen_personalizada input[type="file"]');
    let archivo = null;
    if (nodo__input) {
        try {
            archivo = nodo__input.files[0];

        } catch (error) {
            console.error(error);
        }
    }
    return archivo;
}

//------------------------------------ cambiar el dispositivo de audio de salida 

async function get_audio_output() {
    var dispostivos = await navigator.mediaDevices.enumerateDevices();
    var only_audio_output = dispostivos.filter(item => item.kind === "audiooutput");

    return only_audio_output;
}

async function seleccionar_audio_output(id_output) {
    if (id_output) {
        await OT.setAudioOutputDevice(id_output);
    }
}

//---------------------------------------------------------
//---------------------------------------------------------
//---------------------------------------------------------
//---------------------------------------------------------
// para un modal desechable 

async function lanzar_modal_filtro() {
    //---------------------------- validar navegador
    if (obtenerIdNavegador() < 0) {
        // el navegador no es soportado
        await Simple_Alert("Solo el navegador Chorme está soportado");
        return;
    }

    //----------------------------------------------------

    let nodo_cuerpo = document.createElement("div");
    nodo_cuerpo.innerHTML = `
    <div class="contenido_modal_filtros_publisher">
        ${html_multiplexor_filtro}
        ${html_opciones_filtros}
    </div>`;

    let nodo_boton_aceptar = document.createElement("button");
    nodo_boton_aceptar.className = "btn btn-success";
    nodo_boton_aceptar.textContent = "Aceptar";
    nodo_boton_aceptar.setAttribute("data-evento", "aplicar_filtro");

    let data = {
        id: "modal_filtro_publicador",
        titulo: "Selecciona el tipo del filtro",
        nodo_cuerpo: nodo_cuerpo,
        className: "modal_filtro_publicador",
    };
    let nodo_modal = crear_modal_desechable(data);

//     let nodo_modal = document.createElement("div");
//     nodo_modal.innerHTML = `<div class="modal-dialog modal-dialog-centered ${data.clase_modal_dialog}">
//     <div class="modal-content">
//         <div class="modal-header">
//             <h5 class="modal-title" id="exampleModalLabel">${data.titulo}</h5>
//             <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                 <span aria-hidden="true">&times;</span>
//             </button>
//         </div>
//         <div class="modal-body">
            
//         </div>
//         <div class="modal-footer">
//             <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
//             <!-- <button type="button" class="btn btn-primary">Descargar comprobante</button> -->
//         </div>
//     </div>
// </div>`;

//     let obj_nodo_modal = new bootstrap.Modal(nodo_modal);


    let nodo_footer = nodo_modal[0].querySelector(".modal-footer");
    nodo_footer.insertAdjacentElement("beforeEnd", nodo_boton_aceptar);


    console.log("id  modal", nodo_modal);


    ME_filtros_publisher(nodo_cuerpo);
    // ME_filtros_publisher(nodo_footer);

    nodo_boton_aceptar.addEventListener("click", function me_acepatar(e) {
        const target = e.target;
        // se tiene que aplicar las validaciones 

        if (validar_modal_filtro()) {
            console.log("Aplicando filtros");
            aplicar_filtros();

            $('#' + data.id).modal('hide');
        }


    });


    // jQuery.noConflict();

    $('#' + data.id).modal().show();

    $('#' + data.id).on('hidden.bs.modal', function () {
        console.log("evento al cerrar modal lanzado");
        $('#' + data.id).modal('dispose');
        document.querySelector('#' + data.id).remove();
    })
}

function lanzar_modal_filtro_v2(){
    // fucnion para usar el modal de bs5
}


function validar_modal_filtro() {
    let respuesta = false;
    let nodo_cont_tipo_filtros = document.querySelector(".contenido_moda_filtros_publisher");
    let nodo_radio_tipo_filtro_publicador = document.querySelector('input[name="filtro_publicador"]:checked');

    if (nodo_radio_tipo_filtro_publicador) {
        let tipo_filtro = nodo_radio_tipo_filtro_publicador.value;
        let d = {};
        switch (tipo_filtro) {
            case "filtro_blur":
                // nop se requiere ya que siempre hay un radio seleccionado
                respuesta = true;
                break;
            case "filtro_imagen":
                // se debe validar de imagen seleccionada
                d.nodo_imagen_seleccionada = document.querySelector(".contendor_catalogo_fondos .item_imagen.active");
                if (d.nodo_imagen_seleccionada) {
                    // en caso de que se haya seleccionado una imagen
                    respuesta = true;
                } else {
                    // nose ha seleccioando alguna imagen para el filtro 
                    Simple_Alert("Debe seleccionar una imagen");
                }
                break;
            case "sin_filtro":
                respuesta = true;
                break;
            default:
                break;
        }
    }

    return respuesta;
}


//---------------------------------------------------------
//---------------------------------------------------------
//---------------------------------------------------------
//---------------------------------------------------------
// modal para la eleccion de audio
async function lanzar_modal_audio_salida() {
    //---------------------------- validar navegador
    if (obtenerIdNavegador() < 0) {
        // el navegador no es soportado
        await Simple_Alert("Solo el navegador Chorme está soportado");
        return;
    }

    //--------------------------- validar permiso acceso a camara y microfono
    try {
        let obj = await navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    } catch (error) {
        Simple_Alert("es necesario que permita el uso de Cámara y Micrófono");
    }

    //------------------------------------------------
    let nodo_contenedor = document.createElement("div");
    nodo_contenedor.className = "cuerpo_modal_audio_salida";

    let nodo_select_salida = await crear_nodo_audio_salida();

    nodo_contenedor.insertAdjacentElement("beforeEnd", nodo_select_salida);


    let nodo_boton_aceptar = document.createElement("button");
    nodo_boton_aceptar.className = "btn btn-success";
    nodo_boton_aceptar.textContent = "Aceptar";
    nodo_boton_aceptar.setAttribute("data-evento", "aplicar_filtro");

    let data = {
        id: "modal_filtro_publicador",
        titulo: "Selecciona el tipo del filtro",
        nodo_cuerpo: nodo_contenedor,
        className: "modal_filtro_publicador",
    };
    let nodo_modal = crear_modal_desechable(data);
    let nodo_footer = nodo_modal[0].querySelector(".modal-footer");
    nodo_footer.insertAdjacentElement("beforeEnd", nodo_boton_aceptar);


    console.log("id  modal", nodo_modal);


    ME_filtros_publisher(nodo_contenedor);
    // ME_filtros_publisher(nodo_footer);

    nodo_boton_aceptar.addEventListener("click", function me_acepatar(e) {
        const target = e.target;
        let nodo_select = document.querySelector(".seleccion_audio_salida ");
        let iddevice = nodo_select.value;

        if (iddevice) {
            seleccionar_audio_output(iddevice);

            console.log("aplicando salida de audio");

            $('#' + data.id).modal('hide');
        }

    });

    // jQuery.noConflict();

    $('#' + data.id).modal().show();

    $('#' + data.id).on('hidden.bs.modal', function () {
        console.log("evento al cerrar modal lanzado");
        $('#' + data.id).modal('dispose');
        document.querySelector('#' + data.id).remove();
    })


}
async function crear_nodo_audio_salida() {
    let nodo_select = document.createElement("select");
    nodo_select.className = " seleccion_audio_salida custom-select";

    let arr_audio_out = await get_audio_output();

    if (arr_audio_out && arr_audio_out.length) {
        for (let item_audio of arr_audio_out) {
            let nodo_opcion = document.createElement("option");
            nodo_opcion.value = item_audio.deviceId;
            nodo_opcion.textContent = item_audio.label;

            if (item_audio.deviceId === "default") {
                nodo_opcion.selected;
            }
            nodo_select.insertAdjacentElement("beforeEnd", nodo_opcion);
        }
    } else {
        let nodo_opcion = document.createElement("option");
        nodo_opcion.value = "";
        nodo_opcion.textContent = "No dispositivos para mostrar";
        nodo_select.insertAdjacentElement("beforeEnd", nodo_opcion);
    }

    return nodo_select;

}

async function validar_navegador() {
    // sa debe validar los navegadores en uso
    // para el filtro debe ser chrome

    // para obtener los dispositvos de audio de salida solo tiene soporte para chrome por ahora


}

function obtenerIdNavegador() {
    // let aKeys = ["MSIE", "Firefox", "Safari", "Chrome", "Opera"];
    let aKeys = ["Chrome"];
    let sUsrAg = navigator.userAgent;
    let nIdx = aKeys.length - 1;

    for (nIdx; nIdx > -1 && sUsrAg.indexOf(aKeys[nIdx]) === -1; nIdx--);

    return nIdx;
}

