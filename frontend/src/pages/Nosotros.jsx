import "../styles/nosotros.css";

import React from 'react'

export const Nosotros = () => {
  return (
    <>
      <div className="sb-nosotros">
        <h1>Sobre Nosotros</h1>
      </div>
      <div className="nosotros-content">
        <h3 className="nosotros-serv">Nuestra Misión</h3>
        <img
          className="contain-img"
          src="./img/img-nosotros/icon-buscar.png"
          alt="icon buscamos?"
        />
        <p className="contain-p">
          « La visión de RAM CODE es expandir su posición de Líder mundial en
          los mercados de productos electrónicos para llegar a ser la Empresa
          con mayor y más eficiente tecnología en la industria, a través de la
          innovación y del talento de las personas que trabajan dentro de la
          Organización.»
        </p>
      </div>
      <div className="nosotros-content">
        <h3 className="nosotros-serv">¿Que ofrecemos?</h3>
        <img
          className="contain-img"
          src="./img/img-nosotros/icon-ofrecemos.png"
          alt="icon ofrecemos?"
        />
        <p className="contain-p">
          «Ofrecemos productos de alta calidad a nuestros clientes para
          satisfacer sus necesidades tecnológicas en sus empresas.
          Adicionalmente asesoramos sus compras de principio a fin. Dejando en
          claro nuestro servicion pre y post-venta.»
        </p>
      </div>
      <div className="nosotros-content">
        <h3 className="nosotros-serv">¿Nuestros servicios?</h3>
        <img
          className="contain-img"
          src="./img/img-nosotros/icon-servicios.png"
          alt="icon servicios?"
        />
        <p className="contain-p">
          «Nos enfocamos en la venta de productos tecnoloógicos de Alta Calidad
          con el mejor respaldo que asegura su compra con nosotros. A la vez
          ofrecemos el servicio de Soporte Técnico para poder ayudar a nuestros
          clientes con sus equipos en caso de algun inconveniente que tuvieran»
        </p>
      </div>
    </>
  )
}

