import React from 'react'
import '../style/navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar">
      <div className="homeLink">
        <Link to="/"> Home </Link>
      </div>
      <div className="resumeLink">
        <Link to="/resume"> Resume </Link>
      </div>
    </div>
  )
}

export default Navbar
