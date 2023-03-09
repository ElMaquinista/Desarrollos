const init_conociendoportal = (() => {

    // ocultarLoaderMain();

    const verificar_online_video = async () => {
        let peticion_video = await RequestGET_local(`https://empresas.claro360.com/sanborns/resources/video/conociendoportal/sanborns_logo.mp4`).then(response => {
            peticion_respuetas = response;
            return response;
        });

        console.log(peticion_video);

    };


    const pintar_video = () => {
        let video_disponible = false;
        if (video_disponible) {
            let div_video = document.createElement('div');
            div_video.className = 'div_video_capacitacion';

            let nodo_video = document.createElement('video');
            nodo_video.className = "video_capacitacion";
            nodo_video.src = "https://empresas.claro360.com/sanborns/resources/video/conociendoportal/sanborns_logo.mp4";
            nodo_video.width = "640";
            nodo_video.height = '480';
            nodo_video.poster = "./grupo_sanborns.png";
            nodo_video.controls = true;
            nodo_video.muted = true

            div_video.insertAdjacentElement("beforeend", nodo_video);

            let objetivo = document.querySelector('.cuerpo_pagina');
            objetivo.insertAdjacentElement("beforeend", div_video);

        } else {
            let nodo_no = document.createElement('div');
            nodo_no.className = 'video_no_disponible';
            nodo_no.innerHTML = `<p class="txt_video_no_disponbible">Video no disponible </p>`;

            let objetivo = document.querySelector('.cuerpo_pagina');
            objetivo.insertAdjacentElement("beforeend", nodo_no);
        }
    };
    pintar_video();

    return {
        verificar_online_video
    };

})();