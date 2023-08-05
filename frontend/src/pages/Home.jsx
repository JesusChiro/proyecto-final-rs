import React from 'react'

export const Home = () => {
  return (
    <>
      < div id="carouselExample" className="carousel slide carrusel-index">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="./img/banner/Carrusel-1.png"
              className="d-block w-100"
              alt="imagen1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="./img/banner/Carrusel-2.jpg"
              className="d-block w-100"
              alt="imagen2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="./img/banner/Carrusel-3.jpg"
              className="d-block w-100"
              alt="imagen3"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="prod-dest">
        <h2 className="prod-title">Productos Destacados</h2>
        <div className="d-flex align-content-between justify-content-center flex-wrap grid gap-3">
          <div className="card  p-3">
            <img
              src="./img/img-componentes-pc/producto-referencial-ram.jpg"
              className="card-img-top"
              alt="producto referencial"
            />
            <div className="card-body">
              <h5 className="card-title">Nombre producto</h5>
              <p className="card-text">
                Caracteristicas del componente, rendimiento, capacidad, etc.
              </p>
            </div>
            <div className="card-body">
              <a href="#" className="card-link">
                Agregar al carrito
              </a>
              <a href="#" className="card-link">
                $ Precio
              </a>
            </div>
          </div>
          <div className="card  p-3">
            <img
              src="./img/img-componentes-pc/producto-referencial-ram.jpg"
              className="card-img-top"
              alt="producto referencial"
            />
            <div className="card-body">
              <h5 className="card-title">Nombre producto</h5>
              <p className="card-text">
                Caracteristicas del componente, rendimiento, capacidad, etc.
              </p>
            </div>
            <div className="card-body">
              <a href="#" className="card-link">
                Agregar al carrito
              </a>
              <a href="#" className="card-link">
                $ Precio
              </a>
            </div>
          </div>
          <div className="card  p-3">
            <img
              src="./img/img-componentes-pc/producto-referencial-ram.jpg"
              className="card-img-top"
              alt="producto referencial"
            />
            <div className="card-body">
              <h5 className="card-title">Nombre producto</h5>
              <p className="card-text">
                Caracteristicas del componente, rendimiento, capacidad, etc.
              </p>
            </div>
            <div className="card-body">
              <a href="#" className="card-link">
                Agregar al carrito
              </a>
              <a href="#" className="card-link">
                $ Precio
              </a>
            </div>
          </div>
          <div className="card  p-3">
            <img
              src="./img/img-componentes-pc/producto-referencial-ram.jpg"
              className="card-img-top"
              alt="producto referencial"
            />
            <div className="card-body">
              <h5 className="card-title">Nombre producto</h5>
              <p className="card-text">
                Caracteristicas del componente, rendimiento, capacidad, etc.
              </p>
            </div>
            <div className="card-body">
              <a href="#" className="card-link">
                Agregar al carrito
              </a>
              <a href="#" className="card-link">
                $ Precio
              </a>
            </div>
          </div>
          <div className="card  p-3">
            <img
              src="./img/img-componentes-pc/producto-referencial-ram.jpg"
              className="card-img-top"
              alt="producto referencial"
            />
            <div className="card-body">
              <h5 className="card-title">Nombre producto</h5>
              <p className="card-text">
                Caracteristicas del componente, rendimiento, capacidad, etc.
              </p>
            </div>
            <div className="card-body">
              <a href="#" className="card-link">
                Agregar al carrito
              </a>
              <a href="#" className="card-link">
                $ Precio
              </a>
            </div>
          </div>
          <div className="card  p-3">
            <img
              src="./img/img-componentes-pc/producto-referencial-ram.jpg"
              className="card-img-top"
              alt="producto referencial"
            />
            <div className="card-body">
              <h5 className="card-title">Nombre producto</h5>
              <p className="card-text">
                Caracteristicas del componente, rendimiento, capacidad, etc.
              </p>
            </div>
            <div className="card-body">
              <a href="#" className="card-link">
                Agregar al carrito
              </a>
              <a href="#" className="card-link">
                $ Precio
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
