const formato_pensionados = async (data) => {

    let array_imask = new Array(); // donde se guarda el identificador, nodo, objeto imask
    // indentificador - tipo de dato - nodo - objeto mask
    array_imask.push(['#telefono', "telefono", null, null]);
    array_imask.push(['#clave', "clave", null, null]);
    array_imask.push(['#folio_identificacion_oficial', null, null, null]);
    array_imask.push(['#curp', 'curp', null, null]);
    array_imask.push(['#usuario', 'usuario_japama', null, null]);

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


        // console.log("respuestas", respuestas);s

        let json = JSON.stringify(respuestas);

        // console.log("json", json);

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
                    fin_validacion();
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

                if (tipo) {
                    console.log("checked", target.checked);
                }


                proceso_validacion(target);

                validacion_personalizada(target);

                let id_nodo = target.getAttribute('id');

                if (id_nodo) {
                    mapear_mascaras(id_nodo);
                }
                // p_val_tipo_identificacion(target);



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

                        console.log('destroy', element);
                        element[3].destroy();
                    }

                    switch (tipo_mask) {
                        case 'telefono':
                            maskOptions = {
                                mask: '0000000000'
                            };
                            break;
                        case 'clave':
                            maskOptions = {
                                mask: '** **-**-****',
                            };
                            break;
                        case 'curp':
                            maskOptions = {
                                mask: 'aaaa000000aaaaaa00',
                            };
                            break;
                        case 'ine':// ine
                            console.log("mask ine");
                            nodo.setAttribute("maxlength", 18);
                            maskOptions = {
                                mask: '******************'
                            };
                            break;
                        case 'pasaporte':// pasaporte
                            console.log("mask pasaporte");

                            nodo.setAttribute("maxlength", 10);
                            maskOptions = {
                                mask: '**********'
                            };
                            break;
                        case 'licencia':// licencia
                            console.log("mask licencia");
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
                                max:9999999999
                            };
                            break;

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

    const p_val_tipo_identificacion = (nodo) => {
        if (nodo) {
            let name = nodo.name;
            if (name) {
                if (name = 'tipo_identificacion') {
                    let id = nodo.getAttribute('id');
                    let nodo_folio = document.querySelector('#folio_identificacion_oficial');
                    let maskOptions = {};
                    if (nodo_folio) {
                        nodo_folio.parentElement.hidden = false;
                        switch (id) {
                            case 'tipo_identificacion1':// ine
                                nodo_folio.setAttribute("maxlength", 18);
                                maskOptions = {
                                    mask: '******************'
                                };
                                break;
                            case 'tipo_identificacion2':// pasaporte
                                nodo_folio.setAttribute("maxlength", 10);
                                maskOptions = {
                                    mask: '**********'
                                };
                                break;
                            case 'tipo_identificacion3':// licencia
                                nodo_folio.setAttribute("maxlength", 10);
                                maskOptions = {
                                    mask: '**********'
                                };
                                break;

                            default:
                                break;
                        }
                        nodo_folio.value = "";
                        let mask = IMask(nodo_folio, maskOptions);

                    }
                }
            }
        }
    };

    const proceso_validacion = (nodo) => {
        if (nodo) {
            const tagName = nodo.tagName;
            let tipo = null;
            const clase_invalido = 'is-invalid';
            let d = {}; // data
            let es_valido = false;

            // console.log("proceso_validacion", tagName);s

            switch (tagName) {
                case "INPUT":

                    tipo = nodo.type;

                    if (tipo) {
                        switch (tipo) {
                            case "date":
                            case "text":
                            case "number":
                                // secuencia de validacion
                                d = {};
                                d.valor = nodo.value;
                                d.valor = d.valor.trim();
                                if (d.valor !== "" && d.valor !== null) {
                                    es_valido = true;
                                }
                                // console.log("es valido", es_valido);
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
                                    d.radios = document.getElementsByName('tipo_identificacion_beneficio');
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
            d = {};

            switch (true) {
                case id.includes('fecha_nacimiento'):
                    d = {};
                    d.nodo_edad = document.querySelector('#edad');
                    d.edad = calcular_edad(nodo.value);
                    if (d.nodo_edad) {
                        d.nodo_edad.value = d.edad.años + ' ' + 'años'
                    }
                    break;
                case id.includes('tipo_identificacion_beneficio'):
                    d = {};
                    // radio que fue seleccionado
                    d.radios = document.getElementsByName('tipo_identificacion_beneficio');
                    d.selected = Array.from(d.radios).find(radio => radio.checked);

                    d.nodo_otro = document.querySelector('.tipo_identificacion_beneficio_otro_contenedor');

                    d.id = d.selected.getAttribute('id');

                    switch (d.id) {
                        case 'tipo_identificacion_beneficio_otro':
                            d.nodo_otro.hidden = false;
                            break;

                        default:
                            d.nodo_otro.hidden = true;
                            d.nodo_otro.querySelector('#tipo_identificacion_beneficio6').value = "";

                            break;
                    }

                    console.log('selecionado', d.selected);
                    break;
                case id.includes('tipo_identificacion2'):// pasaporte
                case id.includes('tipo_identificacion3'):// licencia
                case id.includes('tipo_identificacion1'):// ine
                    console.log('ine');
                    d.nodofolio = document.querySelector('#folio_identificacion_oficial');
                    d.nodofolio.parentElement.hidden = false;
                    d.nodofolio.value = "";
                    d.index = array_imask_encoentrar('#folio_identificacion_oficial', 0);
                    console.log('mask index', d.index);

                    if (d.index > -1) {
                        console.log('masklanzado mapear mascaras');

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


                default:
                    break;
            }

        }

    };

    const fin_validacion = () => {
        let nodos_obligatorios = new Array();
        nodos_obligatorios.push('#folio_identificacion_oficial');
        nodos_obligatorios.push('#curp');
        nodos_obligatorios.push('#tipo_formato1');
        nodos_obligatorios.push('#tipo_identificacion1');

        for (let j = 0; j < nodos_obligatorios.length; j++) {
            const element = nodos_obligatorios[j];

            let nodo = document.querySelector(element);
            console.log('fin_validacion nodo', nodo);
            if (nodo) {
                proceso_validacion(nodo);
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

    const get_array_imask = () => {
        return array_imask;
    };

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
        get_array_imask
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
