// modal para la eleccion de audio
async function lanzar_modal_audio_salida() {
    //---------------------------- validar navegador
    if (obtenerIdNavegador(["Chrome"]) < 0) {
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




    ME_filtros_publisher(nodo_contenedor);
    // ME_filtros_publisher(nodo_footer);

    nodo_boton_aceptar.addEventListener("click", function me_acepatar(e) {
        const target = e.target;

    });

    //-----------------------------

    let obj_modal = crear_modal_desechable_bs5(data);

    let nodo_modal = obj_modal._element;

    let nodo_footer = nodo_modal.querySelector(".modal-footer");

    nodo_footer.insertAdjacentElement("beforeEnd", nodo_boton_aceptar);

    nodo_boton_aceptar.addEventListener("click", function acaptar(e) {
        console.log(" aceptó las codiciones");
        let nodo_select = document.querySelector(".seleccion_audio_salida ");
        let iddevice = nodo_select.value;

        if (iddevice) {
            seleccionar_audio_output(iddevice);

            console.log("aplicando salida de audio");

            obj_modal.hide();

        }

    });



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

//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
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
