# Simulador QPACK
Para usar el simulador ejecute el html y luego copie y pegue los .txt que estan en el codigo.


Videos de youtube para entender QPACK:

https://www.youtube.com/watch?v=TQERHcPnTsc
Este video explica directamente que es QPACK y como se diferencia de HPACK (el compresor de HTTP/2) escogi este video
porque me parecio corto y simple de entender

https://www.youtube.com/watch?v=_QQX0Ezpq8U
Explica por que se creo HTTP/3, que problemas tenia HTTP/2, y como QPACK resuelve el problema
del bloqueo de cabecera (head-of-line blocking). Muy completo.




Documentacion de QPACK:

RFC:
QPACK esta definido oficialmente en este documento del IETF:
https://datatracker.ietf.org/doc/rfc9204/
 -Es el documento tecnico oficial. La seccion 3.1 explica la tabla estatica que usa este simulador.

Repositorio en github de donde se saco la tabla estatica:
https://github.com/quicwg/base-drafts/wiki/QPACK-Static-Table
 -Aqui se ve la tabla que se uso en el codigo.




Funciones usadas en el codigo:

String.toLowerCase():
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
 -Convierte el texto a minusculas


-String.trim(): 
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/trim
 -Elimina espacios al inicio y al final


String.split(): 
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/split
 -Divide un texto en partes usando un separador 


Array.push(): 
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/push
 -Agrega un elemento al final de un arreglo 


Array.join(): 
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/join
 -Une todos los elementos de un arreglo en un texto 


Math.floor(): 
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
 -Redondea un numero hacia abajo 


Math.round():
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/round
 -Redondea un numero al entero mas cercano


String.indexOf(texto, desdePos):
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/indexO
 -Se usa en leerEncabezados() para encontrar el : que separa nombre y valor.
 -Busca la primera aparicion de un texto dentro de otro y devuelve la posicion. Si no lo encuentra devuelve -1.
 -El segundo parametro opcional indica desde que posicion empezar a buscar.


document.getElementById(id):
https://developer.mozilla.org/es/docs/Web/API/Document/getElementById
 -Se usa en todo el codigo para encontrar los elementos de la pagina y mostrar resultados.
 -Busca y devuelve el elemento HTML que tiene ese id.




Sobre la implemetacion:
 -Se uso la IA claude para ver como eran los formatos de entrada y salida del codigo y apoyo para crear la funcion comprimir que me costo demasiado

Sobre los ejemplos.
 -Cada ejemplo fuie generado con la IA claude para hacer la prueba de proyecto.
