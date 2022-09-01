import React from 'react'
import './navbar.css';

function Navbar() {
  return (
    <div className='container'>
      <nav>
        <div className='box'>
          <div className='logo'>
            <img src='images/logo.png' alt='logo' />
          </div>
          <div className='menuItem'>
            <ul className='navbarUl'>
              <li>Home</li>
              <li>About</li>
              <li>Properties <i className="fa-solid fa-angle-down"></i> </li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

  )
}

export default Navbar;