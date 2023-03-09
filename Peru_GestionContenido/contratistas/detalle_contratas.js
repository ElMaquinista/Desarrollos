
const detalles_contratas = (function detalles_contratas() {

    const i_titulo_contratista = '.titulo_contratista';

    const peticion_detalles_contrata =()=>{

    };
    const peticion_catalogo_regiones=()=>{

    };
    const peticion_catalogo_estados =()=>{

    };
    
    const pintar_detalles =(nodo)=>{
        // nodo debe de ser el no de las lista de contratas, trae informacion
        let d={};
        d.lista_datos =[];
        d.lista_datos.push('id_contratista');
        if(nodo){
            // extraemos data de nodo

            for (let i = 0; i < d.lista_datos.length; i++) {
                const element = d.lista_datos[i];
                d[element] = nodo.getAttribute('data-'+element);
            }
            
            // hacemos la consulta 

            //  Pintar datos del contratista 
            d.nodo_titulo_contratista = document.querySelector(i_titulo_contratista);
            d.nodo_titulo_contratista.querySelector('.label_titulo_contratista').innerHTML ="";
            d.titulo_contratista = nodo.querySelector('.nombre').textContent;
            d.nodo_titulo_contratista.insertAdjacentHTML("beforeend", d.titulo_contratista);

        }

    };


    return {
        peticion_detalles_contrata,
        pintar_detalles
    }
})();
