import '../styles/style.css'

import React from 'react'

export const Contacto = () => {
  return (
    <main className="container">
        <h1 className="title_contain display-4 justify-content-center  p-4">
          Formulario de Contacto
        </h1>
        <div className="contain__item container-fluid p-4">
          <div className="row justify-content-center">
            <div className="col-md-8 pt-4 pb-4 m-0 shadow rounded-4">
              <form
                className="contain_form"
                action="https://formsubmit.co/j.chiroque10@gmail.com"
                method="POST"
              // enctype="multipart/form-data"
              >
                <div className="mb-3 row">
                  <label className="col-sm-2 col-form-label" >Nombres:</label>
                  <div className="col-sd-10">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Coloque sus nombres"
                      name="name"
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label className="col-form-label" >Nro de Celular:</label>
                  <div className="col-sd-10">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="999-999-999"
                      name="cellphone"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="input-email" className="form-label">Correo:</label>
                  <input
                    id="input-email"
                    type="text"
                    className="form-control"
                    placeholder="tucorreo@gmail.com"
                    name="email"
                  />
                </div>
                <div className="mb-3 row">
                  <label className="col-sm-2 col-form-label" >Empresa:</label>
                  <div className="col-sd-10">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Escribe tu empresa"
                      name="company"
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label className="col-sm-2 col-form-label" >RUC:</label>
                  <div className="col-sd-10">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Esrcibe tu RUC o DNI"
                      name="ruc"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="texto-descripcion"
                  >Detalle su solicitud:</label>
                  <textarea
                    className="form-control"
                    name="subject"
                    id="texto-descripcion"
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label className="form-label"
                  >Subir imagen referencia</label>
                  <input
                    type="file"
                    className="form-control"
                    name="attachment"
                    accept="image/png, image/jpeg"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Enviar...!
                </button>
                <input
                  type="hidden"
                  name="_next"
                  value="hhttp://127.0.0.1:5500/html/index.html"
                />
                <input
                  type="hidden"
                  name="_cc"
                  value="jesus_chiroque@hotmail.com"
                />
                <input type="hidden" name="_template" value="table" />
              </form>
            </div>
          </div>
        </div>
      </main>
  )
}
