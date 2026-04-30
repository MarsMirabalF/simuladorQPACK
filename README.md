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


String.charCodeAt(indice):
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
 -Se usa en textoABytes() para convertir cada letra a su valor numerico.
 -Devuelve el numero ASCII del caracter en esa posicion del texto. Por ejemplo: "A".charCodeAt(0) devuelve 65.


Number.toString(base):
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
 -Se usa en byteAHex() para mostrar los bytes en formato hexadecimal.
 -Convierte un numero a texto en la base que le indiques.
 -Por ejemplo: 255..toString(16) devuelve "ff" (hexadecimal).


String.indexOf(texto, desdePos):
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/indexO
 -Se usa en leerEncabezados() para encontrar el : que separa nombre y valor.
 -Busca la primera aparicion de un texto dentro de otro y devuelve la posicion. Si no lo encuentra devuelve -1.
 -El segundo parametro opcional indica desde que posicion empezar a buscar.


String.substring(inicio, fin):
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/substring
 -Se usa en leerEncabezados() para separar el nombre y el valor del encabezado.
 -Extrae una parte del texto desde la posicion inicio hasta fin (sin incluir fin).


Operador << :
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Left_shift
 -Se usa en numeroABytes() para calcular cuantos valores caben en cierta cantidad de bits.
 -1 << n equivale a 2 elevado a la n es el desplazamiento de bits a la izquierda.
 -Por ejemplo: 1 << 6 da 64, que es 2^6 esto tambien se explica en la documentacion de: 
 https://httpwg.org/specs/rfc7541.html#integer.representation


Operador | :
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Bitwise_OR
 -Se usa en numeroABytes() para pegar el patron de bits de QPACK con el numero del indice es el OR de bits.
 -Combina dos numeros bit a bit. Si cualquiera de los dos tiene un bit en 1, el resultado tiene un 1 en esa posicion.


FileReader:
https://developer.mozilla.org/es/docs/Web/API/FileReader
 -Es un objeto del navegador que permite leer archivos seleccionados por el usuario.
 -Se usa en window.onload para leer el archivo .txt que sube el usuario.  .readAsText(archivo) lee el archivo como texto plano.


document.getElementById(id):
https://developer.mozilla.org/es/docs/Web/API/Document/getElementById
 -Se usa en todo el codigo para encontrar los elementos de la pagina y mostrar resultados.
 -Busca y devuelve el elemento HTML que tiene ese id.




Sobre las funciones numeroABytes():
 -Qué hizo la IA:Se uso herramienta de la IA claude para corregir la logica de la funcion numeroABytes() sobre todo me sugirio usar el operardor << y |  La función de codificación de enteros (numeroABytes) algoritmo de "prefixed integer" definido en la RFC 7541/9204 fue algo muy complicado de implementar utilizó IA clause para tanto explicacion y como ir implementando poco a poco.
 -Revisión manual:implemente el algoritmo y investigar como funciona cada parte del mismo aunque no se logre un gran dominio del tema.

Sobre la funcion comprimir()
 -Qué hizo la IA:Implementó los tres modos de codificación QPACK con sus prefijos de bits (0xC0, 0x50, 0x20) según RFC 9204 genero los logs estructurados con formato.
 -Revisión manual:Se verificó la correcta generación de bytes para cada modo y se ajustaron los textos de los logs.

Sobre la funcion leerEncabezados()
 -Qué hizo la IA:Generó la lógica de parseo diferenciada para headers que comienzan con : pseudo-headers HTTP/2 como :path, :method, :status.
 -Revisión manual:Se verificó que el desplazamiento en indexOf no rompiera la separación nombre-valor en casos como :authority.
