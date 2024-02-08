
const peticion_detalle_solicitud = async (nombreArchivo) => {
    let peticion = await fetch('./' + nombreArchivo)
        .then((response) => response.json())
        .then((json) => json);
    // console.log("peticion", peticion);
    return peticion;
};

const descargar_json = (storageObj) => {
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(storageObj));
    window.open(dataStr, '_blank');
    // var dlAnchorElem = document.getElementById('downloadAnchorElem');
    // dlAnchorElem.setAttribute("href", dataStr);
    // dlAnchorElem.setAttribute("download", "scene.json");
    // dlAnchorElem.click();
};

const procesar = async () => {
    let faltantes = await peticion_detalle_solicitud("grabaciones_suite.json");
    let grab_faltantes = faltantes.grabaciones;
    // console.log(grab_faltantes);

    let _base = await peticion_detalle_solicitud("grabaciones_peru.json");
    let base = _base.data;
    console.log(base);

    // iterar
    for (let item of base) {
        let { grabacion } = item;
        let id_llamada = item.idRegistro_Llamadas;
        let buscado = null;
        if (grabacion) {

        } else {
            console.log("id_llamada", id_llamada);
            buscado = grab_faltantes.find(x => x.id_llamada === id_llamada);
            if (buscado) {
                item.grabacion = buscado.grabacion;
            } else {
                delete item;
                // console.log("No item en curso: ", buscado);
                console.log("No encontrado: ", item);
            }
        }
    }

    console.log("final", base);
    let revisar = base.find(({ idRegistro_Llamadas }) => (idRegistro_Llamadas));
    console.log("revisar", revisar);



    descargar_json(base);

};

const procesar_trabajado = async () => {
    let trabajado = await peticion_detalle_solicitud("480/trabajado.json");
    console.log("trabajado", trabajado);
    let initialValue = 0;
    let muestra = trabajado[0];
    console.log("muestra", muestra.grabacion, muestra.tamaño);

    let solo_tamaño = trabajado
        .map(x => {
            let respuesta = 0;
            let tamaño = x.tamaño;
            if (tamaño) {
                respuesta = tamaño;
            }
            return respuesta;
        })
    let total_tamaño = solo_tamaño
        .reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            initialValue,
        );

    let solo_duracionEfectiva = trabajado.map(({ duracion_efectiva }) => {
        let number = parseFloat(duracion_efectiva);
        if (number) {
            return number;
        }
    });
    let total_duracion_efectiva = solo_duracionEfectiva.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
    );

    console.log("total_tamaño", total_tamaño);
    console.log("total_tamaño size", solo_tamaño.length);

    console.log("solo_duracionEfectiva", solo_duracionEfectiva);

    console.log("total_duracion_efectiva", total_duracion_efectiva);
    console.log("total_duracion_efectiva size", solo_duracionEfectiva.length);

};