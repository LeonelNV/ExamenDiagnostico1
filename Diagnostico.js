//1 - Conteo de caracteres
function contarCaracteres(cadena){
    return cadena.length;
}
 let mensaje = "Hola, soy leo";
 console.log("Numero de caracteres de la cadena", contarCaracteres(mensaje));

 //2 - Reversion de cadena
 function revertirCadena(cadena){
    return cadena.split(" ").reverse().join(" ");
 }

 let frase = "Esto es una frase al reves";
 console.log("Frase convertida al revez: ", revertirCadena(frase));

 //3 - Palindromo
 function invertir(palabra){
    let palabrainvertida = palabra.split("").reverse().join("");
    return palabra === palabrainvertida;
 }
 function imprimir(palabra){
    let espal = invertir(palabra);
    let respuesta = espal ? "Si" : "No";
    console.log('La palabra "${palabra}" ${respuesta} es un palindromo')
 }
 let palabra = "Ferrocarril";
 imprimir(palabra);

 //4 - Ordenamiento de un arreglo
 function ordenarArreglo(numeros){
    return arreglo = numeros.sorft((a,b)=>a-b);
 }
 let numeros = [4, 5, 7, 1, 3];
 console.log("Arreglo ordenado: ", ordenarArreglo(numeros));

 //5 Suma de elementos de un arreglo
 function sumar(arreglonumeros){
    return arreglonumeros.reduce((suma, valor)=> suma+valor, 0);
 }
 let numerosSuma = [1,2,3,4,5,6,7,8];
 console.log("La suma de los numeros es: ", sumar(numerosSuma));

 //6 - Filtrado de elementos
 function filtrar(arreglofiltrar, numerocomparacion){
    return arreglofiltrar.filter(num => num > numerocomparacion);
 }
 let numerosfiltrar = [12,5,76,4,]
 let numerocomparacion = 56;
 console.log("Los elementos mayores que ", numerocomparacion, " son: ", filtrar(numerosfiltrar, numerocomparacion));

 //7 - Concatenacion de arreglos
 function concatenarArreglos(arreglo1, arreglo2){
    return arreglo1.concat(arreglo2);
 }
 let arreglo1 = ["Hola", "Mundo"];
 let arreglo2 = ["Como", "estan"];
 console.log("Arreglos concatenados: ", concatenarArreglos(arreglo1, arreglo2));

 //9 - Buscar elementos en un arreglo
 function buscar(arreglonombres, nombre){
    return arreglonombres.includes(nombre) ? 'El nombre "${nombre}" si se encuentra en el arreglo' : 'El nombre "${nombre}" no se encuentra en el arreglo'; 
 }
 let nombres = ["Leonel", "Juan", "Oswaldo", "Ricardo"];
 let nombrebuscar = "Leonel";
 console.log(buscar(nombres,nombrebuscar));



