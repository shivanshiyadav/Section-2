import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import useAppContext from '../../AppContext';

const Navbar = ({cartItem}) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem('user'))
  );
 const {loggedIn,logout} =useAppContext();
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          c7lassName="navbar-toggler"
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
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink >

            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/signup">
                Signup
              </NavLink>

            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/eventhandling">
                Eventhandling
              </NavLink>

            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/About">
                About
              </NavLink >

            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Todo App">
                Todo App
              </NavLink >

            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Insta">
                Insta
              </NavLink >

            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/State">
                StateManagement
              </NavLink >

            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/ListPost">
                ListPost
              </NavLink >

            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/Manage">
                ManageUser
              </NavLink >

            </li>
            <h3>10</h3>

          </ul>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            {
              loggedIn?(
                <button className='btn btn-danger'onClick={logout}> Logout</button>
              ) :
                (<>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/login">
                      Login
                    </NavLink >

                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/signup">
                      Signup
                    </NavLink>

                  </li>
                </>)
            }
          </ul>
        </div>                                                                
      </div>
    </nav>


  )
}

export default Navbar;