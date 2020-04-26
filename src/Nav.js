import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function Nav() {
 const navStyle = {
  color: 'White'
 };


 return (
  <nav>
   <h3>Logo</h3>
   <ul className="nav-links">
    <Link style={navStyle} to="/about">
    <li>About</li>
    </Link>
    <Link style={navStyle} to="/friends">
    <li>Shop</li>
    </Link>
   </ul> 
  </nav>
 )
}

export default Nav