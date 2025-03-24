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
    return text.concat(num)
}   

console.log("hola".repeat(3))