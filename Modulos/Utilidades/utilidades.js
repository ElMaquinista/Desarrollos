// requirido => 
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

async function construir_miniatura_canvas_pdf(d = {}) {
    // requiere PDF js 2.0.9
    let retorno = await pdfjsLib.getDocument(d.url_pdf).then(async (pdf) => {
        let pdf_estado = {
            pdf: d.url_pdf,
            currentPage: 1,
            zoom: 0.5
        };
        pdf_estado.pdf = pdf;
        let div_canvas_respuesta = await pdf_estado.pdf.getPage(pdf_estado.currentPage).then((page) => {

            let canvas_requisito = document.createElement('canvas');
            canvas_requisito.className = d.classnombre;
            canvas_requisito.setAttribute("data-evento-heredado", "true");

            let contexto_canvas = canvas_requisito.getContext('2d');

            let vista_port = page.getViewport(pdf_estado.zoom);
            //                console.log("vista_port", vista_port);
            canvas_requisito.width = vista_port.width;
            canvas_requisito.height = vista_port.height;
            page.render({
                canvasContext: contexto_canvas,
                viewport: vista_port
            });

            return canvas_requisito;
        });
        return div_canvas_respuesta;
    });
    return retorno;
}