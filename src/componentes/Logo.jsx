import React from 'react'
import freeCodeCampLogo from '../imagenes/freecodecamp-logo.png'


function Logo() {
  return (
    <div className="freecodecamp-logo-contenedor">
        <img 
        src={freeCodeCampLogo}
        className='freecodecamp-logo' />
      </div>
  )
}

export default Logo;