let session = {
    configuracion: {
        llamada: {
            segmento: "peru_cac"
        }
    }
};
// .configuracion.llamada.segmento = "peru_cac";
const protocolosParaCerra = (() => {

    const agregarEventoCierre = () => {
        window.addEventListener("beforeunload", function (e) {
            var confirmationMessage = "\o/";
            // event.preventDefault();  // equivalente a "\o/"
            alert('Mensaje');
            confirmationMessage = "Esta por dejar la cola de las llamadas";
            (e || window.event).returnValue = confirmationMessage; //Gecko + IE
            return confirmationMessage;                            //Webkit, Safari, Chrome
        });
    }
    // agregarEventoCierre();

    const agregarEventoCierreMod = () => {
        window.addEventListener("beforeunload", function (e) {
            var confirmationMessage = "\o/";
            // event.preventDefault();  // equivalente a "\o/"

            window.open('http://www.tupagina.com/pagina-en-tab.php', '_blank');

            (e || window.event).returnValue = confirmationMessage; //Gecko + IE
            return confirmationMessage;                            //Webkit, Safari, Chrome
        });
    };
    // agregarEventoCierreMod();

    const agregarEventoCierreWindow = () => {
        window.onbeforeunload = function () {
            return 'Se perderan los cambios realizados!';
        }
    }
    // agregarEventoCierreWindow();

    const agregarEventoCerrado =()=>{
        // es mejor usar este evento porque beforeunloadesta mas restringido
        window.onunload= function(){
            // location.replace('/contextpath/j_spring_security_logout') ;
            window.open('http://www.google.com', '_blank');
        }
    }
    agregarEventoCerrado();

    const quitarEventoCerrado=()=>{
        window.onunload=function(){
            
        }
    }

    const ProtocoloSegmento=()=>{
        let segmento = session.configuracion.llamada.segmento;
        if (segmento) {
            switch (segmento) {
                case 'peru_cac':
                    let nodo_start = document.querySelector('#stopArchiving');
                    let nodo_stop = document.querySelector('#stopArchiving');
                    // verificar si se esta grabando 

                    // activar la grabacion de la llamada aautomaticamente 
                    
                    // deshabilitar boton de grabar para que no se pueda detener la grabacion


                    break;

                default:
                    break;
            }
        }
    }



    function protocoloPeruCacExit() {
        console.log("protocoloPeruCacExit");
        alert("Esta por dejar la cola de las llamadas");
        return "Está dejando la cola de llamadas";
        // detener grabaciones de video 
    }

    return {
        lanzadoProtocolo,
        protocoloPeruCacExit,
        quitarEventoCerrado
    };
})();


function Cerrar() {
    alert('Mensaje')
    return "Te estás saliendo del sitio…";
}

var myclose = false;

function ConfirmClose()
{
    if (event.clientY < 0)
    {
        event.returnValue = 'You have closed the browser. Do you want to logout from your application?';
        setTimeout('myclose=false',10);
        myclose=true;
    }
}

function HandleOnClose()
{
    if (myclose==true) 
    {
        //the url of your logout page which invalidate session on logout 
        location.replace('/contextpath/j_spring_security_logout') ;
    }   
}