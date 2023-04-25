function convertir_timezone(date_origen, timezone_origen, timezone_destino) {
    let fecha_convertida = null;
    let d_temp = new Date();
    // if (typeof date_origen === "string") {

    //     let d_origen = new Date(date_origen);
    //     d_temp = new Date(d_origen.toLocaleString('es-MX',
    //         {
    //             timezone_origen,
    //         }));

    //     fecha_convertida = new Date(d_temp.toLocaleString('es-MX',
    //         {
    //             timezone_destino,
    //         }));

    // } else if (date_origen instanceof Date) {


    // }



    let pas1 = date_origen.toLocaleString('en-MX',
        {
            timezone_origen,
        });
    console.log(pas1);

    d_temp = new Date(pas1);

    console.log("d_temp", d_temp);

    let paso2 = d_temp.toLocaleString('en-MX',
        {
            timezone_destino,
        });

    console.log(paso2);

    fecha_convertida = new Date(paso2,);
    console.log("fecha_convertida", fecha_convertida);

    return fecha_convertida;
}

// convertir_timezone(new Date(), "America/Mexico_City", "America/Lima");

function changeTimeZone(date, timeZone) {
    if (typeof date === 'string') {
        return new Date(
            new Date(date).toLocaleString('en-MX', {
                timeZone,
            }),
        );
    }

    return new Date(
        date.toLocaleString('en-MX', {
            timeZone,
        }),
    );
}

const laDate = changeTimeZone(new Date(), 'America/Lima');

//( -----------------------)



function lanzar_instanciar_time_zone() {
    let options = {
        timeZone: 'America/Lima',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    },
        formatter = new Intl.DateTimeFormat([], options);

    console.log(formatter.format(new Date()));
}

function getTime(offset) {
    var d = new Date();
    localTime = d.getTime();
    localOffset = d.getTimezoneOffset() * 60000;

    // obtain UTC time in msec
    utc = localTime + localOffset;
    // create new Date object for different city
    // using supplied offset
    var nd = new Date(utc + (3600000 * offset));
    //nd = 3600000 + nd;
    utc = new Date(utc);
    // return time as a string
    let _local = nd.toLocaleString();
    let _utc = utc.toLocaleString();
    return {
        _local,
        _utc
    }
}