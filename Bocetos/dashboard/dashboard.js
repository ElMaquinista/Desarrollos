const generarNuevoColor =()=>{
	var simbolos, color;
	simbolos = "0123456789ABCDEF";
	color = "#";

	for(var i = 0; i < 6; i++){
		color = color + simbolos[Math.floor(Math.random() * 16)];
	}

    return color;
}


let ejemplo= {
    "success": true,
    "failure": false,
    "mensaje": "Consulta exitosa",
    "cola": [
        {
            "cliente": {
                "cliente": 2,
                "id_cliente": 2,
                "success": true,
                "failure": false,
                "mensaje": "Proceso completado exitosamente.",
                "inconvenientes": []
            },
            "id_videollamada": 648,
            "id_cliente": 2,
            "success": true,
            "failure": false,
            "solicitud": {
                "id_cliente": 2,
                "apikey": "47806341",
                "hora": "19:04:57",
                "timezone": "America/Mexico_City",
                "numero_documento": "07070707",
                "nombre": "testing",
                "id_llamada": "1170492",
                "token": "T1==cGFydG5lcl9pZD00NzgwNjM0MSZzaWc9Y2I4ZDc2MjUzYzk2NmI3MmQ0YzRmMDlmODIzNGRhMzZiZmZiMWQ1ZDpzZXNzaW9uX2lkPTJfTVg0ME56Z3dOak0wTVg1LU1UY3dPRE01TVRBNU56WTJPSDVITmxBNVVYUnROR3huTURaQmFsSTBNblV5Tlc1V1JXbC1mbjQmY3JlYXRlX3RpbWU9MTcwODM5MTA5OCZub25jZT0wLjkxMzQzMzQ4MzkxNzI5NTUmcm9sZT1tb2RlcmF0b3ImZXhwaXJlX3RpbWU9MTcwODQ3NzQ5OCZjb25uZWN0aW9uX2RhdGE9JTdCJTIydXNlck5hbWUlMjIlM0ElMjJBbm9uaW1vJTIwNjI2NTIlMjIlN0QmaW5pdGlhbF9sYXlvdXRfY2xhc3NfbGlzdD0=",
                "idsesion": "2_MX40NzgwNjM0MX5-MTcwODM5MTA5NzY2OH5HNlA5UXRtNGxnMDZBalI0MnUyNW5WRWl-fn4",
                "id_tipo_atencion": "1",
                "fecha": "2024-02-19",
                "id_segmento": "",
                "room_name": "sparkling-unit-quiet-frost-3316",
                "segmento": "peru_cac",
                "id360_modulo": "9991343444",
                "tipo_documento": "DNI",
                "entorno_dev": "1",
                "apellido_paterno": "testing",
                "apellido_materno": "testing",
                "id_modulo": "1",
                "telefono": "707070707"
            },
            "mensaje": "Llamada lanzada exitosamente.",
            "permisos": {
                "success": true,
                "failure": false,
                "con_acceso": {
                    "success": true,
                    "failure": false,
                    "usuario": {
                        "id_ecosistema": "1",
                        "correo": "ricardo.garcia@globalcorporation.cc",
                        "apellido_paterno": "Garcia",
                        "apellido_materno": "de la Cruz",
                        "id": "9991343444",
                        "nombre": "Ricardo"
                    },
                    "mensaje": "Consulta correcta.",
                    "menus": [
                        {
                            "tipo_area": "1",
                            "folder_jsp_menu": null,
                            "id_menu": "1510",
                            "id_usuario": "9991343444",
                            "categoria": "Cliente",
                            "id_categoria": "32",
                            "nombre": "cac",
                            "tipo_usuario": "1",
                            "tipo_servicio": "1",
                            "config": null,
                            "url": "https://ops.claro360.com/telepresencia/"
                        }
                    ],
                    "inconvenientes": []
                },
                "con_asociacion": {
                    "identificador_cac": "MiCaC1 Pruebas",
                    "id_tipo_atencion": "1",
                    "tipo_cac": "CAC",
                    "id360": "9991343444",
                    "id_region": "1",
                    "id_modulo": "1",
                    "id_cac": "1",
                    "region": "Centro",
                    "identificador_modulo": "modulo1",
                    "tipo_atencion": "Consultas Móviles",
                    "id_tipo_cac": "1"
                },
                "mensaje": "Llamada permitido",
                "inconvenientes": []
            },
            "inconvenientes": [],
            "id_tp_bitacora": 4401,
            "credenciales": {
                "googleId": "yourClientId.apps.googleusercontent.com",
                "idLlamada": "1170492",
                "enableArchiving": true,
                "requireGoogleAuth": false,
                "apiKey": "47806341",
                "apikey": "47806341",
                "googleHostedDomain": "yourhosteddomain.com",
                "enableAnnotation": true,
                "autoGenerateRoomName": true,
                "chromeExtId": null,
                "sessionId": "2_MX40NzgwNjM0MX5-MTcwODM5MTA5NzY2OH5HNlA5UXRtNGxnMDZBalI0MnUyNW5WRWl-fn4",
                "roomName": "sparkling-unit-quiet-frost-3316",
                "enableSip": false,
                "token": "T1==cGFydG5lcl9pZD00NzgwNjM0MSZzaWc9Y2I4ZDc2MjUzYzk2NmI3MmQ0YzRmMDlmODIzNGRhMzZiZmZiMWQ1ZDpzZXNzaW9uX2lkPTJfTVg0ME56Z3dOak0wTVg1LU1UY3dPRE01TVRBNU56WTJPSDVITmxBNVVYUnROR3huTURaQmFsSTBNblV5Tlc1V1JXbC1mbjQmY3JlYXRlX3RpbWU9MTcwODM5MTA5OCZub25jZT0wLjkxMzQzMzQ4MzkxNzI5NTUmcm9sZT1tb2RlcmF0b3ImZXhwaXJlX3RpbWU9MTcwODQ3NzQ5OCZjb25uZWN0aW9uX2RhdGE9JTdCJTIydXNlck5hbWUlMjIlM0ElMjJBbm9uaW1vJTIwNjI2NTIlMjIlN0QmaW5pdGlhbF9sYXlvdXRfY2xhc3NfbGlzdD0=",
                "idsesion": "2_MX40NzgwNjM0MX5-MTcwODM5MTA5NzY2OH5HNlA5UXRtNGxnMDZBalI0MnUyNW5WRWl-fn4",
                "enableArchiveManager": true,
                "reportIssueLevel": 0
            },
            "id_llamada": "1170492"
        }
    ]
};

let operadores= {
    "task": "getJornadaList",
    "data": [
        {
            "activeDuration": "PT0S",
            "activeTimestamp": null,
            "estatus": 0,
            "id_jolab": "401",
            "id360": "9991358002",
            "inactiveTimestamp": null,
            "id_jolab_bitacora": -2,
            "tipoAtencion": [
                2
            ],
            "id_llamada": null
        },
        {
            "activeDuration": "PT0S",
            "id360": "9991343444",
            "id_jolab_bitacora": 3367,
            "sessionId": "c1dbc1e3-3fbc-4ff7-9cb8-f1a90787d5c0",
            "id_llamada": null,
            "cliente": null,
            "room_name": null,
            "activeTimestamp": null,
            "estatus": 3,
            "id_jolab": "395",
            "inactiveTimestamp": "2024-02-20T18:24:10.215160292Z",
            "tipoAtencion": [
                1,
                2,
                3
            ],
            "credenciales": null
        }
    ],
    "success": true,
    "failure": false,
    "mensaje": "Consulta exitosa ",
    "message": "Listado de usuarios que se encuentran registrados en jornada"
};