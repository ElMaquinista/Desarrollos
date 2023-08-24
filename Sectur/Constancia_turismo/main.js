// tiene finalidad de reemplazar las llaves en  el html de la plantilla con información

var iframe = null;

function rellenar_llaves_respuestas() {
  let json = {
    fecha: "27 de Julio del 2023",
    clave_control: "1235",
    nombre: "Ricardo Garcia de la Cruz Sncahez Contador de Atos",
    calle: "Calle General lucio Blanco",
    colonia: "Colonia Adolfo Lopez Mateos",
    cp: "76750",
    estado: "Queretaro de Arteaga",
    municipio: "Tequisquiapan",
    no_tramite: "12356778",
    no_constancia: "040102030404",
    servicio_de:
      "Agencia de administaración de espacio para vehiculos autopropulsados por motor ajsdhgsdjhfggasdjkfajkshf jkasgdfjhasgf ajshdfgasdgfaerf sjdhfgaesrfgasjdfa vasdfgajshdfkjh",
    base64_qr: "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0AQAAAADjreInAAAEkElEQVR4Xu2aQW7cOgyGacxiNgHcAwT1NbJ4qK/VRRDNIBdzbyLgXcBLL4xR9ZOSPdW078U2WhvF/y8imeZHIxOSpTWVsEm9lJZlIl9alol8aVkm8qVlmciXlmUiX1qWiXxpWSbypWWZyJeWZSKvyyhZzSiuF2kHCV7itgqdTM/ozmFyPJMnfxzemYc0tmIrp/jzhlCQRp0dOvIQeV0OwMfbMacnPuZ/tkIxFEoBDqgV3ZInf0T+IprpsEpt0TxiVNiRJ39o3m7H/NdQtfbv4E8xKnnyx+V1tduA7PISfVsLFeYCgcjrQl6X/fmsBqWg6f2LbRZ58ofhHzWok0PSy3yUYdCdyJeWJPJ/lr+oo+BN71Kn9oyqmPJfp5IohApl/yZPfk8+tmectM1bQdLj0EK0U2N+tqj6AEkviOTJH4LXnU3Kox5awFO3N33/C6lAwCP/b4/zB3nyu/Fz/vt0WwyKoUKMKlYK0SHz8CVP/hg8pDZpLNNbQCaFUtMerEDMSp78Yfh0eyoFHBqL9m/Jo0il/5XCI5SN0uTJH4Mf9XgiIOnNM6AUzAoopFEkFQiilvMHefI/8k5vmX4zj12FoVnT24aOfCPKx7jpAdi7oAO2UuSTyO/IjznZp/FiMLesaejA4myUhsin286uyZf8t+TwW3nMH3P+m2cSeN+kB1hVaIGYPsQ32/hbvY0fz9v4YePz+42/v2+38Z3bxl82/v2rbfzt9BE+zMcTglAYelT/jufIA9KpGsKALQ/9/xd8/POv5d+Nb1byNwFbDe1KPn5mffzgXt1KfpC2b3uJ7Fq+8c5LvZp/abqwge+/NtfQvZzX8mGI/CWm32q+lfoaPsKjPevQnLcoheC/yPk9vHeiDR4PyPzj/PFT/k1Om/h/pNrEP9eb+PG5uW7in5pv+vmv4/3bRv71qbl2N3Vcw/cvT/W1+7Sel2eptH7W8YN8lpPW///y1pM7+9IDntCrtHIeUBXo31DmMUqb/ot/E3eptfGv49178E6b8Eo+O5H/2/nRTtq0aUyHbnfy2gR0/shbE3ldyO/N56RvcGmThpu8kP/5VDnYKKLPOjaPbfpHh/zfzt/NH842waNTp6Ydk96atm5nkdeF/N68wzKk/J/G45TpoqrMAc+Sh/x3WMiT1+s/z+tr4tye27h6+yqkM3+Xonrk/0/6N3nyO/IuTxowWisHb0mvl5g/rH+nqiBP/lC82lAKydPmD6gxPsryfxJ5XcjvzocfOzU2p7IUkoMKzyJP/hD8nWL+m6dtBaWgPEYRKxA3e5Of9ybyO/DmCTXGQzMkTbD8ty9I0ODL+iFPfk/e6aq3dZtOKmozQ73y5qsDihrJQ+SdXe/H2/xs/A2vgsFjFNGhWUPNcjkUefLH46H2rhSiPF76NOnVwV4QIfK6kD8Qjy3yP8AzzR+zFVOJjSLkyR+H11U9c3oj6WOnDhhF4FpNpxpBo0LkdSHvdN2Pz1LPtLWogBA1qg0a9YI9efKH4VeLfGlZJvKlZZnIl5ZlIl9alol8aVkm8qVlmciXlmUiX1qWiXxpWabN/HeSIn+YJ98DtAAAAABJRU5ErkJggg=="
  };

  // itinerar las llaves para asignar el text en el html

  iframe = document.querySelector("iframe").contentWindow;
  console.log("iframe", iframe);

  let nodo_pagina = iframe.document.querySelector(".documento");
  console.log("nodo_pagina", nodo_pagina);

  let html = nodo_pagina.innerHTML;

  for (let llave in json) {
    let valor = json[llave];

    let busqueda = "*!" + llave + "*?";
    let longitud_llave = valor.length;

    switch (llave) {
      case "servicio_de":
        if (longitud_llave > 111) {
          valor = `<p style="font-size: 13;">${valor}</p>`;
        }

        console.log("longitud_llave: ", longitud_llave);
        html = html.replace(busqueda, valor);
        break;
      default:
        html = html.replace(busqueda, valor);

        break;
    }
  }
  nodo_pagina.innerHTML = html;
}
