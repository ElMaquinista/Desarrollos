
 function crear_modal_desechable(data) {
    // usando bootstrap 4
    // ----data
    // id
    // nodo_cuerpo
    // titulo
    // clase
    // clase_modal_dialog

    // validar elemento con el mismo id
    let presedente = document.querySelector('#' + data.id);
    if (presedente) {
        alert("Otro elemento ya tiene ese id");
    }
    // crear modal
    let nodo_modal = document.createElement("div");
    nodo_modal.className = "modal fade " + data.className;
    nodo_modal.setAttribute("id", data.id);
    nodo_modal.setAttribute("aria-labelledby", "ModalLabel");
    nodo_modal.setAttribute("aria-hidden", "true");
    nodo_modal.setAttribute("tabindex", "-1");
    nodo_modal.innerHTML = `
    <div class="modal-dialog modal-dialog-centered ${data.clase_modal_dialog}">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">${data.titulo}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <!-- <button type="button" class="btn btn-primary">Descargar comprobante</button> -->
            </div>
        </div>
    </div>`;

    //incrustar nodos cuerpo modal
    let div_cuerpo = nodo_modal.querySelector(".modal-body");

    if (data.nodo_cuerpo) {
        div_cuerpo.insertAdjacentElement("beforeend", data.nodo_cuerpo);
    }


    document.body.insertAdjacentElement("beforeend", nodo_modal);


    // (function($){

    // $('#' + data.id).modal().show();
    //     // autodestruccion
    //     $('#' + data.id).on('hidden.bs.modal', function () {
    //         console.log("evento al cerrar modal lanzado");
    //         $('#' + data.id).modal('dispose');
    //         document.querySelector('#' + data.id).remove();
    //     })

    // })(jQuery);
    // mostrar modal 

    // try {
    //     $('#' + data.id).modal().show();
    // } catch (error) {
    //     console.log(error);
    //     try {
    //         $('#' + data.id).modal('show');
    //     } catch (error) {
    //         console.log(error);

    //     }
    // }

    // jQuery.noConflict();

    return $('#' + data.id);
}


 function lanzar_modal_demo() {
    let nodo_cuerpo = document.createElement("div");
    nodo_cuerpo.innerHTML = `
    <div> Su solicitud ha sido enviada con exito </div>
    <div>(bobotn de deacargar)</div>`;

    let data = {
        id: "testmodal",
        titulo: "Probando modal desechable",
        nodo_cuerpo: nodo_cuerpo,
        className: "clase_div_modal",
    };
    crear_modal(data);

    // jQuery.noConflict();

    $('#' + data.id).modal().show();

    $('#' + data.id).on('hidden.bs.modal', function () {
        console.log("evento al cerrar modal lanzado");
        $('#' + data.id).modal('dispose');
        document.querySelector('#' + data.id).remove();
    })
}
