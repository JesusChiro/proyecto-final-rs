import { useContext } from "react"
import { CarritoContext } from "../context/CarritoContext.jsx"

export const CarritoPage = () => {

    const { listaCompras, aumentarCantidad, disminuirCantidad, eliminarCompra } = useContext(CarritoContext)

    const calcularTotal = () => {
        return listaCompras.reduce((total, item) => parseInt(total + item.price * item.cantidad),0).toFixed(2)
        
    }
    const handleImpresion = () => {
        print()
    }

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listaCompras.map(item => (
                            <tr key={item.idarticulo}>
                                <td>{item.nombre}</td>
                                <td>{item.precio}</td>
                                <td>
                                    <button
                                        className="btn btn-ouline-primary"
                                        onClick={() => disminuirCantidad(item.idarticulo)}
                                    >-</button>
                                    <button className="btn btn-primary">{item.cantidad}</button>
                                    <button
                                        className="btn btn-ouline-primary"
                                        onClick={() => aumentarCantidad(item.idarticulo)}
                                    >+</button>
                                </td>
                                <td><button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() => eliminarCompra(item.idarticulo)}
                                >Eliminar
                                </button>
                                </td>
                            </tr>
                        ))
                    }

                    <td><b>TOTAL: </b></td>
                    <td></td>
                    <td></td>
                    <td>${calcularTotal()}</td>

                </tbody>
            </table>

            <div className="d-grid gap-2">
                <button
                    className="btn btn-primary"
                    onClick={handleImpresion}
                    disabled={listaCompras < 1}

                >COMPRAR</button>
            </div>
        </>
    )
}