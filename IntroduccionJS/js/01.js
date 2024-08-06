// OBJETOS
// AGUANTE LA MORCILLA


const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: false
}


//Rescribir un valor(no importa si el obj es const)
producto.disponible = true

// Si no existe, la va añadir
producto.image = "imagen.jpg"

// Eliminar propiedad
delete producto.precio

//No te deja cambiar valores, añadir o eliminar propiedades
Object.freeze(producto)

// No te deja añadir o eliminar propiedades pero si podes modificar los valores
Object.seal(producto)


// ESTE ES MAS MODERNO PARA DESESTRUCTURAR
const { nombre, precio } = producto
console.log(nombre)
console.log(precio)
// ES LO MISMO QUE ESTO
// const nombre = producto.nombre
// console.log(nombre)


// Object literal enhacement
const usuario = "Juan"
const autenticado = true

// ESTRUCTURAR EL OBJETO
const objetoNuevo = {
    autenticadosNuevo: autenticado,
    usuarioUsuario: usuario
}

const objetoLiteral = {
    autenticado,
    usuario
}

//console.log(objetoLiteral)

const { autenticadosNuevo, usuarioUsuario } = objetoNuevo

//console.log(usuarioUsuario)



const productosNuevo = [
    {
    nombre: "Tablet",
    precio: 300,
    disponibleNuevo: false,
    sucursales: {
        localidad: "Ituzaingo"
        }
    },
    {
    nombre: "Celular",
    precio: 4400,
        disponibleNuevo: true,
    sucursales: {
        localidad: "Merlo"
        }
    },
    {
    nombre: "PC",
    precio: 30000,
        disponibleNuevo: false,
    sucursales: {
        localidad: "Moron"
        }
    },
]

// la propiedad nombre que esta en productosNuevo[2] se va a cambiar a la constante nombreNuevo
// desestructurar un objeto que esta dentro de otro por ejemplo sucursales.

const { nombre: nombreNuevo, precio: precioNuevo, sucursales, sucursales: {localidad} } = productosNuevo[0];
console.log(nombreNuevo)
console.log(sucursales)
console.log(localidad)





// unir 2 o mas objetos
const producto1 = {
    nombre: "LIBRA REMERITA DE TROLO",
    precio: 500000,
    disponible: false
    
}
const cliente = {
    nombre: "JUAN",
    apellido: "LIBRA PUTO",
    premium: true

}

const carrito = {
    cantidad: 1,
    ...producto1,
    ...cliente
}

console.log(carrito)

// por si no se puede hacer literal hay que renombrarlos así: 
// const nuevoObjeto = {
//     productoRenombrado: { ...producto1 },
//     clienteRenombrado: {...cliente},
// }

const nuevoObjeto = {
    producto1,
    cliente
}
console.log(nuevoObjeto)
console.log(nuevoObjeto.producto1.nombre)
console.log(nuevoObjeto.cliente.nombre)

const nuevoObjeto2 = Object.assign(producto1, cliente)



console.log(nuevoObjeto2)
