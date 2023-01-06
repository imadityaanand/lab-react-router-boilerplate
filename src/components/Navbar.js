import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
      <Link to="/"><h2>Kalvium</h2></Link>
      <div className='navlinks'>
        <Link to="/contacts"><p>Contacts</p></Link>
        <Link to="/about"><p>About</p></Link>
      </div>
    </div>
  )
}

export default Navbar
