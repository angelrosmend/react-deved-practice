import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

function LandingNav() {

 return (
  <nav>
   <h3 className="logo">Social App</h3>
   <ul className="nav-links">
    <Link className="link" to="/landingpage/registro">
    <li>Registro</li>
    </Link>
    <Link className="link" to="/landingpage/login">
    <li>Login</li>
    </Link>
   </ul> 
  </nav>
 )
}

export default LandingNav