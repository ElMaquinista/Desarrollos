// tiene finalidad de reemplazar las llaves en  el html de la plantilla con información 

var iframe = null;

function rellenar_llaves_respuestas() {
    let json = {
        "fecha": "27 de Julio del 2023",
        "clave_control": "1235",
        "nombre": "Ricardo Garcia de la Cruz Sncahez Contador de Atos",
        "calle": "Calle General lucio Blanco",
        "colonia": "Colonia Adolfo Lopez Mateos",
        "cp": "76750",
        "estado": "Queretaro de Arteaga",
        "municipio": "Tequisquiapan",
        "no_tramite": "12356778",
        "no_constancia": "040102030404",
        "servicio_de": "Agencia de administaración de espacio para vehiculos autopropulsados por motor",
        "letras_pequeñas": "Con fundamento en lo dispuesto en los artículos 42 fracción IV de la Ley Orgánica de la Administración Pública Federal; \n 52 de la Ley General de Turismo y 92 del Reglamento de la Ley General de Turismo. \n Av. Presidente Masaryk No. 172, Piso 2, Col. Bosques de Chapultepec, Alcaldía Miguel Hidalgo, Ciudad de México, C.P.11580 ",
        "url_logo_sectur": "img/sectur_logo.jpg",
        "url_sectur": "www.gob.mx/sectur",
        "nombre_despachador": "Mario Alberto Magdaleno Peralta",
        "puesto_despachador": "Director de Registro Nacional de Turismo"
    };

    // itinerar las llaves para asignar el text en el html

    iframe = document.querySelector("iframe").contentWindow;
    console.log("iframe", iframe);

    let nodo_pagina = iframe.document.querySelector('.documento')
    console.log("nodo_pagina", nodo_pagina);

    for (let llave in json) {
        let valor = json[llave];

        let nodo = nodo_pagina.querySelector(`[data-json='${llave}']`);
        // buscar la llave en el html
        if (nodo) {
            switch (llave) {
                case "url_logo_sectur":
                    nodo.src = valor;
                    break
                case "letras_pequeñas":
                    valor = valor.replaceAll('\n', '<br>');
                    nodo.innerHTML = valor;
                    break;
                default:
                    nodo.innerHTML = valor;
                    break;
            }
        } else {
            console.warn("Nodo no encontrado: ", llave);
        }
    }

}