//Codigo del Cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}
// console.log("El perimetro del cuadrado miden: " + perimetroCuadrado + " cm");

function areaCuadrado(lado) {
    return lado * lado;
}
// console.log("El area del cuadrado miden: " + areaCuadrado + " cm cuadrados");

console.groupEnd();

//Codigo del Triangulo
console.group("Triangulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;

// console.log("Los lados del triangulo miden: " + ladoTriangulo1 + " cm, " + ladoTriangulo2 + " cm, "  + baseTriangulo + " cm");

// console.log("La altura del triangulo es de: " + alturaTriangulo + " cm");

function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base;
}

// console.log("El perimetro del triangulo miden: " + perimetroTriangulo + " cm");

function areaTriangulo (base, altura) {
    return (base * altura) / 2;
}

// console.log("El area del triangulo miden: " + areaTriangulo + " cm cuadrados");

console.groupEnd();

//Codigo del Círculo
console.group("Circulos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del circulo mide: " + radioCirculo + " cm");

// Diametro
function diametroCirculo (radio) {
    return radio * 2;
}
// console.log("El diametro del circulo mide: " + diametroCirculo + " cm");

// PI
const PI = Math.PI;
console.log("PI vale: " + PI);

// Circunferencia
function perimetroCirculo() {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
// console.log("El perimetro del circulo mide: " + perimetroCirculo + " cm");

// Area
function areaCirculo(radio) {
    return radio * radio * PI;
}

// Interactuamos con el HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}
