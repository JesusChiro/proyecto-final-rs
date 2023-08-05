import { useContext, useState } from "react"
import { Card } from "../components/Card"
import { ProductosContext } from "../context/ProductosContext"
import { CarritoContext } from "../context/CarritoContext.jsx"

export const ComprasPage = () => {

  const { productos } = useContext(ProductosContext)

  const { agregarCompra, eliminarCompra } = useContext(CarritoContext)


  const handleAgregar = (compra) => {
    agregarCompra(compra)
  }
  const handleQuitar = (id) => {
    eliminarCompra(id)
  }


  return (
    <>
      {/* <div className="flex-column">
        <h4 className="form-label btnbuscar">Filtro por Categoria</h4>
        <form id='formul' className='formbusqueda' onSubmit={handleSubmit}>
          <div >
            <input
              id='filtro'
              type="text"
              className="form-control btnbuscar"
              value={busqueda}
              onChange={handleInputChange} />
            <div className="grupobusqueda">
              <button
                type="submit"
                className="btnbuscar btn btn-primary"
                id="buscar">Buscar</button>
              <button
                type="submit"
                className="btnbuscar btn btn-primary"
                id="limpiar">Limpiar</button>
            </div>
          </div>
        </form>

        <div className="flex-column container">
          {productos.map((producto) => (
            <div className="card" key={producto.id}>
              <Product item={producto} />
            </div>
          ))}
        </div>
      </div> */}
      <h1>Elija su producto: </h1>
      <hr />

      {
        productos.map(producto => (
          // console.log(producto)
          <Card
             key={producto.idarticulo}
            imagen={producto.imagen}
            nombre={producto.nombre}
            // descripcion={producto.descripcion}
             precio={producto.precio}
            handleAgregar={() => handleAgregar(producto)}
            handleQuitar={() => handleQuitar(producto.idarticulo)}
           ></Card>
        ))
      }

    </>
  )
}