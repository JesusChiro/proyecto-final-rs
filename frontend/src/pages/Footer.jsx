import React from 'react'

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="footer_datos">
            <p>Horarios de atención</p>
            <small>Lun a Vie: 8am - 8pm</small>
          </div>
          <div className="footer_datos">
            <p>Gmail</p>
            <small>ls@gmail.com</small>
          </div>
          <div className="footer_datos">
            <p>Redes</p>
            <div className="datos_icon">
              <img
                src="./img/logo/whatsapp_icon-icons.com_53606.png"
                alt="icon Whatsapp"
              />
              <img
                src="./img/logo/facebook_icon-icons.com_53612.png"
                alt="icon Facebook"
              />
              <img
                src="./img/logo/Instagram_icon-icons.com_66804.png"
                alt="icon instagram"
              />
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}
