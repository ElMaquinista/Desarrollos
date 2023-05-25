$('[data-toggle="tooltip"]').tooltip({
    container: "body"
});



// emsambaldo personalizado 
$('.example-popover').popover().on('shown.bs.popover', function ocultar(e) {

    let nodopop = this;
    setTimeout(function () {
        $(nodopop).popover("hide")
    }, 2200);
    console.log("popovers auto hiden lanzado");

})

const test_variele=()=>{
    temp = "hola"; // al no declarar variable siempre sera variable global
};
test_variele();
