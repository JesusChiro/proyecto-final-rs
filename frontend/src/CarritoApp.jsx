import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { ComprasPage } from "./pages/ComprasPage"
import { CarritoPage } from "./pages/CarritoPage"
import { Contacto } from "./pages/Contacto"
import { Home } from "./pages/Home"
import { Nosotros } from "./pages/Nosotros"
import { ProductosProvider } from "./context/ProductosProvider"
import { CarritoProvider } from "./context/CarritoProvider"
import { Footer } from './pages/Footer'
import { Login } from "./pages/Login"
import { InterUsu } from "./pages/InterUsu"
import { RegisterPages } from "./pages/RegisterPages"

export const CarritoApp = () => {
    return (
        <ProductosProvider>
            <CarritoProvider>
                <NavBar></NavBar>
                <div className="container">
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="/*" element={<Navigate to='/' />}></Route>
                        <Route path="/nosotros" element={<Nosotros></Nosotros>}></Route>
                        <Route path="/catalogo" element={<ComprasPage></ComprasPage>}></Route>
                        <Route path="/contacto" element={<Contacto />}></Route>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="/interfazusuario" element={<InterUsu />}></Route>
                        <Route path="/carrito" element={<CarritoPage></CarritoPage>}></Route>
                        <Route path='/register' element={<RegisterPages />}></Route>
                    </Routes>
                </div>
            </CarritoProvider>
            <Footer />
        </ProductosProvider>
    )
}