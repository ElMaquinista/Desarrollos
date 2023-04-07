function lanzar_timer() {
    let duracion_timer_seg = 120;

    let contador_tiempo = null
    contador_tiempo = setInterval(function () {
        duracion_timer_seg = duracion_timer_seg - 1;

        let tiempo = convertir_segundos_tiempo(duracion_timer_seg);

        console.log(`Faltan ${tiempo.minutos}:"${tiempo.segundos}`);

        if (duracion_timer_seg < 0) {

            console.log("tiempo terminado");
            clearInterval(contador_tiempo);
        }

    }, 1000);
}

function convertir_segundos_tiempo(segundos) {

    const SEGUNDOS_POR_MIN = 60,
        MINUTOS_POR_HORA = 60,
        HORAS_POR_DIA = 24,
        DIAS_POR_SEMANA = 7,
        DIAS_POR_MES = 30,
        MESES_POR_ANIO = 12;
    let minutos = 0;
    let horas = 0;
    let dias = 0;
    let semanas = 0;
    let meses = 0;
    let años = 0;
    let sobrantes = segundos;


    // calcular años 
    años = Math.floor(sobrantes / (MESES_POR_ANIO * DIAS_POR_MES * HORAS_POR_DIA * MINUTOS_POR_HORA * SEGUNDOS_POR_MIN));
    sobrantes = sobrantes - (años * (MESES_POR_ANIO * DIAS_POR_MES * HORAS_POR_DIA * MINUTOS_POR_HORA * SEGUNDOS_POR_MIN));


    meses = Math.floor(sobrantes / (DIAS_POR_MES * HORAS_POR_DIA * MINUTOS_POR_HORA * SEGUNDOS_POR_MIN));
    sobrantes = sobrantes - (meses * (DIAS_POR_MES * HORAS_POR_DIA * MINUTOS_POR_HORA * SEGUNDOS_POR_MIN));


    semanas = Math.floor(sobrantes / (DIAS_POR_SEMANA * HORAS_POR_DIA * MINUTOS_POR_HORA * SEGUNDOS_POR_MIN));
    sobrantes = sobrantes - (semanas * (DIAS_POR_SEMANA * HORAS_POR_DIA * MINUTOS_POR_HORA * SEGUNDOS_POR_MIN));


    dias = Math.floor(sobrantes / (HORAS_POR_DIA * MINUTOS_POR_HORA * SEGUNDOS_POR_MIN));
    sobrantes = sobrantes - (dias * (HORAS_POR_DIA * MINUTOS_POR_HORA * SEGUNDOS_POR_MIN));


    horas = Math.floor(sobrantes / (MINUTOS_POR_HORA * SEGUNDOS_POR_MIN));
    sobrantes = sobrantes - (horas * (MINUTOS_POR_HORA * SEGUNDOS_POR_MIN));

    minutos = Math.floor(sobrantes / (MINUTOS_POR_HORA));
    sobrantes = sobrantes - (minutos * (MINUTOS_POR_HORA));

    return {
        segundos: sobrantes,
        minutos: minutos,
        horas: horas,
        dias: dias,
        semanas: semanas,
        meses: meses,
        años: años
    }
}