let arrayVacio = [];

let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let arrayNumerosPares = [];

for (let i = 0; i < arrayNumeros.length; i++) {
    if (i % 2 === 0) {
        arrayNumerosPares.push(i)
    }
}

let arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']]

function suma (a, b) {
    return a+b
}

function potenciacion(a, b) {
    return a**b
}

function separarPalabras(text) {
    return text.split(" ")

}

// let text = "hello world DUBAI"
// console.log(separarPalabras(text))

function repetirString(text, num) {
    return text.repeat(num)
}


function esPrimo(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}


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
    let arrNumPar = []
    for (let i = 0; i < arrNum.length; i++) {
        if (arrNum[i] % 2 === 0) {
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
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i])
        }
    }
    return result
} 

function eliminarDuplicados(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index)
}


// Mezclando Arrays y Funciones
// 23.- Crea la función 'ordenarArray2' que acepte como argumento un array de números y devuelva un array ordenado de mayor a menor
// Ordenar [162]
// Ordenar [189]
// Ordenar [60, 57, 58, 58, 60, 61, 61, 57]
// Ordenar [199, 164, 194, 163, 276, 163, 274, 185, 160, 157]
// Ordenar [196, 166, 138]