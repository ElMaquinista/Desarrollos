
var ws = null;

function connect() {
    ws = new WebSocket('wss://claro360.com/plataforma360_ricardo/SocketNotifications');
    ws.onopen = function () {
        // subscribe to some channels
        ws.send(JSON.stringify({
            //.... some message the I must send when I connect ....
        }));
    };

    ws.onmessage = function (e) {
        console.log('Message:', e.data);
    };

    ws.onclose = function (e) {
        console.log('Socket is closed. Reconnect will be attempted in 1 second.', e.reason);
        // setTimeout(function () {
        //     connect();
        // }, 1000);
    };

    ws.onerror = function (err) {
        console.error('Socket encountered error: ', err.message, 'Closing socket');
        ws.close();
    };
}

connect();

function verificar_socket_vivo() {
    if(ws){
        ws.onopen = function () {
            // subscribe to some channels
            console.log("Socket sigue conectando");
        };
    }
}

window.addEventListener('offline', e => {
    console.log('offline')
  })