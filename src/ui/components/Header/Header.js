import React, { useContext } from 'react';
import { UserContext } from '../../../context/user';
import './Header.css';

export default function Header() {
  // const [currentUser, setCurrentUser] = useContext(UserContext)

    return (
      <header>
        <nav class="navbar navbar-light navbar-expand-md shadow-sm py-3">
          <div class="container-fluid">

              <div class="navbar-header">
                  <a href="index.php" class="navbar-brand d-flex align-items-center">
                      <img class="logo mr-3" src="/logo.png" alt="Logo" />
                      <span>Vacay</span>
                  </a>
              </div>

              <button class="btn ml-auto d-md-none navbar-toggle" data-toggle="collapse" data-target="#menu">
                <span></span>
                <span></span>
                <span></span>
              </button>

              <div class="collapse navbar-collapse ml-md-auto" id="menu" aria-expanded="false">
                  <ul class="mt-4 mt-md-0 nav navbar-nav ml-md-auto">
                    {
                    1 == 1 ?
                      <>
                      <li class="nav-item">
                          <a class="nav-link" href="dashboard.php">Dashboard</a>
                      </li>

                      <li class="nav-item">
                          <a class="nav-link" href="history.php">My History</a>
                      </li>

                      <li class="nav-item">
                          <a class="nav-link" href="deposit.php">New Booking</a>
                      </li>

                      <li class="nav-item">
                          <a class="nav-link" href="send.php">Profile</a>
                      </li>
                      </>

                      :
                      <>

                        <li class="nav-item">
                            <a class="nav-link" href="login.php">Sign In</a>
                        </li>

                        <li class="nav-item">
                            <a class="btn btn-primary ml-4" href="signup.php">Get Started</a>
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