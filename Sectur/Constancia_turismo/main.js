// tiene finalidad de reemplazar las llaves en  el html de la plantilla con información 

var iframe = null;

function rellenar_llaves_respuestas(){
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
        "servicio_de": "Agencia de administaración de espacio para vehiculos autopropulsados por motor"
    };

    // itinerar las llaves para asignar el text en el html

    iframe = document.querySelector("iframe").contentWindow;
    console.log("iframe", iframe);

    let nodo_pagina = iframe.document.querySelector('.documento')
    console.log("nodo_pagina", nodo_pagina);

    for(let llave in json){
        let valor = json[llave];

        // buscar la llave en el html
        
    }

}