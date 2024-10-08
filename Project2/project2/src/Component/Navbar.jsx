import React from 'react'
import logo from '../images/logo.svg'
import "../App.css"

export default function Navbar() {
  return (

   <navbar className="nav">
    <img src={logo} alt="to some coding logo" />
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
   </navbar>
 
  )
}
