const gestioncontratistas = async (data) => {

    let catalogo_contratistas = null;
    const i_contratas = '.pizarra_contratistas';// identificador del div lista contratas
    const c_ocultar = 'ocultar_elemento'; // nombre de clase ocultara elemento
    const i_detalles = '.pizarra_detalle_contratista'; // indentificador para div de detalles


    const peticion_catalogo_contratistas = async () => {
        let peticion = await fetch('./catalogo_contratistas.json')
            .then((response) => response.json())
            .then((json) => json);
        console.log("peticion", peticion);
        catalogo_contratistas = peticion;
        // let peticion = await catalogos_peru.get_contratistas();
        // catalogo_contratistas = peticion;
        return peticion;
    };
    await peticion_catalogo_contratistas();

    const crear_li_contrastista = (itinerante) => {
        let li = document.createElement('li');
        li.className = "list-group-item list-group-item-action item_contratista";
        li.innerHTML = `
        <div class="nombre"> ${itinerante.contratista}</div>
        <span class="conte_icono_detalles">
            <i class="fas fa-arrow-right icono_detalles"></i>
        </span>`;
        li.dataset.id_contratista = itinerante.id;
        return li;
    };

    const pintar_contratistas = () => {
        let nodo_objetivo = document.querySelector('.pizarra_contratistas');
        let ul = document.createElement('ul');
        ul.className = "list-group  lista_contratistas";
        for (let j = 0; j < catalogo_contratistas.length; j++) {
            const contratista = catalogo_contratistas[j];
            let nodo_li = crear_li_contrastista(contratista);
            ul.insertAdjacentElement("beforeend", nodo_li);
        }
        nodo_objetivo.insertAdjacentElement("beforeend", ul);

    };
    pintar_contratistas();

    const manager_eventos_constratistas = () => {
        let nodo_objetivo = document.querySelector('.pizarra_contratistas');
        nodo_objetivo.addEventListener('click', function lista_contratistas(e) {
            const target = e.target;
            let clases = target.getAttribute('class');

            if(clases){
                switch (true) {
                    case clases.includes('icono_detalles'):
                        // lanzar detalles de contratista
    
                        buscar_nodos_padre(e, (element) => {
                            let bandera_control = false; // parar detener las iteraciones hacia nodos padre 
                            const clase_objeto_padre = element.getAttribute("class");
                            let data = {};
                            switch (true) {
                                case clase_objeto_padre.includes("item_contratista"):
                                    data = {};
                                    data.li = element;
                                    data.id_contratista = element.getAttribute('data-id_contratista');
                                    console.log("data item contratista", data);
                                    // ocultar div de contratas
                                    data.div_contratas = document.querySelector(i_contratas);
                                    data.div_contratas.classList.add(c_ocultar);
    
                                    // mostrar detalles 
                                    data.div_detalles = document.querySelector(i_detalles);
                                    data.div_detalles.classList.remove(c_ocultar);
                                    // pintar detalles
                                    detalles_contratas.pintar_detalles(data.li);
                                    bandera_control = true;
                                    break;
    
                                default:
                                    break;
                            }
    
                            return bandera_control;
                        });
    
                        break;
    
                    default:
                        break;
                }
            }
        });
    };
    manager_eventos_constratistas();

    const manager_eventos_detalles_conntratas = () => {
        let nodo_detalles = document.querySelector(i_detalles);
        nodo_detalles.addEventListener('click', function eventos_detalles_contratas(e) {
            const target = e.target;
            const data_evento = target.getAttribute('data-evento');

            let d = {};

            if (data_evento) {
                switch (data_evento) {
                    case "regresar_contratas":
                        d = {};
                        d.nodo_contratas = document.querySelector(i_contratas);
                        d.nodo_contratas.classList.remove(c_ocultar);

                        d.nodo_detalles = document.querySelector(i_detalles);
                        d.nodo_detalles.classList.remove(c_ocultar);

                        break;

                    default:
                        break;
                }
            }

        });
    };
    manager_eventos_detalles_conntratas();
    // ------------------------------------------------
    // metodos get 
    // ------------------------------------------------

    const get_catalogo_contratistas = () => {
        return catalogo_contratistas;
    };

    return {
        pintar_contratistas,
        peticion_catalogo_contratistas,
        get_catalogo_contratistas
    };
};