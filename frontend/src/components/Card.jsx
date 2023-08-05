import { useState } from "react"
import '../styles/card.css'

export const Card = ({ imagen, titulo, nombre,descripcion, precio, handleAgregar, handleQuitar, handleAumentar, handleDisminuir }) => {

    const [added, setAdded] = useState(false)

    const clickAgregar = () => {
        handleAgregar()
        setAdded(true)
    }
    const clickQuitar = () => {
        handleQuitar()
        setAdded(false)
    }

    return (
        <div className="container-fluid container-sm ">
        <div className="tarjeta container-fluid">
            <img src={imagen} alt={titulo} className="tarjeta-imagen" />
            <div className="tarjeta-contenido">
                <h3 className="tarjeta-titulo">{nombre}</h3>
                <p className="tarjeta-descripcion">{descripcion}</p>
                <p className="tarjeta-precio">S/. {precio}</p>

                {added
                    ? <button
                        type="button"
                        className="boton-quitar"
                        onClick={clickQuitar}

                    >
                        Quitar del Carrito
                    </button>
                    : <button
                        type="button"
                        className="boton-agregar"
                        onClick={clickAgregar}
                    >
                        Agregar Carrito
                    </button>
                }

            </div>
        </div></div>
    )
}