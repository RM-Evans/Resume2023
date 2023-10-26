import React, { useState } from 'react'
import '../style/mobileNavbar.css'
import { Link } from 'react-router-dom'

import { ReactComponent as HamburgerMenu } from '../assets/icons/hamburger.svg'
import { ReactComponent as CloseHamburgerMenu } from '../assets/icons/close-icon.svg'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className="mobileNavbarComponent">
      {isMenuOpen && (
        <div className="mobileNavbarContainer">
          <div className="mobileNavbar">
            <div className="homeLink">
              <Link to="/"> Home </Link>
            </div>
            <div className="resumeLink">
              <Link to="/resume"> Resume </Link>
            </div>
          </div>
        </div>
      )}
      <div
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="navbarHamburgerBtn"
      >
        {!isMenuOpen ? <HamburgerMenu /> : <CloseHamburgerMenu />}
      </div>
    </div>
  )
}

export default Navbar
