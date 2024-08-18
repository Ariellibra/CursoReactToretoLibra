// funciones declaracion
function saludar() {
    console.log('Hola Mundo');
}
// funcion suma
function suma(a, b) {
    return a + b;
}
// funcion resta
function resta(a, b) {
    return a - b;
}


// funcion de expresion
const multiplicar = function(a, b) {
    return a * b;
}

// funciones de flecha
const dividir = (a, b) => {
    return a / b;
}
const dividir2 = (a, b) => a / b;


const tecnologias = ['HTML', 'CSS', 'JS', 'React', 'Node'];
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter
const nuevoArray = tecnologias.filter((tecnologia) => tecnologia);
console.log(nuevoArray);

let numero = 0

numero > 0 ?
    console.log('Es verdadero') :
    numero < 1 ?
        console.log('Es falso') :
        console.log('Es igual a 0');
