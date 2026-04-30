var tablitaEstatica = [
    [":path",           "/"],
    [":path",           "/index.html"],
    [":method",         "GET"],
    [":method",         "POST"],
    [":method",         "PUT"],
    [":method",         "DELETE"],
    [":method",         "HEAD"],
    [":method",         "OPTIONS"],
    [":method",         "CONNECT"],
    [":scheme",         "https"],
    [":scheme",         "http"],
    [":status",         "200"],
    [":status",         "204"],
    [":status",         "206"],
    [":status",         "302"],
    [":status",         "304"],
    [":status",         "400"],
    [":status",         "403"],
    [":status",         "404"],
    [":status",         "500"],
    [":authority",      ""],
    ["content-type",    "text/html; charset=utf-8"],
    ["content-type",    "application/json"],
    ["content-type",    "text/plain"],
    ["content-type",    "image/png"],
    ["content-type",    "image/jpeg"],
    ["content-length",  "0"],
    ["cache-control",   "no-cache"],
    ["cache-control",   "max-age=0"],
    ["cache-control",   "public, max-age=31536000"],
    ["accept-encoding", "gzip, deflate, br"],
    ["accept-encoding", "gzip, deflate"],
    ["user-agent",      ""],
    ["cookie",          ""],
    ["host",            ""],
    ["accept",          "/"],
    ["referer",         ""],
    ["date",            ""]
];


function buscarEnTabla(nombre, valor){

     var primerNombre=-1;
      var nombreMinuscula=nombre.toLowerCase( )

     for(var i = 0; i < tablitaEstatica.length; i++){


        if(tablitaEstatica[i][0] === nombreMinuscula){

            if (tablitaEstatica[i][1] === valor) {
                return{
                 indice: i,
                 tipo: "completa"
                };
            }

            if(primerNombre=== -1){

             primerNombre=i;

            }
        }
    }

     if (primerNombre!==-1) {


      return{
        indice: primerNombre,

        tipo: "nombre"
        };
    }

      return {
        indice: -1,
        tipo: "ninguna"
      };
}


function leerEncabezados(texto){

    var encabezados=[ ];
    var lineas=texto.trim().split("\n");

    for(var i=0; i<lineas.length; i++){

        var linea=lineas[i].trim();
        if (linea!=="" && linea[0]!=="#"){

             var posicion;

            if (linea[0] === ":") {

              posicion = linea.indexOf(":", 1)

            }else{
              posicion = linea.indexOf(":");
            }

            if(posicion!==-1){
              var nombre=linea.substring(0, posicion).trim();
              var valor=linea.substring(posicion + 1).trim();
              encabezados.push([nombre, valor]);
            }
        }
    }

    return encabezados;
}

//este mi supocion del algoritm qpack sin usar los parser para decimales y hexadecimales 
//los vi muy complicadops de implementar :(
function comprimir( encabezados ){

      var resultado = [ ]

    for (var i=0; i<encabezados.length; i++) {

             var nombre    = encabezados[i] [0];


           var valor     = encabezados[i] [1];
         var encontrado = buscarEnTabla(nombre,valor);

        if(encontrado.tipo==="completa"){
            resultado.push({
                 nombre:   nombre,

                  valor:    valor,
                   tipo:     "completa",
                     enviado:  "[" + encontrado.indice + "]",
                      original: nombre + ": " + valor,
                       bytes:    1
            });

        } else if (encontrado.tipo === "nombre") {
            resultado.push({
                 nombre:   nombre,
                  valor:    valor,
                   tipo:     "nombre",
                    enviado:  "[" + encontrado.indice + "] + \"" + valor + "\"",
                     original: nombre + ": " + valor,

                bytes:    1 + valor.length
            });

        } else {
            resultado.push({
                 nombre:   nombre,
                  valor:    valor,
                   tipo:     "ninguna",
                    enviado:  "\"" + nombre + ": " + valor + "\"",
                     original: nombre + ": " + valor,
                     bytes:    nombre.length + 2 + valor.length
            }); 
        }
    }

    return resultado
}


function tamanoOriginal(encabezados){

      var total = 0

     for(var i=0; i<encabezados.length; i++){
         total+=encabezados[i] [0].length+2+encabezados[i] [1].length;
    }

    return total
}


function tamanoComprimido(resultados){

     var total = 0;

       for(var i = 0; i < resultados.length; i++){
        total += resultados[i].bytes;
       }

     return total;
}


function mostrarResultado(resultados,original){

    var comprimido= tamanoComprimido(resultados);

     var porcentaje= Math.round((1-comprimido/original)*100);

       var lineasLog= [ ];

    for(var i=0; i<resultados.length; i++){

        var r=resultados[i];
        var tipo="";

        if(r.tipo==="completa"){
            tipo = "COMPLETA  (nombre y valor en tabla => solo 1 numero)";
        }else if(r.tipo==="nombre"){
            tipo = "NOMBRE    (solo nombre en tabla => 1 numero + valor como texto)";
        }else{
            tipo = "LITERAL   (no esta en tabla => todo es texto)";
        }

        lineasLog.push(
            r.original + "\n" +
             "  Tipo:    " + tipo + "\n" +
              "  Enviado: " + r.enviado + "\n" +

               "  Bytes:   " + r.bytes + "\n"
        );
    }

      document.getElementById("resultaditoProceso").textContent=lineasLog.join("\n");

       document.getElementById("resultaditoTamano").textContent=original + " bytes  =>  " + comprimido + " bytes";
        document.getElementById("resultaditoAhorro").textContent=porcentaje + "% menos";
}


function ejecutarCompresion(texto){

      var proceso = document.getElementById("resultaditoProceso")

    if(!texto||texto.trim() === ""){

        proceso.textContent = "No hay encabezados para comprimir.";
        return;
    }

     var encabezados=leerEncabezados( texto )

    if(encabezados.length===0){
      proceso.textContent = "No se encontraron encabezados validos. Formato esperado: nombre: valor";

      return;
    }

      var original=tamanoOriginal( encabezados)
      var resultados=comprimir( encabezados)

     mostrarResultado(resultados, original);
}


    document.getElementById("botonsitoComprimir").onclick = function() {
        var texto = document.getElementById("escribir").value;
        ejecutarCompresion(texto);
    };