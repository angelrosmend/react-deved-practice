import React from 'react'
import { Route } from 'react-router-dom'
import LandingNav from './LandingNav'
import Registro from './Registro'
import Login from './Login'
import { Fragment} from 'react'

 
function LandingPage() {
 return (
  <Fragment>
   <LandingNav />
   <Route path="/landingpage/registro" component={Registro}/>
   <Route path="/landingpage/login" component={Login} />
  </Fragment>
 )
}

export default LandingPage
