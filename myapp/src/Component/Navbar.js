import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    const navdesign = {
        width: '100vw',
      };
  return (
    <div>
      <nav style={navdesign} className="navbar navbar-expand-lg navbar-dark bg-info">
        <div className="container-fluid">
          <h1 >
            ADMIN PANEL
          </h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
               <Link to='/' ><button className="btn "  >
                  Home
                </button></Link>
              </li>
              <li className="nav-item">
                <Link to='/categories'><button className="btn" >
                  Categories
                </button></Link>
              </li>
              <li className="nav-item">
                <Link to='/Book'><button className="btn" >
                  Books
                </button>
                </Link>
              </li> 
              <li className="nav-item">
                <Link to='/publisher'><button className="btn">
                  Publishers
                </button></Link>
              </li>
              <li className="nav-item">
                <Link to='/Author'><button className='btn'>
                  Authors
                  </button>
                </Link>
              </li>
            </ul>
              <div className="nav-item">
                <Link to=''><button className="btn btn-primary " type="button">
                  Logout
                </button></Link>
              </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
