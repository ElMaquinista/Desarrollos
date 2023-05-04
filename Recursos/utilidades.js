async function RequestGET_local(url) {
    const URL_PETICION = url;
    console.warn(`::: RequestGET(${URL_PETICION}) `);
    const response = await fetch(URL_PETICION, {
        method: 'GET',
        // mode: 'cors',
        // cache: 'no-cache',
        // credentials: 'same-origin',
        // headers: {
        //     'Content-Type': 'application/json'
        // },
        // redirect: 'follow',
        // referrerPolicy: 'no-referrer'
    });
    console.log("response", response);

    let responseJSON, responseText;
    try {
        responseText = await response.text();
        responseJSON = JSON.parse(responseText);
    } catch (e) {
        console.error(e);
        responseJSON = { success: false, failure: true, mensaje: "UNRESOLVE" };
    }
    console.warn(`::: RESOLVE: `, responseJSON);
    return responseJSON;
}


async function RequestPOST_local(url, json) {
    const URL_PETICION = url;
    console.warn(`::: RequestPOST(${URL_PETICION}) `, json);
    const response = await fetch(URL_PETICION, {
        method: 'POST',
        // mode: 'cors',
        // cache: 'no-cache',
        // credentials: 'same-origin',
        // headers: {
        //     'Content-Type': 'application/json'
        // },
        // redirect: 'follow',
        // referrerPolicy: 'no-referrer',s
        body: JSON.stringify(json)
    });
    let responseJSON, responseText;
    try {
        responseText = await response.text();
        responseJSON = JSON.parse(responseText);
    } catch (e) {
        responseJSON = { success: false, failure: true, mensaje: "UNRESOLVE" };
    }
    console.warn(`::: RESOLVE: `, responseJSON);
    return responseJSON;
}

function buscar_nodos_padre(e, funcion_switch) {
    let path = e.path || (e.composedPath && e.composedPath());

    if (path) {
        // para buscar clases en los elementos padre
        for (let index = 0; index < path.length; index++) {
            let bandera_control = false;
            const element = path[index];
            let nombre_nodo = element.nodeName.toLowerCase();
            if (nombre_nodo.includes("html")) {
                break;
            }

            bandera_control = funcion_switch(element);

            if (bandera_control) {
                break;
            }
        }
    }
}

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