
// masificar un inser ten mysql

let ejemplomtysql = `INSERT INTO telepresencia_peru_dev.videollamadas (id_llamada,id360_modulo,id_modulo,id_tipo_atencion,tipo_documento,numero_documento,nombre,apellido_paterno,apellido_materno,telefono,segmento,room_name,apikey,idsesion,token,timezone,id_cliente,id360_destino,id360_tipificacion,activo,date_created,time_created,date_updated,time_updated,fecha,hora)
VALUES (993827,9991358001,5,1,'DNI','07707070','testing','nueva llamada','de la cruz','707070707','peru_cac','icy-firefly-autumn-limit-2666','47656001','2_MX40NzY1NjAwMX5-MTcwMzg5MjA3ODI0Mn52cFY1MnRqOWFiWHFWK3dkS0k1Y2t2Z2p-fn4','T1==cGFydG5lcl9pZD00NzY1NjAwMSZzaWc9MzBjNzRhMDVjOTZhMTVlNWExM2ZjMGFmNzk0YTAyZGJiOTQ2OTUxMDpzZXNzaW9uX2lkPTJfTVg0ME56WTFOakF3TVg1LU1UY3dNemc1TWpBM09ESTBNbjUyY0ZZMU1uUnFPV0ZpV0hGV0szZGtTMGsxWTJ0MloycC1mbjQmY3JlYXRlX3RpbWU9MTcwMzg5MjA3OCZub25jZT0wLjkzNjk0MjMxODc0NDkxNTcmcm9sZT1tb2RlcmF0b3ImZXhwaXJlX3RpbWU9MTcwMzk3ODQ3OCZjb25uZWN0aW9uX2RhdGE9JTdCJTIydXNlck5hbWUlMjIlM0ElMjJBbm9uaW1vJTIwNjY2ODglMjIlN0QmaW5pdGlhbF9sYXlvdXRfY2xhc3NfbGlzdD0=','America/Mexico_City',8,9991358001,9991358001,'1','2023-12-29','17:21:18','2023-12-29','17:22:13','2023-12-29','17:21:18');
`;

let base =
{
    // "id": 636,
    // "id_llamada": 1151704,
    "id360_modulo": 9991347375,
    "id_modulo": 51,
    "id_tipo_atencion": 1,
    "tipo_documento": "DNI",
    "numero_documento": "49016808",
    "nombre": "Juan",
    "apellido_paterno": "zapata",
    "apellido_materno": "martinez",
    "telefono": "969560858",
    "id_entorno": null,
    "segmento": "peru_cac",
    "room_name": "old-morning-green-silence-7701",
    "apikey": "47806221",
    "idsesion": "2_MX40NzgwNjIyMX5-MTcwNzg1NTQ3NzM2N35VN05ldWw4d0VySmppRm9PY1BFdEg0L0t-fn4",
    "token": "T1==cGFydG5lcl9pZD00NzgwNjIyMSZzaWc9YTZkNDM3NDRhYjVmNjY4Y2ZmMGNhYzdmOGRjMjA4ZDI0NGM1NmNlODpzZXNzaW9uX2lkPTJfTVg0ME56Z3dOakl5TVg1LU1UY3dOemcxTlRRM056TTJOMzVWTjA1bGRXdzRkMFZ5U21wcFJtOVBZMUJGZEVnMEwwdC1mbjQmY3JlYXRlX3RpbWU9MTcwNzg1NTQ3NyZub25jZT0wLjIxOTM3Njk2NzQwOTAxMTU4JnJvbGU9bW9kZXJhdG9yJmV4cGlyZV90aW1lPTE3MDc5NDE4NzcmY29ubmVjdGlvbl9kYXRhPSU3QiUyMnVzZXJOYW1lJTIyJTNBJTIyQW5vbmltbyUyMDUwNDM4JTIyJTdEJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9",
    "timezone": "America\/Lima",
    "id_cliente": 67,
    "id360_destino": 9991407575,
    "id360_tipificacion": 9991407575,
    "activo": "1",
    "date_created": "2024-02-13",
    "time_created": "14:17:57",
    "date_updated": "2024-02-13",
    "time_updated": "14:22:55",
    "utc_date_created": "2024-02-13",
    "utc_time_created": "20:22:56",
    // "utc_date_updated": null,
    // "utc_time_updated": null,
    "fecha": "2024-02-13",
    "hora": "15:17:55",
    "id_tipificacion": 62,
    "tipificacion_comentario": "Solicita migrar a prepago",
    "id_jrq_equipo": null
};

let query_secundaria = {
    // "id" : 4302,
    // "id_llamada" : 1151704,
    // "id_cliente": 67,
    "id_catalogo": 1,
    // "id360": null,
    "fecha": "2024-02-13",
    "hora": "15:17:55",
    "timezone": "America\/Lima",
    "id_tipo_consulta": null,
    "activo": "1",
    "date_created": "2024-02-13",
    "date_updated": null,
    "time_created": "14:17:57",
    "time_updated": null,
    "date_created_utc": null,
    "time_created_utc": null,
    "utc_date_created": "2024-02-13",
    "utc_time_created": "20:17:57"
};



let values_primario = "";
let valores_secundario = "";

const crear_query = () => {
    // iterar n numeo de veces

    console.log("Iniciando crecionde query");

    let inicio=993827;
    for (let i = inicio -10; i < inicio ; i++) {
        console.log("iteracion", i);
        let _values_primario = `(${i},9991358001,5,1,'DNI','07707070','testing','nueva llamada','de la cruz','707070707','peru_cac','icy-firefly-autumn-limit-2666','47656001','2_MX40NzY1NjAwMX5-MTcwMzg5MjA3ODI0Mn52cFY1MnRqOWFiWHFWK3dkS0k1Y2t2Z2p-fn4','T1==cGFydG5lcl9pZD00NzY1NjAwMSZzaWc9MzBjNzRhMDVjOTZhMTVlNWExM2ZjMGFmNzk0YTAyZGJiOTQ2OTUxMDpzZXNzaW9uX2lkPTJfTVg0ME56WTFOakF3TVg1LU1UY3dNemc1TWpBM09ESTBNbjUyY0ZZMU1uUnFPV0ZpV0hGV0szZGtTMGsxWTJ0MloycC1mbjQmY3JlYXRlX3RpbWU9MTcwMzg5MjA3OCZub25jZT0wLjkzNjk0MjMxODc0NDkxNTcmcm9sZT1tb2RlcmF0b3ImZXhwaXJlX3RpbWU9MTcwMzk3ODQ3OCZjb25uZWN0aW9uX2RhdGE9JTdCJTIydXNlck5hbWUlMjIlM0ElMjJBbm9uaW1vJTIwNjY2ODglMjIlN0QmaW5pdGlhbF9sYXlvdXRfY2xhc3NfbGlzdD0=','America/Mexico_City',8,9991358001,9991358001,'1','2023-12-29','17:21:18','2023-12-29','17:22:13','2023-12-29','17:21:18')`;
        values_primario += _values_primario;

        let temp_secundario = crear_query_seguncadario({
            id_llamada: i
        });

        valores_secundario += temp_secundario;
    }


    console.log("values_primario", valores_secundario);
    console.log("valores_secundario", valores_secundario);

    decargar_texto(valores_secundario)
}


const crear_query_seguncadario = (info = {}) => {
    let valores = "";
    let { id_llamada } = info;

    let arr_id_catalogo = ["1", "3", "4", "5", "6", "13", "14"];
    for (let id_catalogo of arr_id_catalogo) {
        let temp = `(${id_llamada},${id_catalogo},9991407575,'2024-02-13','15:22:55','America/Lima','1','2024-02-13','14:22:55','2024-02-13','20:22:56')`;
        valores += temp;
    }
    return valores;
};

const descargar_json = (storageObj) => {
    var dataStr = "data:text/plain;charset=utf-8," + encodeURIComponent(JSON.stringify(storageObj));
    window.open(dataStr, '_blank');
    // var dlAnchorElem = document.getElementById('downloadAnchorElem');
    // dlAnchorElem.setAttribute("href", dataStr);
    // dlAnchorElem.setAttribute("download", "scene.json");
    // dlAnchorElem.click();
};
const decargar_texto =(text)=>{
    var blob = new Blob([text], {type: "text/plain;charset=utf-8"});
   saveAs(blob, "testfile1.txt");
}

function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}