//////////////////////////
//// Pair Programming ////
//////////////////////////


////////////
// Arrays //
////////////

// 1.- Crea una variable de nombre 'arrayVacio' cuyo valor sea un array vacio

const arrayVacio = []


// 2.- Crea una variable de nombre 'arrayNumeros' cuyo valor sea el array de numeros del 0 al 9 incluidos (0, 1, 2...)

const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


// 3.- Crea una variable de nombre 'arrayNumerosPares' cuyo valor sea el array de numeros pares del 0 al 9 (considerando al 0 par)

const arrayNumerosPares = []

for (let i = 0; i < arrayNumeros.length; i++) {
    if ((i % 2) === 0) {
        arrayNumerosPares.push(i)
    }
}


// 4.- Crea una variable de nombre 'arrayBidimensional' cuyo valor sea el siguiente array [[0, 1, 2], ['a', 'b', 'c']]

const arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']]



///////////////
// Funciones //
///////////////

// 5.- Crea la función 'suma' que acepte como argumentos dos números y devuelva como resultado su suma
// suma(51, 27)
// suma(2, 5)
// suma(38, 78)
// suma(29, 2)
// suma(147, 70)

function suma(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "Error! Tienes que introducir un número de verdad";
    }  

    return a + b
}

console.log(suma(1, 2))


// 6.- Crea la función 'potenciacion' que acepte como argumentos dos números y devuelva 
// como resultado el primer número (a) elevado al segundo(b) a^b [Prohibido operador ** y math.exp]
// potenciacion(22, 0)
// potenciacion(5, 0)
// potenciacion(36, 8)
// potenciacion(33, 0)
// potenciacion(10, 3)

function potenciacion(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "Error! Tienes que introducir un número de verdad";
    }  

    return a ** b
}


// 7.- Crea la función 'separarPalabras' que acepte como argumento un string y devuelva un array de palabras
// Hola que tal?
// The Bridge for life
// A ver como separas esto

function separarPalabras(text) {
    return text.split(" ")

}


// 8.- Crea la función 'repetirString' que acepta como argumento un string y un número, y retorna el primer string concatenado el número dado de veces
// convertir ja en jajajajajajajaja
// escribir estoy castigado 10 veces

function repetirString(text, num) {
    return text.repeat(num)
}


// 9.- Crea la función 'esPrimo' que acepte como argumento un número y devuelva true si es primo y false si no lo es
// El número 1871 es primo
// El número 491 es primo
// El número 1175 no es primo
// El número 1273 no es primo

function esPrimo(num) {
    if (!Number.isInteger(num)) {
        return "Error! Tienes que introducir un número entero";
    }

    if (num <= 1) {
        return false; // 0 and 1 are not prime
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }

    return true
}

//////////////////////////////////
// Mezclando Arrays y Funciones //
//////////////////////////////////

// 10.- Crea la función 'ordenarArray' que acepte como argumento un array de números y devuelva 
// un array ordenado de menor a mayor
// Ordenar [204, 227]
// Ordenar [156, 158, 156, 159, 152, 138, 150, 153, 144, 152, 138]
// Ordenar [157, 168, 152, 166, 160, 154, 164, 175, 179]
// Ordenar []

function ordenarArray(arrNum) {
    return arrNum.sort()
}


// 11.- Crea la función 'obtenerPares' que acepte como argumento un array de números y devuelva 
// un array con los elementos que sean pares
// Pares en [51, 76, 59, 39]
// Pares en [20, 13, 8]
// Pares en [104, 24, 2]
// Pares en [16, 16, 5, 1, 15]
// Pares en [0, 10, 9, 0]

function obtenerPares(arrNum) {
    const arrNumPar = []
    for (let i = 0; i < arrNum.length; i++) {
        if ((arrNum[i] % 2) === 0) {
            arrNumPar.push(arrNum[i])
        }
    }
    return arrNumPar    
} 


// 12.- Crea la función 'pintarArray' que acepte como argumento un array y devuelva 
// una cadena de texto Array: [0, 1, 2] String: '[0, 1, 2]'
// Pintar array [3, 93, 142, 17, 139, 28, 23, 70, 140]
// Pintar array [46, 72, 72, 72, 46, 83, 23]
// Pintar array [67, 0, 36, 84]
// Pintar array [150, 154, 152, 73, 88, 90]
// Pintar array [22, 102, 102, 23, 82, 85, 23, 77, 10]

function pintarArray(arrNum) {
    // Creamos un string con comas y espacios
    const texto = arrNum.join(', ');
    
    // Devolvemos la cadena con corchetes alrededor
    return `[${texto}]`;
}

// 13.- Crea la función 'arrayMapi' que acepte como argumento un array y una función y retorne 
// un array en el que se haya aplicado la función a cada elemento del primer array
// Array [139, 42, 84, 100]
// Array [7, 54, 59, 7, 37, 54, 8]
// Array [81, 32, 48, 54, 19, 40]
// Array [0, 101, 47, 91, 21]

function arrayMapi(arrNum, func) {
    return arrNum.map(func)
}


// 14.-Crea la función 'eliminarDuplicados' que acepte como argumento un array y deberá devolver 
// un array en el que se hayan eliminado los duplicados
// Eliminar duplicados de [15, 22, 37, 34, 46, 1, 15, 22, 11, 37, 34, 11, 1, 15, 22, 46, 37, 34, 11, 46, 1]
// Eliminar duplicados de [127, 96, 125, 59, 115, 56, 126, 126, 96, 125, 59, 115, 56, 127, 126, 96, 125, 59, 115, 56, 127]
// Eliminar duplicados de [21, 35, 23, 39, 35, 39, 21, 21, 35, 39, 23, 23]
// Eliminar duplicados de [20, 42, 53, 0, 0, 42, 53, 0, 20, 42, 53, 20]
// Eliminar duplicados de [91, 1, 156, 91, 98, 1, 156, 91, 98, 1, 98, 156]

function eliminarDuplicados(arr) {
    const result = []

    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i])
        }
    }

    return result
} 

function eliminarDuplicados2(arr) {
    const unique = [];

    for (let i = 0; i < arr.length; i++) {
        if (unique.indexOf(arr[i]) === -1) {
            unique.push(arr[i]);
        }
    }

    return unique;
}

function eliminarDuplicadosAdvance(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index)
}



//////////////////
//// proyecto ////
//////////////////

////////////
// Arrays //
////////////

// 15.- Crea una variable de nombre 'arrayNumerosNeg' cuyo valor sea el array de numeros del 0 al -9 incluidos (0, -1, -2...)

const arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]


// 16.- Crea una variable de nombre 'holaMundo' cuyo valor sea un array con las palabras 'Hola' y 'Mundo'

const holaMundo = ["Hola", "Mundo"]


// 17.- Crea una variable de nombre 'loGuardoTodo' cuyo valor sea un array con los valores 'hola', 'que', 23, 42.33 y 'tal'

const loGuardoTodo = ["hola", "que", 23, 42.33, "tal"]


// 18.- Crea una variable de nombre 'arrayDeArrays' cuyo valor sea el siguiente array [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]

const arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]



///////////////
// Funciones //
///////////////

// 19.- Crea la función 'multiplicacion' que acepte como argumentos dos números y devuelva como resultado su multiplicacion
// multiplicacion(45, 164)
// multiplicacion(42, 19)
// multiplicacion(47, 132)
// multiplicacion(175, 140)
// multiplicacion(151, 115)




//////////////////////////////////
// Mezclando Arrays y Funciones //
//////////////////////////////////

// 23.- Crea la función 'ordenarArray2' que acepte como argumento un array de números y devuelva un array ordenado de mayor a menor
// Ordenar [162]
// Ordenar [189]
// Ordenar [60, 57, 58, 58, 60, 61, 61, 57]
// Ordenar [199, 164, 194, 163, 276, 163, 274, 185, 160, 157]
// Ordenar [196, 166, 138]

function ordenarArray2(arrNum) { 
    return arrNum.sort().reverse()
}


// 24.- Crea la función 'obtenerImpares' que acepte como argumento un array de números y devuelva un array con los elementos que sean impares
// Imares en [1, 6, 12, 14, 7, 15, 17, 6]
// Imares en [82, 30, 43, 84, 19]
// Imares en [26, 91, 68, 25, 71, 92, 55, 25, 48]
// Imares en [30, 56, 78, 52, 16]
// Imares en [80, 44, 9, 69] 

function obtenerImpares(arrNum) {
    arrNumImpar = []

    for (let i = 0; i < arrNum.length; i++) {
        if ((arrNum[i] % 2) !== 0) {
            arrNumImpar.push(arrNum[i])
        }
    }

    return arrNumImpar
}


// 25.- Crear la función 'sumarArray' que acepte como argumento un array numérico y devuelva el resultado de la suma de los elementos
// Sumar array [109, 66, 46, 72]
// Sumar array [62, 49, 45]
// Sumar array [64, 110, 84]
// Sumar array [15, 37, 16, 29, 26]
// Sumar array [3, 9, 27, 35, 31]
// Sumar array [58, 63, 100, 154, 41, 4, 159, 42, 162]

function sumarArray(arrNum) {
    let result = 0

    for (let i = 0; i < arrNum.length; i++) {
        result += arrNum[i]
    }

    return result
}


// 26.- Crear la función 'multiplicarArray' que acepte como argumento un array numérico y devuelva
// el resultado de la multiplicación de los elementos
// Sumar array [1, 0, 2, 1, 0, 0, 1]
// Sumar array [134, 53, 19, 67, 86]
// Sumar array [6, 21, 27, 1, 7]
// Sumar array [113, 149, 10, 32, 138]
// Sumar array [45, 75, 12, 63, 10, 51]
// Sumar array [6, 1, 7, 13, 10, 12, 9, 9]

function multiplicarArray(arrNum) {
    let result = 1

    for (let i = 0; i < arrNum.length; i++) {
        result *= arrNum[i]
    }

    return result
}