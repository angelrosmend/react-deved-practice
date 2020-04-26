import React from 'react'
import foto from '../img/avatar.png'
import './Perfil.css'

function Perfil() {
 return (
  <div className="perfil">
   <img src={foto} alt="" />
   <h1>Gilberto Arevalo</h1>
   <h2>Buenos Aires</h2>

  </div>
 )
}

export default Perfil
