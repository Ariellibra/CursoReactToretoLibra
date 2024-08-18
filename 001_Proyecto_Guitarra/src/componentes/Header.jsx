import { useMemo } from "react";

export default function Header({ carrito, setCarrito }) {
    
/* 
USE MEMO SIRVE PARA QUE NO SE VUELVA A CALCULAR EL TOTAL CADA VEZ QUE SE RENDERIZA EL COMPONENTE
POR EJEMPLO SI SE AGREGA UNA GUITARRA AL CARRITO, EL TOTAL SE CALCULA DE NUEVO, PERO SI SE AGREGA OTRA GUITARRA
NO SE VUELVE A CALCULAR EL TOTAL, SOLO SE ACTUALIZA EL TOTAL CON EL NUEVO PRECIO DE LA GUITARRA AGREGADA

useMemo(funcionflecha que va realizar, [que state debe cambiar para que se ejecute]) // si carrito esta vacio, estaVacio es true
*/

    // state derivado
    //const estaVacio = useMemo(() => carrito.length === 0, [carrito])
    // es lo mismo que la funcion de arriba 
    function verificarCarritoVacio() {
        return carrito.length === 0;
    }
    const estaVacio = useMemo(verificarCarritoVacio, [carrito]);


    // state derivado para calcular el total
        

    // function calcularTotalCarrito() {
    //     return carrito.reduce((total, item) => total + (item.price * item.cantidad), 0);
    // }

    // const totalCarrito = useMemo(calcularTotalCarrito, [carrito]);   
    //                                               acumulador, item actual // total + precio del item por la cantidad y el 0 es el valor inicial
    const totalCarrito = useMemo(() => carrito.reduce((total, item) => total + (item.price * item.cantidad), 0), [carrito])

    // const sacarItem = (item) => {
    //     const buscarItem = carrito.findIndex((items) => items.id === item.id)

    //     const carritoCopia = [...carrito]

    //     if (buscarItem === -1) {
            
    //     } else {
    //         carritoCopia.splice(buscarItem, 1)
    //         setCarrito(carritoCopia)
    //     }
    // }    
    const sacarItem = (id) => setCarrito(carritoAnterior => carritoAnterior.filter(item => item.id !== id))
    
    const vaciarCarrito = () => setCarrito([]) 


    // function incrementarCantidad(id) {
    //     const carritoCopia = [...carrito]
    //     const buscarItem = carritoCopia.findIndex(item => item.id === id)
    //     carritoCopia[buscarItem].cantidad++
    //     setCarrito(carritoCopia)
    // }

    function incrementarCantidad(id) {
        const carritoCopia = carrito.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    cantidad: item.cantidad + 1
                }
            }
            return item
        })
        setCarrito(carritoCopia)
    }

    function decrementarCantidad(id) {
        const carritoCopia = carrito.map(item => {
            if (item.id === id) {
                if (item.cantidad >= 2) {
                    return {
                        ...item,
                        cantidad: item.cantidad - 1
                    }
                } else {
                    
                } 
            }
            return item
        })
        setCarrito(carritoCopia)
    }

    



    // function decrementarCantidad(id) {
    //     const carritoCopia = [...carrito]
    //     const buscarItem = carritoCopia.findIndex(item => item.id === id)
    //     if (carritoCopia[buscarItem].cantidad >= 2){
    //     carritoCopia[buscarItem].cantidad--
    //     setCarrito(carritoCopia)
    //     } else {
    //         sacarItem(id)
    //     }
    // }
    
    return (
        <>
            <header className="py-5 header">
                <div className="container-xl">
                    <div className="row justify-content-center justify-content-md-between">
                        <div className="col-8 col-md-3">
                            <a href="index.html">
                                <img className="img-fluid" src="./public/img/logo.svg" alt="imagen logo" />
                            </a>
                        </div>
                        <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                            <div
                                className="carrito"
                            >
                                <img className="img-fluid" src="./public/img/carrito.png" alt="imagen carrito" />

                                <div id="carrito" className="bg-white p-3">

                                    {estaVacio ? (
                                        <p className="text-center">El carrito esta vacio</p>
                                    ):(
                                    <>
                                                <table className="w-100 table">
                                                    <thead>
                                                        <tr>
                                                            <th>Imagen</th>
                                                            <th>Nombre</th>
                                                            <th>Precio</th>
                                                            <th>Cantidad</th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {carrito.map((carro) => (

                                                            <tr key={carro.id}>
                                                                <td>
                                                                    <img className="img-fluid" src={`/img/${carro.image}.jpg`} alt="imagen guitarra" />
                                                                </td>
                                                                <td>{carro.name}</td>
                                                                <td className="fw-bold">
                                                                    ${carro.price}
                                                                </td>
                                                                <td className="flex align-items-start gap-4">
                                                                    <button
                                                                        onClick={() => decrementarCantidad(carro.id)}
                                                                        type="button"
                                                                        className="btn btn-dark"
                                                                    >
                                                                        -
                                                                    </button>
                                                                    {carro.cantidad}
                                                                    <button
                                                                        onClick={() => incrementarCantidad(carro.id)}
                                                                        type="button"
                                                                        className="btn btn-dark"
                                                                    >
                                                                        +
                                                                    </button>
                                                                </td>
                                                                <td>
                                                                    <button
                                                                        
                                                                        onClick={() => sacarItem(carro.id)}
                                                                        className="btn btn-danger"
                                                                        type="button"
                                                                    >
                                                                        X
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        ))}

                                                    </tbody>
                                                </table>
                                                <p className="text-end">Total pagar: <span className="fw-bold">${totalCarrito}</span></p>
                                                <button className="btn btn-dark w-100 mt-3 p-2" onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
                                    </>
                                    )}

                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>

        </>
    )
}