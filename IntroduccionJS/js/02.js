const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

//Imprime bonito el array en la consola
console.table(tecnologias);

// elimina el primer elemento del arreglo en este caso HTML
tecnologias.shift()
// elimina el ultimo elemento del arreglo en este caso Node.js
tecnologias.pop()
// agrega un elemento al inicio del arreglo en este caso Angular
tecnologias.unshift('Angular')
// agrega un elemento al final del arreglo en este caso Vue.js
tecnologias.push('Vue.js')

// elimina un elemento en especifico del arreglo en este caso CSS
tecnologias2 = tecnologias.filter(tecnologia => tecnologia !== 'CSS')



const [variable1, variable2, variable3, variable4] = tecnologias

console.log(variable3);