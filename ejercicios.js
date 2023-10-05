// Resultado Condicionales (1)
let numero = -10;

if (numero > 0) {
    console.log("Número Positivo");
} else if (numero < 0) {
    console.log("Número Negativo");
} else if (numero === 0) {
    console.log("Numero es Cero");
}


let num = -4;

if (num % 2 === 0) {
    console.log("Es Par");
} else {
    console.log("Es Impar");
}

let num1 = 10;
let num2 = 10;

if (num1 > num2) {
    console.log("Num1 es mayor a Num2");
} else if (num2 > num1) {
    console.log("Num2 es mayor a Num1");
} else {
    console.log("Son iguales")
}


let year = 1995;

if (year % 4 === 0) {
    console.log(`El año ${year} es bisiesto`);
} else {
    console.log(`El año ${year} no es bisiesto`);
}

let peso = 85;
let altura = 1.70;

let imc = peso / (altura ** 2);

console.log(`El IMC de una persona que mide ${altura}cm y pesa ${peso}kg es de: ${imc.toFixed(2)}`);


//      1              2        4
for (let num = 1000; num >= 0; num -= 100) {
    // 3
    console.log(num)
}

let nombres = ["Hugo", "Paco", "Luis"];

for (let indice in nombres) { // 0, 1, 2
    console.log(indice)
    console.log(nombres[indice])
}

for (let valor of nombres) { // Hugo, Paco, Luis
    console.log(valor)
}

let contador = 1000;
while (contador >= 0) {
    console.log(contador);
    contador -= 100;
}

let indice = 0;
while (indice < nombres.length) {
    console.log(nombres[indice])
    indice++;
}

for (let indice = 0; indice < nombres.length; indice++) {
    console.log(nombres[indice])
}

for (let i = 1; i <= 10; i++) {
    console.log(i)
}

let j = 1;
while (j <= 10) {
    console.log(j);
    j++; //j+=1  //j=j+1;
}

let total = 0;
for (let i = 1; i <= 100; i++) {
    total += i;
    //total = total + i;
}
console.log(total);


for (let num = 2; num <= 20; num += 2) {
    console.log(num);
}

for (let num = 1; num <= 20; num++) {
    if (num % 2 === 0) console.log(num);
}


let tabla = 10;
for (let i = 1; i <= 10; i++) {
    console.log(`${tabla} x ${i} = ${(tabla * i)}`);
}


let n = 10;
let result = 1;
for (let i = 1; i <= n; i++) {
    result *= i;
}
console.log(result)

/*
console.log(sumar(10, 10)); // Hoisting
function sumar(a, b){
    return a + b;
}


const restar = function(a, b){
    return a - b;
}
console.log(restar(10, 10));



var multiplicar = function(a, b){
    return a * b;
}
console.log(multiplicar(10, 10));

const variable = 10;


function dividir(a = 0, b = 0){
    if (b === 0) return "Error: Division por cero"
    return a / b;
}

dividir()
*/

function valores(a = "", b = 0, c = false, d = [], e = {}, f = function () { }) {

}


const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;


const operation = (callbackfn, param1, param2) => {
    return callbackfn(param1, param2);
}


console.log("La suma es: " + operation(sumar, 10, 3));
console.log("La division es: " + operation(dividir, 10, 3));
console.log("La multiplicacion es: " + operation(multiplicar, 10, 3));
console.log("La resta es: " + operation(restar, 10, 3));

const calcularAreaTriangulo = (base, altura) => {
    let result1 = multiplicar(base, altura);
    let result2 = dividir(result1, 2);
    return result2;
}

console.log("El area del triangulo es: " + calcularAreaTriangulo(10, 5));

let n12 = 1;
let n22 = 10;
const esMayor = (n1, n2) => {
    return n1 > n2;
}

console.log(esMayor(n12, n22))


function determinarSiEsPrimo(numero) {
    if (numero === 0 || numero === 1 || numero === 4) return false;
    for (let i = 2; i < numero / 2; i++) {
        if (numero % i === 0) return false;
    }
    return true;
}


console.log(determinarSiEsPrimo(4));

(10*9/5) + 32

function conversionCelciusAFahrenheit(gradosC){
    let gradosF = (gradosC * 1.8) + 32;
    return gradosF;
    // return (gradosC * 1.8) + 32
}


function conversionFahrenheitACelcius(gradosF){
    let gradosC = (gradosF - 32) / 1.8;
    return gradosC;

    //return (gradosF - 32) / 1.8
}

let texto = "Hola Mundo";

const invertirTexto = (texto) => {
    
    //return texto.split('').reverse().join('');

    let textoInvertido = "";
    for(let i = texto.length - 1; i >= 0; i--){
        // textoInvertido[i] = text[i];
        textoInvertido = textoInvertido + texto[i];
    }
    return textoInvertido;
}

console.log(invertirTexto(texto));
