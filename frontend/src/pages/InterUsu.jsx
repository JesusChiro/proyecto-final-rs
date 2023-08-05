import { NavLink } from "react-router-dom";
import React from 'react'

export const InterUsu = () => {
  return (
    <>
        
    <div id="caja_menu" style={{textAlign:"left"}}>

    <strong className="h3">
      Bienvenido Usuario : {/* { usu.toUpperCase() } */}
    </strong>
              
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{marginTop:20}}>
      <div className="container-fluid">

        <label className="navbar-brand  h5" href=" ">Menú Principal</label>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {/* <NavLink to="" className="nav-link  h5  text-center"  onClick={ op_registrar } >Registrar</NavLink>
            <NavLink to="" className="nav-link  h5  text-center"  onClick={ op_listar } >Listar</NavLink>
            <NavLink to="" className="nav-link  h5  text-center"  onClick={ op_estadistica } >Estadistica</NavLink>
            <NavLink to="" className="nav-link  h5  text-center"  style={{color:"blue"}}  onClick={ cerrarSesion } >Cerrar Sesión</NavLink> */}
          </div>
        </div>
      </div>
    </nav>

    </div>

    {/* { reg === "1" && <Registrar/> }
    { lis === "1" && <Listar/>}
    { est === "1" && <Estadistica/> } */}

  </>
  )
}


