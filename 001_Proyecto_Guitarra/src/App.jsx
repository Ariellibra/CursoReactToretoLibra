// SI SE USA SRC HAY QUE USAR EL ./
//import reactLogo from './assets/react.svg'
// SI SE USA PUBLIC COMO DIRECTORIO SOLO LA DIAGONAL
//import viteLogo from '/vite.svg'

import Header from "./componentes/Header"
import Guitarra from "./componentes/Guitarra"
import { db } from "./datos/db";
import { useState, useEffect } from "react";

function App() {

  /*
  //State
  const [auth, setAuth] = useState(false)
  const [total, setTotal] = useState(0)
  const [cart, setCart] = useState([])

  // useEffect
  useEffect(() => {
    console.log('componente listo')
  }, [auth])
  */
  
  // useEffect(() => {
  //   setDatos(db)
  // }, [datos])
  
  const [datos, setDatos] = useState(db)
  const [carrito, setCarrito] = useState([])
  const [total, setTotal] = useState(0) 


  const agregarCarrito = (item) => {
    const itemExiste = carrito.findIndex((itemsTotales) => itemsTotales.id === item.id);

    if (itemExiste !== -1) {

      const actualizarCarrito = [...carrito]
      actualizarCarrito[itemExiste].cantidad++;
      setCarrito(actualizarCarrito);
      
    } else {
      item.cantidad = 1;
      setCarrito([...carrito,item]);

    }
      
    setTotal((totalPrevio) => totalPrevio + item.price);
  };

  


  return (
    <>
      <Header carrito={carrito} total={total} setTotal={setTotal} setCarrito={setCarrito}/>

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className="row mt-5">
          {datos.map((guitarra) => (
            <Guitarra 
              key={guitarra.id}
              guitarra={guitarra}
              agregarCarrito={agregarCarrito}
            />
          ))}
         
        </div>
      </main>


      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
      </footer>

    </>
  )
}

export default App
