import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { APP_ROUTES } from '../../../config/routes';
import { UserContext } from '../../../context/user';
import './Header.css';

export default function Header() {
  const {currentUser, setCurrentUser} = useContext(UserContext)

    return (
      <header>
        <nav className="navbar navbar-light navbar-expand-md shadow-sm py-3">
          <div className="container-fluid">

              <div className="navbar-header">
                  <NavLink to={APP_ROUTES.HOME} className="navbar-brand d-flex align-items-center">
                      <img className="logo mr-3" src="/logo.png" alt="Logo" />
                      <span>Vacay</span>
                  </NavLink>
              </div>

              <button className="btn ml-auto d-md-none navbar-toggle" data-toggle="collapse" data-target="#menu">
                <span></span>
                <span></span>
                <span></span>
              </button>

              <div className="collapse navbar-collapse ml-md-auto" id="menu" aria-expanded="false">
                  <ul className="mt-4 mt-md-0 nav navbar-nav ml-md-auto">
                    {
                    currentUser ?
                      <>
                      <li className="nav-item">
                          <NavLink to={APP_ROUTES.DASHBOARD} className="nav-link">Dashboard</NavLink>
                      </li>

                      <li className="nav-item">
                          <NavLink to={APP_ROUTES.HISTORY} className="nav-link">My History</NavLink>
                      </li>

                      <li className="nav-item">
                          <NavLink to={APP_ROUTES.NEW_EXPERIENCE} className="nav-link">New Booking</NavLink>
                      </li>

                      <li className="nav-item">
                          <NavLink to={APP_ROUTES.PROFILE} className="nav-link">Profile</NavLink>
                      </li>
                      </>

                      :
                      <>

                        <li className="nav-item">
                            <NavLink to={APP_ROUTES.LOGIN} className="nav-link">Sign In</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to={APP_ROUTES.REGISTER} className="btn btn-primary ml-4">Get Started</NavLink>
                        </li>

                      </>
                    }
                  </ul>
              </div>

          </div>
        </nav>
      </header>
    );
}