var tablitaEstatica = [
    [":path",                            "/"],
    ["referer",                          ""],
    ["content-length",                   "0"],
    ["date",                             ""],
    ["last-modified",                    ""],
    [":authority",                       ""],
    ["expires",                          ""],
    ["cookie",                           ""],
    ["etag",                             ""],
    ["location",                         ""],
    ["if-modified-since",                ""],
    ["if-none-match",                    ""],
    ["if-range",                         ""],
    ["set-cookie",                       ""],
    ["age",                              "0"],
    ["link",                             ""],
    ["content-disposition",              "attachment; filename=\"f.txt\""],
    ["range",                            "bytes=0-"],
    ["authorization",                    ""],
    [":scheme",                          "https"],
    [":scheme",                          "http"],
    [":status",                          "200"],
    [":status",                          "304"],
    [":path",                            "/index.html"],
    [":method",                          "GET"],
    [":method",                          "HEAD"],
    [":method",                          "POST"],
    [":method",                          "PUT"],
    [":method",                          "DELETE"],
    [":method",                          "CONNECT"],
    [":method",                          "OPTIONS"],
    ["content-type",                     "application/x-www-form-urlencoded"],
    ["content-type",                     "image/jpeg"],
    ["content-type",                     "text/plain;charset=utf-8"],
    ["content-type",                     "image/png"],
    ["content-type",                     "text/plain"],
    ["content-type",                     "application/json"],
    ["content-type",                     "application/x-www-form-urlencoded; charset=utf-8"],
    ["content-type",                     "image/gif"],
    ["content-type",                     "text/html; charset=utf-8"],
    ["content-type",                     "application/javascript"],
    ["content-type",                     "text/css"],
    ["content-type",                     "text/javascript"],
    ["content-type",                     "application/json; charset=utf-8"],
    ["content-type",                     "text/javascript; charset=utf-8"],
    ["content-type",                     "application/x-javascript"],
    ["server",                           ""],
    ["user-agent",                       ""],
    ["accept",                           "/"],
    ["cache-control",                    "max-age=0"],
    ["cache-control",                    "no-cache"],
    ["cache-control",                    "max-age=2592000"],
    ["cache-control",                    "public, max-age=31536000"],
    ["cache-control",                    "no-cache, no-store, must-revalidate"],
    ["cache-control",                    "max-age=604800"],
    ["accept-encoding",                  "gzip, deflate, br"],
    ["accept-encoding",                  "gzip, deflate"],
    ["vary",                             "accept-encoding"],
    ["vary",                             "origin"],
    ["vary",                             "accept-encoding,user-agent"],
    ["vary",                             "accept"],
    ["accept-language",                  ""],
    ["strict-transport-security",        "max-age=31536000"],
    ["strict-transport-security",        "max-age=10886400; includesubdomains; preload"],
    ["strict-transport-security",        "max-age=31536000; includesubdomains"],
    ["strict-transport-security",        "max-age=31536000; includesubdomains; preload"],
    [":status",                          "100"],
    [":status",                          "103"],
    [":status",                          "204"],
    [":status",                          "206"],
    [":status",                          "302"],
    [":status",                          "400"],
    [":status",                          "403"],
    [":status",                          "404"],
    [":status",                          "421"],
    [":status",                          "500"],
    [":status",                          "503"],
    ["p3p",                              ""],
    ["content-encoding",                 "gzip"],
    ["content-encoding",                 "br"],
    ["accept-ranges",                    "bytes"],
    ["alt-svc",                          "clear"],
    ["x-xss-protection",                 "1; mode=block"],
    ["host",                             ""],
    ["pragma",                           "no-cache"],
    ["pragma",                           "public"],
    ["x-powered-by",                     ""],
    ["via",                              ""],
    ["access-control-allow-origin",      "*"],
    ["x-content-type-options",           "nosniff"],
    ["access-control-allow-headers",     "content-type"],
    ["access-control-allow-headers",     "cache-control"],
    ["access-control-allow-headers",     "x-requested-with"],
    ["access-control-allow-headers",     "*"],
    ["access-control-allow-headers",     "origin, x-requested-with, content-type, accept"],
    ["access-control-allow-headers",     "dnt,x-customheader,keep-alive,user-agent,x-requested-with,if-modified-since,cache-control,content-type"],
    ["access-control-allow-headers",     "dnt,x-mx-reqtoken,keep-alive,user-agent,x-requested-with,if-modified-since,cache-control,content-type"],
    ["access-control-allow-methods",     "options"],
    ["access-control-allow-methods",     "get"],
    ["access-control-allow-methods",     "get, post, options"],
    ["access-control-allow-methods",     "get, head, options"],
    ["access-control-allow-methods",     "get, options"],
    ["origin",                           ""],
    ["x-frame-options",                  "sameorigin"],
    ["x-frame-options",                  "deny"],
    ["timing-allow-origin",              "*"],
    ["access-control-expose-headers",    "content-length"],
    ["access-control-allow-credentials", "TRUE"],
    ["access-control-allow-credentials", "FALSE"],
    ["expect-ct",                        ""],
    ["content-security-policy",          "script-src 'none'; object-src 'none'; base-uri 'none'"],
    ["transfer-encoding",                "chunked"],
    ["upgrade-insecure-requests",        "1"],
    ["x-served-by",                      ""],
    ["x-requested-with",                 "xmlhttprequest"],
    ["access-control-request-headers",   "content-type"],
    ["access-control-request-headers",   "x-requested-with"],
    ["access-control-request-method",    "post"],
    ["access-control-request-method",    "get"],
    ["purpose",                          "prefetch"],
    ["x-csrf-token",                     "null"],
    ["x-csrf-token",                     "undefined"]
];


function buscarEnTabla( nombre , valor){

    var primerNombre= -1;

    var nombreMinuscula =nombre.toLowerCase() 
    for(var i=0; i<tablitaEstatica.length; i++){

         if (tablitaEstatica [i] [0] ===nombreMinuscula ){

              if (tablitaEstatica [i] [1]=== valor){
              return {
                    indice: i ,
                    tipo: "completa"
              };
            }

            if (primerNombre=== -1){
                   primerNombre = i
            }

        }
    }

    if(primerNombre!==-1){
          return{
            indice: primerNombre ,

            tipo: "nombre"
          };
    }

      return{
        indice: -1 ,

        tipo: "ninguna"
      } ;
}


function numeroABytes(numero, bitsPrefijo, patronBits) {
      var maximo    = (1<<bitsPrefijo)-1 ;

    var resultado = [ ];

    if( numero<maximo){

        resultado.push( patronBits | numero ) 
    } else {

          resultado.push( patronBits | maximo );
        numero=numero-maximo ;

        while (numero>=128) {
            resultado.push((numero %128) +128);

              numero=Math.floor(numero /128)

        }

        resultado.push( numero ) ;
    }

    return resultado

}


function textoABytes(texto ){

     var bytesDelTexto = [];
    for (var i=0; i<texto.length; i++){

          bytesDelTexto.push(texto.charCodeAt(i));


    }
       var bytesLongitud = numeroABytes(bytesDelTexto.length, 7, 0x00);

  return bytesLongitud.concat(bytesDelTexto);
}


function leerEncabezados(texto){

    var encabezados = [];
    
      var lineas = texto.trim().split("\n");

    for(var i=0; i<lineas.length; i++){

      var linea=lineas[i].trim() ;

        if(linea !== "" && linea[0] !== "#"){

             var posicion

            if (linea[0] === ":"){
                posicion=linea.indexOf(":", 1) ;

            } else {

                posicion=linea.indexOf(":")
            }

            if (posicion !== -1){
                 var nombre = linea.substring(0, posicion).trim();

                  var valor  = linea.substring(posicion + 1).trim();

                 encabezados.push([nombre, valor])

            }
        }
    }

    return encabezados ;
}


function byteAHexadecimal( byte){

    var hexaXD = byte.toString(16) ;
    if (hexaXD.length===1) {

        hexaXD="0"+hexaXD;
    }


    return hexaXD
}


function comprimir(encabezados){

    var bytes = [0x00, 0x00];


    var log   = ["Prefijo QPACK: [00 00] solo tabla estatica"];

    for (var i=0; i<encabezados.length; i++) {
         var nombre=encabezados [i] [0]
          var valor= encabezados [i ][1]
           var resultado =buscarEnTabla(nombre , valor) ;

        if(resultado.tipo=== "completa"){
            var b = numeroABytes(resultado.indice, 6, 0xC0);
             bytes = bytes.concat(b);
              log.push("Completa:  " + nombre + ": " + valor + "  ==>  indice " + resultado.indice + "  ==>  " + b.map(byteAHexadecimal).join(" "));

        }else if(resultado.tipo=== "nombre"){
            var bNombre = numeroABytes(resultado.indice, 4, 0x50);
             var bValor  = textoABytes(valor)
              var bTotal  = bNombre.concat(bValor)
               bytes = bytes.concat(bTotal)
                log.push("Nombre:   " + nombre + ": " + valor + "  ==>  nombre en indice " + resultado.indice + " + valor literal  ==>  " + bTotal.map(byteAHexadecimal).join(" "));

        }else{
            var bLiteral =[0x20].concat(textoABytes(nombre.toLowerCase())).concat(textoABytes(valor))
             bytes= bytes.concat(bLiteral) ;
              log.push("Literal:  " + nombre + ": " + valor + "  ==>  no esta en la tabla, todo como texto  ==>  " + bLiteral.map(byteAHexadecimal).join(" "));
        }
    }

    return {
        bytes: bytes,
         log: log
    }
}


function tamanoOriginal(encabezados){
    var total = 0;


     for (var i = 0; i < encabezados.length; i++){
     total += encabezados[i][0].length + 2 + encabezados[i][1].length + 2;

    }
     return total ;
}


function mostrarResultado(bytes, log, original){

 var comprimido = bytes.length;

    document.getElementById("resultaditoProceso").textContent     = log.join("\n");
     document.getElementById("resultaditoHexadecimal").textContent = bytes.map(byteAHexadecimal).join(" ");
      document.getElementById("resultaditoDecimal").textContent     = "[" + bytes.join(", ") + "]";
       document.getElementById("resultaditoTamano").textContent      = comprimido + " bytes";
        document.getElementById("resultaditoAhorro").textContent      = original + " a " + comprimido + " bytes";
}


function ejecutarCompresion( texto ){

      var proceso = document.getElementById("resultaditoProceso") ;

     if(!texto || texto.trim() === ""){
      proceso.textContent = "No hay encabezados para comprimir." ;
      return;

    }

      var encabezados = leerEncabezados(texto)

    if(encabezados.length === 0){
        
         proceso.textContent="No se encontraron encabezados validos. Formato esperado: nombre: valor";
          return;
    }

      var original=tamanoOriginal( encabezados) ;
        var resultado=comprimir(encabezados ) ;

     mostrarResultado(resultado.bytes, resultado.log, original)
}


document.getElementById("botonsitoComprimir").onclick = function() {
     var texto = document.getElementById("escribir").value;
     ejecutarCompresion(texto)
};