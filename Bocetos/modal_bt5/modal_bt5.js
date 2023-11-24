
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

function crear_modal_desechable_bs5(data, modalAttr = null) {
  // lanzar un modal que desaparece al cerrarse, 
  // basado en bs5 
  // se lanza automaticamente
  // retorna el objeto mnodal

  let nodo_modal = document.createElement("div");
  nodo_modal.className = "modal " + data.className;
  nodo_modal.setAttribute("id", data.id);
  nodo_modal.setAttribute("tabindex", "-1");

  if (modalAttr && modalAttr.length > 0) {
    for (let attrib of modalAttr) {
      try {
        nodo_modal.setAttribute(attrib.atrib, attrib.valor);
      } catch (error) {
        console.error("Al intenat agregar atributo");
      }
    }
  }
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
        <button type="button" class="btn btn-secondary btn_cerrar" data-bs-dismiss="modal">Cerrar</button>
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



//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
// inyectar css desde js
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
function validar_css(contains) {

  if (contains) {
    let busiqueda = Array.from(document.querySelectorAll("link")).find(item => item.href.includes(contains))

    if (busiqueda) {
      console.log("hoja de estilos encontrada");
    } else {
      console.log("hoja de estilos no encontrada");
      inyectar_css("./", contains);
    }

  }
}

function inyectar_css(ruta, href) {
  var head = document.getElementsByTagName('HEAD')[0];

  // Create new link Element
  var link = document.createElement('link');

  // set the attributes for link element
  link.rel = 'stylesheet';

  link.type = 'text/css';

  link.href = ruta + href;

  // Append link element to HTML head
  head.appendChild(link);
  console.log("importado");
}

inyectar_css("./", "modal_bt5.css");

//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
// crear modal para mostrar progreso 
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------

async function lanzar_modal_progreso() {
  let nodo_cuerpo = document.createElement("div");
  let data = { // data para el modal
    id: "modal_progreso",
    titulo: "Progreso de carga",
    nodo_cuerpo: nodo_cuerpo,
    className: "modal_progreso",
  };
  let arr_modalAttrib = [ // atributos para agregar al modal antes de ser creado con bs5
    {
      atrib: "data-bs-backdrop",
      valor: "static"
    },
    {
      atrib: "data-bs-keyboard",
      valor: "false"
    }
  ];
  let nodo_boton_aceptar = null;
  let obj_modal = null; // objeto bs5 del modal
  let nodo_modal = null; // nodo, elemento del modal
  let btn_cerrar = null; // boton cerrar dentro del modal
  let nodo_footer = null;
  let nodo_tareas = null;

  nodo_cuerpo.innerHTML = `
  <div class="cont_progreso">
    <div>
        Por favor no cierre la ventana hasta el proceso concluya.
    </div>
    <br>
    <div class="tareas_proceso">

    </div>
  </div>`;

  //----------------------------------- boton de aceptar
  nodo_boton_aceptar = document.createElement("button");
  nodo_boton_aceptar.className = "btn btn-success";
  nodo_boton_aceptar.textContent = "Aceptar";
  nodo_boton_aceptar.setAttribute("data-evento", "aplicar_filtro");
  nodo_boton_aceptar.disabled = true;

  nodo_boton_aceptar.addEventListener("click", function acaptar(e) {
    console.log(" aceptó las codiciones");
    obj_modal.hide();
  });

  //------------------------------------------------- creacion del modal
  obj_modal = crear_modal_desechable_bs5(data, arr_modalAttrib);
  nodo_modal = obj_modal._element;
  btn_cerrar = nodo_modal.querySelector(".btn_cerrar");
  if (btn_cerrar) {
    btn_cerrar.classList.add("d-none");
  }
  nodo_footer = nodo_modal.querySelector(".modal-footer");
  nodo_footer.insertAdjacentElement("beforeEnd", nodo_boton_aceptar);

  //------------------------------------------------- observacion del proceso
  let procesos_tareas = [
    {
      clase: "subir_documentos",
      texto: "Subiendo Documentos",
      funcion: async function name(params) {
        await delay(2000);
      }, // funcion para lanzar, tener en cuenta que esperará que termine
      nodo: null // será asignado al crearlo
    },
    {
      clase: "subiendo registro",
      texto: "Guardando Registro",
      funcion: async function name(params) {
        await delay(2000);
      },
      nodo: null
    }
  ];

  nodo_tareas = nodo_modal.querySelector(".tareas_proceso");

  // creando tareas 
  if (procesos_tareas) {
    for (let tarea of procesos_tareas) {
      let nodo = document.createElement("div");
      nodo.className = "tarea " + tarea.clase;
      nodo.innerHTML = `
            ${tarea.texto}
            <span class="estado esperando"><i class="far fa-clock"></i></span>
            <span class="estado spinner-border cargado d-none" role="status">
                <span class="visually-hidden">Loading...</span>
            </span>
            <span class="estado completado d-none"><i class="far fa-check-circle"></i></span>
            <span class="estado error d-none"><i class="fas fa-exclamation"></i></span>
      `;
      tarea.nodo = nodo;
      nodo_tareas.insertAdjacentElement("beforeEnd", nodo);
    }
  }

  // procesando tareas
  if (procesos_tareas) {
    for (let tarea of procesos_tareas) {
      let funcion = tarea.funcion;
      if (funcion) {
        console.log("empezando tarea: ", tarea.clase);
        cambio_estado_tarea(tarea.nodo, ".cargado");
        try {
          await funcion();
          cambio_estado_tarea(tarea.nodo, ".completado");
        } catch (errror) {
          console.error("lanzar funcion tarea: ", errror);
          cambio_estado_tarea(tarea.nodo, ".error");
        }
        console.log("termiennado tarea: ", tarea.clase);
      }
    }
  }

  // al terminar todods los procesos de debe habilitar el modal
  nodo_boton_aceptar.disabled = false;

}

function cambio_estado_tarea(nodoTarea, selector) {

  if (nodoTarea && selector) {
    let nodosEstados = nodoTarea.querySelectorAll(".estado");
    if (nodosEstados) {
      for (let item of nodosEstados) {
        item.classList.add("d-none");
      }
    }
    if (selector) {
      let objetivo = nodoTarea.querySelector(selector);
      try {
        objetivo.classList.remove("d-none");
      } catch (error) {
        console.error(error);
      }
    }
  }
}

// procesos para mostrar 
// subiendo documentos
// registrando solicitud

function subiendo_documentos() {
  // simulacion de subir documentos

}

//--------------------------------------------------------------- timer 

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}


async function start() {
  console.log("Hola");
  await delay(2000);
  console.log("Programadores");
}

