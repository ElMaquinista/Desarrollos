function actualizar() {

    // contar nodos
    let nodos = document.querySelectorAll(".item_grid");

    let raiz = Math.sqrt(nodos.length);
    let redondeo = Math.ceil(raiz);

    if (nodos.length === 2)
        redondeo = redondeo - 1
    if (nodos.length > 3)
        redondeo = redondeo

    var r = document.querySelector(':root');
    // const r = document.documentElement.style;
    var rs = getComputedStyle(r);
    var valor = rs.getPropertyValue('--num_columnas_subscriber');
    // valor.removeProperty('--num_columnas_subscriber');
    r.style.setProperty('--num_columnas_subscriber', redondeo);
}
actualizar();