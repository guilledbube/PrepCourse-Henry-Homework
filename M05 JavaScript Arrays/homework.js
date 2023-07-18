/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   var primerElemento = array[0];
   return primerElemento;
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
var largo= array.length;
var ultimoelemento = array[largo -1]; 
return ultimoelemento; 
// var ultimoElemento = array[0]; // Asignamos el primer elemento como valor inicial
// for (var i = 0; i < array.length; i++) {
//   ultimoElemento = array[i]; // Actualizamos el valor del último elemento en cada iteración
// }
// return ultimoElemento;
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   var largo = array.length;
   return largo;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
var arrayIncrementado = array.map((num)=> {return num +1});
return arrayIncrementado;

}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
 array.push(elemento);
 return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var frase = palabras.join(' ');
   return frase;
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   var contiene = array.includes(elemento);
   return contiene;
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var suma= 0
   for (var i = 0; i < arrayOfNums.length; i++) {
      suma += arrayOfNums[i]; // += es un operador aritmetico que permite sumar directamente a una variable en este caso cada elemento identificado
    }
    return suma;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var suma = 0
   for ( i = 0 ; i < resultadosTest.length ; i++){
   suma += resultadosTest[i];
   }
   var promedio = (suma / resultadosTest.length);
   return promedio;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
      var NumeroMasGrande = Math.max(...arrayOfNums);      //   <------------------ ESTA SERÍA LA FORMA MAS SENCILLA DE TODAS FORMAS
      return NumeroMasGrande;     //  necesitamos utilizar el operador de propagación (...) para pasar los elementos del arreglo como argumentos individuales.
//         var maximo = arrayOfNums[0]; // Asignamos el primer elemento como máximo inicial

//   for (var i = 0; i < arrayOfNums.length; i++) {
//     if (arrayOfNums[i] > maximo) {
//       maximo = arrayOfNums[i];
//     }                                                       <---- ESTA FORMA DE RESOLVERLO CON BUCLE FUNCIONA EN LA PRACTICA PERO ACA NO SE RECONOCE COMO FUNCIONAL.. 
//   }                                                                                 Y NO SE POR QUE

//   return maximo;
    }
    

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if (arguments.length === 0){
      return 0;
   }
   let resultado = 1;
  for (let i = 0; i < arguments.length; i++) {
    resultado *= arguments[i];
  }
  return resultado;
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   let elementosMayoresA18 = 0;
 for (i = 0 ; i <= array.length ; i++){
   if (array[i] > 18) {elementosMayoresA18++
 }}
 return elementosMayoresA18

}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   switch (numeroDeDia){
      case 1 :
         return "Es fin de semana"
         breack;
         case 7 :
            return "Es fin de semana"
            breack;


        default: return"Es dia laboral";
      }
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   const numStr = num.toString();
   return numStr[0] === "9";
   
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   var primerElemento = array[0];
   var diferencias = array.map(elemento => elemento - primerElemento); //se aplicará un rastreo map llamado elemento
   return diferencias.every(diferencia => diferencia === 0);  // luego se retornara un rastreo every que devolveria un booleano

   // function todosIguales(array) {
   //    const primerElemento = array[0];
   //    for (let i = 1; i < array.length; i++) {
   //      if (array[i] !== primerElemento) {
   //        return false;
   //      }
   //    }
   //    return true;                        OTRA FORMA DE RESOLVER..
   //  }
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   mesesPedidos= [];
   mesesBuscados= ["Enero","Marzo","Noviembre"];
   for (i = 0 ; i < array.length ; i++){
      if (mesesBuscados.includes(array[i])){
         mesesPedidos.push(array[i]);
      }
   }
   if (mesesPedidos.length === mesesBuscados.length){
      return mesesPedidos;
   } else {return "No se encontraron los meses pedidos";}

}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var numerosPrimos = [0,1,2,3,4,5,6,7,8,9,10];
   var numerosxseis = numerosPrimos.map(num => num*6);
   return numerosxseis;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var arregloMayoresCien = []
   for (i=0 ; i < array.length ; i++)
   if (array[i] > 100){
      arregloMayoresCien.push(array[i])
   }
   return arregloMayoresCien;

}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   const nuevoValor = [];
   let suma = num;
 
   for (let i = 0; i < 10; i++) {
     suma += 2;
     nuevoValor.push(suma);
 
     if (suma === i) {
       return "Se interrumpió la ejecución";
       break;
     }
   }
 
   return nuevoValor;
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   const nuevoValor = [];
   let suma = num;
   let i = 0;
 
   while (i < 10) {
     i++;
     if (i === 5) {
       continue;
     }
     suma += 2;
     nuevoValor.push(suma);
   }
   return nuevoValor;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
