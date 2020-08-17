import React from 'react'
import {Component, Fragment} from 'react'

class Boton extends Component {
 constructor(props) {
     super(props)
 
     this.state = {
             agregar: false
     }
     this.handleClick = this.handleClick.bind(this);
 }
 
 handleClick() {
     this.setState({ agregar: !this.state.agregar});
 
 }
 
 render() {
     const agregar = this.state.agregar ? 'Eliminar': 'Agregar';
     return (
     <Fragment>
         <button type="button" 
                 onClick={this.handleClick}>{agregar}
         </button>
     </Fragment>
     )
 }
 }
 
 export default Boton
 
