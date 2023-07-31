function crear_modal_desechable_bs5(data) {
    // lanzar un modal que desaparece al cerrarse, 
    // basado en bs5 
    // se lanza automaticamente
    // retorna el objeto mnodal

    let nodo_modal = document.createElement("div");
    nodo_modal.className = "modal " + data.className;
    nodo_modal.setAttribute("id", data.id);
    nodo_modal.setAttribute("tabindex", "-1");
    nodo_modal.innerHTML = `
    <div class="modal-dialog ${data.clase_modal_dialog}">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">
            <h5 class="modal-title" id="exampleModalLabel">${data.titulo}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
        </div>
    </div>
    `;

    let div_cuerpo = nodo_modal.querySelector(".modal-body");
    if (data.nodo_cuerpo) {
        div_cuerpo.insertAdjacentElement("beforeend", data.nodo_cuerpo);
    }

    document.querySelector("body").insertAdjacentElement("beforeEnd", nodo_modal);

    const myModal = new bootstrap.Modal(nodo_modal);

    myModal.show();

    nodo_modal.addEventListener('hidden.bs.modal', event => {
        myModal.dispose();
        nodo_modal.remove();
    })
    return myModal;
}


function obtenerIdNavegador(arr_navegadores) {
    // usado para validar que esté soportado
    let aKeys = ["MSIE", "Firefox", "Safari", "Chrome", "Opera"];
    if(arr_navegadores){
        aKeys = arr_navegadores;
    }
    
    let sUsrAg = navigator.userAgent;
    let nIdx = aKeys.length - 1;

    for (nIdx; nIdx > -1 && sUsrAg.indexOf(aKeys[nIdx]) === -1; nIdx--);

    return nIdx;
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