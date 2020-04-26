import React from 'react'
import './login.css'




 class Registro extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.title)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state={
        nombre:'',
        apellido: '',
        email: '',
        password:''
    }
}

handleSubmit(e) {
    console.log(this.state);
    e.preventDefault();
}

handleChange(e){
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
        [name]:value
    })
    e.preventDefault();
}
 render() {
   return (
     <form className="base-container" onSubmit={this.handleSubmit} >
       <div className="content">
         <div className="image">
          REGISTRO
         </div>
         <div className="form">
           <div className="form-group">
             <label htmlFor="name">Nombre</label>
             <input type="text" name="nombre" placeholder="Nombre" value={this.state.nombre} 
                 onChange={this.handleChange}/>
           </div>
           <div className="form-group">
             <label htmlFor="last-name">Apellido</label>
             <input type="text" name="apellido" placeholder="Apellido" value={this.state.apellido} 
                 onChange={this.handleChange}/>
           </div>
           <div className="form-group">
             <label htmlFor="email">Email</label>
             <input type="email" name="email" placeholder="email" value={this.state.email} 
                 onChange={this.handleChange} />
           </div>
           <div className="form-group">
             <label htmlFor="password">Contraseña</label>
             <input type="password" name="password" placeholder="password" value={this.state.password} 
                 onChange={this.handleChange} />
           </div>
         </div>
       </div>
       <div className="footer">
         <button type="submit" className="btn">
           Registrarse
         </button>
       </div>
     </form>
   );
 }
}

export default Registro