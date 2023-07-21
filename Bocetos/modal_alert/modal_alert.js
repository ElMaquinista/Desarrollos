

async function lanzar_modal_filtro() {
    let nodo_temp = document.createElement("div");
    let nodo_capsula = document.createElement("div");
    nodo_capsula.className = "contenido_modal_filtros_publisher";
    nodo_temp.insertAdjacentElement("beforeEnd", nodo_capsula);
    let nodo_radio = document.createElement("div");
    nodo_capsula.insertAdjacentElement("beforeEnd", nodo_radio)

    // opciones de filtro
    let html = `
    <div class="seleccion_filtro_publicador">
        <div class="form-check">
            <input class="form-check-input" type="radio" name="filtro_publicador" id="filtro_publicador_blur" value="filtro_blur"
                checked>
            <label class="form-check-label" for="filtro_publicador_blur">
            Filtro blur
            </label>
        </div>
            <div class="form-check">
            <input class="form-check-input" type="radio" name="filtro_publicador" id="filtro_publicador_person" value="filtro_imagen">
            <label class="form-check-label" for="filtro_publicador_person">
                Filtro personallizado
            </label>
        </div>
    </div> <hr>
           `;
    nodo_radio.innerHTML = html;

    // agregar los eventos
    let nodo_config = document.createElement("div");
    nodo_config.className = "contenedor_config";
    nodo_config.innerHTML = `
    <div class="seleccion_filtro_blur">
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

    <div class="seccion_imagen_personalizada">
        <div class="contendor_catalogo_fondos border">
            <div>
                <img src="./img_fondos/paisaje_1.jpg" class="item_imagen" alt="">
            </div>
            <div>
                <img src="./img_fondos/paisaje_2.jpg" class="item_imagen" alt="">
            </div>
            <div>
                <img src="./img_fondos/paisaje_1.jpg" class="item_imagen" alt="">
            </div>
            <div>
                <img src="./img_fondos/paisaje_2.jpg" class="item_imagen" alt="">
            </div>
            <div>
                <img src="./img_fondos/paisaje_1.jpg" class="item_imagen" alt="">
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
            <div class="imagen_personalizada d-none">
                <img src="" class="item_imagen" alt="Imagen personalizada">
                
            </div>
        </div>
    </div>
    `;

    nodo_capsula.insertAdjacentElement("beforeEnd", nodo_config);

    await Alert({
        primer_boton: true,
        segundo_boton: true,
        html: nodo_temp.innerHTML,
        on_render: function rendirizado() {
            let nodo_cuerpo = document.querySelector(".contenido_modal_filtros_publisher");
            ME_filtros_publisher(nodo_cuerpo);
        }
    }).then(async (aceptar) => {
        if (aceptar) {

            console.log("Aceptado");
            aplicar_filtros();
        } else {
            console.log("rechazado");
        }
    });
}

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
                    case "":
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
                    switch (nodo_blur_seleccion) {
                        case "high":
                            console.log("Filtro blur High");
                            break;
                        case "low":
                            console.log("Filtro blur Low");
                            break;
                        default:
                            break;
                    }
                }
                break;
            case "filtro_imagen":


            default:
                break;
        }
    }

};

//---------------------------------------------------------
//---------------------------------------------------------
//---------------------------------------------------------
//---------------------------------------------------------

function aplicar_filtro_publisher_() {
    if (_publisher) {
        _publisher.applyVideoFilter({
            type: 'backgroundBlur',
            blurStrength: 'low',
        });
    }
}
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
    let nodo__input = document.querySelector('input[type="file"]');
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