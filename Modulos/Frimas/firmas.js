/* global bootstrap 4*/

const Crear_Firma_Digital = (() => {

    const get_modal = (title = "", id = "") => {

        const modal = document.createElement("div");
        modal.className = "modal fade modalFirma";
        modal.id = `modal_${id}`;
        modal.setAttribute("tabindex", "-1");
        modal.setAttribute("data-bs-backdrop", "static");
        modal.setAttribute("data-bs-keyboard", "false");

        modal.innerHTML = `
            <div class="modal-dialog modal-dialog-centered modal-fullscreen-md-down">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title ">${title}</h3>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>

                    </div>
                    <div class="modal-body">
                        <div class="content_canvas"></div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                        <button type="button" class="btn btn-secondary limpiar">Limpiar</button>
                        <button type="button" class="btn btn-primary guardar">Guardar</button>
                    </div>
                </div>
            </div>
        `;

        return modal;

    };

    const component_firma = (id_content = "", label = "") => {

        const modal = get_modal(label, id_content);

        const content = document.getElementById(id_content);

        const limpiar = modal.querySelector(".limpiar");

        const canvas = document.createElement("canvas");

        modal.querySelector(".content_canvas").appendChild(canvas);

        let ctx = canvas.getContext("2d");
        let cw = canvas.width = 350,
            cx = cw / 2;
        let ch = canvas.height = 200,
            cy = ch / 2;

        let dibujar = false;
        let factorDeAlisamiento = 5;
        let Trazados = [];
        let puntos = [];
        ctx.lineJoin = "round";

        limpiar.addEventListener('click', function (evt) {
            dibujar = false;
            ctx.clearRect(0, 0, cw, ch);
            Trazados.length = 0;
            puntos.length = 0;
        }, false);

        function iniciarTrazado(evt) {
            dibujar = true;
            //ctx.clearRect(0, 0, cw, ch);
            puntos.length = 0;
            ctx.beginPath();

        }

        function trazar(evt) {
            if (dibujar) {
                let m = oMousePos(canvas, evt);
                puntos.push(m);
                ctx.lineTo(m.x, m.y);
                ctx.stroke();
            }
        }

        canvas.addEventListener('mousedown', iniciarTrazado, false);
        canvas.addEventListener('touchstart', event => iniciarTrazado(event.touches[0]), false);

        canvas.addEventListener('mouseup', redibujarTrazados, false);
        canvas.addEventListener('touchend', event => redibujarTrazados(event.touches[0]), false);

        canvas.addEventListener("mouseout", redibujarTrazados, false);

        canvas.addEventListener("mousemove", trazar, false);
        canvas.addEventListener("touchmove", event => trazar(event.touches[0]), false);

        function reducirArray(n, elArray) {
            let nuevoArray = [];
            nuevoArray[0] = elArray[0];
            for (let i = 0; i < elArray.length; i++) {
                if (i % n === 0) {
                    nuevoArray[nuevoArray.length] = elArray[i];
                }
            }
            nuevoArray[nuevoArray.length - 1] = elArray[elArray.length - 1];
            Trazados.push(nuevoArray);
        }

        function calcularPuntoDeControl(ry, a, b) {
            let pc = {};
            pc.x = (ry[a].x + ry[b].x) / 2;
            pc.y = (ry[a].y + ry[b].y) / 2;
            return pc;
        }

        function alisarTrazado(ry) {
            if (ry.length > 1) {
                let ultimoPunto = ry.length - 1;
                ctx.beginPath();
                ctx.moveTo(ry[0].x, ry[0].y);
                for (let i = 1; i < ry.length - 2; i++) {
                    let pc = calcularPuntoDeControl(ry, i, i + 1);
                    ctx.quadraticCurveTo(ry[i].x, ry[i].y, pc.x, pc.y);
                }
                ctx.quadraticCurveTo(ry[ultimoPunto - 1].x, ry[ultimoPunto - 1].y, ry[ultimoPunto].x, ry[ultimoPunto].y);
                ctx.stroke();
            }
        }

        function redibujarTrazados() {
            dibujar = false;
            ctx.clearRect(0, 0, cw, ch);
            reducirArray(factorDeAlisamiento, puntos);
            for (let i = 0; i < Trazados.length; i++)
                alisarTrazado(Trazados[i]);
        }

        function oMousePos(canvas, evt) {
            let ClientRect = canvas.getBoundingClientRect();
            return { //objeto
                x: Math.round(evt.clientX - ClientRect.left),
                y: Math.round(evt.clientY - ClientRect.top)
            };
        }

        const myModal = new bootstrap.Modal(modal, {
            keyboard: false
        });

        content.innerHTML = `
            <div class="content_canvas_img_canvas"></div>
            <div class="controles_canvas">
                <button class="btn btn-sm btn-light limpiar">Limpiar</button>
                <button class="btn btn-sm btn-light firmar">Firmar</button>
                <div class="label_canvas">${label}</div>
            </div>
        `;

        const content_canvas = content.querySelector(".content_canvas_img_canvas");

        content.querySelector(".controles_canvas button.limpiar").addEventListener("click", function () {
            content_canvas.innerHTML = "";
        });

        content.querySelector(".controles_canvas button.firmar").addEventListener("click", function () {
            myModal.show();
        });

        modal.querySelector(".guardar").addEventListener("click", function () {
            const canvas = modal.querySelector("canvas");
            let calculado = calcular_contenido_canvas(canvas).porc_diferentes;
            const breakpoint = 0.3;

            let permiso_guardar = false;
            console.log("calculo pixeles", calculado);

            switch (true) {
                case calculado === 0:
                    console.log("Se debe ingresar una firma");
                    alert("Se debe ingresar una firma");
                    break;
                case calculado < breakpoint:
                    console.log("La firma es muy pequeña");
                    alert("La firma es muy pequeña");
                    break;
                case calculado >= breakpoint:
                    console.log("La firma se valido");
                    permiso_guardar = true;
                    break;

                default:
                    break;
            }
            if (permiso_guardar) {
                content_canvas.innerHTML = "";
                const img = document.createElement("img");
                img.src = canvas.toDataURL();
                content_canvas.appendChild(img);
                myModal.hide();
            }
        });

    };
    // validacion de canvas
    function calcular_contenido_canvas(canvas) {
        if (canvas) {
            ctx = canvas.getContext("2d");
            const myImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            let array_data_pixel = myImageData.data;
            let buffer_lenght = myImageData.data.byteLength;

            let contador = 0;
            let pixeles = new Array();
            let pixel = new Array();
            for (let index = 0; index < buffer_lenght; index++) {
                const element = array_data_pixel[index];
                if (contador < 4) {
                    pixel.push(element);
                }
                contador++;
                if (contador == 4) {
                    pixeles.push(pixel);
                    pixel = new Array();
                    contador = 0;
                }

            }
            // verificar cuantos pixeles son de diferentes al patron 
            const patron = [0, 0, 0, 0];
            let pixeles_diferentes = new Array()
            for (let i = 0; i < pixeles.length; i++) {
                const element = pixeles[i];
                let rojo = element[0];
                let verde = element[1];
                let azul = element[3];
                let alfa = element[4];

                for (let j = 0; j < element.length; j++) {
                    const color = element[j];
                    if (color !== patron[j]) {
                        pixeles_diferentes.push(element);
                        break;
                    }

                }

            }
            let pixeles_totales = pixeles.length;
            let pixeles_dif = pixeles_diferentes = pixeles_diferentes.length;
            let porc_diferentes = pixeles_dif * 100 / pixeles_totales;

            return {
                porc_diferentes,
                pixeles,
                pixeles_diferentes
            }
        } else {
            return null;
        }

    };

    return {
        component_firma
    };

})();

Crear_Firma_Digital.component_firma("firma_elaborador", "Nombre y firma quien la elaboró");
Crear_Firma_Digital.component_firma("firma_solicitante", "Nombre y firma del Solicitante");

function test() {

}



// var canvas = document.getElementById("myCanvas");
// var ctx = canvas.getContext("2d");
// ctx.beginPath();
// ctx.rect(0, 0, 100, 50);
// ctx.fillStyle = "#FF0000";
// ctx.fill();
// ctx.closePath();

// console.log("canvas", canvas);


// var firma_canvas = document.querySelector('.content_canvas').querySelector('canvas');s
function calcular_contenido_canvas(canvas) {
    if (canvas) {
        console.log(canvas);
        ctx = canvas.getContext("2d");
        const myImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        // const myImageData = ctx.getImageData(0, 0, 480, 320);
        console.log(myImageData);
        let array_data_pixel = myImageData.data;
        let buffer_lenght = myImageData.data.byteLength;

        // console.log(array_data_pixel);
        console.log(buffer_lenght);

        let contador = 0;
        let pixeles = new Array();
        let pixel = new Array();
        for (let index = 0; index < buffer_lenght; index++) {
            const element = array_data_pixel[index];
            if (contador < 4) {
                pixel.push(element);
            }
            contador++;
            if (contador == 4) {
                pixeles.push(pixel);
                pixel = new Array();
                contador = 0;
            }

        }
        const bounding = canvas.getBoundingClientRect();
        // console.log(bounding);

        console.log('arreglo pixeles', pixeles);

        // verificar cuantos pixeles son de diferentes al patron 
        const patron = [0, 0, 0, 0];
        let pixeles_diferentes = new Array()
        for (let i = 0; i < pixeles.length; i++) {
            const element = pixeles[i];
            let rojo = element[0];
            let verde = element[1];
            let azul = element[3];
            let alfa = element[4];

            for (let j = 0; j < element.length; j++) {
                const color = element[j];
                if (color !== patron[j]) {
                    pixeles_diferentes.push(element);
                    break;
                }

            }

        }
        console.log("pixeles_diferentes", pixeles_diferentes);
        let pixeles_totales = pixeles.length;
        let pixeles_dif = pixeles_diferentes = pixeles_diferentes.length;
        let porc_diferentes = pixeles_dif * 100 / pixeles_totales;

        console.log("porc_diferentes", porc_diferentes);

        return {
            porc_diferentes
        }
    } else {
        return null;
    }

};