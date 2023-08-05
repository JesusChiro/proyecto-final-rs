import { useEffect, useState } from 'react'
import { ProductosContext } from './ProductosContext'
import { URL_API_STORE } from '../constants/index.js'

export const ProductosProvider = ({ children }) => {

    const [productos, setProductos] = useState([])

    const fetchProductos = async () => {
        const response = await fetch(`${URL_API_STORE}/api/articulo`)
        const data = await response.json()
        console.log(data.content)
        setProductos(data.content)
    }

    useEffect(() => {
        fetchProductos()

    }, [])

    return (
        <ProductosContext.Provider value={{ productos }}>
            {children}
        </ProductosContext.Provider>
    )
}