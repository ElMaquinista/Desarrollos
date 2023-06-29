console.log("hola desde test de notificaciones");

const permiso_notificaciones = async () => {
    // Comprobemos si el navegador admite notificaciones.
    if (!('Notification' in window)) {
        console.log("Este navegador no admite notificaciones.");
    } else {
        let solicitar_permiso = null;
        try {
            solicitar_permiso = await Notification.requestPermission();

            console.log("solicitar_permiso", solicitar_permiso);
        } catch (error) {
            console.log(error);
        }

        if (solicitar_permiso) {
            if (Notification.permission === 'denied') {
                console.log("permisos para notificacion denegados")
            } else if (Notification.permission === 'default') {
                console.log("permisos por defecto")
            } else if (Notification.permission === 'granted') {
                console.log("permisos para notificacion");

                // notificacion de ejemplo

                var titulo = "Hola "
                var extra = {
                    icon: "https://landings360.s3.amazonaws.com/recursosLayout/img/Claro360_Logo_Header_negro.png",
                    body: "Notificación de prueba"
                }
                var notification = new Notification(titulo, extra);
            }
        }
    }
}


//--------------------------------------------------------------------------
function askNotificationPermission() {
    // función para pedir los permisos
    function handlePermission(permission) {
        // configura el botón para que se muestre u oculte, dependiendo de lo que
        // responda el usuario
        if (Notification.permission === 'denied' || Notification.permission === 'default') {
            // notificationBtn.style.display = 'block';
        } else {
            // notificationBtn.style.display = 'none';
        }
    }

    // Comprobemos si el navegador admite notificaciones.
    if (!('Notification' in window)) {
        console.log("Este navegador no admite notificaciones.");
    } else {
        if (checkNotificationPromise()) {
            Notification.requestPermission()
                .then((permission) => {
                    handlePermission(permission);
                })
        } else {
            Notification.requestPermission(function (permission) {
                handlePermission(permission);
            });
        }
    }
}
function checkNotificationPromise() {
    try {
        Notification.requestPermission().then();
    } catch (e) {
        return false;
    }

    return true;
}

function lanzar_notificacion() {
    // var title = "titulo";
    // var img = 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80';
    // var text = '¡OYE! Tu tarea "' + title + '" ahora está vencida.';

    // var notification = new Notification('Lista de tareas', { body: text, icon: img });

    var notification = new Notification("hola");
}

function prueba_notificacion() {
    if (Notification) {
        if (Notification.permission !== "granted") {
            Notification.requestPermission()
        }

        console.log("notificacion");

        var title = "Xitrus"
        var extra = {
            icon: "http://xitrus.es/imgs/logo_claro.png",
            body: "Notificación de prueba en Xitrus"
        }
        var noti = new Notification(title, extra)
        noti.onclick = {
            // Al hacer click
        }
        noti.onclose = {
            // Al cerrar
        }
        setTimeout(function () { noti.close() }, 10000)
    } else {
        console.log("allgo salio mal con Notification");
    }
}


//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', () => {
    Notification.requestPermission().then(resultado => {
        console.log('Respuesta: ', resultado);
    })
})

const verNotificacion = document.querySelector('#vernotificacion');

verNotificacion.addEventListener('click', () => {
    if (Notification.permission === 'granted') {
        const notificacion = new Notification('Esta es la notificacion', {
            // icon: '/images/example-logo.jpg',ssss
            body: 'Tutoriales de js con blackCode'
        });

        notificacion.onclick = function () {
            window.open('http://google.com');
        }
    }
})