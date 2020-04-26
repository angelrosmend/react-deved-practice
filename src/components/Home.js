import React from 'react'
import { Switch, Route} from 'react-router-dom'
import { Fragment } from 'react'
import Nav from './Nav'
import Perfil from './Perfil'
import Amigos from './Amigos'
import FriendsDetalle from  './FriendsDetalle'
import Login from './Login'

function Home() {
 return (
  <Fragment>
  <Nav/>
  <Switch>
  <Route path="/home/perfil" component={Perfil}/>
  <Route path="/home/amigos" component={Amigos}/>
  <Route path="/home/amigo/:id" component={FriendsDetalle}/>
  <Route path="/landingpage/login" component={Login}/>
  </Switch>
  </Fragment>
 )
}

export default Home
