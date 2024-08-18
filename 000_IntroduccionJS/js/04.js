// optional chaining
// optional chaining es una nueva característica de JavaScript que permite acceder a propiedades de un objeto anidado sin tener que validar si el objeto padre existe.
// dame un ejemplo
const user = {  // objeto
    name: 'Toreto', // propiedad
    age: 33, // propiedad
    address: { // propiedad
        city: 'Santiago', // propiedad
        country: 'Chile' // propiedad
    }
};

console.log(user.city2?.age);
const clientes = null;


console.log(clientes ?? "no hay datos en clientes");

