const habitat_modal_filtro_publisher = (() => {
    // entorno para desplegar el modal para seleccionar el filtro que se usara de fondeo para publisher

    let html_multiplexor_filtro = `
    <div class="seleccion_filtro_publicador row"> 
        <div class="form-check col item_tipo_filtro">
            <input class="btn-check" type="radio" name="filtro_publicador" id="filtro_publicador_sin"
                value="sin_filtro" checked = "true" data-evento="sin_filtro" autocomplete="off">
            <label class="btn btn-secondary" for="filtro_publicador_sin">
                Sin Filtro
            </label>
        </div>
        <div class="form-check col item_tipo_filtro">
            <input class="btn-check" type="radio" name="filtro_publicador" id="filtro_publicador_blur" value="filtro_blur"
            data-evento="filtro_blur" autocomplete="off">
            <label class="btn btn-secondary" for="filtro_publicador_blur">
            Blur
            </label>
        </div>
        <div class="form-check col item_tipo_filtro">
            <input class="btn-check" type="radio" name="filtro_publicador" id="filtro_publicador_person" value="filtro_imagen"
            data-evento="filtro_imagen" autocomplete="off">
            <label class="btn btn-secondary" for="filtro_publicador_person">
                Personalizado
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

    <div class="seccion_imagen_personalizada d-none position-relative">
        <div class="contendor_catalogo_fondos">
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
            <div class="contenedor_subir_imagen">
                <form class="container-input h-100" id="form_img_filtro" onreturn="false">
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
                </form>
            </div>
            <div class="imagen_personalizada d-none position-relative">
                <img src="" class="item_imagen" alt="Imagen personalizada" data-evento="seleccionar_imagen">
                <span class="cancelar_imagen´" data-evento="remover_img_personal">X</span>
            </div>
        </div>
    </div>
    `;


    async function lanzar_modal_filtro() {
        //---------------------------- validar navegador
        if (obtenerIdNavegador(["Chrome"]) < 0) {
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
        nodo_boton_aceptar.className = "btn btn_aceptar";
        nodo_boton_aceptar.textContent = "Aceptar";
        nodo_boton_aceptar.setAttribute("data-evento", "aplicar_filtro");

        let data = {
            id: "modal_filtro_publicador",
            titulo: "Selecciona el tipo del filtro",
            nodo_cuerpo: nodo_cuerpo,
            className: "modal_filtro_publicador",
            clase_modal_dialog: "modal_efimero_bs5 modal-dialog-centered"
        };

        ME_filtros_publisher(nodo_cuerpo);

        //-----------------------
        let obj_modal = crear_modal_desechable_bs5(data);

        let nodo_modal = obj_modal._element;

        let nodo_footer = nodo_modal.querySelector(".modal-footer");

        nodo_footer.insertAdjacentElement("beforeEnd", nodo_boton_aceptar);

        nodo_boton_aceptar.addEventListener("click", function acaptar(e) {
            console.log(" aceptó las codiciones");

            if (validar_modal_filtro()) {
                console.log("Aplicando filtros");
                aplicar_filtros();

                obj_modal.hide()
            }

        });


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
    const aplicar_filtros = () => {
        let nodo_cont_tipo_filtros = document.querySelector(".contenido_moda_filtros_publisher");
        let nodo_radio_tipo_filtro_publicador = document.querySelector('input[name="filtro_publicador"]:checked');

        console.log("nodo_radios_tipo_filtro", nodo_radio_tipo_filtro_publicador);

        if (nodo_radio_tipo_filtro_publicador) {
            let tipo_filtro = nodo_radio_tipo_filtro_publicador.value;
            let d = {};
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


                            // borrar el archivo
                            d.nodo_form = d.nodo_subir_img.querySelector("form");
                            if (d.nodo_form) {
                                d.nodo_form.reset();
                            }

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

    return {
        lanzar_modal_filtro,
        validar_modal_filtro,
        aplicar_filtro_publisher,
        aplicar_filtros,
        ME_filtros_publisher
    };
})();