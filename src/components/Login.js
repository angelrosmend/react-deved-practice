import React, { Component } from 'react'
import './login.css'
import { Link } from 'react-router-dom'

export class Login extends Component {
 render() {
  return (
   <div className="base-container" ref={this.props.containerRef}>
   <div className="content">
     <div className="image">
      INICIAR SESIÓN
     </div>
     <div className="form">
       <div className="form-group">
         <label htmlFor="username">Usuario</label>
         <input type="text" name="username" placeholder="username" />
       </div>
       <div className="form-group">
         <label htmlFor="password">Contraseña</label>
         <input type="password" name="password" placeholder="password" />
       </div>
     </div>
   </div>
   <div className="footer">
     <button type="button" className="btn">
       <Link className="login-btn" to={"/home/perfil"}>Login</Link>
     </button>
   </div>
 </div>
  )
 }
}

export default Login
