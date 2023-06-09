const formato_pensionados = async (data) => {

    let array_imask = new Array(); // donde se guarda el identificador, nodo, objeto imask
    // indentificador - tipo de dato - nodo - objeto mask
    array_imask.push(['#telefono', "telefono", null, null]);
    array_imask.push(['#clave', "clave", null, null]);
    array_imask.push(['#folio_identificacion_oficial', null, null, null]);
    array_imask.push(['#curp', 'curp', null, null]);
    array_imask.push(['#usuario', 'usuario_japama', null, null]);
    array_imask.push(['#notif_sms_text', 'telefono', null, null]);
    // array_imask.push(['#notif_correo_text', 'correo', null, null]);
    array_imask.push(['#notif_whatsapp_text', 'telefono', null, null]);

    // expresion regular para validar correo  
    const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    const clase_invalido = 'is-invalid';

    const recaudar_respuestas = () => {
        // recaudar respuestas del fromulario de pensionados
        let nodo_form = document.querySelector('#FormSolicitudPensionados');

        // entradas de tipo texto

        let nodos_texto = nodo_form.querySelectorAll('input[type="text"]');

        let respuestas = {};

        for (let i = 0; i < nodos_texto.length; i++) {
            const nodo = nodos_texto[i];
            let id_respuesta = nodo.getAttribute('id');
            respuestas[id_respuesta] = nodo.value.trim();
        }

        // entradas de tipo number

        let nodos_number = nodo_form.querySelectorAll('input[type="number"]');

        for (let i = 0; i < nodos_number.length; i++) {
            const nodo = nodos_number[i];
            let id_respuesta = nodo.getAttribute('id');
            respuestas[id_respuesta] = nodo.value.trim();
        }

        // entradas de tipo date

        let nodos_date = nodo_form.querySelectorAll('input[type="date"]');
        for (let i = 0; i < nodos_date.length; i++) {
            const nodo = nodos_date[i];
            let id_respuesta = nodo.getAttribute('id');
            respuestas[id_respuesta] = nodo.value.trim();
        }

        // entradas tipo radio                           
        let respuestas_radios = {};
        let nodos_radio = nodo_form.querySelectorAll('input[type="radio"]');
        // console.log("nodos_radio", nodos_radio);

        // crear objetos donde iran los estados de los radio
        for (let j = 0; j < nodos_radio.length; j++) {
            const nodo = nodos_radio[j];
            let name = nodo.getAttribute('name');
            respuestas_radios[name] = {};
        }

        // agreager los estados de los nodos a su respectivo objto
        for (let j = 0; j < nodos_radio.length; j++) {
            const btn_radio = nodos_radio[j];
            let name_radio = btn_radio.getAttribute("name");
            let radio_id = btn_radio.getAttribute('id');


            // radio que fue seleccionado
            // let radios = document.getElementsByName(name_radio);
            // let selected = Array.from(radios).find(radio => radio.checked);

            let obj_name = respuestas_radios[name_radio];

            obj_name[radio_id] = (btn_radio.checked) ? true : false;

            respuestas_radios[name_radio] = obj_name;

        }
        respuestas["radios"] = respuestas_radios;

        // agregar respuesta de textarea
        let nodos_textarea = document.querySelectorAll('textarea');

        for (let i = 0; i < nodos_textarea.length; i++) {
            const element = nodos_textarea[i];
            let id_respuesta = element.getAttribute('id');
            respuestas[id_respuesta] = element.value.trim();
        }

        // casos de sobreescribir tratamiendo diferente 
        let especial_clave = document.querySelector('#clave').value;
        respuestas["clave"] = especial_clave.replaceAll("_", "");


        // console.log("respuestas", respuestas);s

        let json = JSON.stringify(respuestas);

        // console.log("json", json);

        return respuestas;

    };

    const recaudar_respuetsas_BD = () => {
        let array_i_input = new Array(); // para type text, number, date
        // identificador, 
        array_i_input.push(['#', 'clave']);
        array_i_input.push(['#', 'usuario']);
        array_i_input.push(['#', 'nombre']);
        array_i_input.push(['#', 'domicilio']);
        array_i_input.push(['#', 'telefono']);
        array_i_input.push(['#', 'fecha_nacimiento']);
        array_i_input.push(['#', 'curp']);
        array_i_input.push(['#', 'observacion']);
        array_i_input.push(['#', 'tipo_identificacion_beneficio']);

        let respuestas = {};
        for (let i = 0; i < array_i_input.length; i++) {
            const element = array_i_input[i];
            let nodo = document.querySelector(element[0] + element[1]);
            if (nodo) {
                respuestas[element[1]] = nodo.value;
            }
        }

        // para las respuetas radio

        let array_name_radio = new Array();
        array_name_radio.push(['tipo_formato']);
        array_name_radio.push(['tipo_identificacion']);
        // array_name_radio.push(['tipo_identificacion_beneficio']);

        let d = {};

        for (let i = 0; i < array_name_radio.length; i++) {
            const element = array_name_radio[i];

            d.radios = document.getElementsByName(element[0]);

            d.selected = Array.from(d.radios).find(radio => radio.checked);

            if (typeof d.selected === 'undefined') {
                // no ningun radio esta seleccionado 
            } else {
                respuestas[element[0]] = d.selected.value;
            }

        }
        // para las respuestas de forma de contacto
        let array_notificacion = new Array();

        array_notificacion.push(['#', "notif_sms_text", 'notificacion_sms']);
        array_notificacion.push(['#', "notif_correo_text", 'notificacion_correo']);
        array_notificacion.push(['#', "notif_whatsapp_text", 'notificacion_whatsapp']);

        for (let i = 0; i < array_notificacion.length; i++) {
            const element = array_notificacion[i];

            let nodo_notf = document.querySelector(element[0] + element[1]);
            if (nodo_notf) {
                let valor = nodo_notf.value;

                if (valor) {
                    if (element[2] === 'notificacion_sms') {
                        respuestas[element[2]] = "1";
                    } else {
                        respuestas[element[2]] = valor;
                    }
                }
            }
        }


        // casos de sobreescribir tratamiendo diferente 
        let especial_clave = document.querySelector('#clave').value;
        respuestas["clave"] = especial_clave.replaceAll("_", "");


        //-------------
        return respuestas;
    };

    const manger_evenos = () => {
        let nodo_botones = document.querySelector('.botonera_pensionados');

        nodo_botones.addEventListener("click", function botoes_pensionados(e) {
            const target = e.target;

            let clases = target.getAttribute('class');
            switch (true) {
                case clases.includes("genrar_pdf_pensionados"):
                    recaudar_respuestas();
                    recaudar_respuetsas_BD();
                    fin_validacion();

                    // revisar y hay algun no valido y hacer focus
                    let primer_no_valido = document.querySelector("." + clase_invalido);
                    if (primer_no_valido) {
                        primer_no_valido.focus();
                        let x = primer_no_valido.scrollHeight;
                        let y = primer_no_valido.scrollLeft;
                        window.scroll(x, y);
                    } else {
                        lanzar_modal();


                    }

                    break;

                default:
                    break;
            }
        });
    };
    manger_evenos();

    const letras = " áéíóúabcdefghijklmnñopqrstuvwxyz*#.,%!¡¿?&7()1234567890";

    const manager_eventos_validacion = () => {
        let nodo_form = document.querySelector("#FormSolicitudPensionados");
        if (nodo_form) {

            nodo_form.addEventListener("keyup", function (e) {
                const target = e.target;
                // console.log("keyup", target);
                const id = target.getAttribute('id');
                const clase = target.getAttribute('class');

                if (id.includes('telefono')) {
                    validacion_personalizada(target);
                }

            });
            nodo_form.addEventListener("keypress", function (e) {
                const target = e.target;
                const key = e.keyCode || e.which;
                const tecla = String.fromCharCode(key).toLowerCase();

                // console.log("keypress", target);s

                if (target.getAttribute("type")) {
                    let tipo = target.getAttribute("type");

                    switch (tipo) {
                        case "date":
                            break;
                        case "text":
                            if (letras.indexOf(tecla) === -1 && !(key >= 48 && key <= 57)) {
                                e.preventDefault();
                                return false;
                            }
                            break;
                        case "number":
                            if (!(key >= 48 && key <= 57)) {
                                e.preventDefault();
                                return false;
                            }
                            break;
                        case "radio":

                            break;
                        case "checkbox":

                            break;

                        default:
                            break;
                    }

                }


            });
            nodo_form.addEventListener("keydown", function (e) {
                const target = e.target;
                // console.log("keydown", target);
                const key = e.keyCode || e.which;
                // if ( (target.getAttribute("maxlength") && target.value.length >= parseInt(target.getAttribute("maxlength"))) ) {
                //     e.preventDefault();
                //     return false;
                // }
                // console.log("keydown", target);

            });
            nodo_form.addEventListener("change", function (e) {
                const target = e.target;
                // console.log("change", target);

                let tipo = target.type;

                proceso_validacion(target);

                validacion_personalizada(target);

                let id_nodo = target.getAttribute('id');

                if (id_nodo) {
                    mapear_mascaras(id_nodo);
                }

            });

            nodo_form.addEventListener("click", function ayuda(e) {
                const target = e.target;
                // console.log(target);

                let evento = target.getAttribute('data-evento');
                let desencadenador = target.getAttribute('data-desencadenador');
                let heredado = target.getAttribute('data-evento-heredado');

                let nodo = target;

                if (heredado) {
                    buscar_nodos_padre(e, (element) => {
                        let bandera_control = false; // parar detener las iteraciones hacia nodos padre 

                        const bnp_evento = element.getAttribute("data-evento");
                        const bnp_desencadenador = element.getAttribute('data-desencadenador');

                        if (bnp_evento && bnp_desencadenador) {
                            evento = bnp_evento;
                            desencadenador = bnp_desencadenador;
                            bandera_control = true;
                            nodo = element;
                        }

                        // console.log("bnp_evento", bnp_evento);
                        // console.log("bnp_desencadenador", bnp_desencadenador);
                        return bandera_control;
                    });
                }

                // console.log("evento", evento);
                // console.log("desencadenador", desencadenador);
                // console.log("heredado", heredado);


                let d = {};

                if (desencadenador && evento) {

                    switch (desencadenador) {
                        case 'data-evento':

                            switch (evento) {
                                case 'mostrar_ayuda':
                                    // mostar modal de ayuda de donde encontrar los datos requieridos
                                    d = {};
                                    d.tipo_ayuda = nodo.getAttribute("data-tipo_ayuda");
                                    console.log("tipo_ayuda", d.tipo_ayuda);
                                    if (d.tipo_ayuda) {

                                        lanzar_modal_ayuda(d.tipo_ayuda);
                                    }


                                    break;

                                default:
                                    break;
                            }

                            break;
                        case 'id':

                            break;
                        case 'clase':

                            break;

                        default:
                            break;
                    }
                }

            });

        }

    };
    manager_eventos_validacion();


    const init_validaciones = () => {
        // edad automatica
        let nodo_edad = document.querySelector('#edad');
        nodo_edad.disabled = true;

        // fecha actual
        let nodo_fecha_solicitud = document.querySelector('#fecha_solicitud_pensionados');
        nodo_fecha_solicitud.disabled;
        nodo_fecha_solicitud.value = fecha_actual();

        // cargar datos del usuario

        // al seleccionar otra identificacion
        let nodo_otro = document.querySelector('.tipo_identificacion_beneficio_otro_contenedor');

        nodo_otro.hidden = true;

        // aplicando mascaras
        mapear_mascaras();

        // bloque de forma de notificar
        let forma_notif = new Array();
        forma_notif.push(['#', 'notif_sms_text']);
        forma_notif.push(['#', 'notif_correo_text']);
        forma_notif.push(['#', 'notif_whatsapp_text']);

        for (let j = 0; j < forma_notif.length; j++) {
            const element = forma_notif[j];
            let nodo = document.querySelector(element[0] + element[1]);
            if (nodo) {
                let abuelo = nodo.parentElement.parentElement;
                if (abuelo) {
                    abuelo.hidden = true;
                }
            }
        }
        let nodo_sms = document.querySelector('#notif_sms_text');
        nodo_sms.disabled = true;

    };

    const mapear_mascaras = (selector = null) => {
        // selector para modificar el mask del nodo
        // aplicando mascaras

        for (let j = 0; j < array_imask.length; j++) {
            const element = array_imask[j];
            let i_nodo = element[0];
            let tipo_mask = element[1];

            let nodo = document.querySelector(i_nodo);

            if (selector === null || selector === element[0]) {
                if (nodo) {
                    element[2] = nodo;
                    let maskOptions = {};
                    let agregar_mascara = true;

                    if (element[3] !== null) {
                        element[3].destroy();
                    }

                    switch (tipo_mask) {
                        case 'telefono':
                            maskOptions = {
                                mask: '0000000000'
                            };
                            break;
                        case 'clave':
                            // nodo.setAttribute("maxlength", 13);
                            // nodo.setAttribute("data-longitud_minima", 11);
                            maskOptions = {
                                // mask: '**/**/**/****',
                                // lazy: false,
                                mask: '00/00/00/0000',
                                // mask: 'DD/DD/DD/FFFF',
                                lazy: false,  // make placeholder always visible
                                placeholderChar: "_",
                                // block:{
                                //     YY:{
                                //         mask:'00',
                                //         // autofix: true,
                                //     },
                                //     FFFF:{
                                //         mask: IMask.MaskedRange,
                                //         from:0,
                                //         to: 9999
                                //     } 
                                // }
                                // mask: 'Ple\\ase fill ye\\ar 19YY, month MM \\and v\\alue VL',
                                // lazy: false, // placeholder simpres
                                // blocks: {
                                //     YY: {
                                //         mask: '00',
                                //     },

                                //     MM: {
                                //         mask: IMask.MaskedRange,
                                //         from: 1,
                                //         to: 12
                                //     },

                                //     VL: {
                                //         mask: IMask.MaskedEnum,
                                //         enum: ['TV', 'HD', 'VR']
                                //     }
                                // }
                            };
                            break;
                        case 'curp':
                            maskOptions = {
                                mask: 'aaaa000000aaaaaa00',
                            };
                            break;
                        case 'ine':// ine
                            nodo.setAttribute("maxlength", 18);
                            maskOptions = {
                                mask: '******************'
                            };
                            break;
                        case 'pasaporte':// pasaporte
                            nodo.setAttribute("maxlength", 10);
                            maskOptions = {
                                mask: '**********'
                            };
                            break;
                        case 'licencia':// licencia
                            nodo.setAttribute("maxlength", 10);
                            maskOptions = {
                                mask: '**********'
                            };
                            break;
                        case 'usuario_japama':
                            maskOptions = {
                                mask: Number,
                                min: 0,
                                signed: false,
                                scale: 0,
                                max: 9999999999
                            };
                            break;
                        // case 'correo':
                        //     maskOptions = {
                        //         mask: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
                        //     };
                        //     break;

                        default:
                            agregar_mascara = false;
                            break;
                    }
                    if (agregar_mascara) {
                        element[3] = IMask(nodo, maskOptions);
                    }
                }
                if (selector === element[0]) {
                    break;
                }
            }
        }
    };
    const array_imask_encoentrar = (valor, columna) => {
        let index = -1;

        for (let i = 0; i < array_imask.length; i++) {
            const element = array_imask[i];

            if (element[columna] === valor) {
                index = i;
            }

        }

        return index;
    }

    const proceso_validacion = (nodo, aplicar_excep = true) => {
        if (nodo) {
            const tagName = nodo.tagName;
            let tipo = null;

            let d = {}; // data
            let es_valido = false;

            // console.log("proceso_validacion", tagName);
            if (aplicar_excep) {
                let array_excepciones = new Array();
                array_excepciones.push(['#', 'notif_sms_text']);
                array_excepciones.push(['#', 'notif_correo_text']);
                array_excepciones.push(['#', 'notif_whastapp_text']);

                let id_verificar = nodo.getAttribute('id');
                let clases_verificar = nodo.getAttribute('class');
                for (let i = 0; i < array_excepciones.length; i++) {
                    const element = array_excepciones[i];

                    if (element[0] === '#') {
                        if (id_verificar === element[1]) {
                            return;
                        }
                    }
                    if (element[0] === '.') {
                        if (clases_verificar === element[1]) {
                            return;
                        }
                    }
                }
            }


            switch (tagName) {
                case "INPUT":

                    tipo = nodo.type;

                    if (tipo) {
                        switch (tipo) {
                            case "date":
                            case "text":
                            case "email":
                                // secuencia de validacion
                                d = {};
                                d.valor = nodo.value;
                                d.valor = d.valor.trim();
                                d.min = nodo.getAttribute("data-longitud_minima");
                                if (d.valor !== "" && d.valor !== null) {
                                    if (d.min) {
                                        d.min = parseInt(d.min);

                                        if (nodo.value.length >= d.min) {
                                            es_valido = true;
                                        }
                                    } else {
                                        es_valido = true;
                                    }
                                }
                                // agregar clase de validacion
                                if (es_valido) {
                                    nodo.classList.remove(clase_invalido);
                                } else {
                                    nodo.classList.add(clase_invalido);
                                }
                                break;
                            case "number":
                                d = {};
                                d.valor = nodo.value;
                                d.valor = d.valor.trim();
                                d.min = nodo.getAttribute("data-longitud_minima");
                                if (d.valor !== "" && d.valor !== null) {

                                    if (d.min) {
                                        d.min = parseInt(d.min);

                                        if (nodo.value.length >= d.min) {
                                            es_valido = true;
                                        }
                                    } else {
                                        es_valido = true;
                                    }
                                }

                                // agregar clase de validacion
                                if (es_valido) {
                                    nodo.classList.remove(clase_invalido);
                                } else {
                                    nodo.classList.add(clase_invalido);
                                }
                                break;
                            case 'radio':
                                d = {};
                                d.nodo_padre = nodo.parentNode;
                                d.nodo_abuelo = d.nodo_padre.parentNode;

                                d.nodo_check = nodo.checked;

                                if (d.nodo_check) {
                                    es_valido = true;

                                } else {
                                    // radio que fue seleccionado
                                    d.radios = document.getElementsByName(nodo.getAttribute('name'));
                                    d.selected = Array.from(d.radios).find(radio => radio.checked);


                                    if (typeof d.selected === 'undefined') {
                                        // no ningun radio esta seleccionado 
                                        es_valido = false;
                                    } else {
                                        es_valido = true;
                                    }
                                }

                                if (es_valido) {
                                    d.nodo_abuelo.classList.remove(clase_invalido);
                                } else {
                                    d.nodo_abuelo.classList.add(clase_invalido);
                                }
                                break;

                            default:
                                break;
                        }
                    }

                    break;
                case "TEXTAREA":

                    break;

                default:
                    break;
            }
        }
    };
    const validacion_personalizada = (nodo) => {
        if (nodo) {
            const id = nodo.getAttribute('id');
            const clase = nodo.getAttribute('class');
            const name = nodo.getAttribute('name');
            d = {};

            switch (true) {
                case id.includes('clave'):
                    d = {};
                    d.clave = nodo.value;
                    // tratar valor 
                    d.valor = d.clave.replaceAll('_', "");

                    if (d.valor.length > 10) {
                        nodo.classList.remove(clase_invalido);
                    } else {
                        nodo.classList.add(clase_invalido);
                    }
                    break;
                case id.includes('fecha_nacimiento'):
                    d = {};
                    d.nodo_edad = document.querySelector('#edad');
                    d.edad = calcular_edad(nodo.value);
                    if (d.nodo_edad) {
                        d.nodo_edad.value = d.edad.años + ' ' + 'años'
                    }
                    break;
                case id.includes('notif_sms_check'):
                case id.includes('notif_correo_check'):
                case id.includes('notif_whatsapp_check'):
                    d = {};
                    d.nodo_datos = nodo.parentElement.parentElement.nextElementSibling;
                    d.nodo_opciones = document.querySelector('.opciones_formas_notificacion');
                    d.checked = nodo.checked;
                    if (d.nodo_datos) {
                        d.textdata = d.nodo_datos.querySelector('input');
                        if (d.checked) {
                            d.nodo_datos.hidden = false;
                            console.log("nodo_opciones", d.nodo_opciones);
                            d.nodo_opciones.classList.remove(clase_invalido);

                        } else {
                            d.nodo_datos.hidden = true;
                        }
                        (d.textdata) ? d.textdata.value = "" : "";
                        if (id.includes('notif_sms_check') && d.checked == true) {
                            (d.textdata) ? d.textdata.value = document.querySelector('#telefono').value : "";
                        }
                        d.textdata.classList.remove(clase_invalido);
                    }
                    break;
                case id.includes('notif_correo_text'):
                    d = {};
                    d.value_correo = nodo.value;
                    if (validEmail.test(d.value_correo)) {
                        // alert('Email is valid, continue with form submission');
                        nodo.classList.remove(clase_invalido);
                        return true;
                    } else {
                        // alert('Email is invalid, skip form submission');
                        nodo.classList.add(clase_invalido);
                        return false;
                    }

                    break;
                case id.includes('telefono'):
                    d = {};
                    d.nodo_sms = document.querySelector('#notif_sms_text');
                    d.nodo_sms_check = document.querySelector('#notif_sms_check');
                    if (d.nodo_sms && d.nodo_sms_check.checked) {
                        d.nodo_sms.value = nodo.value;
                    }
                    break;
                default:
                    break;
            }

            if (name) {
                switch (name) {
                    case 'tipo_identificacion':// ine
                        d.nodofolio = document.querySelector('#folio_identificacion_oficial');
                        d.nodofolio.parentElement.hidden = false;
                        d.nodofolio.value = "";
                        d.index = array_imask_encoentrar('#folio_identificacion_oficial', 0);

                        if (d.index > -1) {
                            console.log('mask lanzado mapear mascaras');

                            d.mask = array_imask[d.index];
                            switch (id) {
                                case 'tipo_identificacion1':
                                    d.mask[1] = 'ine';
                                    break;
                                case 'tipo_identificacion2':
                                    d.mask[1] = 'pasaporte';
                                    break;
                                case 'tipo_identificacion3':
                                    d.mask[1] = 'licencia';
                                    break;

                                default:
                                    break;
                            }
                            mapear_mascaras('#folio_identificacion_oficial');
                        }
                        break;
                    case 'tipo_identificacion_beneficio':
                        d = {};
                        d.nodo_otro = document.querySelector('#tipo_identificacion_beneficio');
                        d.id_radio = nodo.getAttribute('id');
                        if (d.id_radio === 'tipo_identificacion_beneficio_otro') {
                            console.log('nodo text otro', d.nodo_otro.parentElement);
                            d.nodo_otro.value = "";
                            d.nodo_otro.parentElement.parentElement.hidden = false;
                        } else {
                            if (d.nodo_otro) {
                                d.nodo_otro.value = nodo.value;
                                d.nodo_otro.parentElement.parentElement.hidden = true;
                            }
                        }

                        break;

                    default:
                        break;
                }
            }

        }

    };

    const fin_validacion = () => {
        let nodos_obligatorios = new Array();
        nodos_obligatorios.push('#folio_identificacion_oficial');
        nodos_obligatorios.push('#curp');
        nodos_obligatorios.push('#tipo_formato1');
        nodos_obligatorios.push('#tipo_identificacion1');
        nodos_obligatorios.push('#tipo_identificacion_oficial1');

        for (let j = 0; j < nodos_obligatorios.length; j++) {
            const element = nodos_obligatorios[j];

            let nodo = document.querySelector(element);
            if (nodo) {
                proceso_validacion(nodo);
            }
        }
        // debe haber algun metodo de contacto seleccionado 
        let array_forma_noti = new Array();
        array_forma_noti.push(['#', 'notif_sms_check']);
        array_forma_noti.push(['#', 'notif_correo_check']);
        array_forma_noti.push(['#', 'notif_whatsapp_check']);

        let alguno_true = false;

        let nodo_data = null;


        for (let i = 0; i < array_forma_noti.length; i++) {
            const element = array_forma_noti[i];

            let nodo = document.querySelector(element[0] + element[1]);


            if (nodo) {
                nodo_data = nodo.parentElement.parentElement.nextElementSibling.querySelector('input')
                if (nodo.checked) {
                    alguno_true = true;
                    proceso_validacion(nodo_data, false);
                }
            }
        }

        let nodo_formas_notif = document.querySelector('.opciones_formas_notificacion');

        if (nodo_formas_notif) {
            if (alguno_true) {
                nodo_formas_notif.classList.remove(clase_invalido);
            } else {
                nodo_formas_notif.classList.add(clase_invalido);
            }
        }



    };
    const calcular_edad = (fecha) => {
        // 1994-01-4 => año-mes-dia
        // Si la fecha es correcta, calculamos la edad

        if (typeof fecha != "string" && fecha && esNumero(fecha.getTime())) {
            fecha = formatDate(fecha, "yyyy-MM-dd");
        }

        var values = fecha.split("-");
        var dia = values[2];
        var mes = values[1];
        var ano = values[0];

        // cogemos los valores actuales
        var fecha_hoy = new Date();
        var ahora_ano = fecha_hoy.getYear();
        var ahora_mes = fecha_hoy.getMonth() + 1;
        var ahora_dia = fecha_hoy.getDate();

        // realizamos el calculo
        var edad = (ahora_ano + 1900) - ano;
        if (ahora_mes < mes) {
            edad--;
        }
        if ((mes == ahora_mes) && (ahora_dia < dia)) {
            edad--;
        }
        if (edad > 1900) {
            edad -= 1900;
        }

        // calculamos los meses
        var meses = 0;

        if (ahora_mes > mes && dia > ahora_dia)
            meses = ahora_mes - mes - 1;
        else if (ahora_mes > mes)
            meses = ahora_mes - mes
        if (ahora_mes < mes && dia < ahora_dia)
            meses = 12 - (mes - ahora_mes);
        else if (ahora_mes < mes)
            meses = 12 - (mes - ahora_mes + 1);
        if (ahora_mes == mes && dia > ahora_dia)
            meses = 11;

        // calculamos los dias
        var dias = 0;
        if (ahora_dia > dia)
            dias = ahora_dia - dia;
        if (ahora_dia < dia) {
            ultimoDiaMes = new Date(ahora_ano, ahora_mes - 1, 0);
            dias = ultimoDiaMes.getDate() - (dia - ahora_dia);
        }

        let _completo = edad + " años, " + meses + " meses y " + dias + " días";
        return {
            completo: _completo,
            años: edad,
            meses: meses,
            dias: dias
        };

    };
    const fecha_actual = () => {
        var fecha_hoy = new Date();
        var ahora_anio = fecha_hoy.getFullYear();
        var ahora_mes = fecha_hoy.getMonth() + 1;
        var ahora_dia = fecha_hoy.getDate();

        if (ahora_mes < 10) {
            ahora_mes = '0' + ahora_mes;
        }
        if (ahora_dia < 10) {
            ahora_dia = '0' + ahora_dia;
        }

        var fecha_actual = ahora_anio + '-' + ahora_mes + '-' + ahora_dia;
        return fecha_actual;
    };

    // modal

    const lanzar_modal = () => {
        let nodo_modal = document.createElement("div");
        nodo_modal.className = "modal fade";
        nodo_modal.setAttribute("id", "exampleModal");
        nodo_modal.setAttribute("aria-labelledby", "exampleModalLabel");
        nodo_modal.setAttribute("aria-hidden", "true");
        nodo_modal.setAttribute("tabindex", "-1");
        nodo_modal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Solicitud de Supervivientes Ahome</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div> Su solicitud ha sido enviada con exito </div>
                    <div>(bobotn de deacargar)</div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <!-- <button type="button" class="btn btn-primary">Descargar comprobante</button> -->
                </div>
            </div>
        </div>`;
        document.body.insertAdjacentElement("beforeend", nodo_modal);
        $('#exampleModal').modal('show');
        $('#exampleModal').on('hidden.bs.modal', function () {
            console.log("evento al cerrar modal lanzado");
            $('#exampleModal').modal('dispose');
            document.querySelector('#exampleModal').remove();
        })
    };

    const limpiar_form = () => {
        let nodo_vista = document.querySelector('#FormSolicitudPensionados');
        console.log(nodo_vista);
        if (nodo_vista) {
            let array_nodos_input = nodo_vista.querySelectorAll('input');

            for (const nodo of array_nodos_input) {
                const tipo = nodo.getAttribute("type");

                if (tipo) {

                    switch (tipo) {
                        case "text":
                        case "number":
                        case "date":
                        case "email":
                            nodo.value = "";
                            break;
                        case "radio":
                        case "checkbox":
                            nodo.checked = false;
                            break;
                        default:
                            break;
                    }
                }
            }

            let nodos_textarea = nodo_vista.querySelectorAll('textarea');
            if (nodos_textarea) {

                for (const nodo of nodos_textarea) {
                    nodo.value = "";
                }

            }
        }
    };

    const lanzar_modal_ayuda = (tipo_ayuda) => {
        let nodo_cuerpo = document.createElement("div");

        let data_ayuda = {};

        switch (tipo_ayuda) {
            case 'clave':
                data_ayuda.url = "./recibo_clave.jpg";
                data_ayuda.titulo = "Aqui puede consultar la Clave en su recibo";
                break;
            case 'usuario':
                data_ayuda.url = "./recibo_usuario.jpg"
                data_ayuda.titulo = "Aqui puede consultar el Numero de Usuario en su recibo";
                break;
            default:
                console.log("tipo de ayuda: ", tipo_ayuda, "  no encontrado");
                return;
                break;
        }
        nodo_cuerpo.innerHTML = `
            <div class="p-3 d-flex justify-content-center">
                <img class="imagen_ayuda" src="${data_ayuda.url}" alt="" srcset="">
            </div>
            `;

        let data = {
            id: "PDF_solicitud_supervivientes_ayuda_datos",
            titulo: data_ayuda.titulo,
            nodo_cuerpo: nodo_cuerpo,
            className: "clase_div_modal",
            clase_modal_dialog: "modal-lg"
        };
        modal_desechable_b4.crear_modal(data);

        $('#' + data.id).modal('show')
        $('#' + data.id).on('hidden.bs.modal', function () {
            console.log("evento al cerrar modal lanzado");
            $('#' + data.id).modal('dispose');
            document.querySelector('#' + data.id).remove();
        })
    };
    // ------------------------------------------------------------------
    // ---------------------------------- agregar fucniones de subir archivos filepond
    let objetos_dropzone = new Array();
    function agregar_filepond_objetivos() {
        let arra_pre_nodos = new Array();
        arra_pre_nodos.push([".", "filepond_curp"]);
        arra_pre_nodos.push([".", "filepond_tipo_identificacion"]);

        for (const iterator of arra_pre_nodos) {
            let nodo = document.querySelector(iterator[0] + iterator[1]);

            if (nodo) {
                let input = document.createElement("input");
                input.type = "file";
                nodo.insertAdjacentElement("beforeend", input);

                let FilePond_objeto = FilePond.create(
                    nodo.querySelector("input"), {
                    labelIdle: `Subir/arrastrar sus documentos`,
                    imagePreviewHeight: 200,
                    imageResizeTargetWidth: 200,
                    allowPdfPreview: true,
                    pdfPreviewHeight: 200,
                    pdfComponentExtraParams: 'toolbar=0&view=fit&page=1',
                    imageResizeTargetHeight: 200,
                    maxFiles: 1,
                    onaddfile: async function cargar(error, file) {
                        console.log("onaddfile", error, file);
                        if (!error) {
                            // agregar.push(file.file);
                            let size = file.file.size;
                            let nombre_ext = file.file.name.split(".");
                            let name = nombre_ext[0];
                            let ext = nombre_ext[1];

                            // seleccionar tipos de extension 

                            if (ext) {
                                switch (ext.toLowerCase()) {
                                    case "jpg":
                                    case "png":

                                        break;

                                    default:
                                        // falta lanzar alerta
                                        alert("solo se pueden agregar archivos en formato de imagen png y jpg");
                                        //
                                        file.abortLoad();
                                        break;
                                }
                            }



                            console.log("nuevo docuemento subido", file)


                        } else {
                            console.log("otro else");
                        }
                    },
                    onremovefile: function remover(error, file,) {
                        console.log("onremovefile", error, file);
                        if (!error) {
                            // let index_archivo = funcion_buscar_index_array(get_array_digitales_por_subir(), "id_digital_adicional", itinerante.id_digital_adicional);
                            // let array_nuevo = get_array_digitales_por_subir();
                            // array_nuevo.splice(index_archivo, 1);

                            // set_array_digitales_por_subir(array_nuevo);
                            // console.log("array_digitales_por_subir", get_array_digitales_por_subir());
                            console.log("se removio archivo ");

                        }
                    }
                }
                );

                objetos_dropzone.push([nodo, FilePond_objeto]);
            }
        }
    }
    agregar_filepond_objetivos();

    // ------------------------------------------------------------------
    // ------------------------------------------------------------------

    const get_array_imask = () => {
        return array_imask;
    };

    const get_array_fileponnd = () => {
        return objetos_dropzone;
    }
    window.addEventListener('load', function () {
        console.log('La página ha terminado de cargarse!!');
        init_validaciones();
        mapear_mascaras();
    });
    return {
        recaudar_respuestas,
        calcular_edad,
        validacion_personalizada,
        fecha_actual,
        init_validaciones,
        get_array_imask,
        recaudar_respuetsas_BD,
        lanzar_modal,
        limpiar_form,
        lanzar_modal_ayuda,
        agregar_filepond_objetivos,
        get_array_fileponnd
    };

};

// test mask 
var element = document.getElementById('selector');
var maskOptions = {
    mask: '+{7}(000)000-00-00'
};
var mask = IMask(element, maskOptions);

// test mask 
function doFormat(x, pattern, mask) {
    var strippedValue = x.replace(/[^0-9]/g, "");
    var chars = strippedValue.split('');
    var count = 0;

    var formatted = '';
    for (var i = 0; i < pattern.length; i++) {
        const c = pattern[i];
        if (chars[count]) {
            if (/\*/.test(c)) {
                formatted += chars[count];
                count++;
            } else {
                formatted += c;
            }
        } else if (mask) {
            if (mask.split('')[i])
                formatted += mask.split('')[i];
        }
    }
    return formatted;
}

const manager_mask = () => {
    document.querySelectorAll('[data-mask]').forEach(function (e) {
        function format(elem) {
            const val = doFormat(elem.value, elem.getAttribute('data-format'));
            elem.value = doFormat(elem.value, elem.getAttribute('data-format'), elem.getAttribute('placeholder'));

            console.log(elem.createTextRange);

            if (elem.createTextRange) {
                var range = elem.createTextRange();
                range.move('character', val.length);
                range.select();
            } else if (elem.selectionStart) {
                elem.focus();
                elem.setSelectionRange(val.length, val.length);
            }
            console.log(elem);
        }
        e.addEventListener('keyup', function () {
            format(e);
        });
        format(e)
    });
};



function dataURItoBlob(dataURI) {
    // convert base64/URLEncoded data component to raw binary data held in a string
    var byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0)
        byteString = atob(dataURI.split(',')[1]);
    else
        byteString = unescape(dataURI.split(',')[1]);

    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    // write the bytes of the string to a typed array
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ia], { type: mimeString });
}
function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    console.log(link);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    delete link;
}

function lanzar_uri() {
    let uri = `data:image/png;base64,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`;
    // downloadURI(uri, "firma.jpg");

    // let reader = new FileReader();
    // reader.readAsDataURL(imageFile);
    // reader.addEventListener('load', () => {
    //     // Get the data URL string
    //     console.log(reader.result);
    // });

    let blob = dataURItoBlob(uri);
    console.log(blob);

    const myFile = new File([blob], 'image.jpeg', {
        type: blob.type,
    });


}

// test para descargar en pdf sin que sea abierto de por le na vegador 
async function descargar_pdf() {
    let peticion = await fetch('./base64pdf.json')
        .then((response) => response.json())
        .then((json) => json);
    console.log("peticion", peticion);


    let base64 = peticion.base;

    let retorno = await pdfjsLib.getDocument(base64).then(async (pdf) => {
        let pdf_estado = {
            pdf: d.url_pdf,
            currentPage: 1,
            zoom: 0.5
        };
        pdf_estado.pdf = pdf;
        let div_canvas_respuesta = await pdf_estado.pdf.getPage(pdf_estado.currentPage).then((page) => {

            let canvas_requisito = document.createElement('canvas');
            canvas_requisito.className = d.claseName;

            let contexto_canvas = canvas_requisito.getContext('2d');

            let vista_port = page.getViewport(pdf_estado.zoom);
            //                console.log("vista_port", vista_port);
            canvas_requisito.width = vista_port.width;
            canvas_requisito.height = vista_port.height;
            page.render({
                canvasContext: contexto_canvas,
                viewport: vista_port
            });

            return canvas_requisito;
        });
        return div_canvas_respuesta;
    });
    console.log(retorno);
}

var BASE64_MARKER = ';base64,';

function convertDataURIToBinary(dataURI) {
    var base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
    var base64 = dataURI.substring(base64Index);
    var raw = window.atob(base64);
    var rawLength = raw.length;
    var array = new Uint8Array(new ArrayBuffer(rawLength));

    for (var i = 0; i < rawLength; i++) {
        array[i] = raw.charCodeAt(i);
    }
    return array;
}

async function descargar_pdf_2() {
    let peticion = await fetch('./base64pdf.json')
        .then((response) => response.json())
        .then((json) => json);

    console.log("peticion", peticion);

    let base64 = peticion.base_2;

    console.log("base64", base64);

    // var pdfAsDataUri = "data:application/pdf;base64,JVBERi0xLjUK..."; // shortened
    // var pdfAsArray = convertDataURIToBinary(pdfAsDataUri);
    // PDFJS.getDocument(base64);
    // PDFJS.getDocument({data: base64});
    pdfjsLib.getDocument(base64).promise.then(doc => {
        console.log(`este documento tiene ${doc._pdfInfo.numPages} pages.`);
    });
    // pdfjsLib.getDocument({data: base64});
    // let retorno = await pdfjsLib.getDocument({data: base64}).then(async (pdf) => {
    //     let pdf_estado = {
    //         pdf: d.url_pdf,
    //         currentPage: 1,
    //         zoom: 0.5
    //     };
    //     pdf_estado.pdf = pdf;
    //     let div_canvas_respuesta = await pdf_estado.pdf.getPage(pdf_estado.currentPage).then((page) => {

    //         let canvas_requisito = document.createElement('canvas');
    //         canvas_requisito.className = d.claseName;

    //         let contexto_canvas = canvas_requisito.getContext('2d');

    //         let vista_port = page.getViewport(pdf_estado.zoom);
    //         //                console.log("vista_port", vista_port);
    //         canvas_requisito.width = vista_port.width;
    //         canvas_requisito.height = vista_port.height;
    //         page.render({
    //             canvasContext: contexto_canvas,
    //             viewport: vista_port
    //         });

    //         return canvas_requisito;
    //     });
    //     return div_canvas_respuesta;
    // });
    // console.log(retorno);
}

// pdfjsLib.GlobalWorkerOptions.workerSrc ="https://cdn.jsdelivr.net/npm/pdfjs-dist@2.7.570/build/pdf.worker.min.js";
// pdfjsLib.GlobalWorkerOptions.workerSrc ="https://cdn.jsdelivr.net/npm/pdfjs-dist@2.0.943/build/pdf.worker.min.js";
// pdfjsLib.getDocument('./pdf_supervivienetes.pdf').promise.then(doc => {
//   console.log(`This document has ${doc._pdfInfo.numPages} pages.`);
// });

async function crear_boton_descargar_pdf() {
    let peticion = await fetch('./pdf_peticion.json')
        .then((response) => response.json())
        .then((json) => json);

    console.log("peticion", peticion);

    let base64 = peticion.base64;

    let div_boton = document.createElement('div');
    div_boton.innerHTML = `<a href="${base64}" download="Comprobante.pdf">Descargar Comprobante</a>`;

    document.body.insertAdjacentElement("beforeEnd", div_boton);

    return div_boton;
}
// clonar objetos 


/** Clona un objeto (deep-copy)
 * @param  {Any}    from: el objeto a clonar
 * @param  {Object} dest: (opcional) objeto a extender
 * @return {Any} retorna el nuevo objeto clonado
 */
var fnClone = (function () {
    // @Private
    var _toString = Object.prototype.toString;

    // @Private
    function _clone(from, dest, objectsCache) {
        var prop;
        // determina si @from es un valor primitivo o una funcion
        if (from === null || typeof from !== "object") return from;
        // revisa si @from es un objeto ya guardado en cache
        if (_toString.call(from) === "[object Object]") {
            if (objectsCache.filter(function (item) {
                return item === from;
            }).length) return from;
            // guarda la referencia de los objetos creados
            objectsCache.push(from);
        }
        // determina si @from es una instancia de alguno de los siguientes constructores
        if (from.constructor === Date || from.constructor === RegExp || from.constructor === Function ||
            from.constructor === String || from.constructor === Number || from.constructor === Boolean) {
            return new from.constructor(from);
        }
        if (from.constructor !== Object && from.constructor !== Array) return from;
        // crea un nuevo objeto y recursivamente itera sus propiedades
        dest = dest || new from.constructor();
        for (prop in from) {
            // TODO: allow overwrite existing properties
            dest[prop] = (typeof dest[prop] === "undefined" ?
                _clone(from[prop], null, objectsCache) :
                dest[prop]);
        }
        return dest;
    }

    // función retornada en el closure
    return function (from, dest) {
        var objectsCache = [];
        return _clone(from, dest, objectsCache);
    };

}());

var freeman, david;

function Freeman() {
    this.name = "Gordon Freeman";
    this.character = "Freeman";
    this.game = "Half-Life";
    this.friends = [];
}

david = {
    name: "David Rivera",
    character: "jherax",
    friends: [],
    languages: new RegExp(/javascript|jquery|c#|sql|java|vb/i),
    greeting: function () { return "Hi, I am " + this.name },
    info: {
        job: "programmer",
        birth: new Date()
    }
};

freeman = new Freeman();

//creamos la referencia circular
freeman.friends = [david, "Barney Calhoun"];
david.friends = [freeman, "John Carmack"];

//clonamos el objeto @david
var cloned = fnClone(david);

//modificamos propiedades del objeto original
david.name = david.name + " (jherax)";
david.friends.push("Jim Rynor");

//vemos que @cloned no fue modificado
console.log("original:", david.name, david.friends);
console.log("clonado:", cloned.name, cloned.friends);


// teste base64
function getBase64(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async function () {
        console.log(reader.result);
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
}

function get_base64_promesa(file) {
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

// const filePromises = files.map((file) => {
//     // Return a promise per file
//     return new Promise((resolve, reject) => {
//         const reader = new FileReader();
//         reader.onload = async () => {
//             try {
//                 const response = await this.submitFile(
//                     reader.result,
//                     file.name,
//                     fileType
//                 );
//                 // Resolve the promise with the response value
//                 resolve(response);
//             } catch (err) {
//                 reject(err);
//             }
//         };
//         reader.onerror = (error) => {
//             reject(error);
//         };
//         reader.readAsDataURL(file);
//     });
// });