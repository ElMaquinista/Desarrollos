
function lanzar_modal() {
  let nodo_cuerpo = document.createElement("div");
  nodo_cuerpo.innerHTML = `
  <div class="contenido_modal_filtros_publisher">
    hola desde el cotenido incrustado
  </div>`;

  let nodo_boton_aceptar = document.createElement("button");
  nodo_boton_aceptar.className = "btn btn-success";
  nodo_boton_aceptar.textContent = "Aceptar";
  nodo_boton_aceptar.setAttribute("data-evento", "aplicar_filtro");

  let data = {
    id: "modal_filtro_publicador",
    titulo: "Selecciona el tipo del filtro",
    nodo_cuerpo: nodo_cuerpo,
    className: "modal_filtro_publicador",
  };

  // -------------------
  let obj_modal = crear_modal_desechable_bs5(data);

  let nodo_modal = obj_modal._element;

  let nodo_footer = nodo_modal.querySelector(".modal-footer");

  nodo_footer.insertAdjacentElement("beforeEnd", nodo_boton_aceptar);

  nodo_boton_aceptar.addEventListener("click", function acaptar(e) {
    console.log(" aceptó las codiciones");
    obj_modal.hide();
  });

}

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

  let myModal = new bootstrap.Modal(nodo_modal);
  console.log(myModal);

  myModal.show();

  nodo_modal.addEventListener('hidden.bs.modal', event => {
    myModal.dispose();
    nodo_modal.remove();
  })
  return myModal;
}