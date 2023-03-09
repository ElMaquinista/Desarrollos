

const avances_generales = (data) => {
    // ocultarLoaderMain();
    const color_concluido = "#00b050";
    const color_pediente = "#ffc000";


    const pintgar_avance_general = () => {
        let chart_completado = new Object();
        chart_completado.porcentaje_completado = 15;
        chart_completado.porcentaje_sin_completar = 85;

        const canvas_objetivo = document.getElementById("canvas_avance_general");


        const labels = [""];
        const data = {
            labels: labels,
            datasets: [
                {
                    label: 'Progreama de integración',
                    data: [43],
                    borderColor: "#a9d18e",
                    backgroundColor: "#a9d18e",
                },
                {
                    label: 'Conocimiento del producto',
                    data: [28],
                    borderColor: "#7030a0",
                    backgroundColor: "#7030a0",
                },
                {
                    label: 'Asume',
                    data: [15],
                    borderColor: "#f8cbad",
                    backgroundColor: "#f8cbad",
                }
            ]
        };




        const config = {
            type: 'bar',
            data: data,
            plugins: [ChartDataLabels],
            options: {
                indexAxis: 'y',
                scales: {
                    x: {
                        stacked: true,
                        min: 0,
                        max: 100,
                    },
                    y: {
                        stacked: true,
                    },
                },
                barThickness: 50,
                plugins: {
                    legend: {
                        labels: {
                            font: {
                                size: 20
                            }
                        }
                    },
                    datalabels: {
                        anchor: "center",
                        /* Podemos modificar el texto a mostrar */
                        formatter: (dato) => dato + "%",
                        /* Color del texto */
                        color: "#FFFFFF",
                        /* Formato de la fuente */
                        font: {
                            family: '"Times New Roman", Times, serif',
                            size: "28",
                            weight: "bold",
                        },
                        /* Formato de la caja contenedora */
                        //padding: "4",
                        //borderWidth: 2,
                        //borderColor: "darkblue",
                        //borderRadius: 8,
                        // backgroundColor: "lightblue"
                    }
                },
                maintainAspectRatio: false,
            }
        };

        let obj_grafica = new Chart(canvas_objetivo, config);
        obj_grafica.width = 500; 

    };

    const pintar_avance_integracion = () => {
        let chart_completado = new Object();
        chart_completado.porcentaje_completado = 15;
        chart_completado.porcentaje_sin_completar = 85;

        const canvas_objetivo = document.getElementById("canvas_integracion");

        new Chart(canvas_objetivo, {
            type: "pie",
            data: {
                labels: ["Sin Completar", "Completado"],
                datasets: [
                    {
                        label: "Procentaje",
                        data: [
                            chart_completado.porcentaje_completado,
                            chart_completado.porcentaje_sin_completar
                        ],
                        borderWidth: 1,
                        backgroundColor: [color_pediente, color_concluido]
                    }
                ],
                hoverOffset: 40
            },
            plugins: [ChartDataLabels],
            options: {
                plugins: {
                    legend: {
                        labels: {
                            font: {
                                size: 25
                            }
                        },
                    },
                    datalabels: {
                        anchor: "center",
                        /* Podemos modificar el texto a mostrar */
                        formatter: (dato) => dato + "%",
                        /* Color del texto */
                        color: "#FFFFFF",
                        /* Formato de la fuente */
                        font: {
                            family: '"Times New Roman", Times, serif',
                            size: "28",
                            weight: "bold",
                        },
                        /* Formato de la caja contenedora */
                        //padding: "4",
                        //borderWidth: 2,
                        //borderColor: "darkblue",
                        //borderRadius: 8,
                        // backgroundColor: "lightblue"
                    }
                },
            }
        });
    };

    const pintar_avance_conocer_producto = () => {
        let chart_completado = new Object();
        chart_completado.porcentaje_completado = 55;
        chart_completado.porcentaje_sin_completar = 45;

        const canvas_objetivo = document.getElementById("canvas_conoc_producto");

        new Chart(canvas_objetivo, {
            type: "pie",
            data: {
                labels: ["Sin Completar", "Completado"],
                datasets: [
                    {
                        label: "Procentaje",
                        data: [
                            chart_completado.porcentaje_completado,
                            chart_completado.porcentaje_sin_completar
                        ],
                        borderWidth: 1,
                        backgroundColor: [color_pediente, color_concluido]
                    }
                ],
                hoverOffset: 40,
            },
            plugins: [ChartDataLabels],
            options: {
                plugins: {
                    legend: {
                        labels: {
                            font: {
                                size: 25
                            }
                        },
                    },
                    datalabels: {
                        anchor: "center",
                        /* Podemos modificar el texto a mostrar */
                        formatter: (dato) => dato + "%",
                        /* Color del texto */
                        color: "#FFFFFF",
                        /* Formato de la fuente */
                        font: {
                            family: '"Times New Roman", Times, serif',
                            size: "28",
                            weight: "bold",
                        },
                        /* Formato de la caja contenedora */
                        //padding: "4",
                        //borderWidth: 2,
                        //borderColor: "darkblue",
                        //borderRadius: 8,
                        // backgroundColor: "lightblue"
                    }
                },
            }
        });
    };

    const pintar_avance_asume = () => {
        let chart_completado = new Object();
        chart_completado.porcentaje_completado = 30;
        chart_completado.porcentaje_sin_completar = 70;

        const canvas_objetivo = document.getElementById("canvas_asume");

        new Chart(canvas_objetivo, {
            type: "pie",
            data: {
                labels: ["Sin Completar", "Completado"],
                datasets: [
                    {
                        label: "Procentaje",
                        data: [
                            chart_completado.porcentaje_completado,
                            chart_completado.porcentaje_sin_completar
                        ],
                        borderWidth: 1,
                        backgroundColor: [color_pediente, color_concluido]
                    }
                ],
                hoverOffset: 40
            },
            plugins: [ChartDataLabels],
            options: {
                plugins: {
                    legend: {
                        labels: {
                            font: {
                                size: 25
                            }
                        },
                    },
                    datalabels: {
                        anchor: "center",
                        /* Podemos modificar el texto a mostrar */
                        formatter: (dato) => dato + "%",
                        /* Color del texto */
                        color: "#FFFFFF",
                        /* Formato de la fuente */
                        font: {
                            family: '"Times New Roman", Times, serif',
                            size: "28",
                            weight: "bold",
                        },
                        /* Formato de la caja contenedora */
                        //padding: "4",
                        //borderWidth: 2,
                        //borderColor: "darkblue",
                        //borderRadius: 8,
                        // backgroundColor: "lightblue"
                    }
                },
            }
        });
    };

    const pintar_graficas_pastel = () => {
        pintar_avance_integracion();
        pintar_avance_conocer_producto();
        pintar_avance_asume();
        pintgar_avance_general();
    };
    pintar_graficas_pastel();

    return {
        pintar_avance_integracion,
        pintar_avance_conocer_producto,
        pintar_avance_asume,
        pintar_graficas_pastel,
        pintgar_avance_general
    };

};



const consulta = [
    { TicketsCount: 44, TicketsAsignedTo: "A", TicketsClasificationType: "Dataset 1" },
    { TicketsCount: 55, TicketsAsignedTo: "B", TicketsClasificationType: "Dataset 1" },
    { TicketsCount: 41, TicketsAsignedTo: "C", TicketsClasificationType: "Dataset 1" },
    { TicketsCount: 37, TicketsAsignedTo: "D", TicketsClasificationType: "Dataset 1" },
    { TicketsCount: 53, TicketsAsignedTo: "A", TicketsClasificationType: "Dataset 2" },
    { TicketsCount: 32, TicketsAsignedTo: "B", TicketsClasificationType: "Dataset 2" },
    { TicketsCount: 33, TicketsAsignedTo: "C", TicketsClasificationType: "Dataset 2" },
    { TicketsCount: 52, TicketsAsignedTo: "D", TicketsClasificationType: "Dataset 2" },
    { TicketsCount: 12, TicketsAsignedTo: "A", TicketsClasificationType: "Dataset 3" },
    { TicketsCount: 17, TicketsAsignedTo: "B", TicketsClasificationType: "Dataset 3" },
    { TicketsCount: 11, TicketsAsignedTo: "C", TicketsClasificationType: "Dataset 3" },
    { TicketsCount: 9, TicketsAsignedTo: "D", TicketsClasificationType: "Dataset 3" },
    { TicketsCount: 9, TicketsAsignedTo: "A", TicketsClasificationType: "Dataset 4" },
    { TicketsCount: 7, TicketsAsignedTo: "B", TicketsClasificationType: "Dataset 4" },
    { TicketsCount: 5, TicketsAsignedTo: "C", TicketsClasificationType: "Dataset 4" },
    { TicketsCount: 8, TicketsAsignedTo: "D", TicketsClasificationType: "Dataset 4" },
    { TicketsCount: 40, TicketsAsignedTo: "E", TicketsClasificationType: "Dataset 1" }
];

const labels = Object.keys(
    consulta.reduce((obj, label) => (obj[label.TicketsAsignedTo] = true, obj), {})
);

const colors = {
    "Dataset 1": "#22aa99",
    "Dataset 2": "#994499",
    "Dataset 3": "#316395",
    "Dataset 4": "#b82e2e"
};

const datasetsObject = consulta.reduce((obj, item) => {
    obj[item.TicketsClasificationType] = obj[item.TicketsClasificationType] || {};
    obj[item.TicketsClasificationType][item.TicketsAsignedTo] = item.TicketsCount;
    return obj;
}, {});
console.log(datasetsObject);

const datasets = Object.keys(datasetsObject).map(name => ({
    label: name,
    backgroundColor: colors[name],
    data: labels.map(l => datasetsObject[name][l] || 0)

}));

const context = document.getElementById("PorcetajeCompletadoRegistro");
// const myBarChart = new Chart(context, {
//     type: "bar",
//     data: { labels, datasets },
//     options: {
//         indexAxis: 'y',
//         scales: {
//             x: {
//                 stacked: true
//             },
//             y: {
//                 stacked: true
//             }
//         }
//     }
// });
console.log(datasets);
console.log(labels);


let array_labels_char = {
    "Dataset 1": { A: 44, B: 55, C: 41, D: 9 },
    "Dataset 1": { A: 44, B: 55, C: 41, D: 9 },
    "Dataset 1": { A: 44, B: 55, C: 41, D: 9 },
};
let array_data_char = [
    {
        backgroundColor: "#22aa99",
        label: "",
        data: [44, 55, 41, 37, 40]

    },
    {
        backgroundColor: "#994499",
        label: "",
        data: [44, 55, 41, 37, 40]

    },
    {
        backgroundColor: "#316395",
        label: "",
        data: [44, 55, 41, 37, 40]

    }
];