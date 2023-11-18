import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Navbar
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link"  to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link"  to="/login">
            Login
            </NavLink >
          
        </li>
        <li className="nav-item">
        <NavLink className="nav-link"  to="/signup">
          Signup
          </NavLink>
          
        </li>
        <li className="nav-item">
        <NavLink className="nav-link"  to="/eventhandling">
        Eventhandling
          </NavLink>
          
        </li>
        <li className="nav-item">
        <NavLink className="nav-link"  to="/About">
            About
            </NavLink >
          
        </li>
        <li className="nav-item">
        <NavLink className="nav-link"  to="/Todo App">
            Todo App
            </NavLink >
          
        </li>
        <li className="nav-item">
        <NavLink className="nav-link"  to="/Insta">
            Insta
            </NavLink >
          
        </li>
       
      </ul>
    </div>
  </div>
</nav>

    
  )
}

export default Navbar;