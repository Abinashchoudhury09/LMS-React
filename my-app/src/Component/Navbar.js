import React from 'react'

export default function Navbar() {
    const navdesign = {
        width: '100vw',
      };
  return (
    <div>
      <nav style={navdesign} className="navbar navbar-expand-lg navbar-dark bg-info">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Library Management System
          </a>
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
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  Categories
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href=" ">
                  Books
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href=" ">
                  Publishers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href=" ">
                  Authors
                </a>
              </li>
            </ul>
              <div className="nav-item">
                <button className="btn btn-primary " type="button">
                  Logout
                </button>
              </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
