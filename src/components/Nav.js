import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

function Nav() {


 return (
  <nav>
   <h3 className="logo">Social App</h3>
   <ul className="nav-links">
    <Link className="link" to={"/home/perfil"}>
    <li>Perfil</li>
    </Link>
    <Link className="link"  to="/home/amigos">
    <li>Amigos</li>
    </Link>
    <Link className="link" to="/landingpage/registro">
    <li>Cerrar sesión</li>
    </Link>
   </ul> 
  </nav>
 )
}

export default Nav
