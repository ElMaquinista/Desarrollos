const imprimir_consola=()=>{
    console.log("hola desde import");
};
function saludo() {
    console.log("hola desde saludo");
}

function ejecucion_heredada (){
    conjunto();
}

const conjunto  = ()=>{
    saludo();
    console.log("execucion dentro de un scrope");
};



export{
    imprimir_consola,
    saludo,
    ejecucion_heredada
}